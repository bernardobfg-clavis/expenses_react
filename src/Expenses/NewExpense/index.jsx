import { useState } from "react";
import { ExpenseForm } from "../ExpenseForm";
import "./styles.css";
export const NewExpense = (props) => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);
  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startigAddingHandler = () => {
    setIsAddingNewExpense(true);
  };
  return (
    <div className="new-expense">
      {isAddingNewExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandle}
          onCancel={() => setIsAddingNewExpense(false)}
        />
      ) : (
        <button onClick={startigAddingHandler}>Add New Expense</button>
      )}
    </div>
  );
};
