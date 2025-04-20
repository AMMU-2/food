{recipes.map(recipe => (
  <RecipeCard
    key={recipe._id}
    image={recipe.imageUrl}
    recipeName={recipe.title}
    description={recipe.description}
    price={recipe.price}
    onView={() => handleView(recipe)}
    onAddToCart={() => handleAddToCart(recipe)} // <-- Pass the recipe here
  />
))}
