import { useState, useEffect } from 'react';
import axios from 'axios'
import noteService from './noteService';

const Notes = () => {

    const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log(`fetching data`);

    //axios
    // .get("http://localhost:3000/notes")
    // noteService
    // .getAll()
    // .then(response => {
    //   console.log(`promise fulfilled`);
    //   setNotes(response.data);
    // });
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);

  // const postToServer = (event) => {
  //   const newNote = {
  //     content : "note text",
  //     date : new Date().toISOString(),
  //     important : "false",
  //   };
  //   axios
  //   .post("http://localhost:3000/notes", newNote)
  //   .then((response) => {
  //     setNotes([...Notes, response.data]);
  //   });
  // };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content : "note text",
      date : new Date().toISOString(),
      important : false
    };
    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote));
    });
    // .then(response => {
    //   setNotes([...notes, response.data])
    //   // setNewNote("");
    // })
  }

  const toggleImportaneOf = (id) => {
    // console.log(`id ${id}`);
    const note = notes.find((n) => {
      return (n.id === id)
    });
    // console.log(`note ${note.important}`);
    const changedNote = {...note, important : !note.important};
    // console.log(`note ${changedNote.important}`);
    noteService
    .update(id,changedNote)
    // .then(response => {
      .then(returnedNote => {
      // console.log(`update done`);
      // setNotes(notes.map(note => note.id !== id ? note : response.data));
      setNotes(notes.map(note => note.id !== id ? note : returnedNote));
    })
  };

return (
<div>
    <ul>
      {notes.map((note) => (<li className={note.important ? "importantNote" : null} key={note.id}>{note.content}<button onClick={() => toggleImportaneOf(note.id)}>toggle</button></li>))}
    </ul>
    <button onClick={addNote}>
      Send a note
    </button>
</div>
)

};

export default Notes;