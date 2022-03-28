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
    <div>
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </div>
  );
};
