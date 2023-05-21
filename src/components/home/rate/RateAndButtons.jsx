import React from "react";
import "./RateAndButtons.scss";
import Face1 from "../../../assets/images/pensive-face.svg";
import Face2 from "../../../assets/images/neutral-face.svg";
import Face3 from "../../../assets/images/face-blowing-a-kiss.svg";

export default function RateAndButtons() {
  return (
    <div className="actions">
      <div className="actions__rate">
        <div className="title">Rate this course</div>
        <div className="images">
          <img src={Face1} alt="pensive face" />
          <img src={Face2} alt="neutral face" />
          <img src={Face3} alt="face-blowing-a-kiss" />
        </div>
      </div>

      <div className="btns">
        <button className="btn1">
          Download File
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
        <button className="btn2">
          Complete & Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
