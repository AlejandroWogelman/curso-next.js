import PostCard from "@/components/PostCard";
import Posts from "../page";
import { Suspense } from "react";
async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { id } = params;
  const post = await loadPost(id);

  return (
    <div>
      <PostCard {...post} />

      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando con suspense</div>}>
        <Posts />
      </Suspense>
    </div>
  );
}
