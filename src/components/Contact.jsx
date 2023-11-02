import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="fixed px-4 transition duration-300 ease-in-out bg-green-500 rounded-[100%] shadow-lg bottom-8 right-4 hover:bg-green-600 ">
      <Link to="/" className="flex items-center justify-center py-4">
        <FaWhatsapp className="text-white" size={50} />
      </Link>
    </div>
  );
};

export default Contact;
