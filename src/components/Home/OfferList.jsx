import React from 'react';
import Image from 'next/image';
import Button from '../commonUI/Buttons/Button';

function OfferList() {
    const products = [
        { 
            id: 1, 
            img: "/Images/Home/offerList1.png", 
            name: ["Quater Shawayi + Ghee Rice", "Half Shawayi + Ghee Rice"], 
            price: ["149/-", "249/-"], 
            type: "ON TABLE" , person:"1 PERSON"
        },
        { id: 2, img: "/Images/Home/offerList2.jpg", name: ["Half Shawayi + Ghee Rice", "Half Shawayi + Mandi Rice"], price: ["290/-", "330/-"], type: "IN PARCEL" , person:"2 PERSON" },
        { id: 3, img: "/Images/Home/offerList2.jpg", name: ["Full Shawayi + Ghee Rice", "Full Shawayi + Mandi Rice"], price: ["580/-", "660"], type: "IN PARCEL"  , person:"2 PERSON"},
        
    ];
    const products2 = [
        { 
            id: 1, 
            img: "/Images/Home/offerList3.jpg", 
            name: "Shawayi",
            items: ["Quater", "Half ","full"], 
            price: ["110", "220", "420"], 
            
        },
        { id: 2, img: "/Images/Home/offerList4.png",  name: "Mandi Rice",
            items: ["Quater", "Half ","full"], 
            price: ["80", "160", "320"],  },
        { id: 3, img: "/Images/Home/offerList5.jpg",  name: "Ghee Rice",
            items: ["Quater", "Half ","full"], 
            price: ["60", "120", "240"],  },
       
    ];

    return (
        <div className="relative py-5 px-18 ">

            <div className="py-12 px-64 text-center ">
                 <Image
                    src="/Images/Home/Group23.png"
                    className="absolute  bottom-0 left-40  w-20 md:w-52 opacity-50"
                    alt="vector4"
                    width={100}
                    height={100}
                  />
                <h2 className="text-xl font-bold text-gray-100">Combo Offers: Delight in Every Bite</h2>
                <p className="text-gray-300 mt-2">Savor the magic of C Club Shawayi’s specially crafted combo offers</p>

                <div>
                    <div className="grid grid-cols-3 justify-center mt-12 gap-24 ">
                        {products.map((product) => (
                            <div key={product.id} className="border border-gray-100 shadow-lg p-4 ">
                                <div className='flex justify-between'>
                                    <div className='border px-2 py-1 text-[10px]'>{product.person}</div>
                                    <div 
                                        className={`border px-2 py-1 text-[10px] ${
                                            product.type === "ON TABLE" ? "text-red-500 border-red-600" 
                                            : " text-yellow-500 border-yellow-600"
                                        }`}
                                    >
                                        {product.type}
                                    </div>
                                </div>
                                <Image
                                    src={product.img}
                                    alt={product.name[0]}
                                    className="w-24 h-24 rounded-full mx-auto bg-contain mt-6"
                                    width={100} 
                                    height={100}
                                />
                                <div className='mt-4'>
                                    {product.name.map((item, index) => (
                                        <div key={index} className="flex justify-between mt-2">
                                            <h3 className="w-2/4 text-xs text-start">{item}</h3>
                                            <p className="text-gray-100 text-xs">{product.price[index]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button label="PARCEL CHARGE EXTRA" className="mt-6 flex justify-center items-center px-6 py-2 bg-[#D42D21] text-white  w-full"/>

                </div>
                <div className='mt-20'>
                    <div className="grid grid-cols-3 justify-center mt-8 gap-24 ">
                        {products2.map((product) => (
                            <div key={product.id} className="border border-gray-100 shadow-lg p-4 ">
                                
                                <Image
                                    src={product.img}
                                    alt={product.name[0]}
                                    className="w-24 h-24 -full mx-auto bg-contain mt-6"
                                    width={100} 
                                    height={100}
                                />
                                <h3>{product.name}</h3>
                                <div className='mt-4'>
                                    {product.items.map((item, index) => (
                                        <div key={index} className="flex justify-between mt-2">
                                            <h3 className="w-2/4 text-xs text-start">{item}</h3>
                                            <p className="text-gray-100 text-xs">{product.price[index]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                        <div  className="mt-12 flex gap-28 justify-center items-center px-6 py-4  text-white border  text-sm w-full">
                            <p className='flex gap-6'>MASALA KUBOOS <spn className="text-[#D42D21] font-semibold">20/-</spn></p>
                            <p className='flex gap-6'>RUMALI ROTTI <spn className="text-[#D42D21] font-semibold">20/-</spn></p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default OfferList;
