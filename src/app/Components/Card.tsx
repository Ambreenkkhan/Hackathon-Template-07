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
    <div className="bg-white w-full sm:w-[280px] rounded-lg shadow-md p-4 gap-2 mb-6">
      <Link href={`/Cars`}>
        {/* Heart Button */}
        <div className="flex justify-end">
          <HeartButton />
        </div>

        {/* Title and Type */}
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="text-base sm:text-lg font-semibold">{title}</h1>
            <p className="text-sm text-gray-600">{type}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center my-4">
          <Image
            src={image}
            alt="Car image"
            width={204}
            height={64}
            className="max-w-full object-contain"
            blurDataURL="/image/blur-placeholder.jpg"
            placeholder="blur"
          />
        </div>

        {/* Specifications */}
        <div className="flex flex-wrap gap-4 justify-center text-sm mt-4">
          <p className="flex items-center gap-2">
            <Image src="/fuel.png" alt="Fuel icon" width={20} height={20} />{" "}
            {fuel}
          </p>
          <p className="flex items-center gap-2">
            <Image src="/transmission.png" alt="Transmission icon" width={20} height={20} />{" "}
            {transmission}
          </p>
          <p className="flex items-center gap-2">
            <Image src="/Capacity.png" alt="Capacity icon" width={20} height={20} />{" "}
            {seats}
          </p>
        </div>

        {/* Price and Rent Now */}
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-base sm:text-lg font-semibold">{price}</h1>
          <Rentnow />
        </div>
      </Link>
    </div>
  );
}
