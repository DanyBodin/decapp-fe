import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <main>
      <h1 className="herotitle"> DECapp.io</h1>
      <span>Design</span>
      <span>Evaluate</span>
      <span>Command</span>
      <FontAwesomeIcon icon="fa-thin fa-couch" />

      <h1>The interior design plateform for EE</h1>
    </main>
  );
};

export default Home;
