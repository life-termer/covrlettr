import BlogCard from "../_components/blog/BlogCard";
import BlogCardFull from "../_components/blog/BlogCardFull";
import BreadcrumbWithLink from "../_components/blog/Breadcrumb";
import { fetchGraphQL, getPosts } from "../_lib/data-service";

export const metadata = {
  title: "Blog",
  description:
    "Craft the Perfect Cover Letter & Land Your Dream Job | Advices & Tips",
  keywords:
    "cover letter tips, career advice, professional CV, job search, resume writing, interview preparation",
};
const query = `
  query {
  pageBlogPostCollection(order: publishedDate_DESC) {
    items {
      slug
      seoFields {
        pageDescription
      }
      title
      shortDescription
      publishedDate
      timeToRead
      featuredImage {
        fileName
        title
        description
        width
        height
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
      <div className="mb-8">
        <div className="mb-6">
          <BreadcrumbWithLink />
        </div>
        {items.map(
          (post, index) =>
            index === 0 && (
              <BlogCardFull key={post.slug} post={post} type="100" />
            )
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8 ">
        {items.map(
          (post, index) =>
            index > 0 &&
            index < 3 && <BlogCardFull key={post.slug} post={post} type="50" />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mb-20">
        {items.map(
          (post, index) => index > 2 && <BlogCard key={post.slug} post={post} />
        )}
      </div>
    </>
  );
}

export default Blog;
