import "./Hero.css";
import Container from "../Container/Container";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <h1 className="hero-title">
          The thinkers and <br />
          doers were changing <br />
          the <span className="highlight-green">status</span> Quo with
        </h1>

        <div className="square-shape"></div>
        <div className="hero-shape"></div>

        <p className="hero-text">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        <div className="avatar-row">
          <img src="https://i.pravatar.cc/150?img=1" alt="" />
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
          <img src="https://i.pravatar.cc/150?img=3" alt="" />
          <img src="https://i.pravatar.cc/150?img=4" alt="" />
          <img src="https://i.pravatar.cc/150?img=5" alt="" />
          <img src="https://i.pravatar.cc/150?img=6" alt="" />
        </div>

      </Container>
    </section>
  );
}

export default Hero;