import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ParticlesComponent from "../components/Particles";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Incentives from "../components/Incentives";
import Sponsors from "../components/Sponsors";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="App custom-scrollbar">
          <Header />
          <Hero />
          <About />
          <Incentives/>
          <Sponsors/>
          <Footer />
          <ParticlesComponent id="tsparticles" />
        </div>
      )}
    </>
  );
}

export default Home;
