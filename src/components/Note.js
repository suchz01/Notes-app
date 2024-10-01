import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote, darkMode }) => {
  const notesClasses = darkMode
    ? "bg-slate-800 text-white border-gray-700 p-4 rounded-xl flex flex-col"
    : "bg-yellow-400 text-black border border-gray-300 p-4 rounded-xl flex flex-col";

  return (
    <div className={notesClasses}>
    {/* // <div className=""> */}
      <span className="text-xl">{text}</span>
      <div className="flex w-full items-center mt-auto">
        <p>{date}</p>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          aria-label="Delete note"
          className=" ml-auto p-2 rounded-full cursor-pointer hover:bg-red-600 transition duration-200"
          size="2.6em"
        />
      </div>
    </div>
  );
};

export default Note;
