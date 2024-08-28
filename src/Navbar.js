import './App.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="bg-black text-white nav p-5">
            <nav className='flex flex-row justify-between p-5 '>
                <h1 className='logo font-bold text-[2.5vw] text-red-500'>Nike</h1>
                <ul className="flex flex-row justify-between ">
              <Link to="/"> <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Home</li></Link> 
              <Link to="/products"><li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Shop</li></Link> 
              <Link to="/about">        <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>About</li></Link> 
              <Link to="/cart">         <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Cart</li></Link> 
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;