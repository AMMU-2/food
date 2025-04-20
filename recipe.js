






import React from 'react';
import RecipeCard from '../components/RecipeCard';
import burger1 from '../assets/images/burger1.jpg';
import burger2 from '../assets/images/burger2.jpg';
import burger3 from '../assets/images/burger3.jpg';
import burger4 from '../assets/images/burger4.jpg';
import burger5 from '../assets/images/burger5.jpg';
import burger6 from '../assets/images/burger6.jpg';
import burger7 from '../assets/images/burger7.jpg';
import burger8 from '../assets/images/burger8.jpg';
import burger9 from '../assets/images/burger9.jpg';
import burger10 from '../assets/images/burger10.jpg';

function Recipes() {
  const recipeList = [
    {
      id: 1,
      title: 'Spicy Burger',
      description: 'Spicy juicy Beef Burger ',
      price: '₹199',
      imageUrl: burger1
    },
    {
      id: 2,
      title: 'Egg Toast',
      description: 'Simple, tasty, breakfast favorite 🍞🥚. ',
      price: '₹149',
      imageUrl: burger2
    },
    {
      id: 3,
      title: 'Cheese Pizza',
      description: 'Cheesy, delicious, classic Italian delight 🍕. ',
      price: '₹299',
      imageUrl: burger3
    },
    {
      id: 4,
      title: 'Pasta Alfredo',
      description: 'Creamy white sauce pasta.',
      price: '₹249',
      imageUrl: burger4
    },
    {
      id: 5,
      title: 'Grilled Sandwich',
      description: 'Grilled sandwich with veggies.',
      price: '₹99',
      imageUrl: burger5
    },
    {
      id: 6,
      title: 'Veg Biryani',
      description: 'Spicy veg biryani served hot.',
      price: '₹229',
      imageUrl: burger6
    },
    {
      id: 7,
      title: 'Paneer Tikka',
      description: 'Grilled paneer with masala.',
      price: '₹199',
      imageUrl: burger7
    },
    {
      id: 8,
      title: 'Chicken Curry',
      description: 'Spicy chicken curry.',
      price: '₹279',
      imageUrl: burger8
    },
    {
      id: 9,
      title: 'Cold Coffee',
      description: 'Chilled coffee with cream.',
      price: '₹89',
      imageUrl: burger9
    },
    {
      id: 10,
      title: 'Chocolate Cake',
      description: 'Soft and creamy chocolate cake.',
      price: '₹149',
      imageUrl: burger10
    }
  ];

  return (
    <div className="container mt-5 ">
      <div className="d-flex flex-wrap justify-content-center">
        {recipeList.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
