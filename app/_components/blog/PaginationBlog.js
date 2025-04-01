import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/_components/ui/pagination";

function PaginationBlog({
  currentPage,
  totalPages,
  nextDisabled,
  prevDisabled,
}) {
  const prevPageUrl =
    currentPage === "2"
      ? "/blog"
      : `/blog/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`;
  const total = Array.from(Array(totalPages).keys());

  return (
    <Pagination className="mb-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={prevDisabled && `pointer-events-none opacity-50`}
            href={prevPageUrl}
          />
        </PaginationItem>

        <PaginationItem>
          {total.map((i) => {
            return (
              <PaginationLink
                key={i}
                href={`${i > 0 ? "/blog/page/" + (i + 1) : "/blog/"}`}
                className={parseInt(currentPage, 10) === i + 1 && 'pointer-events-none text-brand'}
              >
                {i + 1}
              </PaginationLink>
            );
          })}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={nextDisabled && `pointer-events-none opacity-50`}
            href={nextPageUrl}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationBlog;
