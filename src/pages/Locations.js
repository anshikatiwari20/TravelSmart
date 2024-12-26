import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import russia from "../media/russia.jpg";
import srilanka from "../media/srilanka.jpg";
import dubai from "../media/dubai.jpg";
import gujrat from "../media/gujrat.jpg";
import delhi from "../media/delhi.jpg";
import chennai from "../media/chennai.jpg";
import uttarakhand from "../media/uttarakhand.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/maldivesbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    {
      place: "delhi",
      info:"The heart of India, Delhi offers iconic landmarks like the Red Fort, Qutub Minar, and India Gate, alongside bustling markets and rich street food.",
      img: delhi,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "Known for its golden beaches, vibrant nightlife, and Portuguese heritage, Goa is perfect for a fun-filled tropical getaway.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "himachal",
      info: "A haven for nature and adventure lovers, Himachal Pradesh offers serene hill stations like Shimla and Manali, along with thrilling treks.",
      img: himachal,
      price: "4000-5000 INR",
    },
    {
      place: "kerala",
      info: "From the tranquil backwaters of Alleppey to the vibrant culture of Kochi, Kerala is a perfect blend of natural beauty, rich heritage, and serene landscapes.",
      img: kerala,
      price: "4000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "The land of kings, Rajasthan boasts majestic palaces, vibrant festivals, and the endless beauty of the Thar Desert.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    {
      place: "uttarakhand",
      info: "Known for its spiritual destinations like Rishikesh and Haridwar, Uttarakhand also offers thrilling adventures in places like Auli and Nainital.",
      img: uttarakhand,
      price: "4000-5000 INR",
    },
    {
      place: "dubai",
      info:  "A dazzling city of innovation, Dubai offers iconic landmarks like the Burj Khalifa, luxury shopping, and exciting desert safaris.",
      img: dubai,
      price: "4000-5000 INR",
    },
    {
      place: "jammu",
      info:  "Known as the gateway to heaven, Jammu is a land of picturesque landscapes, ancient temples, and a spiritual aura.",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "gujrat",
      info: "Explore Gujarat’s architectural marvels like the Sun Temple and Rani Ki Vav, and experience its rich culture during Navratri.",
      img: gujrat,
      price: "4000-5000 INR",
    },
    {
      place: "chennai",
      info: "A vibrant mix of tradition and modernity, Chennai is known for its beautiful Marina Beach, ancient temples, and mouth-watering South Indian cuisine.",
      img: chennai,
      price: "4000-5000 INR",
    },
    {
      place: "europe",
      info:  "From the Eiffel Tower in Paris to the charming canals of Venice, Europe offers a perfect blend of culture, history, and scenic beauty.",
      img: europe,
      price: "4000-5000 INR",
    },
    {
      place: "thailand",
      info:  "With tropical beaches, rich cultural heritage, and vibrant street markets, Thailand is a traveler’s paradise.",
      img: thailand,
      price: "4000-5000 INR",
    },
    {
      place: "maldives",
      info: "Experience luxury at its best in the Maldives, with overwater bungalows, turquoise waters, and colorful coral reefs.",
      img: maldives,
      price: "4000-5000 INR",
    },
    {
      place: "Russia",
      info: "From the grand architecture of the Kremlin to the cultural heritage of St. Petersburg, Russia is a land of rich history, majestic landscapes, and timeless beauty.",
      img: russia,
      price: "15000-25000 INR",
    },
    {
      place: "Sri Lanka",
      info: "A tropical paradise with pristine beaches, lush rainforests, and ancient temples, Sri Lanka offers a blend of natural beauty and cultural heritage.",
      img: srilanka,
      price: "10000-15000 INR",
    }
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
