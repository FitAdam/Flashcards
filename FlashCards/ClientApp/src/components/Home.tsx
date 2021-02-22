import React from 'react'
import { connect } from 'react-redux';
import { Button, Jumbotron } from 'reactstrap';

const Home = () => (

  <Jumbotron>
    <h1 className="display-3">Hello to your best learning experience!</h1>
    <p className="lead">Put simply, a flashcard is a piece of card that has a cue or hint on the front side, and a corresponding answer on the back side.
      Anything that can be studied in a “question and answer”<div className=""></div>
      Prepare for the interview! Just now!</p>
    <hr className="my-2" />
    <p>If you have, for example, a flashcard saying: “What is the capital of France?” You would write “Paris” on the back side.</p>
    <p className="lead">
      <Button color="primary" to="/flash-card">Learn Now</Button>
    </p>
  </Jumbotron>

);

export default connect()(Home);
