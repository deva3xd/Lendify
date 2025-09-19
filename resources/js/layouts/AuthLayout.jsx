import { Head } from "@inertiajs/react";
import clsx from "clsx";

export default function AuthLayout({ children, title, className, ...rest }) {
  return (
    <>
      <Head title={title} />
      <main className={clsx("max-w-screen-2xl mx-auto min-h-screen", className)} {...rest}>
        {children}
      </main>
    </>
  );
}