"use client";
import Image from "next/image";

import Link from "next/link";
interface Car {
  id: number;
  title: string;
  type: string;
  fuel: string;
  transmission: string;
  image: string;
  seats: number;
  price: string;
  description: string;
}

export default function Hero() {
  return (
   <>
       <div className="flex justify-evenly ">
       <div className="">
         <Image src="/pic1Hero.png" alt="AD-1" width={600} height={300} />
       </div>
       <div className="">
         <Image src="/pic2Hero.png" alt="AD-2" width={600} height={300} />
       </div>
     </div>

     <div className="flex justify-center items-center space-x-6 mx-auto mt-8">
       {/* First Card (Pick-Up) */}
       <div className="p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px]">
         {/* Header Section */}
         <div className="flex items-center space-x-2">
           <Image src="/mark.png" alt="point" width={16} height={16} />
           <h1 className="text-xl font-semibold">Pick-Up</h1>
         </div>


         <div className="space-y-4">
           <div className="flex items-center space-x-4">
             <div>
               <h1 className="font-medium">Location</h1>
               <p className="text-gray-500">Select Country</p>
             </div>
             <div className="bg-gray-950 h-[48px] w-[1px]"></div>
             <div>
               <h1 className="font-medium">Date</h1>
               <p className="text-gray-500">Select Date</p>
             </div>
             <div className="bg-gray-950 h-[48px] w-[1px]"></div>
             <div>
               <h1 className="font-medium">Time</h1>
               <p className="text-gray-500">Select time</p>
             </div>
           </div>
         </div>
       </div>


       <div className="flex items-center justify-center ">
         <button>
           <Image src="/Switch.png" alt="Switch" width={60} height={60} />
         </button>
       </div>


       <div className="bg-bg1 p-6 rounded-xl shadow-lg space-y-6 w-[520px] h-[132px]">
         {/* Header Section */}
         <div className="flex items-center space-x-2">
           <Image src="/mark.png" alt="point" width={16} height={16} />
           <h1 className="text-xl font-semibold">Drop-Off</h1>
         </div>


         <div className=" space-y-4">
           <div className="flex items-center space-x-4">
             <div>
               <h1 className="font-medium">Location</h1>
               <p className="text-gray-500">Select Country</p>
             </div>
             <div className="bg-gray-950 h-[48px] w-[1px]"></div>
             <div>
               <h1 className="font-medium">Date</h1>
               <p className="text-gray-500">Select Date</p>
             </div>
             <div className="bg-gray-950 h-[48px] w-[1px]"></div>
             <div>
               <h1 className="font-medium">Time</h1>
               <p className="text-gray-500">Select time</p>
             </div>
           </div>
         </div>
       </div>
     </div>
     </>
  );
}
