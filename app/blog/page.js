import BlogList from "../_components/blog/BlogList";
import PaginationBlog from "../_components/blog/PaginationBlog";
import { fetchGraphQL, getPaginatedPostSummaries, getPosts } from "../_lib/data-service";
import { blogConfig } from "../_lib/utils";


export const metadata = {
  title: "Blog",
  description:
    "Craft the Perfect Cover Letter & Land Your Dream Job | Advices & Tips",
  keywords:
    "cover letter tips, career advice, professional CV, job search, resume writing, interview preparation",
};

async function Blog() {
  const { items, total } = await getPaginatedPostSummaries(1);
  const totalPages = Math.ceil(total / blogConfig.pagination.pageSize);
  console.log(totalPages)
  return (
    <>
      <BlogList items={items} />
      <PaginationBlog currentPage='1' totalPages={totalPages} nextDisabled={totalPages < 2 && true} prevDisabled={true} />

    </>
  );
}

export default Blog;
