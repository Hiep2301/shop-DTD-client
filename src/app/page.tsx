import ButtonRedirect from "@/app/components/ButtonRedirect";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const isAuth = false;
  if (!isAuth) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
        <li>
          <ButtonRedirect />
        </li>
      </ul>
    </main>
  );
}
