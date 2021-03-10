import CardItems from "./CardItems";
import "./Cards.css";
import ImageOne from "../../assets/images/ImageOne.jpg";
import ImageTwo from "../../assets/images/ImageTwo.jpg";
import ImageThree from "../../assets/images/ImageThree.jpg";
import ImageFive from "../../assets/images/ImageFive.jpg";
import ImageFour from "../../assets/images/ImageFour.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Causes we are serving</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={ImageOne}
              text="What led us to start this organisation"
              label="News"
              path="/services"
            />
            <CardItems
              src={ImageTwo}
              text="Record Donations of Food Stuffs"
              label="Food"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={ImageThree}
              text="Breaking Boundaries and linking cultures"
              label="Outreach"
              path="/services"
            />
            <CardItems
              src={ImageFour}
              text="Despite the virus, we still moved forward"
              label="Distribution"
              path="/products"
            />
            <CardItems
              src={ImageFive}
              text="More still needs to be done for the children"
              label="Childcare"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;