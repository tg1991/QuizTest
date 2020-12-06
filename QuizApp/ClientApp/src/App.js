import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { TakeQuiz } from './components/TakeQuiz';
import { AddQuestions } from './components/AddQuestions';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/add-questions' component={AddQuestions} />
                <Route path='/take-quiz' component={TakeQuiz} />
            </Layout>
        );
    }
}
