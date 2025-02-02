import { notFound } from "next/navigation";
import { supabase } from "./supabase";

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
