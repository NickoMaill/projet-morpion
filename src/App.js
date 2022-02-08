import React from "react";
// Components JS
// import Grid from "./components/Grid";
// import Button from "./components/Button";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GridLy from "./components/GridLy";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="d-flex justify-content-center align-items-center border">
        {/* <Grid /> */}
        <GridLy/>
      </section>
    );
  }
}
export default App;