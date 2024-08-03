<template>
    <button class="btn">
      <slot>Button</slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
  
  .btn:hover {
    background-color: #3700b3;
  }
  </style>
  