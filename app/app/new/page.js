import App from "@/app/_components/App";
import { auth } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";
export const metadata = {
  title: "Cover Letter",
};

async function Cl() {
  const { user } = await auth();
  const userData = await getUser(user.email);
  return (
    <App userData={userData} />
  );
}

export default Cl;
