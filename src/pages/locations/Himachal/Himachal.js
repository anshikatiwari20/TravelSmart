import './Himachal.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/himachal/port1.jpg";
import d2 from "../../../media/himachal/port2.jpg";
import db1 from "../../../media/himachal/trek1.jpg";
import db2 from "../../../media/himachal/trek2.jpg";
import dc1 from "../../../media/himachal/nature1.jpg";
import dc2 from "../../../media/himachal/nature2.jpg";
import dh1 from "../../../media/himachal/hotel.jpg";
import dh2 from "../../../media/himachal/tea.jpg";
import dp1 from "../../../media/himachal/pack1.jpg";
import dp2 from "../../../media/himachal/pack2.jpg";
import dp3 from "../../../media/himachal/pack3.jpg";
import dp4 from "../../../media/himachal/pack4.jpg";
import do1 from "../../../media/himachal/onlyh1.jpg";
import do2 from "../../../media/himachal/onlyh2.jpg";

export const Himachal=()=>{
    const placeInfo = [
      {
        placeName: "Himachal",
        tagline: "The mountains are calling",
        desc: "Experience the majestic beauty of Himachal, with its snow-capped peaks, scenic valleys, and vibrant hill stations. Whether you're seeking adventure or serenity, Himachal offers it all. Start your journey now!",
      },
    ];
      const packageInfo = [
        {
          img: dp1,
          location: "Manali",
          price: "INR 4999",
          desc: "Discover the charm of Manali, known for its stunning landscapes, thrilling activities, and cozy retreats. Your perfect Himachal getaway begins here.",
        },
        {
          img: dp2,
          location: "Shimla",
          price: "INR 4999",
          desc: "Experience the colonial charm of Shimla, the Queen of Hills, with its cool climate, lush greenery, and rich history. A perfect destination for a peaceful vacation.",
        },
        {
          img: dp3,
          location: "Dharamshala",
          price: "INR 4999",
          desc: "Explore Dharamshala, home to Tibetan culture and surrounded by beautiful mountains. Perfect for meditation, trekking, and discovering peaceful surroundings.",
        },
        {
          img: dp4,
          location: "Spiti Valley",
          price: "INR 4999",
          desc: "Venture into the mystical Spiti Valley, known for its rugged terrain, ancient monasteries, and breathtaking landscapes. A hidden gem waiting for you.",
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
                  Himachal offers something for everyone—from scenic hill stations like Shimla to the adventure-filled Manali. It's the perfect place to unwind, explore, and create lasting memories.
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
                  Himachal offers some of the best trekking trails in India. From the famous Triund trek near Dharamshala to the challenging Bhrigu Lake trek in Manali, there's a trail for every adventure seeker.
                </p>
                <p>
                  Experience nature at its best, and enjoy breathtaking views of the mountains and valleys.
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
                  Himachal is blessed with abundant natural beauty. From the dense pine forests of Kullu to the alpine meadows of Manali, it’s a paradise for nature lovers. Visit the Rohtang Pass, enjoy scenic views, and immerse yourself in nature’s tranquility.
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
                  Himachal has a wide range of accommodations, from luxurious resorts in Manali to cozy homestays in Kullu. Experience comfort amidst the beautiful mountain landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Himachal
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
                  Himachal offers endless opportunities for adventure, relaxation, and cultural exploration. Whether it’s paragliding in Bir Billing, rafting in Kullu, or visiting ancient temples, Himachal has it all.
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
              Explore the breathtaking views of Himachal, enjoy thrilling treks, and immerse yourself in the local culture. From guided tours to transportation, we cover it all in your travel package.
            </p>
            <p>
              Set against the stunning backdrop of the Himalayas, Himachal invites you to experience a world of adventure, beauty, and serenity. Let us help you plan the perfect getaway with curated travel packages that include everything from transport to guided excursions
            </p>
            <p>
              Venture into the heart of Himachal for an unforgettable experience, with picturesque valleys, snow-capped mountains, and the best trekking spots. Our packages ensure a smooth journey, whether you're looking for a relaxing escape or an action-packed adventure.
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