import React from "react";
import Navbar from "../nav/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="grid-container">
        <div class="grid-item">
          <img
            src="https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
            alt="meditation"
            className="top_size"
          />
        </div>
        <div class="grid-item">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1542406775-ade58c52d2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
            alt="hoodie"
            className="hoodie_size"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
