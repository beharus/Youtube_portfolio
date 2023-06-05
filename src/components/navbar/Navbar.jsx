import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <>
      <div data-aos='fade-down' className="fixed top-0 left-0 right-0 bg-[#282C33]">
        <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
          <div className="left flex gap-2 items-center font-bold text-white text-base">
            {/* logo */}
            <div className="img">
              <img src={require("./imgs/Logo.png")} alt="" />
            </div>
            Elias
          </div>
          <div className="right flex items-center">
            <div
              className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle
                ? `right-[-100%] top-0 bottom-0`
                : `right-0 top-0 bottom-0`
                } bg-[#282C33] md:static`}
            >
              <NavLink to="/">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>home
                </li>
              </NavLink>
              <NavLink to="/projects">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>work
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>about-me
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>contacts
                </li>
              </NavLink>
              <div
                onClick={() => setToggle(false)}
                className="close absolute block md:hidden right-3 top-3"
              >
                <img src={require("./imgs/close.png")} alt="" />
              </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={() => setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
