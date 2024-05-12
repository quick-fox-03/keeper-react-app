import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  //a boolean state to note when the form is clicked for expansion
  const [clickedToExpand, setClickedToExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    filter: "",
  });
  //a function to set state "clicked" to true or false
  function handleClick() {
    setClickedToExpand(true);
  }

  function handleChange(event) {
    let { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      filter: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onClick={handleClick} className="create-note">
        {!clickedToExpand ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : (
          <>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
            <Zoom in={true}>
              <Fab onClick={submitNote} aria-label="add">
                <AddIcon />
              </Fab>
            </Zoom>
          </>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
