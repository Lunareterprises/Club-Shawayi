import React from "react";

const StaffDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-2/5">
          <h1 className="text-4xl font-bold text-red-900 leading-tight">
            STAFF DETAILS -
            <br />
            A DEDICATED
            <br />
            TEAM!
          </h1>
          <p className="text-gray-500 mt-6 text-lg">Total Staff Needed: 9</p>
        </div>

        {/* Right Column */}
        <div className="md:w-3/5">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Cashier</span>
              <span className="text-gray-500 text-lg">₹ 30,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Juicer</span>
              <span className="text-gray-500 text-lg">₹ 24,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Chef</span>
              <span className="text-gray-500 text-lg">₹ 36,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Parcel Staff</span>
              <span className="text-gray-500 text-lg">₹ 21,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Suppliers (2 Nos.)</span>
              <span className="text-gray-500 text-lg">₹ 21,000 each</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Table Cleaner</span>
              <span className="text-gray-500 text-lg">₹ 16,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Kitchen Wash Staff</span>
              <span className="text-gray-500 text-lg">₹ 16,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Shawayi Master</span>
              <span className="text-gray-500 text-lg">₹ 36,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-lg">Shawayi Helper</span>
              <span className="text-gray-500 text-lg">₹ 27,000</span>
            </div>
          </div>

          <div className="mt-8 text-gray-500 text-lg">
            <p>
              Accommodation for Staff Must be within 200m of the shop (Rent
              below ₹ 20,000/-).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
