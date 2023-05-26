import React from "react";
import "./VideoAndComments.scss";
import CourseVideo from "../course/CourseVideo.jsx";
import RateAndButtons from "../rate/RateAndButtons.jsx";
import LessonNote from "../note/LessonNote.jsx";

export default function VideoAndComments() {
  return (
    <div className="video_comments">
      <CourseVideo />
      <RateAndButtons />
      <LessonNote />
    </div>
  );
}
