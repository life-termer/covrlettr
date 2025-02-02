import { Button } from "./ui/button";

function SignInButtonFacebook() {
  return (
    <form className="w-full">
      <Button
        className="rounded-xl border bg-card text-card-foreground shadow py-10 w-full justify-start"
        variant="secondary"
        size="lg"
        disabled
      >
        <img
          src="https://authjs.dev/img/providers/facebook.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span className="ms-3 text-wrap">Continue with Facebook</span>
      </Button>
    </form>
  );
}

export default SignInButtonFacebook;
