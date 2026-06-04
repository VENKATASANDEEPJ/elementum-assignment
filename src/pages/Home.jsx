import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Tomorrow from "../components/Tomorrow/Tomorrow";
import Progress from "../components/Progress/Progress";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tomorrow />
      <Progress />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
