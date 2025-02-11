"use client";
import "./nuevo.css";
import Link from "next/link";

export default function Nuevo() {
  return (
    <div className="body">
      <Link className="pol wallet" href="/pages/newpasiente">
        <div className="overlayb"></div>
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
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M16 16v2c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2v-2"></path>
            <line x1="20" y1="12" x2="20" y2="18"></line>
            <line x1="17" y1="15" x2="23" y2="15"></line>
          </svg>
        </div>
        <p>Nuevo Paciente</p>
      </Link>
    </div>
  );
}
