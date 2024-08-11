<template>
    <nav class="sidebar">
      <ul>
        <li v-for="element in elements" :key="element">
          <router-link :to="`/elements/${element}`">{{ element }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>

  export default {
    name: 'Sidebar',
    data() {
      return {
        elements: [
          'Button',
          'Input',          
          'Modal',
          'Card',
          'Accordion',
          'Badge',
          'Pagination',
          'Breadcrumb',
          'Progress',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #f5f5f5;
    width: 200px;
    padding: 16px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 8px;
  }
  
  .sidebar a {
    color: #6200ea;
    text-decoration: none;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {

    .sidebar {
      width: auto;
    }

  }
  </style>
  