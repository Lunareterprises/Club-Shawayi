import React from "react";
import Image from "next/image";
import Button from "../commonUI/Buttons/Button";

function OfferList() {
  const products = [
    {
      id: 1,
      img: "/Images/Home/offerList1.png",
      name: ["Quater Shawayi + Ghee Rice", "Half Shawayi + Ghee Rice"],
      price: ["149/-", "249/-"],
      type: "ON TABLE",
      person: "1 PERSON",
    },
    {
      id: 2,
      img: "/Images/Home/offerList2.jpg",
      name: ["Half Shawayi + Ghee Rice", "Half Shawayi + Mandi Rice"],
      price: ["290/-", "330/-"],
      type: "IN PARCEL",
      person: "2 PERSON",
    },
    {
      id: 3,
      img: "/Images/Home/offerList2.jpg",
      name: ["Full Shawayi + Ghee Rice", "Full Shawayi + Mandi Rice"],
      price: ["580/-", "660/-"],
      type: "IN PARCEL",
      person: "2 PERSON",
    },
  ];

  const products2 = [
    {
      id: 1,
      img: "/Images/Home/offerList3.jpg",
      name: "Shawayi",
      items: ["Quater", "Half ", "Full"],
      price: ["110", "220", "420"],
    },
    {
      id: 2,
      img: "/Images/Home/offerList4.png",
      name: "Mandi Rice",
      items: ["Quater", "Half ", "Full"],
      price: ["80", "160", "320"],
    },
    {
      id: 3,
      img: "/Images/Home/offerList5.jpg",
      name: "Ghee Rice",
      items: ["Quater", "Half ", "Full"],
      price: ["60", "120", "240"],
    },
  ];

  return (
    <div className="relative py-5 px-4 md:px-8 lg:px-8 xl:px-64">
      {/* Heading Section */}
      <div className="py-8 text-center">
        <Image
          src="/Images/Home/Group18.png"
          className="absolute bottom-0 left-10 sm:left-20 md:left-10 lg:left-20 w-16 sm:w-32 md:w-52 "
          alt="vector4"
          width={100}
          height={100}
        />
        <h2 className="text-lg  font-bold text-gray-100">
          Combo Offers: Delight in Every Bite
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Savor the magic of C Club Shawayi’s specially crafted combo offers
        </p>

        {/* First Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-24 mt-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-100 shadow-lg p-4 rounded-lg bg-black">
              <div className="flex justify-between text-xs">
                <div className="border px-2 py-1">{product.person}</div>
                <div
                  className={`border px-2 py-1 ${
                    product.type === "ON TABLE"
                      ? "text-red-500 border-red-600"
                      : "text-yellow-500 border-yellow-600"
                  }`}
                >
                  {product.type}
                </div>
              </div>
              <Image
                src={product.img}
                alt={product.name[0]}
                className="w-24 h-24 rounded-full mx-auto mt-4 object-cover"
                width={100}
                height={100}
              />
              <div className="mt-4">
                {product.name.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm mt-2">
                    <h3 className="w-2/4 text-start">{item}</h3>
                    <p className="text-gray-100">{product.price[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Button label="PARCEL CHARGE EXTRA" className="mt-6 flex justify-center items-center px-6 py-2 bg-[#D42D21] text-white w-full" />

        {/* Second Grid Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-24">
          {products2.map((product) => (
            <div key={product.id} className="border border-gray-100 shadow-lg p-4 rounded-lg bg-black">
              <Image
                src={product.img}
                alt={product.name}
                className="w-24 h-24 rounded-full mx-auto mt-4 object-cover"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <div className="mt-4">
                {product.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm mt-2">
                    <h3 className="w-2/4 text-start">{item}</h3>
                    <p className="text-gray-100">{product.price[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center border p-4 text-white text-sm w-full">
          <p className="flex gap-2">
            MASALA KUBOOS <span className="text-[#D42D21] font-semibold">20/-</span>
          </p>
          <p className="flex gap-2">
            RUMALI ROTTI <span className="text-[#D42D21] font-semibold">20/-</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferList;
