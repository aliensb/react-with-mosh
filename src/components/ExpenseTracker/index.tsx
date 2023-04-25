import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Item from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

let id = 0;
export default function index() {
  const categories = ["Groceries", "Utilities", "Entertainment", "foods"];
  const [items, setItems] = useState<Item[]>([]);
  const [selectedCategory, setSelectCategory] = useState("");

  const onFormSubmit = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    setItems([...items, { ...data, id: id++ }]);
  };

  const onDelete = (id: number) => {
    setItems(items.filter((it) => it.id !== id));
  };

  const onFilterChange = (value: string) => {
    setSelectCategory(value);
  };
  const visibleItems = selectedCategory
    ? items.filter((it) => it.category === selectedCategory)
    : items;
  return (
    <>
      <ExpenseForm onFormSubmit={onFormSubmit} categories={categories} />
      <ExpenseFilter categories={categories} onChange={onFilterChange} />
      <ExpenseTable items={visibleItems} onDelete={onDelete} />
    </>
  );
}
