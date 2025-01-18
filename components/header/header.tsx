"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./headers.css";
import Link from "next/link";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-spacer"></div>
        <h1 className="header-title">Hospital Militar Hemoterapia</h1>
        <button onClick={toggleMenu} className="menu-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">
          <button onClick={toggleMenu} className="close-button">
            <X size={24} />
          </button>

          <nav className="sidebar-nav">
            <ul className="nav-list">
            <Link href={"/pages/newpasiente"}>
              <li className="nav-link">
                <div style={{marginRight:"3px"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
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
              </li>
              </Link>
              <Link href={"/pages/"}>
              <li className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21c0-3.6 3-6.5 6.5-6.5s6.5 2.9 6.5 6.5"></path>
                </svg>
                
                <p>Paciente</p>
              </li>
              </Link>
              <Link href={"/pages/"}>
              <li className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
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
                <p>Liquidación</p>
              </li>
              </Link>
              <Link href={"/pages/"}>
              <li className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>

                <p>Historia</p>
              </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </div>
  );
}
