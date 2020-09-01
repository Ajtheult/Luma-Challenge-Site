import React from "react";
import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <div>
      <div className="footer">
        <div className="div-one">
          <a href="#home">About us</a> <br />
          <a href="#home">Customer Service</a>
        </div>
        <br />
        <div className="div-two">
          <a href="#home">Privacy and Cookie Policy</a> <br />
          <a href="#home">Search Terms</a> <br />
          <a href="#home">Contact Us</a> <br />
          <a href="#home">Orders and Returns</a> <br />
          <a href="#home">Advanced Search</a>
        </div>
      </div>
      <div className="footer-two">
        <p>Copyright &copy; Magento. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomeFooter;
