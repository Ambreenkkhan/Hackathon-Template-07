import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-[1440px] h-[124px] flex items-center justify-between px-6 Frame ">
      <div className="flex items-center space-x-8 ml-[60px]">
        {/* Logo */}
        <Image src="/Logo.png" alt="logo" width={148} height={44} />
        {/* Search Bar */}
        <div className="flex items-center gap-2 w-[480px] max-w-[492px] h-[44px] border rounded-full px-3 mt-4 md:mt-0 md:flex-1 md:mr-56">
          <img src="/Search.png" alt="Search" className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search something here"
            className="flex-1 bg-transparent border-none outline-none text-sm px-2"
          />
          <img src="/filter.png" alt="Filter" className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
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
            className="w-[44px] h-44px rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
