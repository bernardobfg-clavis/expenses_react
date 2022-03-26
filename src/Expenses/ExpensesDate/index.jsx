import { Card } from "../../UI/Card";
import "./styles.css";
export const ExpensesDate = ({ date }) => {
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};
