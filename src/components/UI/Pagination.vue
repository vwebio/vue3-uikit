<template>
  <div class="pagination-wrapper">
    <!-- Вариант 1: Простая пагинация -->
    <div class="pagination">
      <button @click="prev" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="next" :disabled="currentPage === totalPages">Next</button>
    </div>

    <!-- Вариант 2: Пагинация с нумерацией -->
    <div class="pagination pagination-numbered">
      <button @click="prev" :disabled="currentPage === 1">Previous</button>
      <span v-for="page in pages" :key="page" @click="goToPage(page)" 
            :class="{ active: page === currentPage, dots: page === '...'}">
        {{ page }}
      </span>
      <button @click="next" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

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

    // Переход на следующую страницу
    const next = () => {
      if (currentPage.value < props.totalPages) {
        currentPage.value += 1;
      }
    };

    // Возврат на предыдущую страницу
    const prev = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    // Перехода к определенной странице
    const goToPage = (page) => {
      if (page !== '...') {
        currentPage.value = page;
      }
    };

    // Генерация страниц с нумерацией
    const pages = computed(() => {
      if (props.totalPages <= 5) {
        return Array.from({ length: props.totalPages }, (_, i) => i + 1);
      }
      
      if (currentPage.value <= 3) {
        return [1, 2, 3, '...', props.totalPages];
      }

      if (currentPage.value >= props.totalPages - 2) {
        return [1, '...', props.totalPages - 3, props.totalPages - 2, props.totalPages - 1, props.totalPages];
      }

      return [1, '...', currentPage.value - 1, currentPage.value, currentPage.value + 1, '...', props.totalPages];
    });

    const dots = computed(() => {
      return Array.from({ length: props.totalPages }, () => '');
    });

    return { currentPage, next, prev, goToPage, pages, dots };
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
}

.pagination button {
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

.pagination:hover button {
  background-color: #7457f7;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.pagination span:hover {
  background-color: #ddd8f1;
}

.pagination-numbered span.active {
  background-color: #6200ea;
  color: white;
}

.pagination-numbered:hover span.active {
  background-color: #7457f7;
}

.pagination-numbered span.dots {
  cursor: default;
}

</style>
