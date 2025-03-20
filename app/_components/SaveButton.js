"use client";

import { useActionState, useEffect, useLayoutEffect, useState } from "react";
import { createCoverLetter } from "../_lib/actions";
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
  const initialState = {
    message: "",
  };
  const [message, setMessage] = useState("");
  //   const [state, formAction, pending] = useActionState(
  //     createCoverLetter,
  //     initialState
  //   );
  async function handleClick() {
    if (coverLetter) {
      setMessage("Update Cover Letter");
    } else {
      form.trigger();
      if (!isValid) {
        setMessage("Fix the form errors before saving");
      }

        const res = await createCoverLetter(jData);
        console.log("res", jData);
        setMessage(res.message);
        if (res.message === "Cover Letter saved!") {
          resetData();
          localStorage.removeItem("storage");
          redirect("/app");
        }
    }
  }
  //   const form = useForm({
  //     defaultValues: {
  //       response: data.response,
  //     },
  //   });
  useEffect(() => {
    if (message)
      toast({
        title: message,
      });
    setMessage(null);
  }, [message]);

  return (
    // <Form {...form}>
    //   <form action={formAction}>
    //     <FormField
    //       control={form.control}
    //       name="response"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormControl>
    //             <Input type="hidden" {...field} />
    //           </FormControl>
    //         </FormItem>
    //       )}
    //     />

    //     {/* <Input type="hidden" name="response" value={data.response} /> */}
    //     <SubmitButton pendingLabel="Updating..." pending={pending}>
    //       Update
    //     </SubmitButton>
    //     {/* <Button variant="secondary" size="full">
    //       Save
    //     </Button> */}
    //   </form>

    // </Form>

    <Button
      variant="secondary"
      size="full"
      onClick={handleClick}
      //   disabled={!isValid}
    >
      {coverLetter ? "Update" : "Save"}
    </Button>
  );
}

export default SaveButton;
