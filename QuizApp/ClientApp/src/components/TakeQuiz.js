import React, { Component } from 'react';

export class TakeQuiz extends Component {
    static displayName = TakeQuiz.name;

    constructor(props) {
        super(props);
        this.state = { questions: [], loading: true };
    }

    componentDidMount() {
        this.populateQuestionData();
    }

    render() {

        return (
            <div>
                <h1 id="tabelLabel" >Take Quiz</h1>
            </div>
        );
    }

    async populateQuestionData() {
        const response = await fetch("api/quizapp");
        const data = await response.json();

        this.setState({ questions: data, loading: false });
    }
}
