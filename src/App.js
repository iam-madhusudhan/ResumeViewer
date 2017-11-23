import React from "react";
import $ from "jquery";
import Header from "./components/header.js";
import About from "./components/about.js";
import Resume from "./components/resume.js";
import Portfolio from "./components/portfolio.js";
import Testimonials from "./components/testimonials.js";
import Contact from "../components/contact.js";
import Footer from "./components/footer.js";
require("./default.css");
require("./layout.css");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indian: "madhu",
      resumeData: {}
    };
  }

  getResumeData() {
    $.ajax({
      url: "",
      dataType: ""
    });
  }

  ComponentDidMount() {
    this.getResumeData();
  }

  render() {
    console.log(this.state.indian);
    return (
      <div>
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
