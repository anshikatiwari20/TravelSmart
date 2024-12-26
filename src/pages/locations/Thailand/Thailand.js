import './Thailand.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { ThailandImages } from "../../../media/thailand/ThailandImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/thailand/thaiport1.jpg";
import d2 from "../../../media/thailand/thaiport2.jpg";
import db1 from "../../../media/thailand/temple1.jpg";
import db2 from "../../../media/thailand/temple2.jpg";
import dh1 from "../../../media/thailand/hotel1.jpg";
import dh2 from "../../../media/thailand/hotel2.jpg";
import dp1 from "../../../media/thailand/pack1.jpg";
import dp2 from "../../../media/thailand/pack2.jpg";
import dp3 from "../../../media/thailand/pack3.jpg";
import dp4 from "../../../media/thailand/pack4.jpg";
import do1 from "../../../media/thailand/only1.jpg";
import do2 from "../../../media/thailand/only2.jpg";

export const Thailand=()=>{
    const placeInfo = [
      {
        placeName: "Thailand",
        tagline: "Same Same, But Different",
        desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
      },
    ];
      const packageInfo = [
        {
          img: dp1,
          location: "Thailand",
          price: "INR 4999",
          desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp2,
          location: "Thailand",
          price: "INR 4999",
          desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp3,
          location: "Thailand",
          price: "INR 4999",
          desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: dp4,
          location: "Thailand",
          price: "INR 4999",
          desc: "Discover Thailand, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                Thailand is open and ready to welcome you again to make new
                memories and experiences, with iconic temples, beautiful beaches,
                bustling markets, and tropical retreats.
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
          <span id="fdiff">T</span>hailand
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">M</span>ost visited temples
                  <hr />
                </h2>
                <p>
                  Wat Phra Kaew (Temple of the Emerald Buddha) – Located in Bangkok, this temple is considered Thailand’s most sacred. It houses the Emerald Buddha, a revered statue of the Buddha carved from a single block of jade. The temple is part of the Grand Palace and attracts millions of visitors each year.
                </p>
                <p>
                  Wat Pho (Temple of the Reclining Buddha) – Also located in Bangkok, Wat Pho is famous for its giant reclining Buddha statue, which is 46 meters long. It's one of the oldest temples in the city and is a center for traditional Thai massage.
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
                Whether you're looking for luxury resorts, beachfront villas, or
                budget-friendly hotels, Thailand has something to offer for every
                traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Thailand
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
                From exploring ancient temples to enjoying thrilling water sports
                and vibrant night markets, Thailand offers something for every
                traveler. Experience the culture, adventure, and relaxation all in
                one place.
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
            Explore Thailand's rich cultural heritage with guided tours to ancient temples, royal palaces, and vibrant markets.
            </p>
            <p>
            Unwind on the world-famous beaches like Phuket, Krabi, and Koh Samui, known for their crystal-clear waters and stunning coastal views.
            </p>
            <p>
            Experience the incredible flavors of Thai food through culinary tours, cooking classes, and street food tastings, from Pad Thai to Tom Yum Soup.
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