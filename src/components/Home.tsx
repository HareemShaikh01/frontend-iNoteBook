import React, { useState } from "react";
import noteImage from "../assets/vecteezy_notes-illustration-3d_9665468.png"; 
import NoteCard from "./NoteCard";
import useNotesStore from "../Store/useNotesStore";

const Home: React.FC = () => {
  const {notes} = useNotesStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleAddNote = () => {
    // Logic to add the note
    console.log("Note Added:", { title, description, tags });
  };

  return (
    <div className="bg-gray-900 text-white p-6 flex flex-col ">

    <div className="flex items-center justify-center">
      <div className="w-screen max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* left side (Image) */}
        <div className="flex justify-center items-center">
          <img 
            src={noteImage} 
            alt="Notes Image"
            className="w-[60%] md:w-[80%] max-w-xs mx-auto rounded-lg shadow-md"
          />
        </div>
        {/* right side (Form) */}
        <div className="bg-gray-100 w-full p-6 rounded-lg shadow-lg flex flex-col justify-center max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create a New Note</h2>
          
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-lg font-medium text-gray-800">Title</label>
              <input 
                type="text" 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="Enter note title" 
                required 
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="text-lg font-medium text-gray-800">Description</label>
              <textarea 
                id="description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                rows={4} 
                placeholder="Enter note description" 
                required 
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="tags" className="text-lg font-medium text-gray-800">Tags</label>
              <input 
                type="text" 
                id="tags" 
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="Enter tags (comma separated)" 
                required 
              />
            </div>

            <button 
              onClick={handleAddNote} 
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition mt-6"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>

    </div>

    <h1 className="lg:ml-50 text-2xl font-semibold text-white mb-4">Your Cards</h1>

    <div className="grid grid-cols-3 gap-4 lg:mx-40">
   {
    notes.map(((note)=>(
      <NoteCard key={note._id} title= {note.title} description={note.description} tags={note.tag}/>
    )))

   }
    </div>


    </div>

  );
};

export default Home;
