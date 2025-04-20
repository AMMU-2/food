import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import PopupModal from '../components/popupmodel'; // Import popup modal
import '../css/Recipes.css';
import { useNavigate } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // Store recipes
  const [showLoginPopup, setShowLoginPopup] = useState(false); // Control login popup
  const navigate = useNavigate(); // For redirecting to login

  // Fetch all recipes on mount
  useEffect(() => {
    fetch('http://localhost:5000/recipe/all')
      .then((response) => response.json())
      .then((data) => {
        console.log("Response", data);
        setRecipes(data);
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  // Handle "View" (placeholder)
  const handleView = (recipe) => {
    console.log('Viewing recipe:', recipe);
    // Add view logic here
  };

  // Handle "Add to Cart"
  const handleAddToCart = async (recipe) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setShowLoginPopup(true); // 🔔 Show login modal if not logged in
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
      // You can optionally dispatch to Redux here
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

      {/* 🔔 Login Popup Modal */}
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
