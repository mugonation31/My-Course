import React from "react";
import LandingPage from "./components/home/LandingPage";
import CourseVideo from "./components/home/course/CourseVideo.jsx";
import LessonNote from "./components/home/note/LessonNote.jsx";
import AboutCourse from "./components/home/about/AboutCourse.jsx";
import ContentCourse from "./components/home/content/ContentCourse.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <LandingPage>
        <CourseVideo />
        <LessonNote />
        <AboutCourse />
        <ContentCourse />
      </LandingPage>
    </>
  );
}

export default App;
