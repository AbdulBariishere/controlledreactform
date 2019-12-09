import React, { Component } from "react";
import { render } from "react-dom";
// import GetForm from "./containers/GetForm";
import "bootstrap/dist/css/bootstrap.css";
//import FormContainer from "./containers/FormContainer";
 import SearchData from "./containers/SearchData";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Insert Data </h3>
       <SearchData />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
