import React, { Component } from 'react';
import { InputGroup } from 'react-bootstrap';
export class Counter extends Component {
    static displayName = Counter.name;

    constructor(props) {
        super(props);
        this.state = {
            QuestionText: "question test",
            A: "asdasd",
            B: "asddfefwefwf",
            C: "asdasdasdasdasdasd",
            D: "asdasdasdasdasdwqddd",
            CorrectAnswer: "B"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    formSubmit(event) {
        fetch('/api/quizapp/post', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)            
        });
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <div>
                    <h1>Add Questions</h1>

                    <p>Please add in the question and answers below marking which one is going to be the correct one.</p>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="radio" aria-label="Radio button for following text input" name="correctAnwer" />
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with radio button" name="A" onChange={this.handleInputChange} value={this.state.A} />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="radio" aria-label="Radio button for following text input" name="correctAnwer" />
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with radio button" name="B" onChange={this.handleInputChange} value={this.state.B} />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="radio" aria-label="Radio button for following text input" name="correctAnwer" />
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with radio button" name="C" onChange={this.handleInputChange} value={this.state.C} />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="radio" aria-label="Radio button for following text input" name="correctAnwer" />
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with radio button" name="D" onChange={this.handleInputChange} value={this.state.D} />
                    </div>

                    <button className="btn btn-default" type="submit">Add</button>
                </div>
            </form>
        );
    }
}
