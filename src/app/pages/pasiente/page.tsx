"use client";
import Pasientes from "../../../components/pasientes/page";
import Header from "../../../components/header/header";
export default function newpasiente() {
  return (
    <>
      <section style={{ width: "100%", height: "12%" }}>
        <Header />
      </section>
      <section>
        <Pasientes />
      </section>
    </>
  );
}
