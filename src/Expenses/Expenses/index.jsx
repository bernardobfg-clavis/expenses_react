import { Card } from "../../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { ExpenseItem } from "../ExpenseItem";
import "./styles.css";
import { useState } from "react";
export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (event) => {
    const selectedYear = event.target.value;
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
};
