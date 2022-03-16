import { useMutation } from "react-query";
import UserForm from "../components/user-form";
import { useAuth } from "../hooks/use-auth";
import type { User } from "../models/User";

const Signup = () => {
  const { mutate: signup, data: user, error } = useSignup();

  return (
    <div className="flex flex-col gap-4">
      <UserForm
        signin={false}
        onSignup={(email, password) => signup({ email, password })}
      />
      {user && <span role="alert">{user.email} successfully signed up!</span>}
      {error && <span role="alert">{(error as Error).message}</span>}
    </div>
  );
};

function useSignup() {
  const { signup } = useAuth();
  return useMutation(({ email, password }: Omit<User, "id">) => {
    return signup(email, password);
  });
}

export default Signup;
