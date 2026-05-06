import Bannerimg from "../componets/banner.png";

function Banner() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-12 max-w-7xl mx-auto">
      {/* Left Side */}
      <div className="flex-1">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold text-indigo-600 uppercase mb-6">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-5xl font-bold text-slate-800 leading-tight mb-4">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-slate-500 mb-8 max-w-md">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place.
        </p>

        <div className="flex items-center gap-4">
          <button className="px-7 py-3 bg-[#6366f1] text-white font-bold rounded-full text-sm">
            Explore Products
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 border border-purple-300 rounded-full">
            <div className="w-6 h-6 flex items-center justify-center border border-purple-300 rounded-full text-purple-600">
              <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="text-sm font-bold text-purple-700">Watch Demo</div>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <img
          src={Bannerimg}
          alt="UI"
          className="w-full h-150 object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Banner;
