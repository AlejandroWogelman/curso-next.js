import { NextResponse } from "next/server";

console.log(process.env.TOKEN);

export async function GET() {
  //extract params
  //quey database
  //communite with other services

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return NextResponse.json({
    message: "Obteniendo datos",
    data,
  });
}

export async function POST(request) {
  const { nombre, apellido } = await request.json(); // BODY
  console.log(nombre, apellido);

  return NextResponse.json({
    message: "Creando datos",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando datos",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando datos",
  });
}
