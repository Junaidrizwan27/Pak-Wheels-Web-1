import Link from "next/link"
export default function Footer() {
  return (<nav>
    <ul className="flex-row h-12 bg-black items-center text-center justify-center text-white gap-20 p-3 m-3">
    <div>
        <ul className="flex items-end justify-end gap-3 mr-200  ">
        <li><Link href="Urdu">Terms</Link></li>
        <li><Link href="Sign Up">Contact us</Link></li>
        </ul>
        </div>
    </ul>
  </nav>
  );
}