import { useMutation } from "react-query";
import { logEvent } from "firebase/analytics";

import UserForm from "../components/user-form";
import { useAuth, useRedirectWhenSignedIn } from "../hooks/use-auth";
import type { User } from "../models/User";
import Nav from "../components/nav";

const Signup = () => {
  useRedirectWhenSignedIn()

  const { mutate: signup, data: user, error } = useSignup();

  return (
    <div>
      <header className="shadow">
        <Nav />
      </header>

      <div className="mx-auto max-w-sm">
        <div className="mt-32 flex flex-col gap-4">
          <UserForm
            signin={false}
            onSignup={(email, password) => signup({ email, password })}
          />
          {user && <span role="alert">{user.email} successfully signed up!</span>}
          {error && <span role="alert">{(error as Error).message}</span>}
        </div>
      </div>
    </div>
  );
};

function useSignup() {
  const { signup } = useAuth();
  return useMutation(
    ({ email, password }: Omit<User, "id">) => {
      return signup(email, password);
    },
    {
      onSuccess: () => {
        logEvent(window.analytics, "signup", {
          method: "firebase auth",
        });
      },
    }
  );
}

export default Signup;
