"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import MainForm from "../_components/MainForm";
import CoverLetter from "./CoverLetter";
import { Button } from "./ui/button";

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
    <div className="flex py-5">
      <div className="w-1/3 flex-auto">
        <div className="flex gap-3 px-1 mb-4">
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" disabled>
              Fill from account
            </Button>
          </div>
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" onClick={handleReset}>
              Clear All
            </Button>
          </div>
        </div>
        <MainForm form={form} />
      </div>

      <div className="w-2/3 flex-auto">
        <CoverLetter form={form} />
      </div>
    </div>
  );
}

export default App;
