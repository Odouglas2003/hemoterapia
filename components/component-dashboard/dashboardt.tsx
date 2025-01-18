"use client";
import Nuevo from "./nuevo_pasiente/page"
import Pasiente from "./pasiente/pasiente"
import Liquida from "./liquidacion/page";
import Histo from "./historial/page";

export default function Dashboards() {
  return (
    <>
    <section
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap", 
        gap: "20px", 
        height: "87vh", 
        padding: "10px", 
        boxSizing: "border-box", 
    }}
>
    <Nuevo />
    <Pasiente />
    <Liquida />
    <Histo />
</section>

      
    </>
  );
}
