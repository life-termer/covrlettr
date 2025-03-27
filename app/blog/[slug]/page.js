import RichText from "@/app/_components/blog/RichText";
import { fetchGraphQL } from "@/app/_lib/data-service";
import Image from "next/image";

export const metadata = {
  title: "slug",
};

async function Post({ params }) {
  const p = await params;
  console.log("slug", p.slug);

  const query = `
  query {
  pageBlogPostCollection(
    where: {
      slug: "${p.slug}"
    }
  ) {
    items {
      slug
      seoFields {
        pageDescription
      }
      title
      shortDescription
      publishedDate
      featuredImage {
        fileName
        title
        description
        width
        url
      }
      content {
        json
      }
    }
  }
}
`;
  const response = await fetchGraphQL(query);
  const { title, content, featuredImage } =
    response.data.pageBlogPostCollection.items[0];
  return (
    <>
      <h1 className="text-center mb-8 text-4xl">{title}</h1>
      <Image
      className="m-auto mb-8"
        src={featuredImage.url}
        alt={featuredImage.title}
        width={featuredImage.width}
        height={500}
      />
      <RichText content={content.json} />

      {/* {content.json.content.map((block) => (
        <p key={block.content[0]?.value}>{block.content[0]?.value}</p>
      ))} */}
    </>
  );
}

export default Post;
