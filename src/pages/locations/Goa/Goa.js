import './Goa.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/goa/port1.jpg";
import d2 from "../../../media/goa/port2.jpg";
import db1 from "../../../media/goa/beach1.jpg";
import db2 from "../../../media/goa/beach2.jpg";
import dc1 from "../../../media/goa/cult1.jpg";
import dc2 from "../../../media/goa/cult2.jpg";
import dh1 from "../../../media/goa/hotel1.jpg";
import dh2 from "../../../media/goa/hotel2.jpg";
import dp1 from "../../../media/goa/pack1.jpg";
import dp2 from "../../../media/goa/pack2.jpg";
import dp3 from "../../../media/goa/pack3.jpg";
import dp4 from "../../../media/goa/pack4.jpg";
import do1 from "../../../media/goa/food1.jpg";
import do2 from "../../../media/goa/food2.jpg";

export const Goa=()=>{
    const placeInfo = [
      {
        placeName: "Goa",
        tagline: "The beaches are calling",
        desc: "Experience the vibrant culture and picturesque beaches of Goa. From lively nightlife to serene beaches, there's something for every traveler.",
      },
      ];
      const packageInfo = [
        {
          img: dp1,
          location: "Goa",
          price: "INR 4999",
          desc: "Explore Goa, with pristine beaches and a rich cultural heritage. Discover the best destinations and plan your trip today!",
        },
        {
          img: dp2,
          location: "Goa",
          price: "INR 4999",
          desc: "Goa offers a perfect blend of adventure and relaxation. Whether you’re exploring historical forts or enjoying a sunset on the beach, there’s something for everyone.",
        },
        {
          img: dp3,
          location: "Goa",
          price: "INR 4999",
          desc: "Take a trip to Goa and experience its vibrant atmosphere, with stunning beaches, delicious food, and unforgettable moments.",
        },
        {
          img: dp4,
          location: "Goa",
          price: "INR 4999",
          desc: "From beach parties to peaceful retreats, Goa has it all. Plan your next adventure with our tailored packages.",
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
                  Goa is waiting for you with its beautiful beaches, historic forts, and a lively cultural scene. Plan your visit and enjoy the best of this coastal paradise!
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
        <h2 className="heading" id="cultures">
          <span id="fdiff">T</span>reks
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Trekking camps 
                  <hr />
                </h2>
                <p>
                  Goa is known for its unique blend of Indian and Portuguese influences. From the vibrant festivals to the colorful streets, Goa offers a rich cultural experience.
                </p>
                <p>
                  The cuisine, music, and dance of Goa reflect its diverse cultural history, with influences from Hindu, Portuguese, and Catholic traditions.
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
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Goa is home to some of India's most famous beaches. From the lively beaches of Baga to the peaceful shores of Palolem, there's a beach for every mood.
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
                  Goa offers a wide range of accommodations, from luxurious beach resorts to cozy guesthouses. Whether you're looking for a relaxing getaway or an adventure-filled stay, you'll find the perfect place to stay in Goa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Goa
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
                  From visiting ancient forts to indulging in water sports, Goa offers a variety of experiences that cater to all types of travelers. Explore the vibrant markets, enjoy the coastal cuisine, or just relax by the beach.
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
              Enjoy a hassle-free holiday with our packages that include everything you need for a relaxing trip to Goa. From hotel stays to sightseeing, we’ve got you covered!
            </p>
            <p>
              From cozy beach resorts to thrilling water sports, our Goa packages cover it all. Enjoy a stress-free holiday with all the essentials arranged for your perfect getaway!
            </p>
            <p>
              Escape to Goa with our thoughtfully curated packages, offering comfortable stays, exciting tours, and unforgettable experiences. Your perfect vacation awaits!
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