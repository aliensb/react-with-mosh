import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import { Game } from "./components/UpdatingStatePractice";
import { ExpandableText } from "./components/ExpandableText";
import { Form } from "./components/Form";

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
        <Button type="primary" onClick={() => setShowAlert(true)}>
          click me
        </Button>
      </div>

      <div className="container">
        <Like onClick={() => console.log("clicked")} />
      </div>
      <div className="container">
        <Game />
      </div>

      <div className="container">
        <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet
          quos nisi blanditiis? Quis, similique repudiandae eaque aspernatur ad
          earum doloremque quos quasi, ut veniam dolorum. Incidunt repudiandae
          magnam beatae corporis mollitia, autem nemo illo repellat, est
          molestias voluptas eum ipsam assumenda explicabo inventore ipsa harum
          nisi delectus cumque quas reiciendis blanditiis obcaecati architecto.
          In eaque iure a quas molestias illum repellat illo impedit, suscipit
          error, eligendi sapiente cum dolores commodi hic, aspernatur animi
          perspiciatis! Quod fuga, placeat eum ad labore enim temporibus
          accusamus itaque id velit rerum, praesentium nulla in, quasi error
          explicabo magni architecto provident reprehenderit commodi recusandae.
        </ExpandableText>
      </div>

      <div className="container mt-3">
        <Form />
      </div>
    </>
  );
}

export default App;
