import NotesList from "./components/NotesList";
import { useState } from "react";
import { useEffect } from "react";
import{ nanoid } from "nanoid"
import Search from "./components/search";
import Header from "./components/Header";


const App = () => {
  const [notes, useNotes] = useState([

  ]);

  const [searchText, useSearchText] = useState('');
 
  const [darkMode, useDarkMode] = useState(false);

  function store(){
    localStorage.setItem("value", JSON.stringify(notes));
    JSON.parse(localStorage.getItem("value"));
  }

  store()

  

  

 
  



 

  const addNote =(text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      }
    
    const newNotes = [...notes, newNote];
    useNotes(newNotes);
  };
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id != id)
    useNotes(newNotes);
  }
  return  (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={useDarkMode}/>
        <Search handleSearchNote={useSearchText}/>
        <NotesList 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
        handleAddNote = {addNote}
        handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
};
export default App;
