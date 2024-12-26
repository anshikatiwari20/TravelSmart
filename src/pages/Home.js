import "./Home.css";
import { Link } from "react-router-dom";
import bgvideo from "../media/evening-bg.mp4";
import { Services } from "../components/Services";
import { BookSection } from "../components/BookSection";
import { PackageSection } from "../components/PackageSection";
import { ContInfo } from "../components/ContInfo";

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home" id="home">
          <div className="content">
            <h3>
            Where smart travel meets seamless adventures
            </h3>
            <p>Your Journey, Perfectly Planned</p>
            <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer"><button className="exp-btn">Plan your trip here!</button></a>
            
          </div>

          <div className="video-container">
            <video src={bgvideo} id="video-slider" loop autoPlay muted></video>
          </div>
        </section>
      </div>
      <BookSection />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" />
    </>
  );
};
