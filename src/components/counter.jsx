import React, { useState } from "react";
const Valueer = (props) => {
  // const [value, setValue] = useState(props.value);
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  // const handleIncrement = () => {
  // //   console.log("handle incriment");
  // //   // setValue((prevState) => prevState + 1);
  // };

  // const handleDecrement = () => {
  // //   console.log("handle decrement");
  // //   // setValue((prevState) => prevState - 1);
  // };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>

      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Valueer;
