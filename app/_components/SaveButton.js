"use client";

import { useActionState, useEffect, useLayoutEffect, useState } from "react";
import { createCoverLetter, updateCoverLetter } from "../_lib/actions";
import { useMainContext } from "../_lib/mainContext";
import { Button } from "./ui/button";
import { toast } from "../_hooks/use-toast";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import SubmitButton from "./SubmitButton";
import { redirect } from "next/navigation";

function SaveButton({ coverLetter, isValid, resetData }) {
  const { form, trigger } = useMainContext();
  const data = useMainContext();
  const jData = JSON.parse(JSON.stringify(data));
  const jForm = JSON.parse(JSON.stringify(form.getValues()));

  const [message, setMessage] = useState("");

  async function handleClick() {
    const clName = saveForm.getValues("name");
    form.trigger();
    if (!isValid) {
      setMessage("Fix the form errors before saving");
    } else if (coverLetter) {
      const res = await updateCoverLetter(jData, jForm, clName, coverLetter.id);
      setMessage(res.message);
      // setMessage("Update Cover Letter");
    } else {
      const res = await createCoverLetter(jData, jForm, clName);
      setMessage(res.message);
      if (res.message === "Cover Letter saved!") {
        resetData();
        redirect("/app");
      }
    }
  }
  const saveForm = useForm({
    defaultValues: {
      name: "Cover Letter",
    },
  });
  useEffect(() => {
    if (message)
      toast({
        title: message,
      });
    setMessage(null);
  }, [message]);
  useEffect(() => {
    if (coverLetter) {
      saveForm.setValue("name", coverLetter.name);
    }
  }, []);
  return (
    <Form {...saveForm}>
      <form onSubmit={saveForm.handleSubmit(handleClick)}>
        <div className="flex gap-4 w-full">
          <FormField
            control={saveForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full px-1">
                <FormControl>
                  <Input placeholder="Cover Letter" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant="secondary"
            size="full"
            //   disabled={!isValid}
          >
            {coverLetter ? "Save Changes" : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SaveButton;
