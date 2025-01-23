"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Test() {
  const [html, setHtml] = useState("");
  const ref = useRef();
  const onBlur = () => {
    setHtml(ref.current);
  };
  return (
    <main
      ref={ref}
      onBlur={onBlur}
      contentEditable
      suppressContentEditableWarning={true}
    >
      <section className="mx-auto w-full bg-secondary-400">
        <div className=" max-w-screen-xl m-auto px-3 flex flex-col justify-center items-center space-y-8">
          <h1 className="text-primary-700 text-6xl text-center font-[family-name:var(--font-heading)] uppercase">
            Create Tailored <span className="text-brand">Cover Letters </span>
            Effortlessly
          </h1>
          <p className="text-3xl text-center max-w-4xl">
            Stand out in the job market with personalized, professional cover
            letters. Let our app do the heavy lifting so you can focus on
            landing your dream job.
          </p>
        </div>
      </section>
    </main>
  );
}
