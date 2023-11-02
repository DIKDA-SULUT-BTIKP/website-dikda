import React from "react";
import Logo from "../assets/ic_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 footer bg-base-200 text-base-content">
        <div>
          <img src={Logo} alt="" className="w-28 h-28" />
          <p>Dinas Pendidikan Daerah Sulawesi Utara</p>
        </div>
        <div>
          <span className="footer-title">Kontak</span>
          <a className="link link-hover">Jl. Samratulangi No.35 Manado</a>
          <a className="link link-hover">admin@disdikda.sulut.go.id</a>
          <a className="link link-hover">081356231821</a>
        </div>
        <div>
          <span className="footer-title">Sosial Media</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">TikTok</a>
          <a className="link link-hover">YouTube</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="p-4 footer-center bg-base-300 text-base-content">
        <p>
          Copyright © 2023 - All right reserved by Dinas Pendidikan Daerah
          Sulawesi Utara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
