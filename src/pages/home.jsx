import React, { useEffect, useState } from "react";
import Gamegrid from "../components/Gamegrid";
import Card from "../components/Card";
const home = () => {
  const [dogUrl, setDogUrl] = useState([]);
  const [count, setCount] = useState(0);
  const [dogBreedData, setDogBreedData] = useState([]);
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

  useEffect(() => {
    if (dogUrl.length === numberOfRuns) {
      const breedNames = dogUrl.map(getBreedName).filter(Boolean);
      setDogBreedData(breedNames);
    }
  }, [dogUrl, numberOfRuns]);

  const getBreedName = (imageUrl) => {
    if (imageUrl) {
      const parts = imageUrl.split("/");
      const breedWithSubBreed = parts[4];
      return breedWithSubBreed;
    }
    return null;
  };

  async function fetchDogImages() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const url = data.message;
      setDogUrl((prevUrls) => [...prevUrls, url]);
    } catch (error) {
      console.error("API fetch not successful");
    }
  }

  return (
    <>
      {<Card url={dogUrl} breed={dogBreedData} />}
    </>
  );
};

export default home;
