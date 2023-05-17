import React from "react";
import "./AboutCourse.scss";

export default function AboutCourse() {
  return (
    <div className="about">
      <div className="about__course">
        <p>About this course</p>
        <div>^</div>
      </div>
      <div className="about__level">
        <div className="img1">
          <img src="" alt="" />
          Easy
        </div>
        <div className="img2">
          <img src="" alt="" />
          20 Lessons
        </div>
        <div className="img3">
          <img src="" alt="" />
          300XP
        </div>
      </div>
      <div className="about__category">
        <div>Category 1</div>
        <div>Category 2</div>
        <div>Category 3</div>
      </div>
      <p className="latin">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className="about__instructor">
        <img src="" alt="" />
        <p className="name">Instructor name</p>
        <div>Skills</div>
      </div>
    </div>
  );
}
