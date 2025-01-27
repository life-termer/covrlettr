"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import MainForm from "../_components/MainForm";
import CoverLetter from "./CoverLetter";
import { Button } from "./ui/button";
import { UserRoundCog } from "lucide-react";

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

function App() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
      postCode: "",
      city: "",
      position: "",
      company: "",
      description: "",
      recipientName: "",
      recipientAddress: "",
      recipientPostCode: "",
      recipientCity: "",
      length: "medium",
    },
  });
  const watchAllFields = form.watch();
  const handleReset = () => {
    form.reset();
  };
  return (
    <div className="flex flex-wrap lg:flex-nowrap py-5 px-2 lg:px-0 gap-y-12">
      <div className="w-full lg:w-1/3 flex-auto px-0 sm:px-3">
        <div className="flex gap-3 px-1 mb-4">
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" size="full" disabled>
              Fill from <UserRoundCog />
            </Button>
          </div>
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" size="full" onClick={handleReset}>
              Clear All
            </Button>
          </div>
        </div>
        <MainForm form={form} />
      </div>

      <div className="w-full lg:w-2/3 flex-auto px-0 sm:px-3">
        <CoverLetter form={form} />
      </div>
    </div>
  );
}

export default App;
