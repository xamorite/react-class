const ShoeCard = ({ name, image, price, type, addToCart }) => {
    return (
      <div className="w-60 h-80 bg-black p-3 flex flex-col gap-1 rounded-2xl">
        <div className="h-48 bg-gray-700 rounded-xl">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">{name}</span>
              <p className="text-xs text-gray-700">{type}</p>
            </div>
            <span className="font-bold text-[#FFC100]">${price}</span>
          </div>
          <button onClick={addToCart} className="hover:bg-[#FFC100] text-gray-50 bg-[#C40C0C] py-2 rounded-md">Add to cart</button>
        </div>
      </div>
    );
  };

  export default ShoeCard;


