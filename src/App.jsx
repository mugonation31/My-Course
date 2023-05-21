import React from "react";
import LandingPage from "./components/home/LandingPage";

import VideoAndComments from "./components/home/videoAndComments/VideoAndComments.jsx";
import AboutAndContent from "./components/home/aboutAndContent/AboutAndContent";
import "./App.scss";

function App() {
  return (
    <LandingPage>
      <VideoAndComments />
      <AboutAndContent />
      {/* <CourseVideo />
        <LessonNote />
        <AboutCourse />
        <ContentCourse /> */}
    </LandingPage>
  );
}

export default App;
