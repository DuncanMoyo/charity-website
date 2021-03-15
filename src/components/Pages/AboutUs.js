import "../Cards/Cards.css";
import aboutUsData from "../data/aboutUsData";

const AboutUs = () => {
  const {
    aboutUsContent,
    aboutUsContentContinued,
    aboutUsIntroPicture,
    aboutUsTitle,
    theTeam,
  } = aboutUsData;

  return (
    <>
      <div className="about-us"></div>
      <h1 className='text'>About Alakhe</h1>
      <div className="body">
        <div className="container">
          <div className="card">
            <div className="imgBox">
              <img src={aboutUsIntroPicture} alt="women" />
            </div>
            <div className="content">
              <h1>{aboutUsTitle}</h1>
              <p>{aboutUsContent}</p>
              <br />
              <p>{aboutUsContentContinued}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text'>Meet the Team</h1>

      {theTeam.map(({ name, aboutHer, herPicture }) => {
        return (
          <div key={name} className="body">
            <div className="container">
              <div className="card">
                <div className="imgBox">
                  <img src={herPicture} alt="careerWomen" />
                </div>
                <div className="content">
                  <h1>{name}</h1>
                  <p>{aboutHer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AboutUs;
