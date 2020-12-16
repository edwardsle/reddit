import React, { Component } from "react";
import Navbar from './components/layout/Navbar';
import Trending from './components/layout/Trending';
import PopularPost from './components/layout/PopularPost';
import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Trending />
        <PopularPost />
      </>
    );
  }
}

export default App;
