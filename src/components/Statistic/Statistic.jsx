import { Component } from "react";

export class Stats extends Component {

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
    
    
    onHandleClick = (key) =>{
        this.setState(prevState => {
            return {
            [key]:prevState[key]+1
        }
    })
    }

    countTotalFeedback() {
        Object.values(this.state).reduce(
            (total, item) => total + item, 0
        );
     };

    countPositiveFeedbackPercentage() { };
    
    render() {

        const { good, neutral, bad } = this.state;
        const { total, positivePercentage } = this.props;
        const { onHandleClick  } = this;
        
        return (
        <div>
            <div>
                <h2>Please leave feedback</h2>
                    {Object.keys(this.state).map(key => (
                        <button key={key} onClick={() => onHandleClick(key)}>{key }</button>
                    ))}
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























//========================================================================================================


    //     handleAddPointGood = () => {
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



                // <button type="button" onClick={onHandleClick}>Good</button>
                // <button type="button" onClick={onHandleClick}>Neutral</button>
                // <button type="button" onClick={onHandleClick}>Bad</button>

        // {/* <FeedbackOptions options={handleAddPointNeutral} onLeaveFeedback={handleAddPointGood } /> */}


    //===================================================================
    
        // addPoint = () => {
    //     this.setState(prevState => ({
    //     good: prevState.good + 1,
    //     neutral: prevState.neutral + 1,
    //     bad: prevState.bad + 1,
    //     }))
    // }


    //===================================================================