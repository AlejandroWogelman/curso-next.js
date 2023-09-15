"use client";

import Link from "next/link";

export default function PostCard({ id, title, body }) {
  return (
    <div className=" bg-slate-700 p-10">
      <h3 className="font-bold text-xl mb-4">
        <Link href={`/posts/${id}`}>
          {id}. {title}
        </Link>
      </h3>
      <p className=" text-slate-300">{body}</p>
      <button onClick={() => alert("Click USE CLIENT")}>click</button>
    </div>
  );
}
