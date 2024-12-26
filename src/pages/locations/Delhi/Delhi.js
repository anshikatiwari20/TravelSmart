import './Delhi.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { DelhiImages } from "../../../media/delhi/DelhiImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/delhi/port1.jpg";
import d2 from "../../../media/delhi/port2.jpg";
import db1 from "../../../media/delhi/arch1.jpg";
import db2 from "../../../media/delhi/arch2.jpg";
import dc1 from "../../../media/delhi/culture1.jpg";
import dc2 from "../../../media/delhi/culture2.jpg";
import dh1 from "../../../media/delhi/hotel1.jpg";
import dh2 from "../../../media/delhi/hotel2.jpg";
import dp1 from "../../../media/delhi/pack1.jpg";
import dp2 from "../../../media/delhi/pack2.jpg";
import dp3 from "../../../media/delhi/pack3.jpg";
import dp4 from "../../../media/delhi/pack4.jpg";
import do1 from "../../../media/delhi/only1.jpg";
import do2 from "../../../media/delhi/only2.jpg";

export const Delhi=()=>{
  const placeInfo = [
    {
        placeName: "Delhi",
        tagline: "Dildaar Dilli",
        desc: "Discover Delhi, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
];
const packageInfo = [
    {
        img: dp1,
        location: "Delhi",
        price: "INR 4999",
        desc: "Explore the diverse heritage of Delhi with custom-made travel packages to make your experience unforgettable.",
    },
    {
        img: dp2,
        location: "Delhi",
        price: "INR 4999",
        desc: "Discover the bustling markets, ancient monuments, and lively streets of Delhi with our affordable packages.",
    },
    {
        img: dp3,
        location: "Delhi",
        price: "INR 4999",
        desc: "Plan your trip to Delhi, where history meets modern charm. From the Red Fort to India Gate, explore it all.",
    },
    {
        img: dp4,
        location: "Delhi",
        price: "INR 4999",
        desc: "Get to know the culture and vibrancy of Delhi through personalized travel experiences. Book now and explore!",
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
                Delhi welcomes you with its blend of ancient history and modern experiences. From historical landmarks to vibrant street markets, there’s something for everyone.
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
          <span id="fdiff">C</span>ulture
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
                  <span id="fdiff">D</span>iscover new cultures 
                  <hr />
                </h2>
                <p>
                  Delhi’s culture is a rich blend of traditional and contemporary influences. Its festivals, food, music, and architecture are a reflection of India’s diverse heritage.
                </p>
                <p>
                  From the vibrant celebrations of Diwali to the rhythmic beats of classical dance forms, Delhi showcases the soul of India.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">A</span>rchitecture
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">A</span>rchitecture at its best
                  <hr />
                </h2>
                <p>
                Delhi is home to some of the most iconic architectural landmarks in India, including the Lotus Temple, Qutub Minar, and Jama Masjid, reflecting its rich history and cultural diversity.
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
                Delhi offers a range of accommodations from luxurious five-star hotels to budget-friendly options, ensuring every traveler finds their perfect stay.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Delhi
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
                Delhi is unique for its fusion of modern infrastructure and ancient monuments. Explore its vast markets, historical sites, and vibrant street food culture.
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
            Immerse yourself in the colorful chaos of Delhi, where history and modernity live side by side. From historical monuments like the Red Fort to modern architectural wonders like the Akshardham Temple, Delhi has it all.
            </p>
            <p>
            Whether you’re here for the shopping, the food, or the history, Delhi will leave you with memories that last a lifetime.
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