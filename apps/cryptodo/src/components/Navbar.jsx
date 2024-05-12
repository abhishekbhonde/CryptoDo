import React from "react";
import navImage from '../assets/navbar.png';
const Navbar = () => {
  return (
    <div>
      <nav className="p-[5px] text-white">
        <ul className="flex justify-around items-center">
          <ul className="flex items-center gap-5">
            <li>
              <a href="#">
                <img src={navImage}  className ="w-[53px]" alt="" />
              </a>
            </li>
            <li>
              <a href="#">CryptoDo</a>
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li className="pl-[10px]">
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
