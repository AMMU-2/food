import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import PopupModal from '../components/popupmodel';
import '../css/Recipes.css';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/recipe/all')
      .then((response) => response.json())
      .then((data) => {
        console.log("Recipes:", data);
        setRecipes(data);
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  const handleView = (recipe) => {
    console.log('Viewing recipe:', recipe);
  };

  const handleAddToCart = async (recipe) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setShowLoginPopup(true);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          recipeId: recipe._id, // ✅ CORRECT FIELD NAME
          quantity: 1
        })
      });

      const data = await res.json();
      console.log("Cart response:", data);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  return (
    <div className="main">
      <h2>Featured Recipes</h2><br />
      <div className="cupcake-list">
        {recipes.map((recipe) => (
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

      <PopupModal
        show={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        onLogin={() => {
          setShowLoginPopup(false);
          navigate("/login");
        }}
      />
    </div>
  );
};

export default Recipes;
