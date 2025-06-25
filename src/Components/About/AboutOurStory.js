import React from 'react';
import img1 from "../image/about-side-image.png"; 
import img2 from "../image/Services.png"; 
import img3 from "../image/Monthly.png";
import img4 from "../image/customer.png"; 
import img5 from "../image/Annual.png"; 

export default function AboutOurStory() {
  return (
    <div>
        <section className="our-story">
            <h2>Our Story</h2>
            <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
            </p>
            <p>
            Exclusive has more than 1 Million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer products.
            </p>
            <div className="story-image">
            <img src={img1} alt="Shopping Ladies" />
            </div>
        </section>
        <section className="stats">
            <div className="stat-box">
            <img src={img2} alt="Sellers" />
            <br /> 10.5k
            <br />
            Sellers active on our site
            </div>
            <div className="stat-box highlight">
            <img src={img3} alt="Monthly Sales" />
            <br /> 33k
            <br />
            Monthly Product Sale
            </div>
            <div className="stat-box">
            <img src={img4} alt="Customers" />
            <br /> 45.5k
            <br />
            Customers active on our site
            </div>
            <div className="stat-box">
            <img src={img5} alt="Annual Sales" />
            <br /> 25k
            <br />
            Annual gross sales on our site
            </div>
        </section>
    </div>
  )
}
