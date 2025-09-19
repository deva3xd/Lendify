import { Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/layouts/AuthLayout";

const Login = () => {
  const { data, setData, post, errors } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("login.store"));
  };

  return (
    <AuthLayout title="Login">
      <div className="min-h-screen flex justify-center items-center">
        <fieldset className="w-1/3 h-96 flex flex-col justify-center fieldset border-base-300 rounded-box w-xs border p-4 bg-[#18181b]">
          <legend className="fieldset-legend text-sm">
            Lendify
          </legend>
          <span className="text-2xl font-bold text-center">
            LOGIN
          </span>
          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="input w-full my-1 bg-[#232326] focus:outline-[#e17100] focus:border-none"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <label className="label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              minLength={8}
              className="input w-full my-1 bg-[#232326] focus:outline-[#e17100] focus:border-none"
              required
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            <button className="btn w-full bg-[#e17100] hover:bg-[#e17100]/85 mt-4">
              Submit
            </button>
          </form>
          <span className="flex justify-end gap-1">
            Don't have an account?{" "}
            <Link
              href={route("register")}
              className="hover:underline"
            >
              Register
            </Link>
          </span>
        </fieldset>
      </div>
    </AuthLayout>
  );
};

export default Login;
