import logo from "../../assets/logo (1).webp";
import projectname from "../../assets/FASF.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center sm:flex-row sm:justify-between px-4 sm:px-6 py-3 h-auto sm:h-[142px]">
        {/* Mobile: Centered Logo */}
        <div className="sm:hidden flex justify-center w-full">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] w-auto object-contain"
          />
        </div>

        {/* Mobile: Centered Project Name */}
        <div className="sm:hidden flex justify-center w-full mt-2">
          <img
            src={projectname}
            alt="Project Name"
            className="h-[40px] w-auto object-contain"
          />
        </div>

        {/* Mobile: Centered Phone Number */}
        <div className="flex sm:hidden items-center justify-center text-black font-semibold text-sm mt-2">
          <span className="text-base mr-1">📞</span>
          <a
            href="tel:+918884735735"
            className="text-sm underline hover:text-blue-800"
          >
            +91-8884 735 735
          </a>
        </div>

        {/* Desktop: Left Logo */}
        <div className="hidden sm:flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[80px] w-auto object-contain"
          />
        </div>

        {/* Desktop: Centered Project Name */}
        <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
          <img
            src={projectname}
            alt="Project Name"
            className="h-[60px] w-auto object-contain"
          />
        </div>

        {/* Desktop: Right Phone */}
        <div className="hidden sm:flex items-center text-black font-semibold text-base md:text-lg">
          <span className="text-lg mr-1">📞</span>
          <a
            href="tel:+918884735735"
            className="hover:underline hover:text-blue-800"
          >
            +91-8884 735 735
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;