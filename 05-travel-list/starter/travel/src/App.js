import React from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "laptop", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>this is logo</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for your trip🏄‍♂️</h3>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <input type="text" />
        <button>add</button>
      </form>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have X items in your list and you paced X (X%)</em>
    </footer>
  );
}
