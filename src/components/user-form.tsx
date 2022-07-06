import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../models/User";
import type { User } from "../models/User";

const UserForm = ({
  signin,
  onSignin,
  onSignup,
}: {
  signin: boolean;
  onSignin?(email: string, password: string): void;
  onSignup?(email: string, password: string): void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(UserSchema.omit({ id: true })),
  });

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="w-full" id="email" type="email" {...register("email")} />
        {errors.email && <span role="alert" className="text-red-500 text-xs italic">{errors.email.message}</span>}
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="w-full" id="password" type="password" {...register("password")} />
        {errors.password && <span role="alert" className="text-red-500 text-xs italic">{errors.password.message}</span>}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        submit
      </button>
    </form>
  );
};

export default UserForm;
