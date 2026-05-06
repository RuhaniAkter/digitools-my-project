const Pricing = () => {
  return (
    <div>
      <section className="bg-white py-20 px-6 font-sans">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-12 h-1 bg-sky-400 mx-auto mb-8 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Starter Plan */}
          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-1">Starter</h2>
            <p className="text-sm text-gray-500 mb-8">
              Perfect for getting started
            </p>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-bold">$0</span>
              <span className="text-xl ml-1 text-gray-400">/Month</span>
            </div>
            <ul className="space-y-5 mb-12">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl text-lg font-bold bg-[#8A33FF] text-white hover:bg-[#7a28e0]">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-[#8A33FF] text-white rounded-[2.5rem] p-10 py-14 shadow-2xl scale-105 z-10">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFEFBD] text-[#D97706] text-xs font-bold px-5 py-2 rounded-full shadow-sm">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-1">Pro</h2>
            <p className="text-sm text-purple-100 mb-8">
              Best for professionals
            </p>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-bold">$29</span>
              <span className="text-xl ml-1 text-purple-200">/Month</span>
            </div>
            <ul className="space-y-5 mb-12">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4">
                  <span className="text-white font-bold">✓</span>
                  <span className="text-purple-50">{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl text-lg font-bold bg-white text-[#8A33FF] hover:bg-gray-100 shadow-md">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-lg text-gray-800">
            <h2 className="text-2xl font-bold mb-1">Enterprise</h2>
            <p className="text-sm text-gray-500 mb-8">
              For teams and businesses
            </p>
            <div className="flex items-baseline mb-10">
              <span className="text-6xl font-bold">$99</span>
              <span className="text-xl ml-1 text-gray-400">/Month</span>
            </div>
            <ul className="space-y-5 mb-12">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-600">{f}</span>
                </li>
              ))}
            </ul>

            {/* Here is the button */}
            <button className="w-full py-4 rounded-2xl text-lg font-bold bg-[#8A33FF] text-white hover:bg-[#7a28e0]">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="w-12 h-1 bg-sky-400 mx-auto mt-20 rounded-full"></div>
      </section>
    </div>
  );
};

export default Pricing;
