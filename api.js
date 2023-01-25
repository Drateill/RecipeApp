import fetch from 'node-fetch';

export const getRecipes = () => {
  return fetch('http://10.0.2.2:6969/recipes')
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getRandomRecipes = (number) => {
  return fetch(`http://10.0.2.2:6969/recipes/random/${number}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return { recipes: [] };
    });
};