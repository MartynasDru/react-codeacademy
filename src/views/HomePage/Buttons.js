import { ACTION_TYPES } from './HomePage';

export const Buttons = ({ dispatch }) => {
    return (
        <div>
            <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT })}>+</button>
        </div>
    )
}