import { useEffect, useState } from "react";


const Catalog = () => {
const [dogsData, setDogsData] = useState([]);
const apiKey = '$2a$10$8K3jSWqqdbl2JXu/UwRGg.tIvhIJfmRhQWoVB3gudG0c5u.uO8iTW';

useEffect(() => {
    const headers = {
      'X-Master-Key': apiKey,
    };

    fetch('https://api.jsonbin.io/v3/b/650c38e212a5d37659810be8', {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {

        console.log('API Response:', data)

        if (data && data.record && Array.isArray(data.record)) {
          setDogsData(data.record);
        } else {
          console.error('API Response is not as expected:', data)
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiKey])



return (

    <section>
      <h3>The Dawgs</h3>
      <ul>
        {dogsData.map((dog, index) => (
          <li key={index}>
            <h4>{dog.name}</h4>
            <img src={dog.img}
             alt={dog.name}
             onClick={props.nextScreen} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Catalog;