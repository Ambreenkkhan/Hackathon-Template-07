import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-[120px] flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 Frame">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-4 sm:space-x-8 w-full sm:w-auto">
        {/* Logo */}
        <Image src="/Logo.png" alt="logo" width={148} height={44} />

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full sm:w-auto max-w-[492px] h-[44px] border rounded-full px-3">
          <Image src="/Search.png" alt="Search" width={20} height={20} className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-1 bg-transparent border-none outline-none text-sm px-2"
          />
          <Image src="/filter.png" alt="Filter" width={20} height={20} className="w-5 h-5" />
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
        <button>
          <Image src="/Like.png" width={32} height={32} alt="Heart" />
        </button>
        <button>
          <Image
            src="/Notification.png"
            width={32}
            height={32}
            alt="Notification"
          />
        </button>
        <button>
          <Image src="/Settings.png" width={32} height={32} alt="Setting" />
        </button>
        <button>
          <Image
            src="/profile.png"
            width={32}
            height={32}
            alt="profile"
            className="rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
