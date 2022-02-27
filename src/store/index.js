
import { createStore } from "redux";

const initialValue = {counter: 0, showCounter : true};

const counterReducer = (state = initialValue , action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'INCREMENTMULTIPLE5') {
        return {
            counter: state.counter * action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'TOGGLE') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state;
}


const store  = createStore(counterReducer);

export default store;