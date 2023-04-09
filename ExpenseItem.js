import React, { useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle]= useState(props.title);
 console.log('ExpenseItem evaluated by React');

    // const addhandler =() => {

    //   const newExp = [...title];
    //   newExp=100;
    //   setTitle(newExp);
     
    // }

    const clickHandler = () => {
      setTitle('Updated');
      console.log(title);
    };

  return (

    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
  {/* <button onClick={addhandler}> Set to $100</button> */}
    </Card>
  );
}

export default ExpenseItem;
