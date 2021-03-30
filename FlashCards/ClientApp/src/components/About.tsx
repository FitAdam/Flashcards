import React from 'react'
import { connect } from 'react-redux';
import './About.css'
import { Link } from 'react-router-dom';
import Wood from '../resources/wood.jpg';

const About = () => (
  <div>
    <div className="AboutPage">
      <h1>About us</h1>
      <p className="lead">This project was created by Team named "Wood Divison".<div className=""></div></p>
      <p>If you have, for example, a flashcard saying: “How many seconds are there in a year?” You would see “Twelve. January 2nd, February 2nd, March 2nd, etc.” on the back side.</p>
      <p className="lead">
      <Link to="/categories" className="btn btn-primary">Learn with us</Link>
      </p>
    </div>
    <img src={Wood} alt="..."/>
  </div>
);

export default connect()(About);
