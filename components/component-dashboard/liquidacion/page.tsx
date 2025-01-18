"use client";
import './liquida.css'
export default function liquidacion() {
  return (
    <>
      <div className="body">
        <a className="cardd wallet" href="#">
          <div className="overlayh"></div>
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
              <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="9" y1="12" x2="15" y2="12"></line>
              <line x1="9" y1="16" x2="13" y2="16"></line>
            </svg>
          </div>
          <p>Liquidación</p>
        </a>
      </div>
    </>
  );
}
