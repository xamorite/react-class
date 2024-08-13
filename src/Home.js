import Shoe from './Assets/sh.png';

import { useState } from "react";

const Home = () => {
   const [color, setColor] = useState("red");

   const items = [
      {
      
       name:"nike",
       color:"red",
       size:"32",
      },
   ]

   // const name = "ipaoluwa"
   return (
      <div className="bg-black text-white h-3/5 p-3">
         <div className="flex flex-row justify-around w-ful h-[80vh] px-10">
            <div className="w-3/5  p-3"><h1 className="text-7xl font-bold leading-snug font-black_ops">Step up your game with our premium* collection</h1>
            <button className='p-3 outline outline-offset-1 outline-2 text-red-600 rounded-md mt-[15vh] w-[15vw]'>About Us</button>
            <button className='p-3 bg-red-700 rounded-md mt-[15vh] ms-[3vw] w-[15vw]'>Shop Now</button>
            </div>
            <div><img src={Shoe} className='h-[80vh]' alt='shoe-image'/></div>
         </div>

         <div className='flex flex-row justify-center'>
         <h1 className=' text-red-500'>My favorite color is {color}!</h1>
      <button
        className='p-5 text-white text-center bg-red'
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
         </div>
      </div>
    );
}
 
export default Home;




