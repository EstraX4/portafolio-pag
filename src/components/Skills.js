import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                arrows={false}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
                
              >
                <div className="item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="html5"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      alt="css3"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://developer.mozilla.org/es/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                      alt="bootstrap"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                      alt="css3"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="javascript"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://es.reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                      alt="React"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="NodeJs"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-co_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624317&adgroup=115749712463&gclid=CjwKCAiAyfybBhBKEiwAgtB7fkGDrg7o_zrKkkkh3aeIJgFjnsVKbnI3tAS82N_kMFO-K08fxW-66xoCCnUQAvD_BwE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="mongoDb"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.figma.com/files/recent?fuid=1156409605228773058"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="figma"
                    />{" "}
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://firebase.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                      alt="firebase"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="python"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="https://git-scm.com/">
                    {" "}
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="git"
                    />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
