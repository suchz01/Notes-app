import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	darkMode,
	
}) => {
	return (
		<div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
					darkMode={darkMode}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} darkMode={darkMode}/>
		</div>
	);
};

export default NotesList;
