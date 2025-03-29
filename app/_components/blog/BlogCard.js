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

function BlogCard({ post }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(post.publishedDate);
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col">
        <CardHeader className="h-80">
          <div className="relative w-full h-full">
            <Image
              fill
              src={post.featuredImage.url}
              alt={post.featuredImage.title}
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="pb-3 mt-auto">
          <CardTitle className="mb-2 text-primary-700 font-[family-name:var(--font-heading)] text-md">
            {post.title}
          </CardTitle>
          <CardDescription>
            <span className="me-2">
              {date.toLocaleDateString("en-En", options)},
            </span>
            <span>{post.timeToRead}</span>
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCard;
