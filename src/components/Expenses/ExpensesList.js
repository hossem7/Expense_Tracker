import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

    if(props.items.length === 0){
        return <h2 className = 'expenses-list__fallback'> Found No Expenses </h2>;
    }

    return <ul className = "expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}//this is to ensure that react adds the item at the top of the list
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>

};



export default ExpensesList;