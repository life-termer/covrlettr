import ProfileForm from "../_components/ProfileForm";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

export const metadata = {
  title: "Account",
};

export default async function Account() {
  const { user } = await auth();
  const userData = await getUser(user.email);
  // const firstName = user.name.split(" ").at(0);

  return (
    <div className="flex flex-col items-center h-full w-full max-w-[800px] px-2 mb-10">
      <h2 className="font-semibold mt-5 sm:mt-10 text-3xl mb-5 text-primary-700 font-[family-name:var(--font-heading)] tracking-wide">
        Welcome, {userData.name}
      </h2>
      <h4 className="text-xl mb-8 sm:mb-10">Update your profile</h4>
      <ProfileForm userData={userData} />
    </div>
  );
}
