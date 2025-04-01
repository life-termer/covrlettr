import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { auth } from "./auth";
import { blogConfig } from "./utils";
/////////////
// GET

// Users are uniquely identified by their email address
export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  //For testing
  // await new Promise((res) => setTimeout(res, 1000));
  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getCoverLetters(userId) {
  const { data, error, count } = await supabase
    .from("coverLetters")
    .select("*")
    .eq("userId", userId)
    .order("modified_at", { ascending: false });

  return data;
}

export async function getCoverLetter(id) {
  const { user } = await auth();
  const userData = await getUser(user.email);
  if (!user) notFound();

  const { data, error } = await supabase
    .from("coverLetters")
    .select("*")
    .eq("id", id)
    .eq("userId", userData.id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

/////////////
// CREATE

export async function createUser(newUser) {
  const { data, error } = await supabase.from("users").insert([newUser]);

  if (error) {
    console.error(error);
    throw new Error("User could not be created");
  }

  return data;
}

export async function callContentful(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

export async function getPaginatedPostSummaries(page) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0 ? blogConfig.pagination.pageSize * skipMultiplier : 0;
  console.log(blogConfig.pagination.pageSize, skip)
  const query = `
      {
      pageBlogPostCollection(
      limit: ${blogConfig.pagination.pageSize}
      skip: ${skip}
      order: publishedDate_DESC) {
        total
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

    const response = await callContentful(query);
    console.log(response.items)
    const paginatedPostSummaries = response.data.pageBlogPostCollection
    ? response.data.pageBlogPostCollection
    : { total: 0, items: [] };

    return paginatedPostSummaries;
}

export async function getPosts(slug) {
  
  const query = `
  query {
  pageBlogPostCollection(
    where: {
      slug: "${slug}"
    }
  ) {
    items {
      slug
      title
      shortDescription
      publishedDate
      timeToRead
      featuredImage {
        fileName
        title
        description
        width
        url
        height
      }
      content {
        json
      }
        relatedBlogPostsCollection {
        total
        items {
          title
          slug
          publishedDate
          featuredImage {
            fileName
            title
            description
            width
            url
            height
          }
        }
      }
    }
  }
}
`;

    const response = await callContentful(query);
    const posts = response.data.pageBlogPostCollection.items[0]
    ? response.data.pageBlogPostCollection.items[0]
    : { posts: [] };

    return posts;
}