import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //multiple state approach
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //----Single state appraoch
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const titleChangeHandler = (event) => {
    //multiple state approach
    setenteredTitle(event.target.value);

    //----Single state appraoch
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    }); */

    //----User of prevState will guarntee that we are recieving and updating correct state.
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);

    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    props.onCancel("false");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
