import React from "react";
import "./ContentCourse.scss";

export default function ContentCourse() {
  return (
    <div className="content">
      <div className="content__course">
        <p>Course content</p>
      </div>
      <div className="content__part">
        <div className="part">
          <div className="part1">
            <p>Part 1</p>
            <div>^</div>
          </div>

          <div className="left">
            <div>1/3</div>
            <div>4 Min left</div>
          </div>
        </div>

        <input type="checkbox" />
        <label>Course title</label>
        <div className="time">2 min</div>

        <input type="checkbox" />
        <label>Course title</label>
        <div className="time">2 min</div>

        <input type="checkbox" />
        <label>Course title</label>
        <div className="time">2 min</div>
      </div>
    </div>
  );
}
