import React from 'react'

const Gamegrid = ({dogImageUrls}) => {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4  m-5">
        {dogImageUrls.map((imgUrl, index) => (
          <img
            className="w-80 h-70 p-3 border-2"
            key={index}
            src={imgUrl}
            alt={`Dog image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Gamegrid