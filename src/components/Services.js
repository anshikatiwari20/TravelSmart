import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info: "Find and book the most affordable and convenient flights to your favorite destinations, tailored to your preferences.",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info:"Get exclusive offers and unbeatable travel deals for flights, hotels, and activities, ensuring great value for your money.",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info:"Effortlessly plan your train journeys with quick and hassle-free railway ticket bookings.",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "Discover top-rated local cuisines and enjoy curated food and drink experiences wherever you travel.",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "Explore and book comfortable and budget-friendly hotels to suit all your travel needs.",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "Travel with peace of mind using real-time safety updates, secure booking options, and crowd density insights.",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
