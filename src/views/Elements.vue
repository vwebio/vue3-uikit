<template>
  <div class="elem-content">
    <h2>{{ element }} компонент</h2>
    <component :is="elementComponent"></component>
  </div>
</template>

<script>
import Card from "../components/UI/Card.vue";
import Button from "../components/UI/Button.vue";
import Input from "../components/UI/Input.vue";
import Modal from "../components/UI/Modal.vue";
import Accordion from "../components/UI/Accordion.vue";
import Badge from "../components/UI/Badge.vue";
import Pagination from "../components/UI/Pagination.vue";
import Breadcrumb from "../components/UI/Breadcrumb.vue";
import Progress from "../components/UI/Progress.vue";

export default {
  name: "Elements",
  components: {
    Button,
    Input,
    Modal,
    Card,
    Accordion,
    Badge,
    Pagination,
    Breadcrumb,
    Progress,
  },
  computed: {
    element() {
      return this.$route.params.element;
    },
    elementComponent() {
      return this.$options.components[this.element] || "div";
    },
  },
};
</script>

<style scoped>
.elem-content {
  padding: 0 50px 50px;
}

@media (max-width: 600px) {
  .elem-content {
  padding: 0 10px 10px;
}
}
</style>
