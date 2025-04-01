import { callContentful } from "@/app/_lib/data-service";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";

async function RichText({ content }) {
  async function getPostWithId(entryId) {
    const query = `
    {
      pageBlogPost(id: "${entryId}") {
        slug
      }
    }
  `;
    const response = await callContentful(query);
    const { slug } = response.data.pageBlogPost;
    const mockEntry = {
      fields: {
        slug: slug,
      },
    };

    return mockEntry;
  }
  async function getImageWithId(entryId) {
    const query = `
    {
      componentRichImage(id: "${entryId}") {
        image {
          url
          width
          height
          title
        }
      }
    }
  `;
    const response = await callContentful(query);
    const { image } = response.data.componentRichImage;
    return image;
  }
  const options = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        );
      },
      [MARKS.BOLD]: (text) => {
        return <span className="font-bold">{text}</span>;
      },
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="text-3xl font-[family-name:var(--font-heading)] text-primary-700">
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <h3 className="text-2xl font-[family-name:var(--font-heading)] text-primary-700">
            {children}
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        return (
          <h4 className="text-lg font-[family-name:var(--font-heading)] text-primary-700">
            {children}
          </h4>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.find((item) =>
            item.marks?.find((mark) => mark.type === "code")
          )
        ) {
          return (
            <div>
              <pre>
                <code>{children}</code>
              </pre>
            </div>
          );
        }
        return <p className="text-lg">{children}</p>;
      },
      [INLINES.ENTRY_HYPERLINK]: async (node, children) => {
        const post = await getPostWithId(node.data.target.sys.id);
        return <Link href={`/blog/${post.fields.slug}`}>{children}</Link>;
      },
      [BLOCKS.EMBEDDED_ASSET]: async (node, children) => {
        // const referencedEntry = await getEntryWithId(node.data.target.sys.id);

        return <p>BLOCKS.EMBEDDED_ASSET</p>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: async (node, children) => {
        const image = await getImageWithId(node.data.target.sys.id);

        return (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.title}
          />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        const text = node.content.find(
          (item) => item.nodeType === "text"
        )?.value;
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      },
    },
  };

  return (
    <div className="prose m-auto max-w-screen-md mb-14">
      {documentToReactComponents(content, options)}
    </div>
  );
}

export default RichText;
