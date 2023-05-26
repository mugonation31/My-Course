import React from "react";
import "./LessonNote.scss";

export default function LessonNote() {
  return (
    <div className="notes">
      <p>Lesson note</p>
      <textarea type="text" placeholder="Type here" />
      <div className="notes__button">
        <button className="reset">Reset</button>
        <button className="save">Save</button>
      </div>
    </div>
  );
}
