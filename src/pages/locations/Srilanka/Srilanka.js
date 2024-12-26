import './Srilanka.css';
import { TravelCard } from "../../../components/locations/TravelCard";
import { SrilankaImages } from "../../../media/srilanka/SrilankaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

// Directly importing images for Sri Lanka
import d1 from "../../../media/srilanka/port1.jpg";
import d2 from "../../../media/srilanka/port2.jpg";
import db1 from "../../../media/srilanka/beach1.jpg";
import db2 from "../../../media/srilanka/beach2.jpg";
import dc1 from "../../../media/srilanka/cult1.jpg";
import dc2 from "../../../media/srilanka/cult2.jpg";
import dh1 from "../../../media/srilanka/hotel1.jpg";
import dh2 from "../../../media/srilanka/hotel2.jpg";
import dp1 from "../../../media/srilanka/pack1.jpg";
import dp2 from "../../../media/srilanka/pack2.jpg";
import dp3 from "../../../media/srilanka/pack3.jpg";
import dp4 from "../../../media/srilanka/pack4.jpg";
import do1 from "../../../media/srilanka/food1.jpg";
import do2 from "../../../media/srilanka/food2.jpg";

export const Srilanka = () => {
  const placeInfo = [
    {
      placeName: "Sri Lanka",
      tagline: "The Pearl of the Indian Ocean",
      desc: "Explore the beautiful island of Sri Lanka, with its pristine beaches, rich culture, and diverse landscapes. From historical sites to natural wonders, it's a paradise for every traveler.",
    },
  ];

  const packageInfo = [
    {
      img: dp1,
      location: "Sri Lanka",
      price: "INR 4999",
      desc: "Explore Sri Lanka, with its scenic beaches and a rich cultural heritage. Discover the best destinations and plan your trip today!",
    },
    {
      img: dp2,
      location: "Sri Lanka",
      price: "INR 4999",
      desc: "Sri Lanka offers a perfect blend of adventure and relaxation. Whether you’re exploring ancient temples or relaxing by the beach, there’s something for everyone.",
    },
    {
      img: dp3,
      location: "Sri Lanka",
      price: "INR 4999",
      desc: "Take a trip to Sri Lanka and experience its vibrant culture, with stunning beaches, delicious food, and unforgettable moments.",
    },
    {
      img: dp4,
      location: "Sri Lanka",
      price: "INR 4999",
      desc: "From beach parties to peaceful retreats, Sri Lanka has it all. Plan your next adventure with our tailored packages.",
    },
  ];

  return (
    <>
      <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                  Sri Lanka awaits with its beautiful beaches, historic temples, and vibrant culture. Plan your visit and explore all that this paradise island has to offer.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={d1} alt="Port of Sri Lanka" id="port1" />
            </div>
            <div className="img2">
              <img src={d2} alt="Sri Lanka Port" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">T</span>reks
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={dc1} alt="Cultural Sites in Sri Lanka" id="port1" />
            </div>
            <div className="img2">
              <img src={dc2} alt="Sri Lankan Cultural Treks" id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Trekking Camps
                  <hr />
                </h2>
                <p>
                  Sri Lanka offers a range of trekking experiences, from lush rainforests to ancient temples. It's a destination where adventure meets history.
                </p>
                <p>
                  The diverse landscapes of Sri Lanka make it an ideal place for nature lovers and adventure seekers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">N</span>ature
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Beaches to Visit
                  <hr />
                </h2>
                <p>
                  Sri Lanka's beaches are famous for their stunning beauty. Whether you're looking for a bustling beach or a quiet retreat, you'll find the perfect spot.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={db1} alt="Sri Lanka Beaches" id="port1" />
            </div>
            <div className="img2">
              <img src={db2} alt="Beautiful Sri Lankan Beach" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={dh1} alt="Luxury Hotels in Sri Lanka" id="port1" />
            </div>
            <div className="img2">
              <img src={dh2} alt="Sri Lankan Hotel Rooms" id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op Hotels for You
                  <hr />
                </h2>
                <p>
                  Sri Lanka offers a variety of accommodations to suit every budget, from luxury resorts to cozy guesthouses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Sri Lanka
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting Things to Do
                  <hr />
                </h2>
                <p>
                  From exploring ancient temples to experiencing Sri Lanka's diverse wildlife, there's something unique for every traveler here.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={do1} alt="Sri Lanka Food" id="port1" />
            </div>
            <div className="img2">
              <img src={do2} alt="Sri Lankan Cuisine" id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's Included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
              Our packages offer everything you need for a seamless trip to Sri Lanka – from accommodation to sightseeing.
            </p>
            <p>
              Whether you're looking for a luxurious stay or a budget-friendly option, we've got you covered with amazing deals.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best Deals for You</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your Tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt="Contact Us" id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book Your Tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book Now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
