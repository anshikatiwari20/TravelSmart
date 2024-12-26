import './Rajasthan.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { RajasthanImages } from "../../../media/rajasthan/RajasthanImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
// Directly importing images
import d1 from "../../../media/rajasthan/port1.jpg";
import d2 from "../../../media/rajasthan/port2.jpg";
import db1 from "../../../media/rajasthan/fam1.jpg";
import db2 from "../../../media/rajasthan/fam2.jpg";
import dc1 from "../../../media/rajasthan/cult1.jpg";
import dc2 from "../../../media/rajasthan/cult2.jpg";
import dh1 from "../../../media/rajasthan/food1.jpg";
import dh2 from "../../../media/rajasthan/food2.jpg";
import dp1 from "../../../media/rajasthan/pack1.jpg";
import dp2 from "../../../media/rajasthan/pack2.jpg";
import dp3 from "../../../media/rajasthan/pack3.jpg";
import dp4 from "../../../media/rajasthan/pack4.jpg";
import do1 from "../../../media/rajasthan/only1.jpg";
import do2 from "../../../media/rajasthan/only2.jpg";

export const Rajasthan=()=>{
    const placeInfo = [
      {
        placeName: "Rajasthan",
        tagline: "Padharo mhare desh",
        desc: "Discover Rajasthan, with its magnificent forts, palaces, and vibrant culture. Explore the majestic Thar desert, experience the royal lifestyle, and start planning your unforgettable trip now!",
      },
    ];
      const packageInfo = [
        {
          img: dp1,
          location: "Jaipur",
          price: "INR 4999",
          desc: "Experience the Pink City with its regal palaces and forts. Dive into Jaipur’s vibrant culture and rich heritage while enjoying royal hospitality.",
        },
        {
          img: dp2,
          location: "Udaipur",
          price: "INR 6999",
          desc: "Explore Udaipur’s romantic lakes and beautiful palaces, known as the Venice of the East. A blend of history and scenic beauty awaits you.",
        },
        {
          img: dp3,
          location: "Jodhpur",
          price: "INR 4999",
          desc: "Explore the blue city of Jodhpur, famous for its Mehrangarh Fort, vibrant markets, and blue-painted houses. A unique blend of architecture and culture.",
        },
        {
          img: dp4,
          location: "Jaisalmer",
          price: "INR 5999",
          desc: "Visit the Golden City of Jaisalmer, with its vast sand dunes and historic forts. Experience the allure of Rajasthan’s desert culture.",
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
                  Rajasthan is calling! From royal palaces to desert safaris, explore Rajasthan’s rich history, beautiful landscapes, and majestic architecture. Let’s make your dream trip a reality.
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
                  <span id="fdiff">D</span>iscover new cultures
                  <hr />
                </h2>
                <p>
                Rajasthan is home to a rich tapestry of cultural traditions including folk music, dance, art, and crafts. Explore the local markets, vibrant festivals, and experience the essence of Rajasthan’s artistic legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">F</span>amous
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
                From the majestic palaces of Jaipur to the desert city of Jaisalmer, Rajasthan offers a mix of history, culture, and natural beauty, making it one of the best places to explore in India.
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
          <span id="fdiff">F</span>ood
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
                  <span id="fdiff">I</span>nteresting foods to try 
                  <hr />
                </h2>
                <p>
                Rajasthan is famous for its rich and flavorful cuisine, including dishes like Dal Baati Churma, Gatte ki Sabzi, and Laal Maas. Don’t miss the traditional sweets like Ghevar and Mawa Kachori.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Rajasthan
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
                Experience the magic of Rajasthan with a desert safari, explore majestic forts like Mehrangarh, visit the tranquil lakes of Udaipur, and stay in heritage haveli-style resorts for a truly royal experience.
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
            Rajasthan is a land of majestic forts, beautiful palaces, and vibrant culture. Your journey through this royal state will include breathtaking stays in heritage hotels, a taste of local hospitality, and access to the rich history and traditions that make Rajasthan one of India's most captivating destinations.
            </p>
            <p>
            Experience luxurious accommodations in historic haveli-style resorts, where every corner tells a story of Rajasthan's regal past. From royal tents in the desert to heritage palaces overlooking tranquil lakes, enjoy comfort combined with culture.
            </p>
            <p>
            Explore Rajasthan's culinary delights with traditional Rajasthani dishes like Dal Baati Churma, Gatte ki Sabzi, and delicious sweets like Ghevar and Churma. You'll have the opportunity to savor authentic local cuisine at traditional eateries and royal feasts fit for royalty.
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