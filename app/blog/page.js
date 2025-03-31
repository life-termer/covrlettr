import BlogList from "../_components/blog/BlogList";
import { fetchGraphQL, getPosts } from "../_lib/data-service";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/_components/ui/pagination";

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
      <BlogList items={items} />
      <Pagination className="mb-20 hidden">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default Blog;
