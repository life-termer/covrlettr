"use server";

import { signIn, signOut, auth } from "./auth";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { Toast } from "../_components/ui/toast";

export async function signInAction() {
  await signIn("google", { redirectTo: "/cl" });
}

export async function signOutAction() {
  await signOut();
}

export async function updateUser(prevState, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const name = formData.get("name");
  const surname = formData.get("surname");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const postCode = formData.get("postCode");
  const city = formData.get("city");
  const experience = formData.get("experience");
  const skills = formData.get("skills");
  const education = formData.get("education");
  const achievements = formData.get("achievements");
  console.log(prevState, formData);

  const updateData = {
    name,
    surname,
    phone,
    address,
    postCode,
    city,
    experience,
    skills,
    education,
    achievements,
  };

  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("User could not be updated");
  }
  return { message: "User updated" };

  revalidatePath("/account");
}
