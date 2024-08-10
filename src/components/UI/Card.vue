<template>
    <div class="card">
      <h3 class="card-title"><slot name="title">Card Title</slot></h3>
      <div class="card-content">
        <slot>Card Content</slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    margin: 0 0 16px;
  }
  
  .card-content {
    color: #333;
  }
  </style>
  