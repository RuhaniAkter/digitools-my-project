import Startimg from "../componets/user.png";
import Img2 from "../componets/package.png";
import Img3 from "../componets/rocket.png";
const Start = () => {
  return (
    <div className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center mb-16">
          <div className="w-10 h-1 bg-blue-400 mb-4 rounded-full" />
          <div className="text-4xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </div>
          <div className="text-slate-400 text-sm">
            Start using premium digital tools in minutes, not hours.
          </div>
          <div className="w-10 h-1 bg-pink-400 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white p-12 rounded-[40px] border border-slate-100 flex flex-col items-center shadow-sm">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c2cf5] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
              01
            </div>
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img
                src={Startimg}
                alt="User"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-4">
              Create Account
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </div>
          </div>

          <div className="relative bg-white p-12 rounded-[40px] border border-slate-100 flex flex-col items-center shadow-sm">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c2cf5] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
              02
            </div>
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img
                src={Img2}
                alt="Package"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-4">
              Choose Products
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </div>
          </div>

          <div className="relative bg-white p-12 rounded-[40px] border border-slate-100 flex flex-col items-center shadow-sm">
            <div className="absolute top-8 right-8 w-8 h-8 bg-[#7c2cf5] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
              03
            </div>
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img
                src={Img3}
                alt="Rocket"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-4">
              Start Creating
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
