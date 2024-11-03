import Link from "next/link"
export default function Navbar() {
  return (<nav>
    <div>
    <div className="flex  items-left ml-10 justify-left text-white font-bold">
        <ul className="flex items-center gap-1 text-center justify-center text-white font-bold ">
        </ul>
        </div>
        <div>
        <ul className="flex-row h-12 bg-black items-center text-center justify-center text-white gap-20 p-3 m-3">
    <div>
        <ul className="flex items-center justify-center gap-12 mr-200  ">
        <span><img className="w-100 h-8"  src="https://static.pakwheels.com/2016/09/PakWheels-Logo-Blue-Tagline.png" alt="loading" /></span>
        <li><Link href="Urdu">Used Cars</Link></li>
        <li><Link href="Sign Up">New Cars</Link></li>
        <li><Link href="Urdu">Auto Store</Link></li>
        <li><Link href="Sign Up">Videos</Link></li>
        <li><Link href="Sign Up">Forum</Link></li>
        <li><Link href="Urdu">Blog</Link></li>
        <li><Link href="Sign Up">More</Link></li>
        </ul>
        </div>
    </ul>
        </div>
        <div>
      <ul className="text-white font-bold flex justify-center gap-20 ">
        <li>Used Cars</li>
        <li>New Cars</li>
        <li>Bikes</li>
        <li>Auto Store</li>
        <li>Videos</li>
        <li>Forums</li>
        <li>Blog</li>
        <li>More</li>
      </ul></div>
      <div>
      <img className="w-screen h-80" src="https://content.toyota.com.ph/uploads/articles/535/003_535_1691747151757_000.webp" />
      </div></div>
  </nav>
  );
}