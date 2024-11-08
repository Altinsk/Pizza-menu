import React from "react";
import ReactDOM from "react-dom/client";
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

function Header() {
  const styling = {
    color: "red",
    fontSize: "32px",
    textTransform: "uppercase",
  };

  return (
    <header className="header">
      <h1>React fast pizza co.</h1>
    </header>
  );
}
      {/* <Pizza
        photoName="pizzas/spinaci.jpg"
        name="Pizza Spinaci"
        ingrediants="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
      />
      <Pizza
        photoName="pizzas/salamino.jpg"
        name="Pizza Salamino"
        ingrediants="Tomato, mozarella, and pepperoni"
        price={15}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingrediants}</p>
        <span>{props.pizzaObject.price}€</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      <div className="order">
        {isOpen && (
          <p>We are open till {closeHour}:00, please come and visit us!</p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
  // React.createElement("footer", null, "We are currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // React.StrictMode renders the components twice to check for bugs and checks for outdated components in the React version
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
