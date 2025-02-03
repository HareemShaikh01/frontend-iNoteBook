import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing the edit and delete icons from react-icons

interface NoteCardProps {
  title: string;
  description: string;
  tags: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ title, description, tags }) => {
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedTags, setEditedTags] = useState(tags);

  const handleEdit = () => {
    setIsPromptVisible(true); // Show the prompt/modal
  };

  const handleDelete = () => {
    console.log("Note deleted:", title); // Logic for deleting note
  };

  const handleSaveEdit = () => {
    console.log("Updated note:", { editedTitle, editedDescription, editedTags });
    setIsPromptVisible(false); // Hide the prompt after saving
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4 relative">
      {/* Edit and Delete Icons */}
      <div className="absolute top-2 right-2 flex space-x-2">
        <button 
          onClick={handleEdit} 
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
        <button 
          onClick={handleDelete} 
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>

      {/* Displaying the note content */}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-blue-500">{tags}</p>

      {/* Custom Edit Prompt */}
      {isPromptVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Edit Note</h3>
            <div className="flex flex-col space-y-4">
              {/* Title Input with Label */}
              <div>
                <label htmlFor="title" className="text-lg font-medium text-gray-800">Title</label>
                <input
                  type="text"
                  id="title"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="p-2 text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Enter new title"
                />
              </div>

              {/* Description Input with Label */}
              <div>
                <label htmlFor="description" className="text-lg font-medium text-gray-800">Description</label>
                <textarea
                  id="description"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="p-2 text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Enter new description"
                  rows={4}
                />
              </div>

              {/* Tags Input with Label */}
              <div>
                <label htmlFor="tags" className="text-lg font-medium text-gray-800">Tags</label>
                <input
                  type="text"
                  id="tags"
                  value={editedTags}
                  onChange={(e) => setEditedTags(e.target.value)}
                  className="p-2 text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  placeholder="Enter new tags"
                />
              </div>

              {/* Save and Cancel Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsPromptVisible(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
