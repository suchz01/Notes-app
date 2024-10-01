import { useState } from 'react';

const AddNote = ({ handleAddNote,darkMode }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};

	const newNoteClass = darkMode
    ? "bg-cyan-600 text-white border-gray-700 p-4 rounded-xl flex flex-col"
    : "bg-pink-300 text-black border border-gray-300 p-4 rounded-xl flex flex-col";


	const btn=darkMode?"bg-slate-900 hover:bg-slate-700":"bg-slate-200 hover:bg-slate-100";
	return (
		<div className={newNoteClass}>
			<textarea className={`bg-transparent border-none outline-none resize-none text-xl ${darkMode?"placeholder:text-white":"placeholder:text-black"} `}
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='flex flex-row justify-between'>
				<p>
					{characterLimit - noteText.length} Remaining
				</p>
				<button className={`py-1  rounded-3xl px-3 ${btn}`} onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
