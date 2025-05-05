import React, { useEffect, useState } from "react";

const home = () => {
  const [dogImage, setDogImage] = useState([]);
  const [count, setCount] = useState(0);
  const numberOfRuns = 6;

  useEffect(() => {
    if (count < numberOfRuns) {
      fetchDogImages();
    }
  }, [count]);

  useEffect(() => {
    if (count < numberOfRuns) {
      setTimeout(() => {
        setCount((c) => c + 1);
      }, 0);
    }
  }, [count]);

  async function fetchDogImages() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const url = data.message;
      setDogImage((prevUrls) => [...prevUrls, url]);
    } catch (error) {
      console.error("API fetch not successful");
    }
  }

  return (
    <>
      {dogImage.map((imgUrl, index) => (
        <img
              key={index}
              width={200}
              height={200}
              src={imgUrl}
              alt={`Dog image ${index + 1}`}
        />
      ))}
    </>
  );
};

export default home;
