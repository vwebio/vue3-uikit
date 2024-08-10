<template>
  <div class="badge-demo">   

    <!-- Standard Badge -->
    <div class="badge-container">
      <span class="badge badge-default">Default Badge</span>
      <span class="badge badge-primary">Primary Badge</span>
      <span class="badge badge-success">Success Badge</span>
      <span class="badge badge-warning">Warning Badge</span>
      <span class="badge badge-error">Error Badge</span>
    </div>

    <!-- Rounded Badge -->
    <div class="badge-container rounded">
      <span class="badge badge-default rounded">Default Badge</span>
      <span class="badge badge-primary rounded">Primary Badge</span>
      <span class="badge badge-success rounded">Success Badge</span>
      <span class="badge badge-warning rounded">Warning Badge</span>
      <span class="badge badge-error rounded">Error Badge</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.badge-demo {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.badge-container {
  margin-bottom: 20px;
}

.badge-container .badge {
  margin-right: 10px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  text-align: center;
  color: white;
}

.badge-container .badge:last-child {
  margin-right: 0;
}

.badge-container.rounded .badge {
  border-radius: 50px; 
}

.badge-default {
  background-color: #e0e0e0;
  color: #333;
}

.badge-primary {
  background-color: #6200ea;
}

.badge-success {
  background-color: #4caf50;
}

.badge-warning {
  background-color: #ff9800;
}

.badge-error {
  background-color: #f44336;
}
</style>
