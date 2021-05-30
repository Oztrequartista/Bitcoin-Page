import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "../src/components/Navbar";
import { links } from "../src/data";
import Banner from "../src/components/Banner";
import Quicklinks from "./components/Quicklinks";
import background from "../src/assets/banner.png";
function App() {
  return (
    <>
      <Container
        className="box"
        fluid
        style={{ backgroundImage: `url(${background})` }}
      >
        <Navbar />
        <Banner />
        <Quicklinks />
      </Container>
    </>
  );
}

export default App;
