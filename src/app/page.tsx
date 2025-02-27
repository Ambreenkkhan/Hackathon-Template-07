import Link from "next/link"
import Card from "./Components/Card";
import Hero from "./Components/Hero";

export default function Home() {
  const carData = [
    {
      id: 1,
      title: "Koenigsegg",
      type: "Sports Car",
      fuel: "50L",
      transmission: "Manual",
      image: "/koijesing.png",
      seats: 2,
      price: "$1500/day",
      description:
        "The Koenigsegg is a high-performance sports car, known for its incredible speed and cutting-edge design. \nPerfect for thrill-seekers who crave an adrenaline rush. \nWith its aerodynamic features and aggressive stance, it dominates the road. \nEngineered to break records, this car delivers heart-pounding acceleration. \nEvery detail has been designed for precision handling and speed. \nThe interior offers luxury, designed for the ultimate driving experience. \nEnjoy the thrill of driving a true masterpiece. \nKoenigsegg is not just a car; it's an experience.",
    },
    {
      id: 2,
      title: "Nissan GT-R",
      type: "Sports Car",
      fuel: "60L",
      transmission: "Automatic",
      image: "/gtr.png",
      seats: 2,
      price: "$1200/day",
      description:
        "The Nissan GT-R is a masterpiece of engineering, delivering jaw-dropping acceleration. \nWith precision handling, it's an icon among car enthusiasts. \nIts twin-turbocharged engine ensures exceptional speed and power. \nThe GT-R offers an unforgettably thrilling driving experience. \nA perfect blend of aggressive styling and technical excellence. \nOn the track or on the road, the GT-R dominates. \nEvery ride is a testament to Nissan's commitment to performance. \nExperience the legacy of one of the world’s most legendary sports cars.",
    },
    {
      id: 3,
      title: "ROLLS ROYCE",
      type: "Luxury Car",
      fuel: "80L",
      transmission: "Automatic",
      image: "/Rolls-Royce.png",
      seats: 4,
      price: "$5000/day",
      description:
        "Experience unparalleled luxury with the Rolls Royce, featuring exquisite craftsmanship. \nIts elegant design speaks volumes about sophistication and class. \nWith advanced technology, every journey is made smooth and luxurious. \nStep inside and feel the epitome of comfort and style. \nThe smooth, quiet ride makes it the perfect car for any occasion. \nIdeal for those who appreciate beauty and power in perfect harmony. \nEvery detail, from the upholstery to the features, is refined. \nRolls Royce offers a driving experience beyond compare.",
    },
    {
      id: 4,
      title: "Nissan GT-R",
      type: "Sports Car",
      fuel: "60L",
      transmission: "Automatic",
      image: "/gtr.png",
      seats: 2,
      price: "$1200/day",
      description:
        "The Nissan GT-R is a masterpiece of engineering, delivering jaw-dropping acceleration. \nWith precision handling, it's an icon among car enthusiasts. \nIts twin-turbocharged engine ensures exceptional speed and power. \nThe GT-R offers an unforgettably thrilling driving experience. \nA perfect blend of aggressive styling and technical excellence. \nOn the track or on the road, the GT-R dominates. \nEvery ride is a testament to Nissan's commitment to performance. \nExperience the legacy of one of the world’s most legendary sports cars.",
    },
  ];

  const carData1 = [
    {
      id: 1,
      title: "All New Rush",
      type: "Sports Car",
      fuel: "50L",
      transmission: "Manual",
      image: "/koijesing.png",
      seats: 2,
      price: "$1500/day",
      description:
        "The Koenigsegg is a high-performance sports car, known for its incredible speed and cutting-edge design. \nPerfect for thrill-seekers who crave an adrenaline rush. \nWith its aerodynamic features and aggressive stance, it dominates the road. \nEngineered to break records, this car delivers heart-pounding acceleration. \nEvery detail has been designed for precision handling and speed. \nThe interior offers luxury, designed for the ultimate driving experience. \nEnjoy the thrill of driving a true masterpiece. \nKoenigsegg is not just a car; it's an experience.",
    },
    {
      id: 2,
      title: "Nissan GT-R",
      type: "Sports Car",
      fuel: "60L",
      transmission: "Automatic",
      image: "/gtr.png",
      seats: 2,
      price: "$1200/day",
      description:
        "The Nissan GT-R is a masterpiece of engineering, delivering jaw-dropping acceleration. \nWith precision handling, it's an icon among car enthusiasts. \nIts twin-turbocharged engine ensures exceptional speed and power. \nThe GT-R offers an unforgettably thrilling driving experience. \nA perfect blend of aggressive styling and technical excellence. \nOn the track or on the road, the GT-R dominates. \nEvery ride is a testament to Nissan's commitment to performance. \nExperience the legacy of one of the world’s most legendary sports cars.",
    },
    {
      id: 3,
      title: "ROLLS ROYCE",
      type: "Luxury Car",
      fuel: "80L",
      transmission: "Automatic",
      image: "/Rolls-Royce.png",
      seats: 4,
      price: "$5000/day",
      description:
        "Experience unparalleled luxury with the Rolls Royce, featuring exquisite craftsmanship. \nIts elegant design speaks volumes about sophistication and class. \nWith advanced technology, every journey is made smooth and luxurious. \nStep inside and feel the epitome of comfort and style. \nThe smooth, quiet ride makes it the perfect car for any occasion. \nIdeal for those who appreciate beauty and power in perfect harmony. \nEvery detail, from the upholstery to the features, is refined. \nRolls Royce offers a driving experience beyond compare.",
    },
    {
      id: 4,
      title: "Nissan GT-R",
      type: "Sports Car",
      fuel: "60L",
      transmission: "Automatic",
      image: "/gtr.png",
      seats: 2,
      price: "$1200/day",
      description:
        "The Nissan GT-R is a masterpiece of engineering, delivering jaw-dropping acceleration. \nWith precision handling, it's an icon among car enthusiasts. \nIts twin-turbocharged engine ensures exceptional speed and power. \nThe GT-R offers an unforgettably thrilling driving experience. \nA perfect blend of aggressive styling and technical excellence. \nOn the track or on the road, the GT-R dominates. \nEvery ride is a testament to Nissan's commitment to performance. \nExperience the legacy of one of the world’s most legendary sports cars.",
    },
    {
      id: 5,
      title: "CR-V",
      type: "SUV",
      fuel: "60L",
      transmission: "Automatic",
      image: "/crv.png",
      seats: 5,
      price: "$400/day",
      description:
        "The CR-V combines modern design with advanced technology, offering a comfortable ride. \nWith its spacious interior, it’s perfect for long drives or daily commuting. \nEfficient fuel economy ensures a practical, cost-effective choice. \nThe advanced safety features provide peace of mind for every journey. \nStylish and reliable, it’s a standout in the SUV category. \nIts versatile design accommodates all kinds of trips, from family vacations to city driving. \nThe CR-V ensures a smooth, enjoyable driving experience. \nHonda has crafted a vehicle that’s both practical and fun to drive.",
    },
    {
      id: 6,
      title: "ALL NEW TRIOS",
      type: "Crossover",
      fuel: "45L",
      transmission: "Manual",
      image: "/trios.png",
      seats: 4,
      price: "$250/day",
      description:
        "Compact yet powerful, the All-New Trios is a crossover built for urban adventures. \nStylish, efficient, and easy to maneuver, it's perfect for the city. \nWith excellent fuel economy, it’s ideal for those who want to save on gas. \nIts compact size doesn’t compromise on interior comfort and space. \nThe modern design makes a statement wherever you go. \nEnjoy advanced technology and smooth handling for every drive. \nIt’s the ideal vehicle for navigating tight city streets with ease. \nThe Trios offers practicality, style, and a fun driving experience.",
    },
    {
      id: 7,
      title: "MG ZX EXCLUSIVE",
      type: "Electric SUV",
      fuel: "0L",
      transmission: "Automatic",
      image: "/mgzx.png",
      seats: 5,
      price: "$600/day",
      description:
        "The MG ZX Exclusive is an all-electric SUV offering a clean, quiet ride. \nPerfect for eco-conscious drivers seeking innovation and style. \nWith zero emissions, it’s a step toward a greener future. \nThe MG ZX combines luxury with cutting-edge electric technology. \nIt offers a smooth, quiet ride, free from the noise of traditional engines. \nEnjoy advanced features that enhance the driving experience. \nPerfect for long drives, city commuting, and weekend getaways. \nThe MG ZX is a great choice for those looking for sustainability without compromise.",
    },
    {
      id: 8,
      title: "NEWMG Z5",
      type: "Sedan",
      fuel: "50L",
      transmission: "Manual",
      image: "/mgz5.png",
      seats: 4,
      price: "$350/day",
      description:
        "The NewMG Z5 is a sleek sedan offering a smooth, comfortable drive. \nPerfect for everyday commuting or long-distance travel. \nWith a stylish exterior and modern interior, it’s a head-turner. \nEnjoy the perfect balance of affordability and sophistication. \nIts advanced safety features ensure you’re protected on every drive. \nThe Z5 offers a comfortable ride with spacious seating for all. \nEfficient fuel economy makes it a cost-effective choice. \nA sedan that combines elegance with practicality.",
    },
  ];
return (
  <div className="Frame bg-[#f6f7f9]">
    {/* Hero Section */}
    <Hero />

    {/* Popular Cars Section */}
    <div className="">
      <div className="flex ml-4 sm:ml-8 md:ml-[80px] justify-start">
        <h1 className="text-xl text-gray-400 my-4">Popular Car</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4 sm:mx-8">
        {carData.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            type={car.type}
            fuel={car.fuel}
            transmission={car.transmission}
            image={car.image}
            seats={car.seats}
            price={car.price}
            description={car.description}
          />
        ))}
      </div>
    </div>

    {/* Recommended Cars Section */}
    <div className="">
      <div className="flex ml-4 sm:ml-8 md:ml-[80px] justify-start">
        <h1 className="text-xl text-gray-400 my-4">Recommended Cars</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-4 sm:mx-8">
        {carData1.map((car) => (
          <Card
            key={car.id}
            title={car.title}
            type={car.type}
            fuel={car.fuel}
            transmission={car.transmission}
            image={car.image}
            seats={car.seats}
            price={car.price}
            description={car.description}
          />
        ))}
      </div>
    </div>

    <div className="flex justify-center mt-[30px]">
      <Link href="/ShowMore">
        <button className="bg-blue-600 w-[156px] h-[44px] mt-[50px] text-white border rounded-md">
          Show More Cars
        </button>
      </Link>
    </div>
  </div>
);
}
