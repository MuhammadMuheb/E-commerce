import React, { useState ,useEffect} from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

export default function NewArrival() {
  const navigate = useNavigate();
  const [newarrival, setNewarrival] = useState([]);
  
     useEffect(() => {
  fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/newArrival.json")
    .then((response) => response.json())
    .then((result) => {
      const convertedArray = Object.values(result);
      setNewarrival(convertedArray);
    });
}, []);

  return (
    <div className="NewArrival">
      <div className="featured">
        <p>Featured</p>
        <h1>New Arrival</h1>
      </div>
      <div className="NewArrival-Container">
        {newarrival.map((item) => (
          <div key={item.id} className={`NewArrival-Card ${item.size}`}>
            <img 
            src={`${process.env.PUBLIC_URL}/images/${item.image}` || ""} 
            alt={item.title}  
            onClick={() =>
              navigate(`/product/${item.id}`, {
                state: { product: item },
              })
            }
            />
            <div className="NewArrival-Info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="/women-fashion"><button>Shop Now</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
