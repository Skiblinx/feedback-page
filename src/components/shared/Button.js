

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
            {children}
        </button>
    )
}

export default Button

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}