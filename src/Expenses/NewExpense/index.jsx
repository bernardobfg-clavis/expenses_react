import { ExpenseForm } from "../../ExpenseForm";
import "./styles.css";
export const NewExpense = (props) => {
  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} />
    </div>
  );
};
