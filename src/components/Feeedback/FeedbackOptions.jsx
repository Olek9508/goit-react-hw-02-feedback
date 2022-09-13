export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div>
        <h2>Please leave feedback</h2>
            {options.map(key => (
                <button key={key} onClick={() => onLeaveFeedback(key)}>{key }</button>
            ))}
    </div>
    )            
}