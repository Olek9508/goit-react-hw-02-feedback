import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
    return (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positiveFeedbackPercentage}</p>
    </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.string.isRequired
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