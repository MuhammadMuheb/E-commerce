import React, { useEffect, useState } from 'react';

export default function AboutFeatures() {
  const [features, setFeatures] = useState([]);

  // Fetch Features Data
  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/features.json")
    .then((response) =>{
      response.json().then((result) => {
        setFeatures(result);
      })
    })  
  }, []);

  return (
    <div>
      <section className="features">
        {features.map((feature) => (
          <div key={feature.id}>
            <img src={`/images/${feature.image}` || ""} alt={feature.title} />
            <br />
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
