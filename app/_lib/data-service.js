import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { auth } from "./auth";
import { client } from "./_contentful/client";
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

export const getPosts = async () => {
  const response = await client.getEntries({
    content_type: "pageBlogPost",
  });

  // if (error) {
  //   console.error(error);
  //   throw new Error("Could not get posts");
  // }

  return response.items;
};
