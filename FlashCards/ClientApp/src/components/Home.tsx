import React from 'react'
import { connect } from 'react-redux';
import './Home.css'
import { Link } from 'react-router-dom';
import Study from '../resources/study.jpg';
import Cards from '../resources/cards.jpg';

const Home = () => (
  <div>
    <div className="HomePage">
      <h1>Welcome</h1>
      <p>Hello are you a student or just a person who is trying to expand his knowledge? Are you tired of the long and monotone never ending cycle of going through a lot of books and you feel exhausted and you feel like you are not productive enough?</p>
      <p>Don't worry we are here to help! Have you ever heard of flash cards? Have you ever used them ? If no then dont hessitate and we will introduce you to the wonders of flashcards and we will make your study time more productive and actually enjoyable!</p>
    </div>
    <img src={Study} alt="..."/>
    <div className="HomePage">
      <h1>Flash cards</h1>
      <p>A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization. Each flashcard bears a question on one side and an answer on the other. Flashcards are often used to memorize vocabulary, historical dates, formulas or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual (part of a flashcard software), or physical.</p>
      <p>Flashcards are an application of the testing effect − the finding that long-term memory is increased when some of the learning period is devoted to retrieving the information through testing with proper feedback. Study habits affect the rate at which a flashcard-user learns, and proper spacing of flashcards has been proven to accelerate learning. A number of spaced repetition software programs exist which take advantage of this principle.</p>
    </div>
    <img src={Cards} alt="..."/>
    <div className="HomePage">
      <h1>About us</h1>
      <p className="lead">Put simply, a flashcard is a piece of card that has a cue or hint on the front side, and a corresponding answer on the back side.
      Anything that can be studied in a “question and answer”
      Prepare for the interview! Just now!</p>
      <p>If you have, for example, a flashcard saying: “What is the capital of France?” You would write “Paris” on the back side.</p>
      <p className="lead">
      <Link to="/categories" className="btn btn-primary">Learn with us</Link>
      </p>
    </div>
  </div>
);

export default connect()(Home);
