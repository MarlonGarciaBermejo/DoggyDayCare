import React from "react";

function DogDetails({ dog }) {
  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <img src={dog.img} alt={dog.name} />
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <p>Description: {dog.description}</p>
    </div>
  );
}

export default DogDetails;