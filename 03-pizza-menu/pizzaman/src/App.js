import React from "react";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizza.photoName} alt={props.pizza.name} />
            <h3>{props.pizza.name} Pizza</h3>
            <p>{props.pizza.ingredients}</p>
            <p>{props.pizza.price + 2}</p>
        </li>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}
function Menu() {
    return (
        <div className="menu">
            <h2>our Menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizza={pizza} key={pizza.name} />
                ))}
            </ul>
        </div>
    );
}
function Footer() {
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()} we'r currently open
        </footer>
    );
}

export default App;
