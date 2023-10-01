import { useState, useEffect } from "react";
import "./styles/Catalog.css";

function Catalog() {
  const [dogs, setDogs] = useState([]);
  const [isUpdating, setIsUpdating] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683"
      );

      if (!response.ok) {
        throw Error("not working");
      }

      const data = await response.json();
      setDogs(data.record);
      setIsUpdating(false);
    } catch (error) {
      console.error("error", error);
      setIsUpdating(false);
    }
  };

  return (
    <div className="catalog">
      <h1 className="title">Our Dogs</h1>
      <br />
      <div className="catalogView">
        {isUpdating ? (
          <h2>Fetching list..</h2>
        ) : dogs.length === 0 ? (
          <h1>Not found</h1>
        ) : (
          dogs.map((dog) => (
            <div key={dog.chipNumber} className="dog">
              <img src={dog.img} alt={dog.name} />
              <h1>{dog.name}</h1>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;