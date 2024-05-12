import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Zoom } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true} >
    <div className="note">
      <p id="time-stamp">
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    </Zoom>
  );
}

export default Note;
