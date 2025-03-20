"use client";

import MainForm from "../_components/MainForm";
import CoverLetter from "./CoverLetter";
import { Button } from "./ui/button";
import { UserRoundCog } from "lucide-react";
import { Suspense, useEffect, useId, useLayoutEffect, useState } from "react";
import { generateResponse } from "../_lib/openAi";
import Spinner from "./Spinner";
import { useToast } from "../_hooks/use-toast";
import { useMainContext } from "../_lib/mainContext";
import { set } from "react-hook-form";

function App({ userData, coverLetter }) {
  const {
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
    template,
    setTemplate,
    isValid,
  } = useMainContext();
  const watchFields = form.watch();
  const { toast } = useToast();

  console.log(isValid);

  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    form.reset();
  };
  const storage = [
    { form: form.getValues() },
    { response: response },
    { editedResponse: editedResponse },
    { fontFamily: fontFamily },
    { fontSize: fontSize },
    { lineHeight: lineHeight },
    { mainColor: mainColor },
    { template: template },
  ];
  const resetData = () => {
    setResponse(undefined);
    setEditedResponse(undefined);
    setFontFamily("arial");
    setFontSize("m");
    setLineHeight("m");
    setMainColor("#000");
  }

  async function onSubmit(values) {
    setEditedResponse(undefined);
    setIsLoading(true);
    const response = await generateResponse(values, setIsLoading);
    localStorage.setItem("storage", JSON.stringify(storage));
    setResponse(response.data);
    setIsLoading(false);
  }

  const handleFill = () => {
    for (const [k, v] of Object.entries(userData)) {
      if (v) form.setValue(k, v);
    }
  };
  // const response1 = JSON.stringify(coverLetter.response);
  // console.log("response", response);
  // console.log("editedResponse", editedResponse);
  useEffect(() => {
    resetData();
    if (coverLetter) {
      
      setResponse(coverLetter.response);
      setEditedResponse(coverLetter.response);
      setFontFamily(coverLetter.fontFamily);
      setFontSize(coverLetter.fontSize);
      setLineHeight(coverLetter.lineHeight);
      setMainColor(coverLetter.mainColor);
      setTemplate(coverLetter.template);
    } else {
      const localData = JSON.parse(localStorage.getItem("storage"));
      if (localData) {
        for (const [k, v] of Object.entries(localData[0].form)) {
          if (v && k != "length" && k != "tone") {
            form.setValue(k, v);
          }
        }
        setResponse(localData[1].response);
        setEditedResponse(localData[2].editedResponse);
        setFontFamily(localData[3].fontFamily);
        setFontSize(localData[4].fontSize);
        setLineHeight(localData[5].lineHeight);
        setMainColor(localData[6].mainColor);
        setTemplate(localData[7].template);
      }
    }
  }, []);
  useEffect(() => {
    if (response && !coverLetter) {
      localStorage.setItem("storage", JSON.stringify(storage));
    }
  }, [
    response,
    editedResponse,
    fontFamily,
    fontSize,
    lineHeight,
    mainColor,
    template,
  ]);
  return (
    <div className="flex flex-wrap lg:flex-nowrap py-5 px-2 lg:px-0 gap-y-12">
      <div className="w-full lg:w-1/3 flex-auto px-0 sm:px-3">
        <div className="flex gap-3 px-1 mb-4">
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" size="full" onClick={handleFill}>
              Fill from <UserRoundCog />
            </Button>
          </div>
          <div className="w-1/2 flex-auto">
            <Button variant="secondary" size="full" onClick={handleReset}>
              Clear All
            </Button>
          </div>
        </div>
        <Suspense fallback={<Spinner />} key={form}>
          <MainForm
            form={form}
            onSubmit={onSubmit}
            isLoading={isLoading}
            isValid={isValid}
          />
        </Suspense>
      </div>

      <div className="w-full lg:w-2/3 flex-auto px-0 sm:px-3 mb-28 lg:mb-0">
        <Suspense fallback={<Spinner />} key={response}>
          <CoverLetter
            watchFields={watchFields}
            response={response}
            isLoading={isLoading}
            coverLetter={coverLetter}
            resetData={resetData}
            isValid={isValid}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
