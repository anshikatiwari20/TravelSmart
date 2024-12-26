import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "himachal",
      info:  "Nestled in the heart of the Himalayas, Himachal Pradesh offers stunning landscapes, serene monasteries, and thrilling adventures like trekking and paragliding.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Known for its vibrant beaches, electrifying nightlife, and Portuguese heritage, Goa is the ultimate destination for fun and relaxation.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      info:  "Dubbed 'God's Own Country,' Kerala boasts tranquil backwaters, lush greenery, and rejuvenating Ayurvedic treatments.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "Explore the royal palaces, golden sand dunes, and colorful bazaars of Rajasthan for a glimpse into India’s regal past.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info:"A blend of modern luxury and traditional culture, Dubai is home to towering skyscrapers, desert safaris, and world-class shopping.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "europe",
      info:  "Discover the timeless charm of Europe with its historic landmarks, scenic countryside, and diverse cultures.",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "thailand",
      info: "Thailand offers golden beaches, ancient temples, and a vibrant street food culture for an unforgettable tropical getaway.",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "maldives",
      info:  "An island paradise, the Maldives is famous for its crystal-clear waters, luxurious resorts, and vibrant marine life.",
      img: maldives,
      price: "4000-5000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
