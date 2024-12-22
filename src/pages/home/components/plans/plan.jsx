import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import creameImg from "./cream.jpg";
import blueImg from "./blue.jpg";
import blackImg from "./black.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./plan.css";

// Helper function to calculate complementary color
const getComplementaryColor = (hex) => {
  // Remove '#' if present
  const cleanHex = hex.replace("#", "");
  // Convert to RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  // Calculate complementary color
  const compR = (255 - r).toString(16).padStart(2, "0");
  const compG = (255 - g).toString(16).padStart(2, "0");
  const compB = (255 - b).toString(16).padStart(2, "0");
  return `#${compR}${compG}${compB}`;
};

const CarServiceSlider = () => {
  const plans = [
    {
      title: "Mechhelp LITE Plan",
      oprice: "₹2,999",
      price: "₹1,999",
      services: [
        "Engine Oil Change",
        "Oil Filter Replacement",
        "Tyre Pressure Check",
        "Battery Checking",
        "Air Filter Check",
        "Electrical Checkup",
      ],
      bgImage: creameImg,
      baseColor: "#f5deb3",
      selectedItem: "I choose Mech Lite plan which contains Engine oil change, Oil Filter Replacement, Tire Pressure Check, Air filter check, electrical checkup."
    },
    {
      title: "Mechhelp BASIC Plan",
      oprice: "₹3,999",

      price: "₹2,499",
      services: [
        "Engine Oil Change",
        "Oil Filter Replacement",
        "Tyre Pressure Check",
        "Battery Checking",
        "Air Filter Cleaning",
        "Wiper Fluid Top-up",
        "Coolant Top-up",
        "AC Filter Cleaning",
        "Front Brake Pad Checkup",
        "AC Cabin Cleaning",
        "General Checkup",
      ],
      bgImage: blueImg,
      baseColor: "#4682b4", 
      selectedItem: "I choose Mech Basic plan which contains Engine oil change, Oil Filter Replacement, Tire Pressure Check, Air filter check, electrical checkup, bush cleaning, washing. // Base color for the plan"
      // Base color for the plan
    },
    {
      title: "Mechhelp PRO Plan",
      price: "₹3,499",
      oprice: "₹4,999",
      services: [
        "Engine Oil Change",
        "Oil Filter Replacement",
        "Tyre Pressure Check",
        "Air Filter Replacement",
        "Electrical Checkup",
        "AC Filter Cleaning",
        "Coolant Top-up",
        "Brake Fluid Top-up",
        "Front Brake Pad",
        "AC Cabin Cleaning",
        "PRO Car Wash",
        "Internal Vacuum",
        "Battery Water Top-up",
        "Spark Plug Checkup",
        "General Checkup",
        "Door Lubrication",
      ],
      bgImage: blackImg,
      baseColor: "#000000", 
      selectedItem: "I choose Mech Pro plan which contains Engine oil change, Oil Filter Replacement, Tire Pressure Check, Air filter check, electrical checkup, and detailed cleaning."
      // Base color for the plan
    },
  ];

  return (
    <div className="car-service-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <PlanSlide plan={plan} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PlanSlide = ({ plan }) => {
  const [visibleServices, setVisibleServices] = useState(4);

  const toggleViewMore = () => {
    setVisibleServices((prev) => (prev === 4 ? plan.services.length : 4));
  };

  const complementaryColor = getComplementaryColor(plan.baseColor);

  return (
    <div
      className="car-service-offer"
      style={{
        backgroundImage: `url(${plan.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: complementaryColor,
      }}
    >
      <div className="text">
        <h1 className="offer-title">{plan.title}</h1>
        <p className="offer-subtitle" style={{ color: complementaryColor }}>
          Orignal Price: {plan.oprice}
        </p>
        <div className="price-section">
          <div className="plan-details">
            <span className="plan-title">{plan.title}</span>
            <h2 className="plan-price" style={{ color: complementaryColor }}>
              {plan.price}
            </h2>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="services-list">
          {plan.services.slice(0, visibleServices).map((service, i) => (
            <div key={i} className="service-item">
              {service}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button
            className="view-more-button"
            onClick={toggleViewMore}
            style={{
              backgroundColor: plan.baseColor,
              color: complementaryColor,
            }}
          >
            {visibleServices === 4 ? "View More" : "View Less"}
          </button>
          <button
            className="buy-now-button blink"
            style={{
              backgroundColor: plan.baseColor,
              color: complementaryColor,
            }}
            onClick={()=>{    
              var message = encodeURIComponent("Hi, I am interested in " + plan.selectedItem + ". Can you give more details?");
              var whatsappURL = "https://api.whatsapp.com/send?phone=9270199836&text=" + message;
              window.open(whatsappURL, '_blank');
          }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarServiceSlider;
