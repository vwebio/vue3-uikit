<template>
  <div>
    <h3>Base</h3>
    <div class="flex-block">
      <div v-for="variant in variantClasses" :key="variant" class="btn-wrapper">
        <button
          :class="['btn', variant]"
          :disabled="isDisabled"
          @click="handleClick"
        >
          <slot>{{ variant.replace("btn-", "").replace("-", " ") }}</slot>
        </button>
      </div>
    </div>

    <h3>Rounded</h3>
    <div class="flex-block">
      <div
        v-for="variant in variantClasses"
        :key="`rounded-${variant}`"
        class="btn-wrapper"
      >
        <button
          :class="['btn', variant, 'btn-rounded']"
          :disabled="isDisabled"
          @click="handleClick"
        >
          <slot
            >{{ variant.replace("btn-", "").replace("-", " ") }} Rounded</slot
          >
        </button>
      </div>
    </div>

    <h3>Outlined</h3>
    <div class="flex-block">
      <div
        v-for="variant in variantClasses"
        :key="`outlined-${variant}`"
        class="btn-wrapper"
      >
        <button
          :class="['btn', variant, 'btn-outlined']"
          :disabled="isDisabled"
          @click="handleClick"
        >
          <slot
            >{{ variant.replace("btn-", "").replace("-", " ") }} Outlined</slot
          >
        </button>
      </div>
    </div>

    <h3>Rounded & Outlined</h3>
    <div class="flex-block">
      <div
        v-for="variant in variantClasses"
        :key="`rounded-outlined-${variant}`"
        class="btn-wrapper"
      >
        <button
          :class="['btn', variant, 'btn-rounded', 'btn-outlined']"
          :disabled="isDisabled"
          @click="handleClick"
        >
          <slot
            >{{ variant.replace("btn-", "").replace("-", " ") }} Rounded
            Outlined</slot
          >
        </button>
      </div>
    </div>

    <h3>Disabled</h3>
    <div class="flex-block">
      <div
        v-for="variant in variantClasses"
        :key="`disabled-${variant}`"
        class="btn-wrapper"
      >
        <button
          :class="['btn', variant, 'btn-disabled']"
          :disabled="true"
          @click="handleClick"
        >
          <slot
            >{{ variant.replace("btn-", "").replace("-", " ") }} Disabled</slot
          >
        </button>
      </div>
    </div>

    <h3>Sizes</h3>
    <div class="flex-block">
      <div v-for="size in sizeClasses" :key="size" class="btn-wrapper">
        <button :class="['btn', 'btn-primary', size]" @click="handleClick">
          <slot>{{ size.replace("btn-", "") }}</slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variantClasses: {
      type: Array,
      default: () => [
        "btn-primary",
        "btn-secondary",
        "btn-success",
        "btn-info",
        "btn-warning",
        "btn-danger",
      ],
    },
    sizeClasses: {
      type: Array,
      default: () => ["btn-normal", "btn-medium", "btn-large"],
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const handleClick = (event) => {
      if (props.isDisabled) {
        event.preventDefault();
      }
    };

    return { handleClick };
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.btn:hover {
  filter: brightness(1.1);
}

.btn-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-rounded {
  border-radius: 50px;
}

.btn-outlined {
  background-color: transparent;
  border: 2px solid currentColor;
}

.btn-outlined:hover {
  background-color: currentColor;
  color: white;
}

.btn-primary {
  background-color: #6200ea;
  color: white;
}

.btn-primary:hover {
  background-color: #5a00d4;
}

.btn-primary.btn-outlined:hover {
  background-color: #6200ea;
  color: white;
}

.btn-secondary {
  background-color: #03dac6;
  color: white;
}

.btn-secondary:hover {
  background-color: #02c3b0;
}

.btn-secondary.btn-outlined:hover {
  background-color: #03dac6;
  color: white;
}

.btn-success {
  background-color: #4caf50;
  color: white;
}

.btn-success:hover {
  background-color: #43a047;
}

.btn-success.btn-outlined:hover {
  background-color: #4caf50;
  color: white;
}

.btn-info {
  background-color: #2196f3;
  color: white;
}

.btn-info:hover {
  background-color: #1e88e5;
}

.btn-info.btn-outlined:hover {
  background-color: #2196f3;
  color: white;
}

.btn-warning {
  background-color: #ff9800;
  color: white;
}

.btn-warning:hover {
  background-color: #fb8c00;
}

.btn-warning.btn-outlined:hover {
  background-color: #ff9800;
  color: white;
}

.btn-danger {
  background-color: #f44336;
  color: white;
}

.btn-danger:hover {
  background-color: #e53935;
}

.btn-danger.btn-outlined:hover {
  background-color: #f44336;
  color: white;
}

.btn-normal {
  font-size: 14px;
  padding: 10px 20px;
}

.btn-medium {
  font-size: 16px;
  padding: 12px 24px;
}

.btn-large {
  font-size: 18px;
  padding: 14px 28px;
}

</style>
