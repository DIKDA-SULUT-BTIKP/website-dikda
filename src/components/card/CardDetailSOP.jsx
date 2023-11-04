import React from "react";
import Logo from "../../assets/ic_logo.png";
import { saveAs } from "file-saver";
import PTK from "../../assets/surat/Jenis Pelayanan Penambahan PTK (Bidang GTK).pdf";

const CardDetailSOP = ({ title, link }) => {
  const handleDownload = () => {
    saveAs(PTK, "download-file.pdf");
  };
  return (
    <div className="w-full lg:w-auto  md:flex-col md:justify-center md:items-center lg:flex-row  p-2 rounded-md box card card-side hover:border-[#cf2300] hover:border-[3px] cursor-pointer bg-base-100">
      <img src={Logo} alt="Detail SOP" className="my-auto w-28 h-28" />
      <div className="card-body">
        <h2 className="text-sm card-title">{title}</h2>
        <div className="flex justify-end mt-4">
          <button onClick={handleDownload} className="btn btn-primary">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailSOP;
