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
  notoSans: ["Noto Sans", "sans-serif"],
  poppins: ["Poppins", "sans-serif"],
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

function addFont(doc, font) {
  switch (font) {
    case "poppins":
      doc.addFont("/Fonts/Poppins.ttf", "Poppins", "normal");
      doc.addFont("/Fonts/PoppinsBold.ttf", "Poppins", "bold");
      break;
    case "calibri":
      doc.addFont("/Fonts/Calibri.ttf", "Calibri", "normal");
      doc.addFont("/Fonts/CalibriBold.ttf", "Calibri", "bold");
      break;
    case "notoSans":
      doc.addFont("/Fonts/NotoSans.ttf", "Noto Sans", "normal");
      doc.addFont("/Fonts/NotoSansBold.ttf", "Noto Sans", "bold");
      break;
    case "georgia":
      doc.addFont("/Fonts/Georgia.ttf", "Georgia", "normal");
      doc.addFont("/Fonts/GeorgiaBold.ttf", "Georgia", "bold");
      break;
    default:
      break;
  }
}

export async function toPDF2(
  target,
  fileName,
  fontFamily,
  fontSize,
  lineHeight
) {
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
  if (svgs.length > 1) {
    await convertSVGtoImg(svgs[0]);
    await convertSVGtoImg(svgs[1]);
    await convertSVGtoImg(svgs[2]);
  }
  svgs.forEach((s) => {
    s.remove();
  });

  sizeXl.forEach((size) => {
    size.style.fontSize = "28px";
    size.style.lineHeight = "28px";
  });
  sizeSm.forEach((size) => {
    size.style.fontSize = "10px";
    size.style.lineHeight = "10px";
    size.style.height = "10px";
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
  addFont(doc, fontFamily);

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

const dataHeader = "data:image/svg+xml;charset=utf-8";

const loadImage = async (url) => {
  const img = document.createElement("img");
  img.src = url;
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

const serializeAsXML = (e) => new XMLSerializer().serializeToString(e);

const encodeAsUTF8 = (s) => `${dataHeader},${encodeURIComponent(s)}`;
const encodeAsB64 = (s) => `${dataHeader};base64,${btoa(s)}`;

const convertSVGtoImg = async (svg) => {
  const format = "png";

  const svgData = encodeAsUTF8(serializeAsXML(svg));
  const img = await loadImage(svgData);
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  canvas.getContext("2d").drawImage(img, 0, 0, 16, 16);
  const dataURL = await canvas.toDataURL(`image/${format}`, 1.0);
  const wrapper = svg.closest(".img-wrapper");

  // s.remove();
  if (wrapper) {
    wrapper.style.position = "relative";
    console.log(wrapper.clientHeight);
    wrapper.style.height = "10px";
    const image = document.createElement("img");
    image.src = dataURL;
    wrapper.appendChild(image);
    image.style.transform = "translate(5px, 5px)";
    image.style.width = "10px";
    image.style.height = "10px";
  }
};


export const blogConfig = {
  pagination: {
    pageSize: 6,
  },
}