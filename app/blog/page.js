import BlogCard from "../_components/blog/BlogCard";
import { fetchGraphQL, getPosts } from "../_lib/data-service";

export const metadata = {
  title: "Blog",
};
const query = `
  query {
  pageBlogPostCollection {
    items {
      slug
      seoFields {
        pageDescription
      }
      title
      publishedDate
      featuredImage {
        fileName
        title
        description
        width
        url
      }
    }
  }
}
`;
async function Blog() {
  const response = await fetchGraphQL(query);
  const { items } = response.data.pageBlogPostCollection;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
        {items.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

export default Blog;
