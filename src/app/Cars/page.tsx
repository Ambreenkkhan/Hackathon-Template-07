import React from "react";
import Image from "next/image";
import Card from "@/app/Components/Card";
import HeartButton from "@/app/Components/Heart";
import Rentnow from "@/app/Components/RentBtn";
import Sidebar from "../Components/Sidebar";
const Cars = () => {
  return (
    <div className="flex Frame bg-[f6f7f9]">
      <div>
        <Sidebar />
      </div>
      <div>
        <div>
          <div className="flex gap-6 p-6">
            {/* Left Section - Images */}
            <div className="flex flex-col gap-4">
              {/* Main Image Section */}
              <div className="bg-[url('/blue.png')] bg-cover bg-center w-[492px] h-[360px] flex flex-col border rounded-md items-start justify-center p-6">
                <h1 className="text-2xl font-semibold mb-2">
                  Welcome to Our Site!
                </h1>
                <p className="text-sm mb-4">Discover the best cars.</p>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/gtr.png"
                    alt="Car view"
                    width={380}
                    height={120}
                  />
                </div>
              </div>

              {/* Thumbnail Images Section */}
              <div className="flex gap-6">
                <div
                  className="flex items-center border rounded-md"
                  style={{ backgroundImage: "url(/blue.png)" }}
                >
                  <Image
                    src="/gtr.png"
                    alt="Car view"
                    width={148}
                    height={124}
                  />
                </div>
                <Image
                  src="/interior1.png"
                  alt="Interior 1"
                  width={148}
                  height={124}
                  className="border rounded-md"
                />
                <Image
                  src="/interior2.png"
                  alt="Interior 2"
                  width={148}
                  height={124}
                  className="border rounded-md"
                />
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="flex flex-col justify-between w-[492px] h-[508px] border rounded-md p-6">
              {/* Title and Rating */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-xl font-semibold">Nissan GTR</h1>
                  <Image
                    src="/reviews.png"
                    alt="Review"
                    width={220}
                    height={24}
                  />
                </div>
                {/* <HeartButton /> */}
                <HeartButton />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-4">
                NISMO has become the embodiment of NISSAN&apos;s outstanding
                performance, inspired by the most unforgiving proving ground the
                world has ever seen.
              </p>

              {/* Specifications */}
              <div className="flex flex-wrap justify-between gap-4 text-sm mb-4">
                <div className="flex flex-col">
                  <h1 className="text-base font-medium">Type Car</h1>
                  <p className="text-gray-600">Sport</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base font-medium">Capacity:</h1>
                  <p className="text-gray-600">2 Person</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base font-medium">Steering:</h1>
                  <p className="text-gray-600">Manual</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base font-medium">Gasoline:</h1>
                  <p className="text-gray-600">70L</p>
                </div>
              </div>

              {/* Price and Rent Now */}
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-lg font-semibold">$80/day</h1>
                <Rentnow />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row-start-3 row-end-5 col-start-4 col-end-4 w-[1016px] h-[452px]">
            <Image src="/UReviews.png" alt="review" width={1016} height={452} />
          </div>

          <div className="flex p-7 gap-8 w-[1016px] h-[448px] ">
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
          </div>

          <div className=" flex p-7  gap-8 w-[1016px] h-[448px]">
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
            <Card
              title="Nissan GTR"
              type="Crossover"
              fuel="40l"
              transmission="Automatic"
              image="/gtr.png"
              seats={5}
              price="$569.000"
              description="lorem ipsum dolor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
