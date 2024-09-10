import Shoe from "./Assets/sh.png";
import sampleShoe from "./Assets/sho.png";
import { useState } from "react";
// import ReactDOM from 'react-dom/client';
// import axios from "axios";
import ShoeCard from "./ShoeCard";

const Home = () => {
  const [color, setColor] = useState("red");
  const [Username, setName] = useState("");
  const [age, setAge] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Hi ${Username} \n you are ${age} years old, \n  your cell number is ${pnumber}, your occupation is ${occupation}`
    );
  };

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
        <form
          onSubmit={handleSubmit}
          class="bg-white p-4 rounded-lg max-w-[50vw] mx-auto  text-center"
        >
          <h1 className="text-black text-center text-bold text-3xl">
            Enter your details for booking
          </h1>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              class="w-full pl-[1vw] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="text"
              placeholder="Occupation"
              onChange={(e) => setOccupation(e.target.value)}
              class="w-full pl-[1vw] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          <div class="relative mt-2 max-w-xs text-gray-500 mx-auto">
            <input
              type="number"
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
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
              onChange={(e) => setPnumber(e.target.value)}
              class="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
            />
          </div>
          /* From Uiverse.io by tranphattrien */
          <button
            type="submit"
            class=" mx-auto w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f91a1a] before:to-[rgb(255,0,0)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Button
          </button>
        </form>
      </div>

      {/* <div className="mx-auto text-black">
        <h1>my best color is {color}</h1>
        <button type="button" className="bg-red-500" onClick={()=>setColor("blue")}>Change color</button>
      </div> */}

      <h1>hello</h1>
    </div>
  );
};

export default Home;
