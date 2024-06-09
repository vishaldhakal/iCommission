import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-gradient-to-b to-blue-50 from-blue-100 sticky top-0 z-[99999]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <img className="w-24 h-auto" src="/logo.png" alt="" />
            </Link>
          </div>

          <div className="ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              href="/"
              title=""
              className="hidden lg:inline text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              href="/#why-us"
              title=""
              className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              Why us{" "}
            </Link>

            <Link
              href="/faq"
              title=""
              className="mx-4 md:mx-0 text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
            >
              {" "}
              FAQ{" "}
            </Link>

            <Link
              href="#contact"
              title=""
              className="inline-flex items-center justify-center px-2 md:px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              {" "}
              Contact Now{" "}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
