import { getPosts } from "../_lib/data-service";

export const metadata = {
  title: "Blog",
};

async function Blog() {
  const posts = await getPosts();

  console.log("posts", posts);
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <p>{post.fields.title}</p>
      ))}
    </>
  );
}

export default Blog;
