import React from 'react';
import './ExpenseDate.css';

const ExpenseDate=(props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div classname='expense-date'>
        <div classname='expense-date__month'>{month}</div>
        <div classname='expense-date__year' >{year}</div>
        <div  classname='expense-date__day'>{day}</div>
      </div>
    );
};
export default ExpenseDate;