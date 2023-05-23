import React from "react";
import "./VideoAndComments.scss";
import CourseVideo from "../course/CourseVideo.jsx";
import RateAndButtons from "../rate/RateAndButtons.jsx";
import LessonNote from "../note/LessonNote.jsx";

export default function VideoAndComments() {
  return (
    <div className="videoAndComments">
      <CourseVideo />
      <RateAndButtons />
      <LessonNote />
    </div>
  );
}
