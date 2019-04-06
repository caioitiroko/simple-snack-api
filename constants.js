const uuid = require("uuid/v4");
const { find, propEq } = require("ramda");

const getIngredient = name => find(propEq("name", name), ingredients);

const LETTUCE = "Alface";
const BACON = "Bacon";
const MEAT_BURGER = "Hambúrguer de carne";
const EGG = "Ovo";
const CHEESE = "Queijo";

const ingredients = [
  { id: uuid(), name: LETTUCE, price: 0.4 },
  { id: uuid(), name: BACON, price: 2 },
  { id: uuid(), name: MEAT_BURGER, price: 3 },
  { id: uuid(), name: EGG, price: 0.8 },
  { id: uuid(), name: CHEESE, price: 1.5 },
];

const snacks = [
  {
    id: uuid(),
    name: "X-Bacon",
    ingredients:
      [
        getIngredient(BACON),
        getIngredient(MEAT_BURGER),
        getIngredient(CHEESE),
      ]
  },
  {
    id: uuid(),
    name: "X-Burger",
    ingredients: [
      getIngredient(MEAT_BURGER),
      getIngredient(CHEESE),
    ]
  },
  {
    id: uuid(),
    name: "X-Egg",
    ingredients: [
      getIngredient(MEAT_BURGER),
      getIngredient(EGG),
      getIngredient(CHEESE),
    ]
  },
  {
    id: uuid(),
    name: "X-Egg Bacon",
    ingredients: [
      getIngredient(BACON),
      getIngredient(MEAT_BURGER),
      getIngredient(EGG),
      getIngredient(CHEESE),
    ]
  },
];

module.exports = {
  ingredients,
  snacks,
}
