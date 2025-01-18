"use client";
import "./pasientes.css";
export default function pasiente() {
  return (
    <>
      <div className="body">
        <a className="cardf wallet" href="#">
          <div className="overlayx"></div>
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
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M5.5 21c0-3.6 3-6.5 6.5-6.5s6.5 2.9 6.5 6.5"></path>
            </svg>
          </div>
          <p>Paciente</p>
        </a>
      </div>
    </>
  );
}
