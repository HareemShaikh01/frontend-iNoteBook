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
    addNote: () => Promise<void>;
}

const useNotesStore = create<NotesState>((set) => ({
    notes: [],
    loading: false,
    error: null,

    fetchNotes: async () => {
        set({ loading: true });
        try {
            const response = await fetch('http://localhost:5000/notes/fetchAllNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2EwNmYyNjIzNzgzY2M3MTc1NDA4MDYiLCJlbWFpbCI6ImhhcmVlbWhob25tYWlAZ21haWwuY29tIiwiaWF0IjoxNzM4NTg1ODQ5LCJleHAiOjE3Mzg1ODk0NDl9.ZFxzyabW4J8xmD_BH5-qtngGS0JOwHuWQLx5kMKTgY4`, // Assuming you're using JWT for authentication
                },
            });
            const data = await response.json();
            if (data.success) {
                set({ notes: data.notes, loading: false });
            } else {
                set({ loading: false, error: data.message || "Failed to fetch notes" });
            }
        } catch (err:any) {
            set({ loading: false, error: err.message || "Failed to fetch notes" });
        }
    },
    addNote: async(title:string, description:string ,tag:string) => {
        try {
            const response  = await fetch("")
        } catch (err) {
            
        }

    }
}));

export default useNotesStore;
