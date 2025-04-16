"use client";
import Head from "next/head";
import Image from "next/image";

export default function Pathtosuccess() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Franchise Details - Your Path to Success!</title>
        <meta name="description" content="Franchise opportunity details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen">
        {/* Left Food Image */}
        <div className="w-1/4 bg-cover bg-center relative rounded-lg overflow-hidden">
          <Image
            src="/Images/Franchise/ChickenMandi.png"
            alt="Mandi dish with rice"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-lg"
          />
        </div>

        {/* Center Content */}
        <div className="w-2/4 p-8 bg-white">
          <h1 className="text-5xl font-bold text-red-800 mb-8">
            FRANCHISE DETAILS - YOUR
            <br />
            PATH TO SUCCESS!
          </h1>

          <p className="text-2xl text-gray-500 mb-8">
            The following items are required for smooth operation:
          </p>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Grill Machines (30 pieces)
              </span>
              <span className="text-2xl text-gray-500">2 Nos</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Mandi Steamer (25kg)
              </span>
              <span className="text-2xl text-gray-500">1 Nos</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Live Cutting & Parcel Tables
              </span>
              <span className="text-2xl text-gray-500">1 Each</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Juice Counter & Cash Counter
              </span>
              <span className="text-2xl text-gray-500">1 Each</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Freezers (500L & 200L)
              </span>
              <span className="text-2xl text-gray-500">1 Each</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">Sujata Supermix</span>
              <span className="text-2xl text-gray-500">2 Nos</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">Pot Wash Unit</span>
              <span className="text-2xl text-gray-500">1 Nos</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">Bain Marie</span>
              <span className="text-2xl text-gray-500">1 Nos</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">
                Kitchen & Coolbar Zing,
              </span>
              <span className="text-2xl text-gray-500">As per company</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-500">Wash Basins</span>
              <span className="text-2xl text-gray-500"></span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-2xl text-gray-500">
                Table (Minimum 4 ) Seating for 16 People.
              </span>
              <span className="text-2xl text-gray-500"></span>
            </div>
          </div>
        </div>

        {/* Right Food Image */}
        <div className="w-1/4 bg-cover bg-center relative rounded-l-lg overflow-hidden">
          <Image
            src="/Images/Franchise/biriyani.png"
            alt="Traditional food presentation"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>
      </main>
    </div>
  );
}
