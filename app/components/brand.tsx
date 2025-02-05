import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

// Define the interface for brand items
interface BrandItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Brand = () => {
  const brandItems: BrandItem[] = [
    {
      icon: <TbTruckDelivery size={30} className="text-[#2A254B]" />,
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.'
    },
    {
      icon: <IoIosCheckmarkCircleOutline size={30} className="text-[#2A254B]" />,
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.'
    },
    {
      icon: <MdOutlinePriceChange size={30} className="text-[#2A254B]" />,
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won&rsquo;t find better prices anywhere.'
    },
    {
      icon: <LuSprout size={30} className="text-[#2A254B]" />,
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.'
    },
    // Add any additional items here if needed
  ];

  return (
    <section>
      <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
        {/* Title */}
        <h1 className="text-center text-xl md:text-2xl font-semibold">
          What makes our brand different
        </h1>

        {/* Features */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
          {brandItems.map((item, index) => (
            <div key={index} className="flex flex-col md:w-[25%] p-4 rounded-lg">
              {item.icon}
              <p className="py-4 font-semibold">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
