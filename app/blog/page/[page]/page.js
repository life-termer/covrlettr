import BlogList from "@/app/_components/blog/BlogList";
import PaginationBlog from "@/app/_components/blog/PaginationBlog";
import { getPaginatedPostSummaries } from "@/app/_lib/data-service";
import { blogConfig } from "@/app/_lib/utils";


export const metadata = {
  title: "Blog",
  description:
    "Craft the Perfect Cover Letter & Land Your Dream Job | Advices & Tips",
  keywords:
    "cover letter tips, career advice, professional CV, job search, resume writing, interview preparation",
};

async function BlogPage({params}) {
  const p = await params;
  const currentPage = p.page;
  console.log('current page', currentPage)
  const { items, total } = await getPaginatedPostSummaries(currentPage);
  const totalPages = Math.ceil(total / blogConfig.pagination.pageSize);
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;
  console.log(prevDisabled, nextDisabled)
  return (
    <>
      <BlogList items={items} />
      <PaginationBlog currentPage={currentPage} totalPages={totalPages} nextDisabled={nextDisabled} prevDisabled={prevDisabled} />
    </>
  );
}

export default BlogPage;
