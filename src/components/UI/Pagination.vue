<template>
    <div class="pagination">
      <button @click="prev" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="next" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Pagination',
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const currentPage = ref(1);
  
      const next = () => {
        if (currentPage.value < props.totalPages) {
          currentPage.value += 1;
        }
      };
  
      const prev = () => {
        if (currentPage.value > 1) {
          currentPage.value -= 1;
        }
      };
  
      return { currentPage, next, prev };
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
  }
  
  .pagination button {
    background-color: #6200ea;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 5px;
  }
  
  .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  