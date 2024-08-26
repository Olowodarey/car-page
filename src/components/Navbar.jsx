import { NavLink } from "react-router-dom";
import Topheader from "./Topheader";

import { FaSearch } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


import logo2 from "../assets/images/logo2.jpg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab }  from "../stores/Cartstore"
import AuthModal from "./Login";
import Carttap from "./Carttap"


const Navbar = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total);
  }, [carts])


  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  





  return (
    <div>
      <Topheader />
      <nav>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 ">
          <div className="flex h-20 items-center justify-between">
            <div className="flex  items-center justify-between">
              <NavLink className=" " to="/">
                <img className=" h-10  w-auto" src={logo2} alt="" />
              </NavLink>
            </div>

            <div className=" flex  justify-center">
              <div className="hidden lg:flex   space-x-6">
                <NavLink to="/" className="hover:bg-blue-300 rounded-md p-1">
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="hover:bg-blue-300 rounded-md p-1"
                >
                  About
                </NavLink>
                <NavLink
                  to="/product"
                  className="hover:bg-blue-300 rounded-md p-1"
                >
                  Hot Product
                </NavLink>
                <NavLink
                  to="/spare-part"
                  className="hover:bg-blue-300 rounded-md p-1"
                >
                  Spare Part
                </NavLink>
                <NavLink
                  to="appointment"
                  className="hover:bg-blue-300 rounded-md p-1"
                >
                  Appointment
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className="hover:bg-blue-300 rounded-md p-1"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div className="flex space-x-2 lg:space-x-6   items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-2 pr-4  border rounded-lg focus:outline-none focus:border-blue-500 w-[120px] lg:w-[250px]"
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>


          <button>
          <ShoppingCartIcon  onClick={handleOpenTabCart} fontSize="medium" />
              <span className="absolute  bg-red-500 text-white text-sm
              w-5 h-4 rounded-full flex justify-center items-center ">{totalQuantity}</span>
          </button>

              <div className="hover:bg-blue-300 rounded-md ">
                <AuthModal
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              </div>

              <div className="lg:hidden   items-center">
                <button onClick={toggleNavbar}>
                  {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div
            className=" px-5  right-0 fixed justify-end bg-blue-100 
                 flex flex-col items-center lg:hidden"
          >
            <div className="">
              <div className="flex flex-col justify-center items-center space-y-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/product">Hot Product</NavLink>
                <NavLink to="/spare-part">Spare Part</NavLink>
                <NavLink to="/appointment">Appointment</NavLink>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
