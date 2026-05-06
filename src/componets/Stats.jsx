const Stats = () => {
  return (
    <div>
      <section className="bg-[#7c2cf5] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          {/* Item 1 */}
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold mb-2">50K+</div>
            <div className="text-purple-100 text-sm opacity-90">
              Active Users
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-white/20" />

          {/* Item 2 */}
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-purple-100 text-sm opacity-90">
              Premium Tools
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-white/20" />

          {/* Item 3 */}
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold mb-2">4.9</div>
            <div className="text-purple-100 text-sm opacity-90">Rating</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
