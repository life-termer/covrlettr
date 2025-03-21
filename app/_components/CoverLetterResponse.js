import { createElement, useEffect, useRef, useState } from "react";
import { Pen, Pencil } from "lucide-react";
import ReactHtmlParser from "react-html-parser";
import { useMainContext } from "../_lib/mainContext";

function CoverLetterResponse({ name, surname, recipientName, response }) {
  const ref = useRef();
  const responseRef = useRef();
  const { editedResponse, setEditedResponse } = useMainContext();
  const [tempHtml, setTempHtml] = useState(response.data);
  const onBlur = () => {
    setEditedResponse(responseRef.current.innerHTML);
  };
  function escapeHtml(text) {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
  }
  useEffect(() => {
    editedResponse ? setTempHtml(editedResponse) : setTempHtml(response);
  }, [response]);

  return (
    <>
      <div
        ref={ref}
        onBlur={onBlur}
        contentEditable
        suppressContentEditableWarning={true}
        className="relative focus-visible:outline-2 focus-visible:outline-secondary-500"
      >
        <span className="block">Dear, {recipientName}</span>
        <span className="block">
          <br />
        </span>
        <div ref={responseRef}>{ReactHtmlParser(tempHtml)}</div>
        <span className="block">
          <br />
        </span>
        <span className="block">Sincerely,</span>
        <span className="block">
          {name && <span className="inline-block">{name}&nbsp;</span>}
          {surname && <span className="inline-block">{surname}</span>}
        </span>
        <Pencil className="absolute top-0 right-[-16px] w-4 text-secondary-700 pencil" />
      </div>
    </>
  );
}

export default CoverLetterResponse;
