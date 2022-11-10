export const Input = ({ label }) => {
    return (
        <>
            {label && <label data-testid="label">{label}</label>}
            <input data-testid="input" />
        </>
    );
};