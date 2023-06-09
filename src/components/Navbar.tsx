import Link from "next/link";

interface NavbarProps {
  currentPage: string;
  isScrollBarInvisible?: boolean;
}

export default function Navbar({
  currentPage,
  isScrollBarInvisible,
}: NavbarProps) {
  return (
    <div className="fixed left-1/2 right-1/2 flex items-center justify-center top-[1.25rem] md:top-[1.89rem]">
      <div
        className={`flex justify-between rounded-full p-[0.26rem] backdrop-blur-lg bg-[#e8e5e4]/50 text-sm ${
          isScrollBarInvisible ? "2xl:mr-[1.09rem]" : ""
        }`}
      >
        <Link
          href="/"
          className={` rounded-full px-[1.8rem] py-[.615rem] ${
            currentPage === "home" ? "bg-white" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/profile"
          className={` rounded-full px-[1.8rem] py-[.615rem] ${
            currentPage === "profile" ? "bg-white" : ""
          }`}
        >
          Profile
        </Link>
        <Link
          href="/contact"
          className={` rounded-full px-[1.8rem] py-[.615rem] ${
            currentPage === "contact" ? "bg-white" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
