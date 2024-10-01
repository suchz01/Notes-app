import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load notes and dark mode state from local storage on mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")); // Load dark mode state

    if (savedNotes) {
      setNotes(savedNotes);
    }

    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode); // Set dark mode state if exists
    }
  }, []);

  // Save notes and dark mode state to local storage when they change
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Save dark mode state
  }, [notes, darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const bodyClass = darkMode ? "bg-black" : "bg-[#e7d2cc]";

  return (

    <div className={` ${bodyClass}`}>
      <div className="max-w-[1500px] mx-auto px-4 min-h-screen">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} darkMode={darkMode}/>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default App;
