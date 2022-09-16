import PropTypes from 'prop-types';
import { BtnBox,BtnChoose } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <BtnBox>
            {options.map(key => (
                <BtnChoose key={key} onClick={() => onLeaveFeedback(key)}>{key }</BtnChoose>
            ))}
    </BtnBox>
    )            
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}