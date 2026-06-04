import "./Tomorrow.css";
import Container from "../Container/Container";

function Tomorrow() {
  return (
    <section className="tomorrow">
      <Container>
        <div className="tomorrow-content">

          <div className="tomorrow-text">
            <h2>
              Tomorrow should <br />
              be better than today
            </h2>

            <p>
              We are a team of strategists, designers,
              communicators, researchers. Together,
              we believe that progress only happens
              when you refuse to play things safe.
            </p>

            <button>Read More</button>
          </div>

          <div className="tomorrow-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
              alt="meeting"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Tomorrow;