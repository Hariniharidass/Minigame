import React, { useState } from "react";
import cardOuterDesign from "../assets/images/cardDesign.jpg";

const Card = ({ url, breed }) => {
  const [flipCard, setFlipCard] = useState(false);

  function handleCardClick() {
    setFlipCard(!flipCard);
  }
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4  m-5">
        {url.map((url, index) => (
          <div key={index} className=" border-2">
            <img
              onClick={() => handleCardClick()}
              src={url}
              alt={`Dog ${index + 1}`}
              className={
                flipCard ? "hidden" : "w-full h-50 object-cover cursor-pointer"
              }
            />
            <p className="text-center mt-2">{breed[index]}</p>
          </div>
        ))}
        {url.map((url, index) => (
          <div key={index} className="border-2">
            <img
              onClick={() => handleCardClick()}
              src={cardOuterDesign}
              alt="card design"
              className="w-full h-50 object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
