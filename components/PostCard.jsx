"use client";

import Link from "next/link";

export default function PostCard({ id, title, body }) {
  return (
    <div key={id}>
      <h3>
        <Link href={`/posts/${id}`}>
          {id}. {title}
        </Link>
      </h3>
      <p>{body}</p>
      <button onClick={() => alert("Click USE CLIENT")}>click</button>
    </div>
  );
}
