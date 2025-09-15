import { useForm } from "@inertiajs/react";

const Navbar = () => {
  const { post } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault(e);

    post(route("logout"));
  }

  return (
    <nav className="navbar bg-[#18181b] shadow-sm flex justify-between px-8 w-screen">
      <span className="text-xl font-semibold bg-inherit">LENDIFY</span>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="text-sm font-semibold text-red-500 hover:underline bg-inherit">Logout</button>
      </form>
    </nav>
  )
}

export default Navbar