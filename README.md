const handleAddToCart = async (recipe) => {
  const userId = localStorage.getItem("userId"); // Or get from Redux

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
    // Optionally dispatch Redux action to update cart here
  } catch (err) {
    console.error("Error adding to cart", err);
  }
};
