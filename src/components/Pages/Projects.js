import "../Cards/Cards.css";
import projectData, { projectsData } from "../data/projectsData";

const Projects = () => {
  const {
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    projectIntroPicture,
    projectTitle,
  } = projectData;

  return (
    <>
       <div className="projects"></div>
      <h1 className="text">Our Projects so far...</h1>
      <div className="body">
        <div className="container">
          <div style={{ borderRadius: "10px" }} className="card">
            <div className="imgBox">
              <img src={projectIntroPicture} alt="women" />
            </div>
            <div className="content">
              <h1>{projectTitle}</h1>
              <p style={{ marginTop: "15px" }}>{paragraph1}</p>
              <br />
              <p>{paragraph2}</p>
              <br />
              <p>{paragraph3}</p>
              <br />
              <p>{paragraph4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Projects;
