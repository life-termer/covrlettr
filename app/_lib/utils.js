import { clsx } from "clsx";
import jsPDF from "jspdf";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const fontSizes = {
  xs: "8px",
  s: "10px",
  m: "12px",
  l: "14px",
  xl: "16px",
};
const lineHeights = {
  xs: "1",
  s: "1.25",
  m: "1.4",
  l: "1.6",
  xl: "1.75",
};

export function toPDF2(target, fileName, fontSize, lineHeight) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
    hotfixes: ["px_scaling"],
    putOnlyUsedFonts: true,
  });
  const div = document.createElement("div");
  div.style.width = "550px";
  div.style.fontSize = fontSizes[fontSize];
  div.style.lineHeight = lineHeights[lineHeight];
  div.innerHTML = target.current.innerHTML;
  console.log(div);
  doc.addFont(
    "https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9_oWsMqEzSJQ.ttf",
    "Lobster",
    "normal"
  );
  if (!target.current) return;

  doc.html(div, {
    x: 10,
    y: 10,
    margin: [10, 10, 10, 10],
    autoPaging: "text",
    callback: function (doc) {
      doc.save(fileName);
    },
  });
  div.remove();
}

export const exportPlainText = (targetRef, fileName) => {
  const text = targetRef.current?.innerText;
  // Create a Blob with the text content
  const blob = new Blob([text], { type: "text/plain" });
  const blobURL = window.URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${fileName}.txt`; // File name

  // Trigger the download
  link.click();

  // Cleanup
  window.URL.revokeObjectURL(blobURL);
};
