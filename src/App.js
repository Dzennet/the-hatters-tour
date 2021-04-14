import { Route } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TicketsContainer from "./containers/TicketsContainer/TicketsContainer";
import Video from "./pages/Video/Video";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-content">
        <Route exact path="/" component={TicketsContainer} />
        <Route path="/video" component={Video} />
        <Route path="/about" component={About} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
