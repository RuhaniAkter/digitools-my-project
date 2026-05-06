import Navbar from "../componets/Navbar";
import Banner from "../componets/Banner";
import Stats from "../componets/Stats";
import Start from "../componets/Start";
import Pricing from "../componets/Pricing";
import Ready from "../componets/Ready";
import Footer from "../componets/Footer";
import Tools from "../componets/Tools";
import { useState } from "react";

const Home = () => {
  const [carts, setCarts] = useState([]);
  return (
    <div>
      <Navbar carts={carts} />
      <Banner />
      <Tools carts={carts} setCarts={setCarts} />
      <Stats />
      <Start />
      <Pricing />
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
