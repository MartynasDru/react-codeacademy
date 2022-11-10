const primaryStyle = {
    backgroundColor: 'blue',
    color: 'white'
};

const secondaryStyle = {
    backgroundColor: 'salmon',
    color: 'black'
};

export const VARIANTS = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
}

export const Button = ({ variant, children, disabled }) => {
    let style;
    switch (variant) {
        case VARIANTS.PRIMARY:
            style = primaryStyle;
            break;
        case VARIANTS.SECONDARY:
            style = secondaryStyle;
            break;
        default:
            style = primaryStyle;
    }

    return (
        <button 
            data-testid="button"
            style={style} 
            disabled={disabled}
        >
            {children}
        </button>
    )
}