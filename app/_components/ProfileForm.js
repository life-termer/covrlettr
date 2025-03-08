"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Textarea } from "@/app/_components/ui/textarea";
import { Sparkles } from "lucide-react";
import { updateUser } from "../_lib/actions";
import SubmitButton from "./SubmitButton";
import { useActionState, useLayoutEffect } from "react";
import { useToast } from "../_hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

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
    message: "city must be no longer than 50 characters.",
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

function ProfileForm({ userData }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      phone: userData.phone || "",
      address: userData.address || "",
      postCode: userData.postCode || "",
      city: userData.city || "",
      experience: userData.experience || "",
      skills: userData.skills || "",
      education: userData.education || "",
      achievements: userData.achievements || "",
    },
  });
  const initialState = {
    message: "",
  };

  const [state, formAction, pending] = useActionState(updateUser, initialState);

  useLayoutEffect(() => {
    if (state.message)
      toast({
        title: state?.message,
      });
    if (state.errors) {
      toast({
        title: "Something went wrong.",
        description: "Please check the form for errors and try again.",
      });
    }
  }, [state]);
  return (
    <div className="w-full">
      <Form {...form}>
        <form action={formAction} className="space-y-3 px-1">
          <ScrollArea className="h-[65vh] min-h-[350px] lg:h-[500px] w-full rounded-md border p-2 sm:p-4 top-0 mb-10">
            <div className="mb-14">
              <h3
                id="details"
                className="text-primary-700 font-[family-name:var(--font-heading)] mb-3 px-1"
              >
                Personal Details
              </h3>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel
                        className={state.errors?.name && "text-destructive"}
                      >
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input className="" placeholder="John" {...field} />
                      </FormControl>
                      {state.errors?.name && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.name}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel
                        className={state.errors?.surname && "text-destructive"}
                      >
                        Surname
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      {state.errors?.surname && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.surname}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john.doe@example.com"
                          {...field}
                          disabled
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel
                        className={state.errors?.phone && "text-destructive"}
                      >
                        Phone number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8901" {...field} />
                      </FormControl>
                      {state.errors?.phone && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.phone}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel
                        className={state.errors?.address && "text-destructive"}
                      >
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, Apt 4B" {...field} />
                      </FormControl>
                      {state.errors?.address && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.address}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3">
                <FormField
                  control={form.control}
                  name="postCode"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel
                        className={state.errors?.postCode && "text-destructive"}
                      >
                        Post Code
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="1000" {...field} />
                      </FormControl>
                      {state.errors?.postCode && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.postCode}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel
                        className={state.errors?.city && "text-destructive"}
                      >
                        City
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ljubljana" {...field} />
                      </FormControl>
                      {state.errors?.city && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.city}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-14">
              <h3
                id="experience"
                className="text-primary-700 font-[family-name:var(--font-heading)] mb-3 px-1"
              >
                Experience
              </h3>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel
                        className={
                          state.errors?.experience && "text-destructive"
                        }
                      >
                        Relevant experience
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows="4"
                          placeholder="3 years of experience as a Front-End Developer"
                          className=""
                          {...field}
                        />
                      </FormControl>
                      {state.errors?.experience && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.experience}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel
                        className={state.errors?.skills && "text-destructive"}
                      >
                        Skills
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="JavaScript, React, CSS"
                          {...field}
                        />
                      </FormControl>
                      {state.errors?.skills && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.skills}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel
                        className={
                          state.errors?.education && "text-destructive"
                        }
                      >
                        Education
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Bachelor's in Computer Science"
                          {...field}
                        />
                      </FormControl>
                      {state.errors?.education && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.education}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="achievements"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel
                        className={
                          state.errors?.achievements && "text-destructive"
                        }
                      >
                        Strengths or achievements
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows="5"
                          placeholder="E.g., Strong problem-solving skills, Completed 3 major projects..."
                          className=""
                          {...field}
                        />
                      </FormControl>
                      {state.errors?.achievements && (
                        <p className="text-[0.8rem] font-medium text-destructive">
                          {state.errors.achievements}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </ScrollArea>
          <div className="text-center">
            <SubmitButton pendingLabel="Updating..." pending={pending}>
              Update
            </SubmitButton>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProfileForm;
