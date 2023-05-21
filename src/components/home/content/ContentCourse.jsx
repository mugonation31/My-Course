import React from "react";
import "./ContentCourse.scss";

export default function ContentCourse() {
  return (
    <div className="content">
      <div className="content__course">Course content</div>
      <div className="content__wrap">
        <div className="part">
          <div className="part1">
            <div>Part 1</div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.29297 16.9142C3.68349 17.3047 4.31666 17.3047 4.70718 16.9142L12.0001 9.62132L19.293 16.9142C19.6835 17.3047 20.3167 17.3047 20.7072 16.9142L21.4143 16.2071C21.8048 15.8166 21.8048 15.1834 21.4143 14.7929L13.0607 6.43934C12.4749 5.85355 11.5252 5.85355 10.9394 6.43934L2.58586 14.7929C2.19534 15.1834 2.19534 15.8166 2.58586 16.2071L3.29297 16.9142Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="left">
            <div className="third">1/3</div>
            <div className="four">4 Min left</div>
          </div>
        </div>

        <div className="title">
          <div className="input">
            <input type="checkbox" />
            <label>Course title</label>
            <div className="time">2 min</div>
          </div>

          <div>
            <input type="checkbox" />
            <label>Course title</label>
            <div className="time">2 min</div>
          </div>

          <div>
            <input type="checkbox" />
            <label>Course title</label>
            <div className="time">2 min</div>
          </div>
        </div>
      </div>
      <div className="part2">
        <div>Part 2</div>
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

      <div className="part3">
        <div>Part 3</div>
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
    </div>
  );
}
