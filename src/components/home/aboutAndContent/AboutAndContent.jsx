import React from "react";
import AboutCourse from "../about/AboutCourse.jsx";
import ContentCourse from "../content/ContentCourse";
import "./AboutAndContent.scss";

export default function AboutAndContent() {
  return (
    <div className="about_content">
      <AboutCourse />
      <ContentCourse />
    </div>
  );
}
