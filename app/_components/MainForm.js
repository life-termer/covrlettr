import { Button } from "@/app/_components/ui/button";
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

function MainForm({ form }) {
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-1">
          <ScrollArea className="h-[340px] lg:h-[700px] w-full lg:w-[100%] rounded-md border p-2 sm:p-4 top-0">
            <div className="mb-14">
              <h3
                id="job"
                className="text-primary-700 font-[family-name:var(--font-heading)] mb-3 px-1"
              >
                Job
              </h3>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>
                        Position
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Front-End Developer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>
                        Company
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Google" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel>
                        Job description
                        <Sparkles className="w-3 ms-1 -mt-3 inline-block" />
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows="7"
                          placeholder="Insert job description"
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
                  name="recipientName"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input placeholder="Hire manager" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="recipientAddress"
                  render={({ field }) => (
                    <FormItem className="w-full px-1">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Second St" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-3">
                <FormField
                  control={form.control}
                  name="recipientPostCode"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>Post Code</FormLabel>
                      <FormControl>
                        <Input placeholder="SE16 9GF" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="recipientCity"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="London" {...field} />
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
                        <Input placeholder="john.doe@example.com" {...field} />
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
            <div className="mb-2">
              <h3
                id="options"
                className="text-primary-700 font-[family-name:var(--font-heading)] mb-3 px-1"
              >
                Options
              </h3>
              <div className="flex space-x-3 mb-3">
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem className="w-1/2 px-1">
                      <FormLabel>Length</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 relative">
                            <FormControl>
                              <RadioGroupItem value="short" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Short (max 200 words)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 relative">
                            <FormControl>
                              <RadioGroupItem value="medium" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Medium (max 300 words)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 relative">
                            <FormControl>
                              <RadioGroupItem value="long" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Long (max 400 words)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </ScrollArea>
          <div className="flex items-center gap-2">
            <p className="text-sm">
              <Sparkles className="w-4 inline-block align-middle" /> Fields will
              be used to generate the AI-powered cover letter. The rest are
              optional and can be changed at any time.
            </p>
          </div>
          <div className="text-center">
            <Button type="submit" variant="secondary" size="full">
              Generate
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default MainForm;
