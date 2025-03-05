"use client";

import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const MainContext = createContext();
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
console.log(defaultFormValues);
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
    defaultValues: defaultFormValues,
  });

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
