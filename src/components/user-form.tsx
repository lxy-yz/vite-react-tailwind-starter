import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../models/User";
import type { User } from "../models/User";

const UserForm: React.FC<{
  signin: boolean;
  onSignin?(email: string, password: string): void;
  onSignup?(email: string, password: string): void;
}> = ({ signin, onSignin, onSignup }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema.omit({ id: true })),
  });

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(({ email, password }) => {
          if (signin) {
            onSignin?.(email, password);
          } else {
            onSignup?.(email, password);
          }
        })(e);
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>
      <button className="rounded-full px-4 py-1 border-2 border-sky-500 text-sky-500 font-semibold">
        submit
      </button>
    </form>
  );
};

export default UserForm;
