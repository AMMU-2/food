.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background-color: #f4f4f4;
  max-width: 1000px; /* Set a maximum width to fit three cards */
  margin: auto; /* Center the container */
}

.recipe-card {
  background: #fff;
  border: 1px solid #ddd;
  width: 300px;
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.date-label {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: black;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  font-weight: bold;
  border-radius: 2px;
}

.recipe-img {
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 10px;
}

.recipe-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
}

.recipe-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.cupcake-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
