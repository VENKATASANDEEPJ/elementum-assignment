import "./Services.css";
import Container from "../Container/Container";
import services from "../../data/servicesData";

function Services() {
  return (
    <section className="services">
      <Container>
        <h2 className="services-heading">
          What we <span>can</span> offer you!
        </h2>

        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-row" key={idx}>
              <p className="service-description">{service.description}</p>

              <h3 className="service-title">{service.title}</h3>

              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;