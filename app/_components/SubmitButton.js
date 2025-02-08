"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { useActionState } from "react";
import { updateUser } from "../_lib/actions";

export default function SubmitButton({ children, pendingLabel, pending }) {
  // const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="secondary"
      size="full"
      disabled={pending && true}
    >
      {pending ? pendingLabel : children}
    </Button>
  );
}
