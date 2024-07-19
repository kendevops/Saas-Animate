import Image from "next/image";
import MenuIcon from "../../public/assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <section className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src="/assets/images/logosaas.png"
              alt="Saas Logo"
              width={48}
              height={48}
              className="h-12 w-12 relative"
            />
          </div>
          <div className="border-2 border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-60 hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 border rounded-lg">
              Get for Free
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};