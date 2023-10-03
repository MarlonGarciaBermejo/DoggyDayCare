import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/Catalog.css';

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
        throw Error("Failed to fetch data");
      }

      const data = await response.json();
      setDogs(data.record);
      setIsUpdating(false);
    } catch (error) {
      console.error("Error:", error);
      setIsUpdating(false);
    }
  };

  return (
    <div className="catalog">
      <h1 className="title">Our <span className="spanColor">Dogs</span></h1>
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
              <h1 className="dogColor">{dog.name}</h1>
              <div className="dog-info"> 
              <p><strong>Chip Number:</strong> {dog.chipNumber}</p>
                <p><strong>Breed:</strong> {dog.breed}</p>
                <p><strong>Sex:</strong> {dog.sex}</p>
                <p><strong>Age:</strong> {dog.age}</p>
                <p><strong>Owner:</strong> {dog.owner.name} {dog.owner.lastName}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Catalog;
