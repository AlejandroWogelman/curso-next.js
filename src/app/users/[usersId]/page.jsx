"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function UserPage() {
  const params = useParams();
  console.log(params);

  return <div>UserPage</div>;
}
