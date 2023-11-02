import React from "react";
import CardSOP from "../components/card/CardSOP";

// Define the data in JSON format
const sopData = [
  // {
  //   title: "Subag Umum",
  //   description: "Ini adalah Sub Bagian Umum",
  //   link: "umum",
  // },
  // {
  //   title: "Subag Renkeu",
  //   description: "Ini adalah Sub Bagian Keuangan",
  //   link: "renkeu",
  // },
  // {
  //   title: "Pokja Kepegawaian",
  //   description: "Ini adalah Pokja Kepegawaian",
  //   link: "kepegawaian",
  // },
  {
    title: "Bidang PSMA",
    description: "Ini adalah Bidang PSMA",
    link: "psma",
  },
  {
    title: "Bidang PSMK",
    description: "Ini adalah Bidang PSMK",
    link: "psmk",
  },
  {
    title: "Bidang PKLK",
    description: "Ini adalah Bidang PKLK",
    link: "pklk",
  },
  {
    title: "Bidang GTK",
    description: "Ini adalah Bidang GTK",
    link: "gtk",
  },
  // {
  //   title: "Balai TIK Pendidikan",
  //   description: "Ini adalah Balai TIK Pendidikan",
  //   link: "tik",
  // },
];

const SOPPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-content-center place-items-center  bg-[#777777] p-16">
        {sopData.map((data, index) => (
          <CardSOP
            key={index}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        ))}
      </div>
    </>
  );
};

export default SOPPage;
