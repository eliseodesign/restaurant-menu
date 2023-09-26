/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from './pizzas'
import { startersData } from './starters'
import { drinksData } from './drinks'
import { dessertsData } from './desserts'

const pizzas = pizzaData;
const numPizza = pizzas.length;

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
  return (
    <header className="header">
      <h1>Pizza <br></br> Menu </h1>
      <nav>
        <ul>
          <li><a href="#starters">Starters</a></li>
        </ul>
        <ul>
          <li><a href="#main">Main Courses</a></li>
        </ul>
        <ul>
          <li><a href="#desserts">Desserts</a></li>
        </ul>
        <ul>
          <li><a href="#drinks">Drinks</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2 id="starters">OUR STARTERS</h2>

      {
        <ul className="container-menu">
          {startersData.map((product) => (
            <Pizza key={product.name} pizzaObj={product} />
          ))}
        </ul>
      }

      <h2 id="main">OUR MAIN COURSES</h2>
      {numPizza > 0 ? (
        <>
          <ul className="container-menu">
            {pizzas.map((product) => (
              <Pizza key={product.name} pizzaObj={product} />
            ))}
          </ul>
        </>
      ) : (
        <h1>
          Sorry we have sold out all the pizzas. <br />
          <br /> Come again later!
        </h1>
      )}


      <h2 id="desserts">OUR DESSERTS</h2>

      {
        <ul className="container-menu">
          {dessertsData.map((product) => (
            <Pizza key={product.name} pizzaObj={product} />
          ))}
        </ul>
      }

      <h2 id="drinks">OUR DRINKS</h2>

      {
        <ul className="container-menu">
          {drinksData.map((product) => (
            <Pizza key={product.name} pizzaObj={product} />
          ))}
        </ul>
      }
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`product ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        {/* <p>{pizzaObj.ingredients}</p> */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$ ${pizzaObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(hour);
  return (
    <p className="footer">
      {isOpen && (
        <div>
          {numPizza > 0 ? (
            <div className="order">
              <p>
                We're open until {closeHour}:00 come join us or order online
              </p>
              <button className=" btn">Order</button>
            </div>
          ) : null}
        </div>
      )}
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
