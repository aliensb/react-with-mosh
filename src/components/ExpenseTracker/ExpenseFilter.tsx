import { useState } from "react";

export default function ExpenseFilter({
  categories,
  onChange,
}: {
  categories: string[];
  onChange: (value: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <select
      id="category"
      className="form-select"
      aria-label="Default select example"
      onChange={(event) => {
        setSelectedValue(event.target.value);
        onChange(event.target.value);
      }}
    >
      {categories.map((c) => (
        <option value={c} key={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
