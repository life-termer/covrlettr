import { Canvg } from "canvg";
import { clsx } from "clsx";
import jsPDF from "jspdf";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const fontFamilies = {
  arial: ["Arial", "sans-serif"],
  times: ["Times New Roman", "serif"],
  georgia: ["Georgia", "serif"],
  notoSans: "font-[family-name:var(--font-noto-sans)]",
  poppins: "Poppins",
  calibri: ["Calibri", "sans-serif"],
};
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

const icEnvelope =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>';
const icPhone =
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>';

export function toPDF2(target, fileName, fontFamily, fontSize, lineHeight) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
    hotfixes: ["px_scaling"],
    putOnlyUsedFonts: true,
  });
  const html = document.createElement("div");
  html.style.width = "600px";
  html.style.color = "#000";
  // html.style.padding = "20px";
  html.style.fontFamily = fontFamilies[fontFamily];
  html.style.fontSize = fontSizes[fontSize];
  html.style.lineHeight = lineHeights[lineHeight];
  html.innerHTML = target.current.innerHTML;
  const svgs = html.querySelectorAll("svg");
  const unLists = html.querySelectorAll("ul");
  const lists = html.querySelectorAll("li");
  const sizeXl = html.querySelectorAll(".custom-size-xl");
  const sizeSm = html.querySelectorAll(".custom-size-sm");
  console.log(svgs);
  svgs.forEach((s) => {
    s.remove();
  });
  sizeXl.forEach((size) => {
    size.style.fontSize = "28px";
    size.style.lineHeight = "28px";
  });
  sizeSm.forEach((size) => {
    size.style.fontSize = "12px";
    size.style.lineHeight = "12px";
  });
  unLists.forEach((ul) => {
    ul.style.padding = "0";
    ul.style.margin = "0";
  });
  lists.forEach((l) => {
    let html = l.innerHTML;
    l.style.listStyleType = "none";
    l.innerHTML = `&#x2022;  ` + html;
  });
  console.log(html);
  doc.addFont(
    "https://fonts.gstatic.com/s/lobster/v30/neILzCirqoswsqX9_oWsMqEzSJQ.ttf",
    "Lobster",
    "normal"
  );

  if (!target.current) return;

  doc.html(html, {
    x: 0,
    y: 0,
    margin: [0, 0, 0, 0],
    autoPaging: "text",
    callback: function (doc) {
      doc.save(fileName);
    },
  });
  html.remove();
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
