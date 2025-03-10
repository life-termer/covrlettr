"use server";

import { signIn, signOut, auth } from "./auth";
import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { z } from "zod";

export async function signInAction() {
  await signIn("google", { redirectTo: "/app" });
}
export async function signInActionGit() {
  await signIn("github", { redirectTo: "/app" });
}

export async function signOutAction() {
  await signOut();
}

const formSchema = z.object({
  name: z.string().max(50, {
    message: "Name must be no longer than 50 characters.",
  }),
  surname: z.string().max(50, {
    message: "Surname must be no longer than 50 characters.",
  }),
  phone: z.string().max(50, {
    message: "Phone must be no longer than 50 characters.",
  }),
  address: z.string().max(50, {
    message: "Address must be no longer than 50 characters.",
  }),
  postCode: z.string().max(50, {
    message: "Post Code must be no longer than 50 characters.",
  }),
  city: z.string().max(50, {
    message: "City must be no longer than 50 characters.",
  }),
  experience: z.string().max(500, {
    message: "Experience must be no longer than 500 characters.",
  }),
  skills: z.string().max(250, {
    message: "Skills must be no longer than 250 characters.",
  }),
  education: z.string().max(50, {
    message: "Education must be no longer than 50 characters.",
  }),
  achievements: z.string().max(500, {
    message: "Achievements must be no longer than 500 characters.",
  }),
});

export async function updateUser(prevState, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const contactFormData = Object.fromEntries(formData);
  const validatedContactFormData = formSchema.safeParse(contactFormData);

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
  if (!validatedContactFormData.success) {
    const formFieldErrors =
      validatedContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        surname: formFieldErrors?.surname,
        phone: formFieldErrors?.phone,
        address: formFieldErrors?.address,
        postCode: formFieldErrors?.postCode,
        city: formFieldErrors?.city,
        experience: formFieldErrors?.experience,
        skills: formFieldErrors?.skills,
        education: formFieldErrors?.education,
        achievements: formFieldErrors?.achievements,
      },
    };
  }

  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    // throw new Error("User could not be updated");
    return { message: "User could not be updated" };
  }

  revalidatePath("/account");
  return {
    message: "User updated!",
  };
}
