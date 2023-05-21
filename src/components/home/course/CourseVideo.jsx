import React from "react";
import "./CourseVideo.scss";

export default function CourseVideo() {
  return (
    <div className="course">
      <div className="course__video">
        <iframe
          src="https://www.youtube.com/embed/TgT2r0T1IeM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
