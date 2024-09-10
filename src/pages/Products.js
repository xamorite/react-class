import ShoeCard from "../ShoeCard";

import { useState, useEffect, useRef } from "react";
import shoes from "../Assets/products/shoes";

const Products = () => {
  const [inputValue, setInputValue] = useState([]);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  })

  cart = inputValue[0];

  function addToCart(num){
    cart[count] =  setInputValue[num]
  }

  
  return (
    <div className="mx-auto text-black w-[90vw] text-center my-10">
      <h1 className="font-bold text-4xl my-10">Our Awesome Collections</h1>
      <div><h1>Cart</h1><div>
        {
          inputValue.map((myshoe)=>(
            <ShoeCard key={myshoe.id}
            name = {myshoe.name}
            image={myshoe.image}
            price={myshoe.price}
            type={myshoe.type}
            />
          ))
        }
        </div></div>
      <div className="bg-red-700 rounded-md text-white"> {count.current}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            name={shoe.name}
            image={shoe.image}
            price={shoe.price}
            type={shoe.type}
            addToCart={(e) => addToCart([shoe.name, shoe.image, shoe.type, shoe.price])}
          />
        ))}
       
      </div>
    </div>
  );
};

export default Products;
