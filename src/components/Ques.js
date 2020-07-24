import React from "react";
import { quesData } from "./quesData";

class Ques extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadQuesData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quesData[this.state.currentQuestion].question,
        answer: quesData[this.state.currentQuestion].answer,
        options: quesData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuesData();
  }
  nextQuestionHandler = () => {

    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quesData[this.state.currentQuestion].question,
          options: quesData[this.state.currentQuestion].options,
          answer: quesData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quesData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
         
          <div>
            The correct answer's for the questions was
            <ul>
              {quesData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{this.state.questions} </h1>
          
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < quesData.length - 1 && (
             
            <button
              className="ui inverted button"
              disabled={this.state.enabled}
              onClick={this.nextQuestionHandler}
            >
              previous
            </button>
          )}

{currentQuestion < quesData.length - 1 && (
             
             <button
               className="ui inverted button"
               disabled={this.state.enabled}
               onClick={this.nextQuestionHandler}
             >
               Submit Answer
             </button>
           )}

{currentQuestion < quesData.length - 1 && (
             
             <button
               className="ui inverted button"
               disabled={this.state.enabled}
               onClick={this.nextQuestionHandler}
             >
               Next
             </button>
           )}

{currentQuestion < quesData.length - 1 && (
             
             <button
               className="ui inverted button"
               disabled={this.state.enabled}
               onClick={this.nextQuestionHandler}
             >
               Show Answer
             </button>
           )}

       


          {currentQuestion === quesData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Show Answers
            </button>
          )}
        </div>
      );
    }
  }
}

export default Ques;
