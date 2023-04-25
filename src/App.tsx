import { useState } from "react";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const onItemClick = (item: string) => {
    console.log(`${item} get clicked`);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className="container mt-3">
        <ExpenseTracker />
      </div>
    </>
  );
}

export default App;
