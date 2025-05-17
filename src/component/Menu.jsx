import React from "react";

const Italian = [
  {
    id: 1,
    menuItem: "Spaghetti Carbonara",
    ingredients: [
      "spaghetti",
      "eggs",
      "pancetta",
      "pecorino romano",
      "black pepper",
    ],
    bestWines: ["Frascati", "Pinot Grigio"],
  },
  {
    id: 2,
    menuItem: "Margherita Pizza",
    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella",
      "fresh basil",
      "olive oil",
    ],
    bestWines: ["Chianti", "Barbera"],
  },
  {
    id: 3,
    menuItem: "Risotto ai Funghi",
    ingredients: [
      "arborio rice",
      "porcini mushrooms",
      "parmesan",
      "white wine",
      "butter",
      "onion",
    ],
    bestWines: ["Soave", "Langhe Nebbiolo"],
  },
  {
    id: 4,
    menuItem: "Lasagna alla Bolognese",
    ingredients: [
      "lasagna noodles",
      "béchamel sauce",
      "bolognese sauce",
      "parmesan",
    ],
    bestWines: ["Sangiovese", "Dolcetto d'Alba"],
  },
  {
    id: 5,
    menuItem: "Tiramisu",
    ingredients: ["mascarpone", "ladyfingers", "cocoa powder", "eggs", "sugar"],
    bestWines: ["Vin Santo", "Moscato d'Asti"],
  },

  {
    id: 6,
    menuItem: "Efo-Riro",
    ingredients: ["Vegetable", "Crayfish", "Stockfish", "Pepper", "Ponmo"],
    bestWines: ["Emu Oguro", "Cold Zobo"],
  },
];

const Menu = () => {
  return (
    <div className="restaurant">
      {Italian.map((food) => {
        return <Delicacies key={food.id} {...food} />;
      })}
    </div>
  );
};

const Delicacies = ({ menuItem, ingredients, bestWines }) => {
  return (
    <div className="dishes">
      <h1>{menuItem}</h1>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
      <h3>Best Wine Pairings:</h3>
      <ul>
        {bestWines.map((wine, index) => (
          <li key={index}> {wine} </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
