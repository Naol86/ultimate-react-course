import React, { useState } from 'react';
import './App.css';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "laptop", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>this is logo</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  return (
    <div>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>what do you need for your trip🏄‍♂️</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type='text'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button>add</button>
      </form>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onClick={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function PackingList({ items, onDeleteItems, onToggleItem }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  const packed = items.filter((item) => item.packed === true).length;
  return (
    <footer className='stats'>
      <em>
        you have {items.length} items in your list and you paced {packed} (X%)
      </em>
    </footer>
  );
}
