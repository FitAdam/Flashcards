import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import SignUpForm from './components/SignUpForm';
import './custom.css'
import FlashCard from './components/FlashCard';

export default () => (
    <div className="App">
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={Counter} />
            <Route path='/flash-cards/' component={FlashCard} />
            <Route path='/SignUpForm' component={SignUpForm} />
        </Layout>
    </div>
);
