import React from "react";
import Counter from "./components/counter";
// import Page from "./components/page";
import CountersList from "./components/countersList";

const App = () => {
  //   return <Counter />;
  return (
    <div className="App">
      <CountersList />
      {/* <Page /> */}
    </div>
  );
};

export default App;
