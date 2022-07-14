import React, { useState } from "react";
import Counter from "./counter";
// import { useState } from "react";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Неужные вещи" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    // console.log("handleDelete: ", id);
    const newCounters = counters.filter((c) => c.id !== id);
    // console.log(newCounters);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    // console.log("handleReset");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          // id={count.id}
          // value={count.value}
          // name={count.name}
          onDelete={handleDelete}
          {...count} // позволяет не дублировать код, а выводить весь массив объектов
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
