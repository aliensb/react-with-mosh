import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const onItemClick = (item: string) => {
    console.log(`${item} get clicked`);
  };

  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <div className="container">
        <ListGroup
          items={["blue", "yellow", "red"]}
          title="colors"
          onItemClick={onItemClick}
        />
      </div>
      <div className="container">
        {showAlert && <Alert onClose={() => setShowAlert(false)}>alert</Alert>}
        <Button type="danger" onClick={() => setShowAlert(true)}>
          click me
        </Button>
      </div>
    </>
  );
}

export default App;
