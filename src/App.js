import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/contactUs/ContactUs";
import Donate from "./components/Pages/Donate";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/donate" exact component={Donate} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
