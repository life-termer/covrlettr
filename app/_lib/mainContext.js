"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MainContext = createContext();

const formSchema = z.object({
  position: z.string().max(50, {
    message: "Position must be no longer than 50 characters.",
  }),
  company: z.string().max(50, {
    message: "Company must be no longer than 50 characters.",
  }),
  website: z.string().max(50, {
    message: "Website must be no longer than 50 characters.",
  }),
  description: z.string().max(1000, {
    message: "Description must be no longer than 1000 characters.",
  }),
  experience: z.string().max(1000, {
    message: "Experience must be no longer than 1000 characters.",
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
const defaultFormValues = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  address: "",
  postCode: "",
  city: "",
  position: "",
  company: "",
  website: "",
  description: "",
  recipientName: "",
  recipientAddress: "",
  recipientPostCode: "",
  recipientCity: "",
  experience: "",
  skills: "",
  education: "",
  achievements: "",
  length: "300",
  tone: "formal and professional",
};
const initialStates = {
  response: undefined,
  template: "blank",
  fontFamily: "arial",
  fontSize: "m",
  lineHeight: "m",
  mainColor: "#000",
  defaultFormValues: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    postCode: "",
    city: "",
    position: "",
    company: "",
    website: "",
    description: "",
    recipientName: "",
    recipientAddress: "",
    recipientPostCode: "",
    recipientCity: "",
    experience: "",
    skills: "",
    education: "",
    achievements: "",
    length: "300",
    tone: "formal and professional",
  },
  editedResponse: undefined,
};
function MainContextProvider({ children }) {
  const [response, setResponse] = useState(initialStates.response);
  const [editedResponse, setEditedResponse] = useState(
    initialStates.editedResponse
  );
  const [template, setTemplate] = useState(initialStates.template);
  const [fontFamily, setFontFamily] = useState(initialStates.fontFamily);
  const [fontSize, setFontSize] = useState(initialStates.fontSize);
  const [lineHeight, setLineHeight] = useState(initialStates.lineHeight);
  const [mainColor, setMainColor] = useState(initialStates.mainColor);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const { isValid, trigger } = form.formState;

  return (
    <MainContext.Provider
      value={{
        response,
        setResponse,
        template,
        setTemplate,
        fontFamily,
        setFontFamily,
        fontSize,
        setFontSize,
        lineHeight,
        setLineHeight,
        mainColor,
        setMainColor,
        form,
        editedResponse,
        setEditedResponse,
        isValid,
        trigger,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { MainContextProvider, useMainContext };
