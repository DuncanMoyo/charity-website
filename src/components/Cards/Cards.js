import CardItems from "./CardItems";
import "./Cards.css";
import ImageNine from "../../assets/images/img-9.jpg";
import ImageThree from "../../assets/images/img-3.jpg";
import ImageEight from "../../assets/images/img-8.jpg";
import ImageTwo from "../../assets/images/img-2.jpg";
import ImageFour from "../../assets/images/img-4.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={ImageNine}
              text="Explore the hidden waterfall deep inside the Amazone Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={ImageTwo}
              text="Travel through the Islands of Bali in a private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src={ImageThree}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src={ImageFour}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItems
              src={ImageEight}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;