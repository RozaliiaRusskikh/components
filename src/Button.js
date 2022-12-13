import PropTypes from 'prop-types';

function Button({
    children,
    primary,
    warning,
    secondary,
    success,
    danger,
    outline,
    rounded }) {

    return <button>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
            Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!danger)
            + Number(!!success)

        if (count > 1) {
            return new Error('Only one type of button is allowed')
        }
    }
}

export default Button;