const Ready = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef] py-20 px-6 text-center overflow-hidden">
        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>

          {/* Description */}
          <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="bg-white text-[#8b5cf6] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
              Explore Products
            </button>
            <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Pricing
            </button>
          </div>

          {/* Footer Info */}
          <div className="text-purple-200 text-sm font-medium flex flex-wrap justify-center gap-2 opacity-90">
            <span>14-day free trial</span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card required</span>
            <span className="hidden sm:inline">•</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Bottom Border Glow */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
      </section>
    </div>
  );
};

export default Ready;
