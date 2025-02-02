"use client";

import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const MainContext = createContext();
const initialStates = {
  response: undefined,
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
  const [fontFamily, setFontFamily] = useState(initialStates.fontFamily);
  const [fontSize, setFontSize] = useState(initialStates.fontSize);
  const [lineHeight, setLineHeight] = useState(initialStates.lineHeight);
  const [mainColor, setMainColor] = useState(initialStates.mainColor);

  const form = useForm({
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
  });

  return (
    <MainContext.Provider
      value={{
        response,
        setResponse,
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
