import { useMutation } from "react-query";
import { logEvent } from "firebase/analytics";

import UserForm from "../components/user-form";
import { useAuth } from "../hooks/use-auth";
import type { User } from "../models/User";

const Signin = () => {
  const { mutate: signin, data: user, error } = useSignin();

  return (
    <div className="flex flex-col gap-4">
      <UserForm
        signin={true}
        onSignin={(email, password) => signin({ email, password })}
      />
      {user && <span role="alert">{user.email} successfully signed in!</span>}
      {error && <span role="alert">{(error as Error).message}</span>}
    </div>
  );
};

function useSignin() {
  const { signin } = useAuth();
  return useMutation(
    ({ email, password }: Omit<User, "id">) => {
      return signin(email, password);
    },
    {
      onSuccess() {
        logEvent(window.analytics, "signin", {
          method: "firebase auth",
        });
      },
    }
  );
}

export default Signin;
