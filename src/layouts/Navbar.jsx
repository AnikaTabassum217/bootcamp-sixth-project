import React from "react";
import { Link } from "react-router-dom"; 
import Logo from '../assets/images/Logo.png'
import User from '../assets/images/user.png'
import Cart from '../assets/images/cart.png'
const Navbar=()=>{
    return(
        <div>
            <header>
                <nav>
                <ul className="grid grid-cols-3 bg-gray-500 ">
                    <div>
                        <li>
                        <img className="w-16 h-16 mt-2 mb-2 ml-4 rounded-full"src={Logo} alt="" />
                        </li>
                    </div>
                    <div className="flex flex-wrap mt-6 font-bold text-white">
                    <li>
                        <Link className={window.location.pathname=="/" ? "text-green-300":" "} to={'/'}>Home</Link>                       
                    </li>
                    <li className="ml-4">
                        <Link className={window.location.pathname=="/about" ? "text-green-500":" "} to={'/about'}>About</Link>                       
                    </li>
                    </div>

                    <div className="flex flex-wrap ml-40 mt-6">
                       <li>
                        <img className="rounded-full w-8 h-8" src={User} alt="" />
                       </li>
                       <li>
                        <img className="rounded-full w-8 h-8 ml-4" src={Cart} alt="" />
                       </li>
                    </div>
                </ul>
                </nav>
            </header>
         

        </div>
    )
}
export default Navbar;