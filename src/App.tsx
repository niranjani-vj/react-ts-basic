import ButtonTest from "./components/ButtonTest";
import ListGroup from "./components/ListGroup";
import './App.css';

function App() {
  const items = ["1989", "Reputation", "Lover", "Red"];
  const title = "TaySwift";
  const handlerSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={title}
        onSelectItem={handlerSelectItem}
      /> */}
      <ButtonTest/>
    </div>
  );
}

export default App;
