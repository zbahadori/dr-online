type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <div>سلام رفیق!</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
