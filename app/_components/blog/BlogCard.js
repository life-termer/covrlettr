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
  console.log(post.publishedDate)
  const date = new Date(post.publishedDate)
  console.log(date.toLocaleDateString())
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.title}
            width={post.featuredImage.width}
            height={300}
          />
        </CardHeader>
        <CardContent className="pb-3 mt-auto">
          <CardTitle className="mb-2">{post.title}</CardTitle>
          <CardDescription>{date.toLocaleDateString("en-En", options)}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCard;
