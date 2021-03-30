import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';

import SignUpForm from './components/SignUpForm';
import './custom.css'
import Categories from './components/Categories';
import About from './components/About';

export default () => (
    <div className="App">
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/categories/' component={Categories} />
            <Route path='/SignUpForm' component={SignUpForm} />
        </Layout>
    </div>
);
