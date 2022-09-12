import  { Component } from "react";


export class Statistics extends Component {

static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    }
    

state = {
  good: this.props.good,
  neutral: this.props.neutral,
  bad: this.props.bad,
    }

    addPoint = () => {
        this.setState(prevState => ({
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
        }))
    }
    
    // handleAddPointGood = () => {
    //     this.setState(prevState => ({
    //         good: prevState.good + 1,
    //     }))
    // }
    //     handleAddPointNeutral = () => {
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1,
    //     }))
    // }

    //     handleAddPointBad = () => {
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }))
    // }

    countTotalFeedback() { };

    countPositiveFeedbackPercentage() { };
    
    render() {
        return (
    <div>
        <div>
            <h2>Please leave feedback</h2>
                <button type="button" onClick={this.addPoint}>Good: {this.state.good}</button>
                <button type="button" onClick={this.addPoint}>Neutral: {this.state.neutral}</button>
                <button type="button" onClick={this.addPoint}>Bad: {this.state.bad}</button>
        </div>
                

        <div>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>       
            <li>Total:{this.props.total }</li>
            <li>Positive feedback:{this.props.positivePercentage }</li>
        </ul>
        </div>
    </div>
        )
    }
}