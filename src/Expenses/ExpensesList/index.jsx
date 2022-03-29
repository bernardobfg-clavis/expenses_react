import { ExpenseItem } from "../ExpenseItem";
import "./styles.css";

export const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};
