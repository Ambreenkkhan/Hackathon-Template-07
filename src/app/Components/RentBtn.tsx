import React from "react";
import Link from "next/link";
import Image from "next/image";

const Rentnow = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Link href="/Form">
        <div className="w-[116px] h-[44px] sm:w-[140px] sm:h-[50px] border rounded-md">
          <Image
            src="/Button Rental.png"
            alt="Rent Now"
            width={116}
            height={44}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default Rentnow;
