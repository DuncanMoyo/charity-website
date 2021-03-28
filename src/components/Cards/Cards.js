import CardItems from "./CardItems";
import "./Cards.css";
import alakhe from "../../assets/images/alakhe.png";
import shoesground from "../../assets/images/shoesground.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>What we've been up to...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={alakhe}
              text="What led us to start this organisation"
              label="News"
              path="/about"
            />
            <CardItems
              src={shoesground}
              text="Getting kids back in classes"
              label="Achievements"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;