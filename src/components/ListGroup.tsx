import { useState } from "react";

//Pass data using props
interface Props{
    items:string[],
    heading:string,
    onSelectItem :(item:string) => void
}

function ListGroup(props:Props) {
//   const items = ["1989", "Reputation", "Lover", "Red"];

  const handClick = () => {
    console.log();
  };
  const [selectIndex,setSelectIndex] = useState(-1)
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((item,index) => (
          <li
            className={selectIndex === index ? "list-group-item active": "list-group-item"}
            key={item}
            onClick={() => {setSelectIndex(index);   props.onSelectItem(item) }}
          >
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
