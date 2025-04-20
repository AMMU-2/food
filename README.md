import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import '../css/Recipes.css'; // Assuming you want to use the same CSS as Main

const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // State to store fetched recipes

  // Fetch recipes from backend when component mounts
  useEffect(() => {
    fetch('http://localhost:5000/recipe/all')
      .then((response) => response.json())
      .then((data) => {
        console.log("Response", data);
        setRecipes(data); // Update state with fetched recipes
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  // Handle view recipe (placeholder)
  const handleView = (recipe) => {
    console.log('Viewing recipe:', recipe);
    // Add your view logic here
  };

  // Handle add to cart
  const handleAddToCart = async (recipe) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("You must be logged in to add to cart.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          cakeId: recipe._id,
          quantity: 1
        })
      });

      const data = await res.json();
      console.log("Cart response:", data);

      // Optionally: trigger Redux update or refresh cart
    } catch (err) {
      console.error("Error adding to cart", err);
    }
  };

  return (
    <div className="main">
      <h2>Featured Recipes</h2>
      <br />
      <div className="cupcake-list">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe._id}
            image={recipe.imageUrl}
            recipeName={recipe.title}
            description={recipe.description}
            price={recipe.price}
            onView={() => handleView(recipe)}
            onAddToCart={() => handleAddToCart(recipe)}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
