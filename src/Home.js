import Shoe from "./Assets/sh.png";
import sampleShoe from "./Assets/sho.png";
import { useState, useEffect } from "react";
import axios from "axios";
import ShoeCard from "./ShoeCard";

const Home = () => {
  const [color, setColor] = useState("red");

  const shoes = [
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
      id: "1",
      name: "nike",
      type: "Airforce",
      image: sampleShoe,
      price: "29",
    },
    {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
      {
        id: "1",
        name: "nike",
        type: "Airforce",
        image: sampleShoe,
        price: "29",
      },
  ];

  //   const [shoes, setShoes] = useState([]);

  // const name = "ipaoluwa"
  return (
    <div className=" text-white h-3/5 ">
      <div className="bg-black flex flex-row justify-around w-ful h-[80vh] ">
        <div className="w-3/5  p-3">
          <h1 className="text-7xl font-bold leading-snug font-black_ops">
            Step up your game with our premium* collection
          </h1>
          <button className="p-3 outline outline-offset-1 outline-2 text-red-600 rounded-md mt-[15vh] w-[15vw]">
            About Us
          </button>
          <button className="p-3 bg-red-700 rounded-md mt-[15vh] ms-[3vw] w-[15vw]">
            Shop Now
          </button>
        </div>
        <div>
          <img src={Shoe} className="h-[80vh]" alt="shoe-image" />
        </div>
      </div>

      <div className='"hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]" w-[50.2vw] mx-auto my-20'>
        <div class="bg-white p-4 rounded-lg max-w-[50vw] mx-auto  text-center">
          <h1 className="text-black text-center text-bold text-3xl">
            Enter your details for booking
          </h1>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="text"
              placeholder="Username"
              class="w-full pl-[1vw] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="text"
              placeholder="Occupation"
              class="w-full pl-[1vw] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="number"
              placeholder="age"
              class="w-full pl-[1vw] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
              <select class="text-sm outline-none rounded-lg h-full">
                <option>Us</option>
                <option>ES</option>
                <option>MR</option>
              </select>
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              class="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          /* From Uiverse.io by tranphattrien */
          <button class=" mx-auto w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f91a1a] before:to-[rgb(255,0,0)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Button
          </button>
        </div>
      </div>

      <div className="mx-auto text-black">
        <h1>my best color is {color}</h1>
        <button type="button" className="bg-red-500" onClick={()=>setColor("blue")}>Change color</button>
      </div>

      <div className="mx-auto text-black w-[90vw] text-center my-10">
        <h1 className="font-bold text-4xl my-10">Our Awesome Collections</h1>

        {/* <div class="w-60 h-80 bg-black p-3 flex flex-col gap-1 rounded-2xl">
          <div class="h-48 bg-gray-700 rounded-xl">
            <img src={sampleShoe} alt="" />
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <span class="text-xl font-bold text-white">Long Chair</span>
                <p class="text-xs text-gray-700">Airforce</p>
              </div>
              <span class="font-bold  text-[#FFC100]">$25.99</span>
            </div>
            <button class="hover:bg-[#FFC100] text-gray-50 bg-[#C40C0C] py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              name={shoe.name}
              image={shoe.image}
              price={shoe.price}
              type={shoe.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
