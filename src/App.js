import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note!",
      date: "15/03/2022",
    },
    {
      id: nanoid(),
      text: "2nd Note!",
      date: "17/03/2022",
    },
    {
      id: nanoid(),
      text: "3rd Note!",
      date: "18/03/2022",
    }
  ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
