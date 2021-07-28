import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showHideFormContent, setShowHideFormContent] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelHandler = (showExpenseFormContent) => {
    if (showExpenseFormContent == true) {
      setShowHideFormContent(true);
    } else {
      setShowHideFormContent(false);
    }
  };

  const addNewExpenseHandler= ()=>{
    cancelHandler(true);
  };
  
  return (
    <div className="new-expense">
      {showHideFormContent && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
      {
        !showHideFormContent &&  <button type="submit" onClick={addNewExpenseHandler}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
