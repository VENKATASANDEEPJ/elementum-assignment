import "./Progress.css";
import Container from "../Container/Container";

function Progress() {
  return (
    <section className="about">
      <Container>
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800"
              alt="team collaboration"
            />
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
