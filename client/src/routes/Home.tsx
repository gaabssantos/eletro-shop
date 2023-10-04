/* CSS */
import "./Home.module.css";

/* Imports */
import { BsFillTagFill, BsPc } from "react-icons/bs";
import axios from "axios";

/* Components */
import Navbar from "../components/other/Navbar";
import Offers from "../components/home/Offers";
import ComputerGamer from "../components/home/ComputerGamer";
import Footer from "../components/home/Footer";

const Home = () => {

  // axios.post("", {}).then((res) => {

  // })

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="offers-amazing">
          <h2>
            <BsFillTagFill />
            Ofertas incríveis
          </h2>
          <Offers />
        </section>
        <section id="computer-gamer">
          <h2>
            <BsPc />
            PC Gamer
          </h2>
          <ComputerGamer />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
