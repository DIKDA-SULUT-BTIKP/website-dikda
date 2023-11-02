import React from "react";

const ProfilePage = () => {
  return (
    <>
      <div className="p-8">
        <section>
          <div className="p-8 box">
            <h2 className="text-3xl font-bold text-center">Visi</h2>
            <p className="mt-4 font-semibold text-center">
              SULAWESI UTARA MAJU DAN SEJAHTERA SEBAGAI PINTU GERBANG INDONESIA
              KE ASIA PASIFIK
            </p>
          </div>

          <div className="p-8 mt-8 box">
            <h2 className="text-3xl font-bold text-center">Misi</h2>
            <ol start="1" className="mt-4 font-semibold">
              <li>1. Peningkatan kualitas manusia Sulawesi Utara.</li>
              <li>
                2. Penguatan ekonomi yang bertumpu pada industri pertanian,
                perikanan, pariwisata, dan jasa.
              </li>
              <li>3. Pembangunan infrastruktur dan perluasan konektivitas.</li>
              <li>4. Pembangunan daerah yang berkelanjutan.</li>
              <li>
                5. Pemerintahan yang baik dan bersih didukung oleh sinergitas
                antar daerah.
              </li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
