import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function AboutMeetOurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch Team Members Data
  useEffect(() => {
    fetch("https://e-commerce-app-33918-default-rtdb.firebaseio.com/teammembers.json")
    .then((response) =>{
      response.json().then((result) => {
        setTeamMembers(result);
      })
    }) 
  }, []);

  // TeamMember Component
  const TeamMember = ({ name, role, image, twitterIcon, instagramIcon, linkedinIcon }) => (
    <div className="team-member">
      <img src={`/images/${image}`} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="social-icons">
        <i className={twitterIcon}></i>
        <i className={instagramIcon}></i>
        <i className={linkedinIcon}></i>
      </div>
    </div>
  );

  return (
    <div className="team-section">
      <div className="team">
        <h2>Meet Our Team</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={teamMembers.length >= 3} // Loop تب ہی ہوگا جب slides کافی ہوں
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.length > 0
            ? [...teamMembers, ...teamMembers].map((member, index) => (
                <SwiperSlide key={index}>
                  <TeamMember {...member} />
                </SwiperSlide>
              ))
            : <p>Loading...</p>}
        </Swiper>

      </div>
    </div>
  );
}
