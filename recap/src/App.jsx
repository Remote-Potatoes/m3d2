import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GeneralizedComponent from "./components/GeneralizedComponent";
import PersonComponent from "./components/PersonComponent";
import Footer from "./components/Footer";
import PlayingWithProps from "./components/PlayingWithProps";
import Dump from "./components/Dump";
import AllInTheFamily from "./components/AllInTheFamily";

function P() {
  return (
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}

// backgroundColor: "red"

const users = [
  {
    name: "Marie",
    from: "France",
  },
  {
    name: "Chiao-I",
    from: "Taiwan",
  },
  {
    name: "Juan",
    from: "Ecuador",
  },
];

function BrandButton(props) {
  return (
    <div style={{ padding: 3, backgroundColor: "teal", borderRadius: "6px" }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>How much is 1 + 1</h1>
        <h2>{1 + 1}</h2>
        <BrandButton>Click here to win the lottery</BrandButton>
        <hr />
        <AllInTheFamily>And Wrap it</AllInTheFamily>
        <hr />
        <Dump
          array={[1, 2, 3, 4]}
          object={{ name: "who cares right now" }}
          newImprovedConsoleLog={(valuesToLog) => {
            console.log(`Yo, you want to know ${valuesToLog}`);
          }}
        />
        <PlayingWithProps name="Filipe" />
        <PlayingWithProps name="Daniel" />
        <PlayingWithProps name="Anna" />
        <PlayingWithProps name="anna" />
        <PlayingWithProps name="Chris" age={13} />
        <PersonComponent user={users[0]} isCool />
        <PersonComponent user={users[1]} />
        <PersonComponent
          user={{
            name: "Juan",
            from: "Ecuador",
          }}
          isCool={!true}
        />
        <GeneralizedComponent color="red" height="35vh" />
        <GeneralizedComponent color="blue" />
        <GeneralizedComponent color="orange" />
        <GeneralizedComponent color="purple" />
        <GeneralizedComponent />
        <P />
        <Footer />
      </header>
    </div>
  );
}

export default App;
