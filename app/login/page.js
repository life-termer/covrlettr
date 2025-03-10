import Container from "../_components/Container";
import Header from "../_components/Header";
import SignInButtonFacebook from "../_components/SignInButtonFacebook";
import SignInButtonGithub from "../_components/SignInButtonGithub";
import SignInButtonGoogle from "../_components/SignInButtonGoogle";
import SignInButtonLinkedin from "../_components/SignInButtonLinkedin";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col gap-3 items-center h-screen min-h-[550px] max-w-[500px] justify-center px-2 m-auto">
          <SignInButtonGoogle />
          {/* <SignInButtonFacebook />
          <SignInButtonLinkedin /> */}
          <SignInButtonGithub />
        </div>
      </Container>
    </>
  );
}
