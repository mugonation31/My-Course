import React from "react";
import "./AboutCourse.scss";

export default function AboutCourse() {
  return (
    <div className="about">
      <div className="about__course">
        <p>About this course</p>

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 15.25C11.9015 15.2504 11.8038 15.2312 11.7128 15.1934C11.6218 15.1557 11.5392 15.1001 11.47 15.03L6.47 10.03C6.37027 9.88408 6.32527 9.70765 6.34293 9.53181C6.36058 9.35598 6.43977 9.19202 6.56651 9.06886C6.69325 8.94571 6.85941 8.87126 7.03569 8.85866C7.21196 8.84606 7.38702 8.89611 7.53 8.99998L12 13.44L16.47 8.99998C16.611 8.90859 16.7785 8.86717 16.9458 8.88235C17.1131 8.89754 17.2705 8.96846 17.3927 9.08374C17.5149 9.19902 17.5948 9.35198 17.6197 9.51812C17.6446 9.68425 17.613 9.85394 17.53 9.99998L12.53 15C12.4633 15.0755 12.3819 15.1367 12.2908 15.1797C12.1997 15.2227 12.1007 15.2466 12 15.25Z"
              fill="#000000"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="about__level">
        <div className="img1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
          <div>Easy</div>
        </div>
        <div className="img2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div>20 Lessons</div>
        </div>
        <div className="img3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
              clip-rule="evenodd"
            />
            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
          </svg>
          <div>300XP </div>
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
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div className="about__instructor">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="details">
          <div className="name">Instructor name: John Malon</div>
          <div className="skills">Skills</div>
        </div>
      </div>
    </div>
  );
}
