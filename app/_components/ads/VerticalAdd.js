import { useEffect } from "react";

function VerticalAdd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5572183520162427";
    script.crossorigin = "anonymous";
    script.async = true;
    const script2 = document.createElement("script");
    script2.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
    document.body.appendChild(script);
    document.body.appendChild(script2);
  }, []);
  return (
    <>
      <ins
        className="adsbygoogle min-w-44"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5572183520162427"
        data-ad-slot="6581177641"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}

export default VerticalAdd;
