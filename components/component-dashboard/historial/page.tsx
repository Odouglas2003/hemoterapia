"use client";
import "./historia.css";
export default function historial() {
  return (
    <>
      <div className="body">
        <a className="card wallet" href="#">
          <div className="overlayu"></div>
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60px"
              height="60px"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <p>Historial</p>
        </a>
      </div>
    </>
  );
}
