import React from "react";
import CardAnnoucement from "../components/card/CardAnnoucement";
import CardNews from "../components/card/CardNews";
import IbuKadis from "../assets/ibu-kadis.png";
import Kadis from "../assets/kadis 4x6 -.png";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section>
        <div className="flex flex-col-reverse items-center justify-center space-x-6 md:flex-md">
          <h5 className="text-2xl font-bold text-[#333333]">
            Kepala Dinas Pendidikan Sulawesi Utara
          </h5>
          <img src={Kadis} alt="Ibu Kadis" className="p-4 shadow w-80 h-96 " />
        </div>
      </section>
      <section>
        <div className="p-16 md:p-8">
          <h3 className="text-3xl font-bold">Berita</h3>
          <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardNews />
            <CardNews />
            <CardNews />
            <CardNews />
          </div>
        </div>
      </section>
      <section>
        <div className="p-16 md:p-8">
          <h3 className="text-3xl font-bold">Pengumuman</h3>
          <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardAnnoucement />
            <CardAnnoucement />
            <CardAnnoucement />
            <CardAnnoucement />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
