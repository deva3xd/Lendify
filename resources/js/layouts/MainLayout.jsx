import { Head } from "@inertiajs/react";
import clsx from "clsx";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children, title, className, ...rest }) {
  return (
    <>
      <Head title={title} />
      <Navbar />
      <main className={clsx("max-w-screen-2xl mx-auto min-h-screen", className)} {...rest}>
        {children}
      </main>
    </>
  );
}