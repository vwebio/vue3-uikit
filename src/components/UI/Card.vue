<template>
  <div class="card-wrapper">
    <!-- Карточка с текстом -->
    <div class="card">
      <h3 class="card-title"><slot name="title">Simple Card</slot></h3>
      <div class="card-content">
        <slot>Lorem ipsum dolor sit amet. Donec odio</slot>
      </div>
    </div>

    <!-- Карточка с изображением -->
    <div class="card card-image">
      <img src="https://via.placeholder.com/300x150" alt="Placeholder Image" class="card-img">
      <div class="card-content">
        <h3 class="card-title"><slot name="title">Card Image</slot></h3>
        <slot>Lorem ipsum dolor sit amet. Donec odio</slot>
      </div>
    </div>

    <!-- Карточка с кнопкой -->
    <div class="card">
      <h3 class="card-title"><slot name="title">Card Button</slot></h3>
      <div class="card-content">
        <slot>Lorem ipsum dolor sit amet. Donec odio</slot>
      </div>
      <button class="card-button">Click Me</button>
    </div>

    <!-- Карточка пользователя -->
    <div class="card card-user">
      <img src="https://via.placeholder.com/80" alt="User Avatar" class="card-avatar">
      <div class="card-content">
        <h3 class="card-title">Agent Smith</h3>
        <p>smit@matrix.com</p>
        <button class="card-button">Follow</button>
      </div>
    </div>

    <!-- Карточка с ценой -->
    <div class="card card-price">
      <div class="card-content">
        <h3 class="card-title">Pro Plan</h3>
        <p class="card-price-value">$29/month</p>
        <ul class="card-features">
          <li><i class="fas fa-check"></i> Feature 1</li>
          <li><i class="fas fa-check"></i> Feature 2</li>
          <li><i class="fas fa-check"></i> Feature 3</li>
        </ul>
        <button class="card-button">Choose Plan</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-title {
  margin: 0 0 16px;
  font-size: 1.5rem;
  color: #333;
}

.card-content {
  color: #555;
  font-size: 1rem;
  text-align: center;
}

.card-img {
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 16px;
  border-radius: 8px 8px 0 0;
}

.card-button {
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background-color: #0056b3;
}

.card-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.card-user .card-title {
  margin: 5px 0 8px;
  font-size: 1.2rem;
}

.card-user .card-button {
  padding: 8px 16px;
  background-color: #28a745;
}

.card-user .card-button:hover {
  background-color: #218838;
}

.card-price {
  border: 2px solid #007bff;
}

.card-price .card-title {
  font-size: 1.4rem;
  color: #007bff;
}

.card-price-value {
  font-size: 2rem;
  color: #007bff;
  margin: 16px 0;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}

.card-features li {
  margin: 8px 0;
}

.card-features i {
  color: #28a745;
  margin-right: 8px;
}

@media (min-width: 600px) {
  .card-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
