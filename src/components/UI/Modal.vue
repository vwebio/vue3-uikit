<template>
  <div>
    <div class="demo">
      <Button @click="showModal = true" class="btn btn-primary"
        >Открыть окно</Button
      >
    </div>

    <!-- Модальное окно -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="btn modal-close-btn" @click="closeModal">×</button>
          <div class="modal-body">
            <h3>Modal Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh viverra non semper suscipit posuere
              a pede. Donec nec justo eget felis facilisis fermentum. Aliquam
              porttitor mauris sit amet orci. Aenean dignissim pellentesque
              felis. Morbi in sem quis dui placerat ornare. Pellentesque odio
              nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras
              consequat.
            </p>
          </div>
          <div class="modal-footer">
            <Button @click="closeModal" class="btn btn-primary">Close</Button>
            <Button @click="confirmAction" class="btn btn-confirm"
              >Confirm</Button
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Modal",

  setup() {
    const showModal = ref(false);

    const closeModal = () => {
      showModal.value = false;
    };

    const confirmAction = () => {
      console.log("Confirmed");
      closeModal();
    };

    return {
      showModal,
      closeModal,
      confirmAction,
    };
  },
};

// Компонент кнопки
export const Button = {
  template: `
    <button class="btn" @click="$emit('click')">
      <slot></slot>
    </button>
  `,
};
</script>

<style scoped>

.demo {
  padding: 20px;
  text-align: center;
}

/* Анимация открытия и закрытия модального окна */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Стили модального окна */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  position: relative;
  animation: slideUp 0.5s forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: red;
  border: none;
  cursor: pointer;
  color: white;
}

.modal-body {
  margin-bottom: 20px;
  color: #555;
  line-height: 1.6;
}

.modal-footer {
  text-align: right;
}

/* Стили для кнопок */
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.btn-primary {
  background-color: #6200ea;
  color: white;
}

.btn-primary:hover {
  background-color: #531cc0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
}

.btn-secondary {
  background-color: #03dac6;
  color: white;
}

.btn-secondary:hover {
  background-color: #02c3b0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.24);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-confirm {
  background-color: orange;
  color: white;
}
</style>
