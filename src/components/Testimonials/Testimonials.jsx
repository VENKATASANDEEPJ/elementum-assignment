import "./Testimonials.css";
import Container from "../Container/Container";
import testimonials from "../../Data/testimonials";

function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className="testimonials">
      <Container>
        <h2 className="testimonials-title">
          What our <span className="accent-underline">customer</span> says
          <br />
          About Us
        </h2>

        <div className="testimonial-card">
          <img className="floating-avatar a1" src="https://i.pravatar.cc/100?img=8" alt="" />
          <img className="floating-avatar a2" src="https://i.pravatar.cc/100?img=9" alt="" />
          <img className="floating-avatar a3" src="https://i.pravatar.cc/100?img=10" alt="" />
          <span className="quote-left">&ldquo;</span>
          <span className="quote-right">&rdquo;</span>
          <p>{testimonial.text}</p>

          <div className="testimonial-user">
            <h4>{testimonial.name}</h4>
            <span>{testimonial.role}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
