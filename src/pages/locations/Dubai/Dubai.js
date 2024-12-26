import "./Dubai.css";
import { TravelCard } from "../../../components/locations/TravelCard";
import { DubaiImages } from "../../../media/dubai/d_images";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/dubai/portdubai1.jpg";
import d2 from "../../../media/dubai/portdubai2.jpg";
import db1 from "../../../media/dubai/dbeach1.jpg";
import db2 from "../../../media/dubai/dbeach2.jpg";
import dc1 from "../../../media/dubai/dculture1.jpg";
import dc2 from "../../../media/dubai/dculture2.jpg";
import dh1 from "../../../media/dubai/dhotel1.jpg";
import dh2 from "../../../media/dubai/dhotel2.jpg";
import dp1 from "../../../media/dubai/dpack1.jpg";
import dp2 from "../../../media/dubai/dpack2.jpg";
import dp3 from "../../../media/dubai/dpack3.jpg";
import dp4 from "../../../media/dubai/dpack4.jpg";
import do1 from "../../../media/dubai/onlydubai.jpg";
import do2 from "../../../media/dubai/onlydubai2.jpg";
export const Dubai = () => {
  const placeInfo = [
    {
      placeName: "Dubai",
      tagline: "The Land of Wonders",
      desc: "Explore Dubai, a city where luxury, innovation, and adventure come together. From iconic skyscrapers to vast deserts, discover a destination like no other!",
    },
  ];
  const packageInfo = [
    {
      img: dp1,
      location: "Dubai",
      price: "INR 4999",
      desc: "Immerse yourself in the wonders of Dubai, from world-class shopping to cultural experiences. Plan your perfect getaway today!",
    },
    {
      img: dp2,
      location: "Dubai",
      price: "INR 4999",
      desc: "Experience the beauty and grandeur of Dubai's landmarks, pristine beaches, and luxury resorts. Your dream vacation awaits!",
    },
    {
      img: dp3,
      location: "Dubai",
      price: "INR 4999",
      desc: "Dubai offers a blend of modernity and tradition. Explore its spectacular attractions, fine dining, and cultural wonders.",
    },
    {
      img: dp4,
      location: "Dubai",
      price: "INR 4999",
      desc: "Discover the magic of Dubai with its iconic landmarks, thrilling adventures, and unforgettable experiences. Start planning your trip now!",
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
                Dubai is ready to welcome you with its dazzling skyline, luxurious resorts, and thrilling desert safaris. Whether you're looking to relax or explore, Dubai offers an array of unforgettable experiences.
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
          <span id="fdiff">C</span>ultures
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
                  <span id="fdiff">B</span>est Cultures
                  <hr />
                </h2>
                <p>
                  Dubai's culture is a mix of modernity and tradition, influenced by Islamic values and Arabian customs. From the bustling souks to contemporary art galleries, Dubai offers a unique cultural experience.
                </p>
                <p>
                  Visitors can explore the rich heritage of the Emirati people, as well as enjoy the cosmopolitan lifestyle brought by the international influence.
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
                  Dubai is home to some of the world's most beautiful beaches, offering a perfect blend of sun, sand, and sea. Whether you're looking for relaxation or adventure, the beaches of Dubai will captivate you.
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
                  Dubai offers a wide range of luxury hotels, from opulent resorts to boutique hotels. Whether you want to stay near the beach, in the heart of the city, or in a peaceful desert resort, Dubai has something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Dubai
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
                  From visiting the Burj Khalifa to thrilling desert safaris and shopping in world-class malls, Dubai offers an endless list of activities for all types of travelers. Don't miss out on a Dubai Fountain show or a visit to the Dubai Museum!
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
              Experience the best of Dubai with guided city tours, luxury hotel stays, and personalized itineraries designed to make your vacation unforgettable.
            </p>
            <p>
              Enjoy all-inclusive packages that include thrilling adventures, cultural experiences, world-class dining, and much more. Get ready for an extraordinary journey!
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
  );
};
