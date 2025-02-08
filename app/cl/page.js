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
  return <App userData={userData} />;
}

export default Cl;
