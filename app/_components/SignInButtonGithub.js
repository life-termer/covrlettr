import { signInActionGit } from "../_lib/actions";
import { Button } from "./ui/button";

function SignInButtonGithub() {
  return (
    <form action={signInActionGit} className="w-full">
      <Button
        className="rounded-xl border bg-card text-card-foreground shadow py-10 w-full justify-start"
        variant="secondary"
        size="lg"
      >
        <img
          src="https://authjs.dev/img/providers/github.svg"
          alt="GitHub logo"
          height="24"
          width="24"
        />
        <span className="ms-3 text-wrap">Continue with GitHub</span>
      </Button>
    </form>
  );
}

export default SignInButtonGithub;
