import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

function BlogCardFull({ post, type }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(post.publishedDate);
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col sm:flex-row items-center">
        <CardHeader
          className={`w-full h-80 sm:w-2/5 shrink-0 ${
            type === "100" && "sm:h-60 xl:h-80"
          } ${type === "50" && "sm:h-60"}`}
        >
          <div className="relative w-full h-full">
            <Image
              fill
              className="object-cover"
              src={post.featuredImage.url}
              alt={post.featuredImage.title}
              // width={post.featuredImage.width}
              // height={post.featuredImage.height}
            />
          </div>
        </CardHeader>
        <CardContent className="pb-3 sm:pt-3">
          <CardTitle
            className={`text-md text-primary-700 font-[family-name:var(--font-heading)] ${
              type === "100" && "md:text-2xl xl:text-3xl mb-2 xl:mb-4"
            } ${type === "50" && "md:text-2xl mb-2"}`}
          >
            {post.title}
          </CardTitle>
          <CardDescription>
            <p
              className={`hidden sm:block text-primary-500 leading-5 md:leading-6 ${
                type === "100" && "text-lg sm:mb-2 xl:text-xl xl:mb-4"
              } ${type === "50" && "text-lg mb-2"}`}
            >
              {post.shortDescription}
            </p>
            <p
              className={`sm:mb-2 leading-6 ${
                type === "100" && "text-sm xl:text-md"
              } ${type === "50" && "text-sm"}`}
            >
              <span className="me-2">
                {date.toLocaleDateString("en-En", options)},
              </span>
              <span>{post.timeToRead}</span>
            </p>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCardFull;
