"use client";
import { Button } from "@/app/_components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { Sparkles } from "lucide-react";
import { auth } from "../_lib/auth";

const formSchema = z.object({
  // firstName: z.string().min(2, {
  //   message: "First name must be at least 2 characters.",
  // }),
  // secondName: z.string().min(2, {
  //   message: "Second name must be at least 2 characters.",
  // }),
  // email: z.string().email({
  //   message: "Second name must be at least 2 characters.",
  // }),
});

function ProfileForm({ user }) {
  const name = user.name.split(" ").at(0);
  const surname = user.name.split(" ").at(1);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      surname: surname,
      email: user.email,
      phone: "",
      address: "",
      postCode: "",
      city: "",
    },
  });
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-1">
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
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>Surname</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8901" {...field} />
                      </FormControl>
                      <FormMessage />
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
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, Apt 4B" {...field} />
                      </FormControl>
                      <FormMessage />
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
                      <FormLabel>Post Code</FormLabel>
                      <FormControl>
                        <Input placeholder="1000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Ljubljana" {...field} />
                      </FormControl>
                      <FormMessage />
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
                      <FormLabel>
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
                      <FormMessage />
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
                      <FormLabel>
                        Skills
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="JavaScript, React, CSS"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
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
                      <FormLabel>
                        Education
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Bachelor's in Computer Science"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
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
                      <FormLabel>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </ScrollArea>
          <div className="text-center">
            <Button type="submit" variant="secondary" size="full">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ProfileForm;
