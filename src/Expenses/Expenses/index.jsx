import { Card } from "../../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import { ExpenseItem } from "../ExpenseItem";
import "./styles.css";
import { useState } from "react";
import { ExpensesList } from "../ExpensesList";
export const Expenses = ({ expenses }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (event) => {
    const selectedYear = event.target.value;
    setFilteredYear(selectedYear);
    if (selectedYear === "") {
      setFilteredExpenses(expenses);
      return;
    }
    setFilteredExpenses(
      expenses.filter((expense) => {
        const expenseYear = String(expense.date.getFullYear());
        return expenseYear === selectedYear;
      })
    );
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
