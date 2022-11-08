import { useReducer } from 'react';
import { Buttons } from './Buttons';

export const ACTION_TYPES = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return state + 1;
        case ACTION_TYPES.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const HomePage = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    // const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <Buttons dispatch={dispatch} />
        </div>
    )
};

export default HomePage;

