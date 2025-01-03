"use client";
import Link from "next/link";
import Image from "next/image";
import HeartButton from "./Heart";
import Rentnow from "./RentBtn";

interface CardProps {
  title: string;
  type: string;
  fuel: string;
  transmission: string;
  image: string;
  seats: number;
  price: string;
  description: string;
}

export default function Card({
  title,
  type,
  fuel,
  transmission,
  image,
  seats,
  price,
  description,
}: CardProps) {
  return (
    <div className="bg-[#ffffff] w-[280px] h-[350x] radius-[10px] mr-5 p-4 gap-2 ">
      <Link href={`/Cars`}>
        <div className="flex justify-end">
          <HeartButton />
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm">{type}</p>
          </div>
        </div>

        {/* Centering the Image */}
        <div className="flex justify-center items-center mt-[80px]">
          <Image
            src={image} // Path to the image in the 'public' folder
            alt="Car image" // Alternative text for accessibility
            width={204} // Width of the image (in pixels)
            height={64} // Height of the image (in pixels)
            blurDataURL="/image/blur-placeholder.jpg" // Optional low-quality image for placeholder
            placeholder="blur" // Enable blur placeholder
          />
        </div>

        {/* Fuel, Transmission, Capacity - Positioned Horizontally */}
        <div className="flex gap-4 justify-center text-sm mt-[50px]">
          <p className="flex items-center mr-4">
            <Image
              src="/fuel.png" // Path to the image in the 'public' folder
              alt="Fuel icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {fuel}
          </p>
          <p className="flex items-center">
            <Image
              src="/transmission.png" // Path to the image in the 'public' folder
              alt="Transmission icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {transmission}
          </p>
          <p className="flex items-center">
            <Image
              src="/Capacity.png" // Path to the image in the 'public' folder
              alt="Capacity icon" // Alternative text for accessibility
              width={24} // Width of the image (in pixels)
              height={24}
            />{" "}
            {seats}
          </p>
        </div>

        {/* Price and Rent Now */}
        <div className="flex justify-between items-center mt-[30px]">
          <h1 className="text-lg">{price}</h1>
          <Rentnow />
        </div>
      </Link>
    </div>
  );
}
