import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-wrap items-center justify-between gap-8 px-4 sm:px-6 py-8 Frame">
      
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Brand Section */}
        <div className="brand flex flex-col space-y-4 w-full lg:w-1/3">
          <h1 className="text-blue-600 text-2xl sm:text-3xl font-semibold text-center lg:text-left">
            MORENT
          </h1>
          <p className="text-gray-600 text-sm sm:text-base text-center lg:text-left max-w-md">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Links Section */}
        <div className="links flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-8 w-full lg:w-2/3">
          <div className="link-group flex flex-col items-center lg:items-start">
            <h2 className="font-semibold text-lg sm:text-xl">About</h2>
            <ul className="space-y-2 text-sm mt-2 text-center lg:text-left">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relations</li>
            </ul>
          </div>
          <div className="link-group flex flex-col items-center lg:items-start">
            <h2 className="font-semibold text-lg sm:text-xl">Community</h2>
            <ul className="space-y-2 text-sm mt-2 text-center lg:text-left">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite Friends</li>
            </ul>
          </div>
          <div className="link-group flex flex-col items-center lg:items-start">
            <h2 className="font-semibold text-lg sm:text-xl">Socials</h2>
            <ul className="space-y-2 text-sm mt-2 text-center lg:text-left">
              <li>
                <Link href="https://www.discord.com">Discord</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.facebook.com">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.twitter.com">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t w-full border-gray-300"></div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-center lg:text-left w-full lg:w-auto">
          &copy; 2022 MORENT. All rights reserved.
        </p>
        <div className="policies flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 justify-center lg:justify-end w-full lg:w-auto">
          <p className="font-bold text-sm sm:text-base">Privacy Policy</p>
          <p className="font-bold text-sm sm:text-base">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}