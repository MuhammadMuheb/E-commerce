import React from "react";
import { SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TeamMember({ name, role, image, twitterIcon, instagramIcon, linkedinIcon }) {
  return (
    <SwiperSlide className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <FontAwesomeIcon className="icon" icon={twitterIcon} />
      <FontAwesomeIcon className="icon" icon={instagramIcon} />
      <FontAwesomeIcon className="icon" icon={linkedinIcon} />
    </SwiperSlide>
  );
}

export default TeamMember;
