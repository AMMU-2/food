.recipes-page {
  padding: 40px;
  background-color: #121212;
  min-height: 100vh;
  color: white;
  text-align: center;
}

.recipes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
}

.recipe-card {
  background: #1e1e1e;
  border: 1px solid #333;
  width: 380px;  /* expanded width */
  padding: 25px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  color: #fff;
}

.recipe-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.recipe-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.recipe-title {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 12px 0;
  text-align: center;
}

.recipe-desc {
  font-size: 16px;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 12px;
  text-align: center;
}

.recipe-price {
  font-size: 20px;
  font-weight: 600;
  color: #ffd700;
  text-align: center;
  margin-bottom: 20px;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.card-buttons button {
  flex: 1;
  padding: 10px 14px;
  margin: 0 5px;
  background: #ff5722;
  border: none;
  color: #fff;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.card-buttons button:hover {
  background: #e64a19;
}

/* Responsive adjustments */

@media (max-width: 1300px) {
  .recipe-card {
    width: 340px;
  }
}

@media (max-width: 992px) {
  .recipe-card {
    width: 48%;
  }
}

@media (max-width: 600px) {
  .recipe-card {
    width: 95%;
  }
}
