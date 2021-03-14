import { CardView } from "react-card-with-image";
import "react-card-with-image/dist/index.css";
import womanOne from "../../assets/images/womanOne.jpg";
import womanTwo from "../../assets/images/womanTwo.jpg";
import womanThree from "../../assets/images/womanThree.jpg";
import womanFour from "../../assets/images/womanFour.jpg";
import womanFive from "../../assets/images/womanFive.jpg";
import women from "../../assets/images/women.jpg";
import "../Cards/Cards.css";

const AboutUs = () => {
  const womenDirectors = [
    {
      id: 1,
      header: "Lorem ipsum",
      description:
        "dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat",
      image: `${womanOne}`,
    },
    {
      id: 2,
      header: "Sed cursus",
      description:
        "in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret",
      image: `${womanTwo}`,
    },
    {
      id: 3,
      header: "Sed fermentum",
      description:
        "condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie",
      image: `${womanThree}`,
    },
    {
      id: 4,
      header: "Proin et urna",
      description:
        "vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.",
      image: `${womanFive}`,
    },
    {
      id: 5,
      header: "Cras leo velit",
      description:
        "finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.",
      image: `${womanFour}`,
    },
  ];
  return (
    <>
      <div className="about-us"></div>
      <h1 style={{ margin: "15vh" }}>About Alakhe</h1>

      <div className="body">
        <div className="container">
          <div className="card">
            <div className="imgBox">
              <img src={women} alt="women" />
            </div>
            <div className="content">
              <h1>Who We Are</h1>
              <p>
                Alakhe is an organization recently registered as an NPO after a
                group of young professionals saw it fit to expand their
                portfolio and formalise their process to other students after
                successfully mentoring young women through their respective
                degree portfolios at the University of Cape Town and at two high
                schools in Johannesburg.{" "}
              </p>
              <br />
              <p>
                The organization is an NPO run by 7 women based in Cape Town,
                Johannesburg and Port Elizabeth each with different expertise.
                We largely aim to support young women through their career and
                educational journeys both through educational mentorship and
                social assistance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
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
