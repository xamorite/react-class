import './App.css';

const Navbar = () => {
    return (
        <div className="nav p-5">
            <nav className='flex flex-row justify-between p-5 '>
                <h1 className='logo font-bold text-[2.5vw] text-red-500'>Nike</h1>
                <ul className="flex flex-row justify-between ">
                    <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Home</li>
                    <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Shop</li>
                    <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>About</li>
                    <li className='mx-10 hover:text-red-500 hover:cursor-pointer'>Cart</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;