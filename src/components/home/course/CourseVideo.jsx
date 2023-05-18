import React from "react";
import "./CourseVideo.scss";
import Video from "../../../assets/images/video.svg";

export default function CourseVideo() {
  return (
    <div className="course">
      <div className="course__video">
        <img src={Video} width="600px" alt="" />
      </div>

      <div className="course__actions">
        <div className="course__rate">
          <p>Rate this course</p>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="course__btns">
          <button className="course__btn1">DownLoad File</button>
          <button className="course__btn2">Complete & Continue</button>
        </div>
      </div>
    </div>
  );
}
