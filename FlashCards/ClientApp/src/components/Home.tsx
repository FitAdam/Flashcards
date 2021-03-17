import React from 'react'
import { connect } from 'react-redux';
import { Button, Jumbotron } from 'reactstrap';
import './Home.css'
import FlashCard from '../components/FlashCard';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="HomePage">
    <h1>Flash cards</h1>
    <p>A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization. Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates, formulas or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual (part of a flashcard software), or physical.</p>
    <p>Flashcards are an application of the testing effect − the finding that long-term memory is increased when some of the learning period is devoted to retrieving the information through testing with proper feedback. Study habits affect the rate at which a flashcard-user learns, and proper spacing of flashcards has been proven to accelerate learning. A number of spaced repetition software programs exist which take advantage of this principle.</p>
    <hr></hr>
    <h1>About us</h1>
    <p className="lead">Put simply, a flashcard is a piece of card that has a cue or hint on the front side, and a corresponding answer on the back side.
    Anything that can be studied in a “question and answer”<div className=""></div>
    Prepare for the interview! Just now!</p>
        <p>If you have, for example, a flashcard saying: “What is the capital of France?” You would write “Paris” on the back side.</p>
            <p className="lead">
      <Link to="/flash-cards" className="btn btn-primary">Learn with us</Link>
    </p>
  </div>
);

export default connect()(Home);
