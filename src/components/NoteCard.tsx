// import React from 'react';

// // Delete icon ko import karein
// import deleteIcon from '../assets/icons/delete.svg';

// type Note = {
//   _id: string;
//   title: string;
//   content: string;
//   createdAt: string;
// };

// interface NoteCardProps {
//   note: Note;
//   onDelete: (id: string) => void;
// }

// const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between h-52">
//       <div>
//         <h3 className="font-bold text-lg text-gray-800 mb-2">{note.title || 'Untitled Note'}</h3>
//         <p className="text-gray-600 text-sm overflow-hidden text-ellipsis h-16">
//           {note.content}
//         </p>
//       </div>
//       <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
//         <span className="text-xs text-gray-400">
//           {new Date(note.createdAt).toLocaleDateString()}
//         </span>
//         <button 
//           onClick={() => onDelete(note._id)} 
//           className="text-gray-400 hover:text-red-500 transition-colors"
//         >
//           <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NoteCard;





import React from 'react';
import deleteIcon from '../assets/icons/delete.svg';
// import arrowDownIcon from '../assets/icons/delete.svg'; // Neeche-wala arrow icon

type Note = {
  _id: string;
  title: string;
  content: string; // Content ko bhi yahan define karein
};

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onToggle: (id:string) => void; // Click handle karne ke liye naya prop
  isExpanded: boolean; // Yeh batayega ki note khula hai ya band
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onToggle, isExpanded }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Note ka Header (Title aur Buttons) */}
      <div 
        className="flex justify-between items-center p-2 sm:p-3 cursor-pointer"
        onClick={() => onToggle(note._id)}
      >
        <span className="font-semibold sm:text-base text-sm text-gray-800">{note.title || 'Untitled Note'}</span>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(note._id); }} // Click ko parent div par jaane se rokne ke liye
            className="p-2 rounded-full hover:bg-red-50"
          >
            <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
          </button>
          {/* <img 
            src={arrowDownIcon} 
            alt="Expand" 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          /> */}
        </div>
      </div>

      {/* Note ka Content (Expand/Collapse hoga) */}
      <div
        className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-4 border-t border-gray-100">
          <p className="text-gray-600 mt-2 whitespace-pre-wrap">{note.content || 'No content.'}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;