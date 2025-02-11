"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardContent, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./newpasiente.css";
import Link from "next/link";

export default function NewPaciente() {
  const [formData, setFormData] = useState({
    dni: "",
    name: "",
    immunization: "",
    insuranceNumber: "",
    birthDate: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Generar ID numérico único
    const generatedId =
      Date.now() + Math.floor(Math.random() * 1000); // ID numérico basado en el tiempo actual

    // Obtener número de ficha dinámicamente
    let nextFichaNumber = 1; // Valor por defecto
    try {
      const response = await fetch("http://localhost:5900/api/pasiente/pasiente");
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const maxFichaNumber = Math.max(
            ...data.map((paciente: { n_ficha: number }) => Number(paciente.n_ficha) || 0)
          );
          nextFichaNumber = maxFichaNumber + 1;
        }
      } else {
        console.error("Error al obtener pacientes:", response.statusText);
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }

    // Preparar datos para enviar
    const patientData = {
      id: generatedId.toString(),
      dni: formData.dni,
      name: formData.name,
      n_ficha: nextFichaNumber.toString(),
      created_at: new Date().toISOString().split("T")[0], // Fecha actual
      n_obra_social: formData.insuranceNumber,
      imunos: formData.immunization,
    };
    console.log(patientData)

    try {
      const response = await fetch("http://localhost:5900/api/pasiente/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });

      if (response.ok) {
        alert("Paciente registrado exitosamente");
        setFormData({
          dni: "",
          name: "",
          immunization: "",
          insuranceNumber: "",
          birthDate: "",
        });
      } else {
        console.error("Error registrando el paciente:", response.statusText);
        alert("Error al registrar el paciente.");
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <>
      {/* Botón de regreso */}
      <Link href="/pages/dashboard">
        <IconButton
          className="back-button"
          onClick={() => console.log("Regresar")}
          style={{ backgroundColor: "#027f27" }}
        >
          <ArrowBackIcon style={{ color: "#fff", fontSize: "32px" }} />
        </IconButton>
      </Link>
      {/* Tarjeta con el formulario */}
      <Card className="form-container">
        <CardHeader>
          <h2 className="form-title">Registro de Paciente</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="patient-form">
            <div style={{ flexDirection: "row" }} className="form-group">
              <div style={{ width: "50%" }}>
                <label htmlFor="dni" className="form-label">
                  DNI
                </label>
                <input
                  type="text"
                  id="dni"
                  name="dni"
                  value={formData.dni}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div style={{ width: "50%", marginLeft: "10px" }}>
                <label htmlFor="name" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div style={{ flexDirection: "row" }} className="form-group">
              <div style={{ width: "50%" }}>
                <label htmlFor="birthDate" className="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div style={{ width: "50%" }}>
                <label htmlFor="immunization" className="form-label">
                  Inmuno
                </label>
                <select
                  style={{ height: "65%" }}
                  id="immunization"
                  name="immunization"
                  value={formData.immunization}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Seleccionar inmuno</option>
                  <option value="Grupo y Factor">Grupo y Factor</option>
                  <option value="Inversa">Inversa</option>
                  <option value="Panel corto">Panel corto</option>
                  <option value="Panel largo">Panel largo</option>
                  <option value="Coom Dierecto">Coom Dierecto</option>
                  <option value="Auto Anti cuerpo">Auto Anti cuerpo</option>
                  <option value="Genoma">Genoma</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="insuranceNumber" className="form-label">
                N° Obra Social
              </label>
              <input
                type="text"
                id="insuranceNumber"
                name="insuranceNumber"
                value={formData.insuranceNumber}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Registrar Paciente
            </button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
