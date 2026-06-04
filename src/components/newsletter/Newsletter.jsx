import "./Newsletter.css";
import Container from "../Container/Container";

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <div className="newsletter-content">
          <h2>
            <span className="accent-underline">Subscribe</span> to <br />
            our newsletter
          </h2>

          <p>To make your stay special and even more memorable</p>

          <button>Subscribe Now</button>
        </div>
      </Container>
      <div className="newsletter-shape purple"></div>
      <div className="newsletter-shape yellow"></div>
    </section>
  );
}

export default Newsletter;
