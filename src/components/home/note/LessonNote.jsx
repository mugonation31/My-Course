import React from "react";
import "./LessonNote.scss";

export default function LessonNote() {
  return (
    <div className="notes">
      <p>Lesson note</p>
      <textarea type="text" placeholder="Type here" />
      <div className="notes__button">
        <button className="btn1">Reset</button>
        <button className="btn2">Save</button>
      </div>
    </div>
  );
}
