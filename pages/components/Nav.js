import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="flex flex-grow p-2 bg-secondary h-16 text-text">
      <ul className="flex">
        <Link href="/" passHref>
          <li className="p-2 cursor-pointer">
            <p>Books</p>
            {pathname === "/" && <div className="flex w-100 h-px bg-green" />}
          </li>
        </Link>
        <Link href="/movies" passHref>
          <li className="p-2 cursor-pointer">
            <p>Movies</p>
            {pathname === "/movies" && (
              <div className="flex w-100 h-px bg-green" />
            )}
          </li>
        </Link>
        <Link href="/characters" passHref>
          <li className="p-2 cursor-pointer">
            <p>Characters</p>
            {pathname === "/characters" && (
              <div className="flex w-100 h-px bg-green" />
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
}
