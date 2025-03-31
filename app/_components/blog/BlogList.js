import BlogCard from "./BlogCard";
import BlogCardFull from "./BlogCardFull";
import BreadcrumbWithLink from "./Breadcrumb";

function BlogList({ items }) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
        {items.map(
          (post, index) => index > 2 && <BlogCard key={post.slug} post={post} />
        )}
      </div>
    </>
  );
}

export default BlogList;
