import PropTypes from 'prop-types';
import { TitleStyle } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <div>
            <TitleStyle>{title}</TitleStyle>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}



