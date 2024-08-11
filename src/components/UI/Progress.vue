<template>
  <div>
    <!-- Линейный прогресс-бар -->
    <div class="progress-wrapper">
      <h3>Linear Progress</h3>
      <div class="progress-bar">
        <div class="progress" :style="{ width: linearProgress + '%' }"></div>
      </div>
    </div>

    <!-- Круговой прогресс-бар -->
    <div class="progress-wrapper">
      <h3>Circular Progress</h3>
      <div class="circular-progress">
        <svg viewBox="0 0 36 36" class="circular-chart">
          <path
            class="circle"            
            :stroke-dasharray="circularProgress + ', 100'"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span class="circular-progress-value">{{ circularProgress }}%</span>
      </div>
    </div>

    <!-- Загрузочный прогресс-бар -->
    <div class="progress-wrapper">
      <h3>Loader Progress</h3>
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Progress",
  setup() {
    const linearProgress = ref(0);
    const circularProgress = ref(0);

    const simulateProgress = () => {
      if (linearProgress.value < 100) {
        linearProgress.value += 1;
        circularProgress.value += 1;
      } else {
        linearProgress.value = 0;
        circularProgress.value = 0;
      }
    };

    onMounted(() => {
      setInterval(simulateProgress, 100);
    });

    return {
      linearProgress,
      circularProgress,
    };
  },
};
</script>

<style scoped>

.progress-wrapper {
  margin-bottom: 30px;
}

/* Линейный прогресс-бар */
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #6200ea;
  border-radius: 10px 0 0 10px;
  transition: width 0.3s ease;
}

/* Круговой прогресс-бар */
.circular-progress {
  position: relative;
  width: 100px;
  height: 100px;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 100%;
  max-height: 250px;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke: #6200ea;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.circular-progress-value {
  font-size: 1.2rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Загрузочный прогресс-бар */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #6200ea;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
