import ListGroup from "./ListGroup";

function App() {
  const onItemClick = (item: string) => {
    console.log(`${item} get clicked`);
  };

  return (
    <div className="container">
      <ListGroup
        items={["blue", "yellow", "red"]}
        title="colors"
        onItemClick={onItemClick}
      />
    </div>
  );
}

export default App;
