import { Card } from "../../UI/Card";
import { ExpensesDate } from "../ExpensesDate";
import "./styles.css";
export function ExpenseItem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpensesDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
}
