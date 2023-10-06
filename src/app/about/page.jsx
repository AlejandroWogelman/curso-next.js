"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Acerca de nosotros",
};

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p className="text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        cumque ab ratione ad possimus voluptas odio quia atque vel quibusdam. A
        expedita quisquam consequuntur neque facilis molestiae minus quos
        libero. Illo voluptas veniam eos vero odit dolore adipisci veritatis,
        voluptatibus id commodi neque obcaecati delectus ex sed aliquam quod
        fugiat nobis velit magnam laudantium. Amet provident alias minima velit,
        dicta perspiciatis eum, voluptatibus facilis non nobis a autem quia
        ullam optio animi reiciendis quod porro eius, voluptatem cumque beatae
        doloribus molestias. Sapiente porro perferendis, commodi repellendus
        delectus praesentium animi ipsam voluptas, ratione doloremque optio
        error amet ex explicabo! Sit, perspiciatis.
      </p>

      <button
        className=" bg-sky-500 p-2"
        onClick={() => {
          alert(
            "Ejecutando logica antes de redireccionar, NO se puede en el link"
          );
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
