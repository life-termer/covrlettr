import App from "@/app/_components/App";
import { auth } from "@/app/_lib/auth";
import { getCoverLetter, getUser } from "@/app/_lib/data-service";

export const metadata = {
  title: "Cover Letter",
};

async function Page({ params }) {
  const p = await params;
  const { user } = await auth();
  const userData = await getUser(user.email);
  console.log(p);
  const coverLetter = await getCoverLetter(p.coverLetterID);
  return <App userData={userData} coverLetter={coverLetter} />;
}

export default Page;
