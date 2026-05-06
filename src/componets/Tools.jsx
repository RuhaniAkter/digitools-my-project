import { use, useState } from "react";
import Carts from "../componets/Carts";
import toast from "react-hot-toast";

const toolsPromise = fetch("./tools.json").then((res) => res.json());

const Tools = ({ carts, setCarts }) => {
  const tools = use(toolsPromise);
  const [activeTab, setActiveTab] = useState("tools");

  // React Toast
  const addToCart = (tool) => {
    const isExist = carts.find((c) => c.id === tool.id);
    if (isExist) {
      toast.error("Item is already in cart");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Item added to cart");
  };

  const removeFromCart = (id) => {
    const remainingCarts = carts.filter((item) => item.id !== id);
    setCarts(remainingCarts);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1c2c] mb-4 tracking-tight">
          Premium Digital Tools
        </h1>
        <p className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-10">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
          {/* Here is the button  */}
          <button
            onClick={() => setActiveTab("tools")}
            className={`px-8 py-2.5 rounded-full font-medium transition-all ${
              activeTab === "tools"
                ? "bg-[#7c3aed] text-white shadow-md"
                : "text-gray-600 hover:text-[#7c3aed]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("carts")}
            className={`px-8 py-2.5 rounded-full font-medium transition-all ${
              activeTab === "carts"
                ? "bg-[#7c3aed] text-white shadow-md"
                : "text-gray-600 hover:text-[#7c3aed]"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {activeTab === "tools" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {tool.tag && (
                  <div className="absolute top-6 right-6">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold
                      ${
                        // Logic 1:
                        tool.tag === "Best Seller"
                          ? "bg-orange-50 text-orange-400"
                          : // Logic 2:
                            tool.tag === "Popular"
                            ? "bg-purple-50 text-purple-400"
                            : // Logic 3:
                              tool.tag === "New"
                              ? "bg-green-50 text-green-400"
                              : // Default theme
                                "bg-blue-50 text-blue-400"
                      }`}
                    >
                      {tool.tag}
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#1a1c2c] mb-3">
                  {tool.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {tool.des}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1a1c2c]">
                    ${tool.price}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">
                    /{tool.period === "monthly" ? "Mo" : "One-Time"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tool.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => addToCart(tool)}
                  className="w-full py-4 bg-[#7c3aed] text-white rounded-2xl font-bold text-lg transition-all hover:bg-[#6d28d9] active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <Carts
            setCarts={setCarts}
            carts={carts}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  );
};

export default Tools;
