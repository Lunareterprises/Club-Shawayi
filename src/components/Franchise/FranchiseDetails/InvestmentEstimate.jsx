"use client"
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Head>
        <title>Club Shauqui Investment Estimate</title>
        <meta name="description" content="Investment estimate for Club Shauqui franchise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative w-full max-w-4xl bg-black text-white overflow-hidden">
        {/* Top Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-100 clip-notch"></div>
        
        {/* Main Content Area */}
        <div className="relative p-12">
          {/* Investment Estimate Section */}
          <h1 className="text-5xl font-bold text-red-600 mb-8">INVESTMENT<br />ESTIMATE</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            <div className="font-bold text-lg">Initial Investment:</div>
            <div className="md:col-span-4 text-lg ml-2 md:ml-0">
              ₹ 10-25 Lakhs (Varies<br className="hidden md:block" /> based on location &<br className="hidden md:block" /> setup)
            </div>
            
            <div className="font-bold text-lg mt-6">Cost Reduction:</div>
            <div className="md:col-span-4 text-lg ml-2 md:ml-0 mt-6">
              If taking over an existing<br className="hidden md:block" /> restaurant, setup costs can<br className="hidden md:block" /> be significantly reduced.
            </div>
          </div>
          
          {/* Guidelines Section */}
          <h2 className="text-5xl font-bold text-red-600 mb-8">STRICT GUIDELINES<br />TO FOLLOW</h2>
          
          <div className="mb-8 text-lg max-w-2xl">
            <p className="mb-2">Only company-provided masala should be used.</p>
            <p className="mb-2">Maintain strict hygiene and cleanliness in the shop.</p>
            <p className="mb-2">Choose high-grade stainless steel (304 grade) for cooking equipment.</p>
            <p className="mb-2">Staff selection and training should adhere to company standards.</p>
            <p className="mb-2">Follow Red Crown International's instructions carefully.</p>
          </div>
        </div>
        
        {/* Logo Circle */}
        <div className="absolute right-12 top-64 md:right-16">
          <div className="relative w-36 h-36 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Chicken logo */}
              <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="currentColor">
                <path d="M65,35c0,0-5,5-15,5c-10,0-15-10-15-15c0-5,5-10,15-10c10,0,15,10,15,15C65,30,65,35,65,35z" />
                <path d="M50,50c0,0,15-15,20-15c5,0,10,5,10,10c0,5-5,10-10,10c-5,0-15-5-20-5z" />
                <path d="M40,60c0,0,10-10,15-10c5,0,10,5,10,10c0,5-5,10-10,10C50,70,40,60,40,60z" />
              </svg>
              <div className="text-white text-sm font-bold mt-1">Club Shauqui</div>
              <div className="text-white text-xs font-light italic text-center">A RED CROWN CHICKEN DELIGHT</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for notch clip path */}
      <style jsx global>{`
        .clip-notch {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%);
        }
      `}</style>
    </div>
  );
}