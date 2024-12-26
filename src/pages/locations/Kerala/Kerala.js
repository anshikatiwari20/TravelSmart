import './Kerala.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { KeralaImages } from "../../../media/kerala/KeralaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images for Kerala
import d1 from "../../../media/kerala/port1.jpg";
import d2 from "../../../media/kerala/port2.jpg";
import db1 from "../../../media/kerala/beach1.jpg";
import db2 from "../../../media/kerala/beach2.jpg";
import dc1 from "../../../media/kerala/cult1.jpg";
import dc2 from "../../../media/kerala/cult2.jpg";
import dh1 from "../../../media/kerala/hotel1.jpg";
import dh2 from "../../../media/kerala/hotel2.jpg";
import dp1 from "../../../media/kerala/pack1.jpg";
import dp2 from "../../../media/kerala/pack2.jpg";
import dp3 from "../../../media/kerala/pack3.jpg";
import dp4 from "../../../media/kerala/pack4.jpg";
import do1 from "../../../media/kerala/food1.jpg";
import do2 from "../../../media/kerala/food2.jpg";

export const Kerala=()=>{
    const placeInfo = [
      {
        placeName: "Kerala",
        tagline: "God's Own Country",
        desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
      },
    ];
      const packageInfo = [
        {
          img: dp1,
          location: "Kerala",
          price: "INR 4999",
          desc: "Explore the serene backwaters of Kerala, with exclusive houseboat experiences and beautiful beaches. Immerse yourself in the local culture and natural beauty, creating memories that will last a lifetime.",
        },
        {
          img: dp2,
          location: "Kerala",
          price: "INR 4999",
          desc: "Discover Kerala's hidden gems, from the lush hills of Munnar to the tranquil backwaters. Enjoy curated tours that blend relaxation and adventure in the lap of nature.",
        },
        {
          img: dp3,
          location: "Kerala",
          price: "INR 4999",
          desc: "Take a journey through Kerala's breathtaking landscapes, with activities like trekking, wildlife safaris, and visits to cultural landmarks. Kerala’s rich culture and natural beauty await your exploration.",
        },
        {
          img: dp4,
          location: "Kerala",
          price: "INR 4999",
          desc: "Embrace the warmth of Kerala, its peaceful beaches, vibrant culture, and delectable cuisine. Plan your perfect getaway with our all-inclusive travel packages tailored to your needs.",
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
                  Kerala is a tropical paradise known for its backwaters, beaches, and lush greenery. From its tranquil hill stations to its lively festivals, Kerala is ready to welcome you with open arms. Plan your trip and immerse yourself in its natural beauty and culture.
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
          <span id="fdiff">N</span>ature
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
                  <span id="fdiff">N</span>ature at its best
                  <hr />
                </h2>
                <p>
                  Kerala's culture is a blend of traditions and modern influences. The rich cultural heritage, reflected in its music, dance forms (like Kathakali), and festivals (such as Onam), provides a deep dive into the state's soul. Experience Kerala’s folklore and crafts, an integral part of its charm.
                </p>
                <p>
                  Kerala’s festivals, with their vibrant celebrations, are a reflection of the region's deep-rooted traditions. Don’t miss out on witnessing the spectacular performances and rituals that make the state so unique.
                </p>
              </div>
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
                  Kerala is home to some of the most beautiful beaches in India. From the popular Kovalam Beach to the serene Varkala Beach, enjoy the golden sands and clear waters that make Kerala a beach lover's paradise.
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
          <span id="fdiff">T</span>emples
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
                  <span id="fdiff">F</span>amous temples
                  <hr />
                </h2>
                <p>
                  Kerala is also famous for its temples, each holding cultural and spiritual significance. Visit the Sree Padmanabhaswamy Temple, a marvel of architecture, or the famed Guruvayur Temple, known for its devotion and traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">F</span>ood
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting foods to try
                  <hr />
                </h2>
                <p>
                  Kerala’s cuisine is a delightful fusion of flavors. From the iconic Kerala Sadya (a traditional feast) to fresh seafood and spicy curries, the state's food is as varied as its culture. Be sure to try the unique appams, puttu, and Kerala-style fish curry.
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
              Kerala offers an unforgettable experience with its cultural richness, natural beauty, and warm hospitality. From guided tours to transportation, our packages include everything to make your trip smooth and memorable.
            </p>
            <p>
              Whether you're exploring the backwaters, trekking through the Western Ghats, or relaxing on its beaches, every moment in Kerala promises a fresh adventure. Let us take care of the details so you can fully immerse yourself in the experience.
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