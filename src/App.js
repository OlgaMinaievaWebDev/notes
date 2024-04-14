import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  function AddNewNote() {
    const id = crypto.randomUUID();
    const newNote = {
      id,
      title: "",
      content: "",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }
  return (
    <main>
      <h1>Notes App</h1>
    </main>
  );
}
