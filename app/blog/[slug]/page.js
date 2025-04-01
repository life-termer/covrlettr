import BreadcrumbWithLink from "@/app/_components/blog/Breadcrumb";
import RichText from "@/app/_components/blog/RichText";
import { callContentful, getPosts } from "@/app/_lib/data-service";
import Image from "next/image";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export async function generateMetadata({ params }) {
  const p = await params;
  const query = `
  query {
  pageBlogPostCollection(
    where: {
      slug: "${p.slug}"
    }
  ) {
    items {
      seoFields {
        pageTitle
        pageDescription
        keywords
      }
      publishedDate
    }
  }
}
`;

  const response = await callContentful(query);
  const { publishedDate, seoFields } =
    response.data.pageBlogPostCollection.items[0];
  const date = new Date(publishedDate);
  return {
    title: seoFields.pageTitle,
    description: `${date.toLocaleDateString("en-En", options)} - ${
      seoFields.pageDescription
    }`,
    keywords: seoFields.keywords,
  };
}
async function Post({ params }) {
  const p = await params;

  const { title, content, featuredImage, publishedDate, timeToRead } =
    await getPosts(p.slug);

  const date = new Date(publishedDate);
  return (
    <>
      <div className="mb-8">
        <BreadcrumbWithLink title={title} />
      </div>
      <p className="text-right text-gray-600 text-sm mb-8">
        <span className="me-2">
          {date.toLocaleDateString("en-En", options)},
        </span>
        <span>{timeToRead}</span>
      </p>
      <h1 className="text-primary-700 text-2xl sm:text-3xl lg:text-5xl font-[family-name:var(--font-heading)] uppercase text-center mb-14">
        {title}
      </h1>
      <Image
        className="m-auto mb-8 max-w-screen-md w-full"
        src={featuredImage.url}
        alt={featuredImage.title}
        width={featuredImage.width}
        height={featuredImage.height}
      />
      <RichText content={content.json} />
    </>
  );
}

export default Post;
