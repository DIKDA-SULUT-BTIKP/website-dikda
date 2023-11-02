import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/ic_logo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${now.getDate()} ${now.toLocaleString(
        "default",
        { month: "short" }
      )} ${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-4">
          <span>{currentDateTime}</span>
        </div>
        <div className="flex flex-col items-center justify-center py-4 space-y-4 bg-white md:flex-row md:space-y-0 md:justify-between custom-border-bottom px-36">
          <div className="flex flex-col items-center md:space-x-4 md:flex-row">
            <img src={Logo} alt="" className="w-20 h-20" />
            <h1 className="text-[#333333] font-bold text-base text-center">
              Dinas Pendidikan Sulawesi Utara
            </h1>
          </div>
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <NavLink
                  to="https://www.facebook.com/OfficialDikdaSulut"
                  className="cursor-pointer icon hover:bg-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  activeClassName="active"
                  exact="true"
                >
                  <FaFacebook size={20} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://instagram.com/dikdasulut?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  className="cursor-pointer icon hover:text-pink-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  activeClassName="active"
                >
                  <FaInstagram size={20} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.tiktok.com/@dikdasulut?_t=8eopo1E5ttx&_r=1"
                  className="cursor-pointer icon hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Profile"
                  activeClassName="active"
                >
                  <FaTiktok size={20} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="https://www.youtube.com/@DikdaSulut"
                  className="cursor-pointer icon hover:text-red-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  activeClassName="active"
                >
                  <FaYoutube size={20} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className={isSticky ? "sticky-nav" : ""}>
        <nav>
          <ul className="flex justify-center py-4 space-x-4 px-36">
            <li>
              <NavLink
                exact
                to="/"
                className="text-[#333333] font-semibold   hover:text-[#cf2300] text-base"
                activeClassName="active"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ppdb"
                className="text-[#333333] font-semibold  hover:text-[#cf2300] text-base"
                activeClassName="active"
              >
                PPDB
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sop"
                className="text-[#333333] font-semibold  hover:text-[#cf2300] text-base"
                activeClassName="active"
              >
                SOP <span className="hidden md:inline-block">Layanan</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profil"
                className="text-[#333333] font-semibold  hover:text-[#cf2300] text-base"
                activeClassName="active"
              >
                Profil
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="bg-[#cf2300] text-white font-semibold text-right px-8 py-[2px]"></div>
      </div>
    </>
  );
};

export default Header;
