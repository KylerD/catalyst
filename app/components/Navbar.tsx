import Link from "next/link";
import { BeakerIcon } from "@heroicons/react/24/solid";

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          <BeakerIcon className="w-6 h-6" /> Kainos Catalyst Labs
        </Link>
      </div>
    </div>
  );
}
