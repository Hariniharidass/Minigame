import React, { useEffect, useState } from "react";
import Gamegrid from "../components/Gamegrid";
const home = () => {
  const [dogImage, setDogImage] = useState([]);
  const [count, setCount] = useState(0);
  const numberOfRuns = 3;

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
          <Gamegrid dogImageUrls={dogImage} />
    </>
  );
};

export default home;
