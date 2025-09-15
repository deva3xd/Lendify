import { Link, useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";

const Register = () => {
  const { data, setData, post, errors } = useForm({
    name: "",
    email: "",
    password: "",
    role: "borrower",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("register.store"));
  };

  return (
    <AuthLayout title="Register">
      <div className="min-h-screen flex justify-center items-center">
        <fieldset className="w-1/3 h-96 flex flex-col justify-center fieldset border-base-300 rounded-box w-xs border p-4 bg-[#18181b]">
          <legend className="fieldset-legend text-sm">
            Lendify
          </legend>
          <span className="text-2xl font-bold text-center">
            REGISTER
          </span>
          <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="input w-full my-1 bg-[#232326] focus:outline-[#e17100] focus:border-none"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
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
            <button
              type="submit"
              className="btn w-full bg-[#e17100] hover:bg-[#e17100]/85 mt-4"
            >
              Submit
            </button>
          </form>
          <span className="flex justify-end gap-1">
            Already have an account?{" "}
            <Link
              href={route("login")}
              className="hover:underline"
            >
              Login
            </Link>
          </span>
        </fieldset>
      </div>
    </AuthLayout>
  );
};

export default Register;
