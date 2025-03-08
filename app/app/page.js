import Script from "next/script";
import App from "../_components/App";
import Spinner from "../_components/Spinner";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";
export const metadata = {
  title: "Cover Letter",
};

async function Cl() {
  const { user } = await auth();
  const userData = await getUser(user.email);
  return (
    <>
      <App userData={userData} />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5572183520162427"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Cl;
