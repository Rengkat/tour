import React, { useEffect, useState } from "react";
import Loading from "./loading";
import TourTemplate from "./tourTemplate";

const api = "https://course-api.com/react-tours-project";

function FetData() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleClick = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };
  const fetchTour = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(api);
      const result = await response.json();
      setTours(result);
      setIsLoading(false);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchTour();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main className="w-full text-center my-24 mx-auto flex-col">
        <h1 className="font-bold text-2xl">No Tours Left</h1>
        <button
          onClick={() => fetchTour()}
          className="border-2 border-black py-2 inline-block mt-5 px-4 hover:bg-black hover:text-white shadow-md">
          Refresh
        </button>
      </main>
    );
  }
  return (
    <div>
      <TourTemplate tours={tours} handleClick={handleClick} />
    </div>
  );
}

export default FetData;
