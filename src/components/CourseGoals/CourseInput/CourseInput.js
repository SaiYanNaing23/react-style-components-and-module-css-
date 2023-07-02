import React, { useState } from 'react';
import styles from "./CourseInput.module.css"
import Button from '../../UI/Button/Button';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid,setValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length >0 ){
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setValid(false);
      return;
    }else{
      props.onAddGoal(enteredValue);
    }
    setEnteredValue("")
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${valid ? "" : styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
