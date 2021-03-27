import "../Cards/Cards.css";
import { aboutUsData, womenDirectors } from "../data/aboutUsData";
import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";

const AboutUs = () => {
  const {
    aboutUsContent,
    aboutUsContentContinued,
    aboutUsIntroPicture,
    aboutUsTitle,
  } = aboutUsData;

  return (
    <>
      <div className="about-us"></div>
      <h1 className="text">About Alakhe</h1>
      <div className="body">
        <div className="container">
          <div style={{ borderRadius: "10px" }} className="card">
            <div className="imgBox">
              <img src={aboutUsIntroPicture} alt="women" />
            </div>
            <div className="content">
              <h1>{aboutUsTitle}</h1>
              <p style={{ marginTop: "15px" }}>{aboutUsContent}</p>
              <br />
              <p>{aboutUsContentContinued}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text">Meet the Team</h1>

      {womenDirectors.map(({ id, header, description, image }) => {
        return (
          <div key={id} className="mobile">
            <div className="body">
              <div className="container">
                <div style={{ borderRadius: "10px" }} className="card">
                  <div className="imgBox">
                    <img src={image} alt="careerWomen" />
                  </div>
                  <div className="content">
                    <h1>{header}</h1>
                    <p style={{ marginTop: "15px" }}>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="computer">
        <div className="cards__container">
          
            <div className="cards__items">
              <CardView
                items={womenDirectors}
                activeColor="#000"
                imageHeight="100%"
                imageWidth="100%"
              />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default AboutUs;
