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

        handleAddPointGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }
        handleAddPointNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

        handleAddPointBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }
    
    // countTotalFeedback() {
    //     const values = Object.values(this.defaultProps)
    //     let totalAmount = 0;

    //     for (let value of values) {
            
    //         totalAmount += value
    //         console.log(totalAmount)
    //     }
    //     return
    //  };

    countPositiveFeedbackPercentage() { };
    
    render() {

        const { good, neutral, bad } = this.state;
        const { total, positivePercentage } = this.props;
        const { handleAddPointGood, handleAddPointNeutral, handleAddPointBad } = this;
        
        return (
    <div>
        <div>
            <h2>Please leave feedback</h2>
                <button type="button" onClick={handleAddPointGood}>Good: {good}</button>
                <button type="button" onClick={handleAddPointNeutral}>Neutral: {neutral}</button>
                <button type="button" onClick={handleAddPointBad}>Bad: {bad}</button>
        </div>
                

        <div>
        <h2>Statistics</h2>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>       
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentage }</li>
        </ul>
        </div>
    </div>
        )
    }
}




    //===================================================================
    
        // addPoint = () => {
    //     this.setState(prevState => ({
    //     good: prevState.good + 1,
    //     neutral: prevState.neutral + 1,
    //     bad: prevState.bad + 1,
    //     }))
    // }


    //===================================================================