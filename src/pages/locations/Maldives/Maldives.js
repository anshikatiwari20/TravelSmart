import './Maldives.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { MaldivesImages } from "../../../media/maldives/MaldivesImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/maldives/mport1.jpg";
import d2 from "../../../media/maldives/mport2.jpg";
import db1 from "../../../media/maldives/mbeach1.jpg";
import db2 from "../../../media/maldives/mbeach2.jpg";
import dh1 from "../../../media/maldives/mhotels1.jpg";
import dh2 from "../../../media/maldives/mhotels2.jpg";
import dp1 from "../../../media/maldives/mpack1.jpg";
import dp2 from "../../../media/maldives/mpack2.jpg";
import dp3 from "../../../media/maldives/mpack3.jpg";
import dp4 from "../../../media/maldives/mpack4.jpg";
import do1 from "../../../media/maldives/monly1.jpg";
import do2 from "../../../media/maldives/monly2.jpg";

export const Maldives=()=>{
    const placeInfo = [
      {
        placeName: "Maldives",
        tagline: "Always Natural",
        desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
      },
    ];
      const packageInfo = [
        {
          img: dp1,
          location: "Maldives",
          price: "INR 4999",
          desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp2,
          location: "Maldives",
          price: "INR 4999",
          desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp3,
          location: "Maldives",
          price: "INR 4999",
          desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp4,
          location: "Maldives",
          price: "INR 4999",
          desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
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
                  Maldives is open and ready to welcome you again to make new memories and experiences, with iconic resorts, chic beaches, luxury retreats, and unforgettable island getaways.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">B</span>eaches
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Maldives is open and ready to welcome you again to make new memories and experiences, with iconic beaches, luxury resorts, and serene islands.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={db2} alt={""} id="port2" />
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
              <img src={dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Maldives is open and ready to welcome you again to make new memories and experiences, with iconic resorts, luxury retreats, and island getaways.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Maldives
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Maldives is open and ready to welcome you again to make new memories and experiences, with iconic resorts, chic beaches, and island adventures.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            Enjoy a stay at a world-class resort or hotel that offers stunning ocean views, private beaches, and exclusive amenities designed for ultimate comfort and relaxation.
            </p>
            <p>
            Savor a wide range of exquisite culinary delights, including gourmet meals, international cuisines, and local specialties. Your dining experience will be as breathtaking as the surroundings.
            </p>
            <p>
            Embark on a guided tour of the Maldives' picturesque islands, indulge in water sports like snorkeling, scuba diving, and kayaking, or unwind on pristine beaches under the sun.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
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
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}