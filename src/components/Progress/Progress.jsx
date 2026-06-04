import "./Progress.css";
import Container from "../Container/Container";
import heroImage from "../../assets/hero.png";

function Progress() {
  return (
    <section className="about">
      <Container>
        <div className="about-content">
          <div className="about-image">
            <img src={heroImage} alt="team" />
            <div className="about-shape square"></div>
            <div className="about-shape triangle"></div>
            <div className="curve-line"></div>
          </div>

          <div className="about-text">
            <h2 className="about-title">
              See how we can
              <br />
              help you progress
            </h2>

            <p>
              We are a team of strategists, designers,
              communicators and researchers helping
              organizations move forward.
            </p>

            <button>Read More</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Progress;
