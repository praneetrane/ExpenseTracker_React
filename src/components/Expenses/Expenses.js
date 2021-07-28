import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;

  const [selectedYear, setselectedYear] = useState("2020");

  const expenseFilterYearChangeHandler = (expFilterDateYear) => {
    setselectedYear(expFilterDateYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() == selectedYear;
  });

  {
    /* We futher minimizing this code to make it more lean */
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onExpenseFilterYearChange={expenseFilterYearChangeHandler}
        />
        {/*   {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* (Commented above code ) Alternative to above ternary condition to avoid long condition becomes difficult to read 
       // if the condition matches then React will execute next statement after && operator 
       other wise move to next statements
       */}
        {/*     {filteredExpenses.length === 0 && <p>No expenses found.</p>}

        {filteredExpenses.length === 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* We minimized code and saved content to variable 'expensesContent' */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
