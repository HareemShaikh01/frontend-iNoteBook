import { create } from "zustand";

interface Note {
    user: string;
    title: string;
    description: string;
    tag: string;
    _id: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
}

interface NotesState {
    notes: Note[];
    loading: boolean;
    error: string | null;
    fetchNotes: () => Promise<void>;
    addNote: (title: string, description: string, tag: string) => Promise<void>;
    deleteNote:(id:string)=>Promise<void>;
    updateNote:(id:string,title:string,description:string,tag:string)=>Promise<void>;
}

const useNotesStore = create<NotesState>((set) => ({
    notes: [],
    loading: false,
    error: null,

    fetchNotes: async () => {
        set({ loading: true });
        try {
            const response = await fetch('https://backend-inotebook.vercel.app/notes/fetchAllNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': `${localStorage.getItem("auth-token")}`, 
                },
            });
            const data = await response.json();
            if (data.success) {
                set({ notes: data.notes, loading: false });
            } else {
                set({ loading: false, error: data.message || "Failed to fetch notes" });
            }
        } catch (err: any) {
            set({ loading: false, error: err.message || "Failed to fetch notes" });
        }
    },
    addNote: async (title: string, description: string, tag: string) => {
        set({ loading: true });
        try {

            const response = await fetch("https://backend-inotebook.vercel.app/notes/addNote", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': `${localStorage.getItem("auth-token")}`, 
                },
                body:JSON.stringify({title,description,tag})
            })

            const data =await response.json();

            if(data.success){
                set((state)=>({
                    notes: [...state.notes, data.noteAdded],
                    loading: false 
                }))
            }else{
                set({ loading: false, error: data.message || "Failed to fetch notes" });
            }
        } catch (err:any) {
            set({ loading: false, error: err.message || "Failed to add notes" });
        }

    },
    deleteNote:async (id:string)=>{
        set({ loading: true });
        try {
            const response = await fetch(`https://backend-inotebook.vercel.app/notes/deleteNote/${id}`,{
                method:"DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': `${localStorage.getItem("auth-token")}`, 
                }
            })

            const data = await response.json();

            if(data.success){
                set((state)=>({
                   notes: state.notes.filter((note)=>note._id!==id),
                   loading: false
                }))
            }else{
                set({
                    error:data.message,
                    loading: false
                })
            }
        } catch (err:any) {
            set({ loading: false, error: err.message || "Failed to Delete notes" });
        }

       
    },
    updateNote: async (id: string, title: string, description: string, tag: string) => {
        set({ loading: true });
        try {
            const response = await fetch(`https://backend-inotebook.vercel.app/notes/updateNote/${id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': `${localStorage.getItem("auth-token")}`, 
                },
                body: JSON.stringify({ title, description, tag })
            });
    
            const data = await response.json();
    
            if (data.success) {
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note._id === id ? data.note : note 
                    ),
                    loading: false
                }));
            } else {
                set({
                    error: data.message || "Failed to update note",
                    loading: false
                });
            }
        } catch (err: any) {
            set({ loading: false, error: err.message || "Failed to update note" });
        }
    }
    
}));

export default useNotesStore;
