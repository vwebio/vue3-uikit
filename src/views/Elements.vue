<template>
    <div>
      <h2>{{ element }} Компонент</h2>
      <component :is="elementComponent"></component>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Elements',
    components: {
     
    },
    computed: {
      element() {
        return this.$route.params.element;
      },
      elementComponent() {
        return this.$options.components[this.element] || 'div';
      },
    },
  };
  </script>
  