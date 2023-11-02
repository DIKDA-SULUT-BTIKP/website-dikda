import React from "react";
import CardPPDB from "../components/card/CardPPDB";

const PPDBPage = () => {
  return (
    <>
      <section>
        <div className="p-16 md:p-8">
          <h3 className="text-3xl font-bold">Berita PPDB</h3>
          <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardPPDB />
            <CardPPDB />
            <CardPPDB />
            <CardPPDB />
          </div>
        </div>
      </section>
      <section>
        <div className="p-16 md:p-8">
          <h3 className="text-3xl font-bold">Infografis</h3>
          <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardPPDB />
            <CardPPDB />
            <CardPPDB />
            <CardPPDB />
          </div>
        </div>
      </section>
    </>
  );
};

export default PPDBPage;
