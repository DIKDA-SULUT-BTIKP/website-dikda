import React from "react";

const CardEducationPartner = ({ imageURL, name }) => {
  return (
    <div class="gallery__card">
      <img src={imageURL} alt={name} />
      <div class="gallery__content">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default CardEducationPartner;
