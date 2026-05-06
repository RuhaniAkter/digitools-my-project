const Carts = ({ setCarts, carts }) => {
  const total = carts.reduce((sum, cart) => sum + cart.price, 0);

  const removeCartItem = (id) => {
    const filteredCart = carts.filter((cart) => cart.id !== id);
    setCarts(filteredCart);
  };

  const handleCheckout = () => {
    setCarts([]);
  };

  if (carts.length === 0) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center max-w-4xl mx-auto">
        <p className="text-gray-500 text-xl font-medium">
          Your cart is currently empty.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-4xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a1c2c] mb-8">Your Cart</h2>

      {/* Cart Items List */}
      <div className="space-y-4">
        {carts.map((cart) => (
          <div
            key={cart.id}
            className="flex items-center justify-between p-6 bg-[#f8f9fa] rounded-2xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <img
                  src={cart.icon || cart.image}
                  className="w-7 h-7 object-contain"
                  alt={cart.name}
                />
              </div>
              <div>
                <h4 className="font-bold text-[#1a1c2c]">{cart.name}</h4>
                <p className="text-gray-500 text-sm">${cart.price}</p>
              </div>
            </div>

            {/* Here is the button */}
            <button
              onClick={() => removeCartItem(cart.id)}
              className="text-[#ff4d6d] font-semibold text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-6 flex justify-between items-end">
        <span className="text-gray-400 text-sm font-medium">Total:</span>
        <span className="text-3xl font-bold text-[#1a1c2c]">${total}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full py-4 bg-[#7c3aed] text-white rounded-2xl font-bold text-lg transition-all hover:bg-[#6d28d9] active:scale-[0.98]"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Carts;
