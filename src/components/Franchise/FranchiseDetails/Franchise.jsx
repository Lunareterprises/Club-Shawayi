"use client"
import Head from 'next/head';
import DetailPoint from './DetailPoint';

export default function franchise() {
  // You could load this data from an API in a real application
  const franchiseDetails = {
    title: "FRANCHISE DETAILS - YOUR PATH TO SUCCESS!",
    image: "/roasted-chicken.jpg", // This would be your actual image path
    details: [
      {
        title: "Parking",
        description: "At least 10 bikes",
        position: { top: "25%", left: "25%" }
      },
      {
        title: "Rent",
        description: "Below ₹ 60,000/month",
        position: { top: "25%", right: "25%" }
      },
      {
        title: "Location Requirements:",
        description: "High footfall area with a clean and spacious environment. Minimum 800 sq. ft. shop space (including kitchen)",
        position: { bottom: "25%", left: "20%" }
      },
      {
        title: "Investment Range:",
        description: "₹ 10 Lakhs - ₹ 25 Lakhs",
        position: { bottom: "25%", right: "20%" }
      }
    ],
    footnote: "* Costs depend on the shop setup (new or existing restaurant.)"
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Head>
        <title>Franchise Details</title>
        <meta name="description" content="Franchise opportunity details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-red-800 px-4">
            {franchiseDetails.title}
          </h1>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Center image */}
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="rounded-full bg-gray-200 p-2">
              <img
                src="/Images/Franchise/Chicken-img.png"
                alt="Roasted Chicken"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Detail points */}
            {franchiseDetails.details.map((detail, index) => (
              <DetailPoint key={index} detail={detail} index={index} />
            ))}
          </div>

          {/* Footnote */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            {franchiseDetails.footnote}
          </div>
        </div>
      </main>
    </div>
  );
}