import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {


  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    console.log(counter, 'increment');
    dispatch({type: 'INCREMENT'})
  }

  const incrementMultiple5Handler = () => {
    console.log(counter, 'increment multiple 5');
    dispatch({type: 'INCREMENTMULTIPLE5', value: 5})
  }

  const decrementHandler = () => {
    console.log(counter, 'decrement');
    dispatch({type: 'DECREMENT'})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'TOGGLE'});
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
