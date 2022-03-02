import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {


  const dispatch = useDispatch();
  const counter = useSelector(state => {
    console.log(state, 'state reduxjs');
    return state.counter.counter
  }
  );
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    console.log(counter, 'increment');
    dispatch(counterActions.increment());
  }

  const incrementMultiple5Handler = () => {
    console.log(counter, 'increment multiple 5');
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    console.log(counter, 'decrement');
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    console.log(show, 'show counter');
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementMultiple5Handler}>Increment By Multiple 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
