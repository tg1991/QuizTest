import React, { Component } from 'react';

export class AddQuestions extends Component {
    static displayName = AddQuestions.name;

    constructor(props) {
        super(props);
        this.state = {
            QuestionText: "",
            A: "",
            B: "",
            C: "",
            D: "",
            CorrectAnswer: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleRadioButtonChange(event) {
        const target = event.target;

        this.setState({
            CorrectAnswer: target.value
        });
    }

    formSubmit() {
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
                    <div className='col-8'>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="   Enter Question here"
                                name="QuestionText" value={this.state.QuestionText} onChange={this.handleInputChange} required/>
                        </div>
                    </div>
                    <br />
                    <div className='col-7'>
                        <label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" name="correctAnwer" value="A"
                                            onChange={this.handleRadioButtonChange} defaultChecked />
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="   Enter Answer A here" name="A"
                                    onChange={this.handleInputChange} value={this.state.A} required/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" name="correctAnwer" value="B" onChange={this.handleRadioButtonChange} />
                                    </div>
                                </div>
                                <input type="text" className="form-control" name="B" placeholder="   Enter Answer B here"
                                    onChange={this.handleInputChange} value={this.state.B} required/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" name="correctAnwer" value="C" onChange={this.handleRadioButtonChange} />
                                    </div>
                                </div>
                                <input type="text" className="form-control" name="C" placeholder="   Enter Answer C here"
                                    onChange={this.handleInputChange} value={this.state.C} required/>
                            </div>
                        </label>
                        <label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <input type="radio" name="correctAnwer" value="D" onChange={this.handleRadioButtonChange} />
                                    </div>
                                </div>
                                <input type="text" className="form-control" name="D" placeholder="   Enter Answer C here"
                                    onChange={this.handleInputChange} value={this.state.D} required/>
                            </div>
                        </label>
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        );
    }
}
