import React from "react";
import ReactDom from "react-dom";
import App from "./App.js";

class ResumeViewer extends React.Component {
  render() {
    return <App />;
  }
}

ReactDom.render(<ResumeViewer />, document.getElementById("root"));
