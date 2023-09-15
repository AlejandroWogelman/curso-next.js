import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>not-found</h1>

      <p>Pagina no encontrada</p>
      <Link href="/">Volver</Link>
    </div>
  );
}
