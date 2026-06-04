import "./Footer.css";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content footer-grid">
          <div>
            <h4>Company</h4>
            <p>Home</p>
            <p>Studio</p>
            <p>Service</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Terms & Policies</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Explore</p>
            <p>Accessibility</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>1498 W Fulton St</p>
            <p>Chicago</p>
            <p>123456789</p>
            <p>info@elementum.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
