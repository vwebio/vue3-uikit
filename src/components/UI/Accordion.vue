<template>
  <h3>Accordion to Tabs - mobile first</h3>
  <section class="accordion">    
    <!-- Tab заголовки -->
    <section class="accordion-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['accordion-tab', { 'accordion-active': isActiveTab(index) }]"
        @click="setActiveTab(index)"
      >
        {{ tab.label }}
      </button>
    </section>

    <!-- Tab контент -->
    <section class="accordion-content">
      <article
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['accordion-item', { 'accordion-active': isActiveTab(index) }]"
      >
        <h4 class="accordion-item__label" @click="setActiveTab(index)">
          {{ tab.label }}
        </h4>
        <div class="accordion-item__container">
          <p>{{ tab.content }}</p>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AccordionToTabs",
  setup() {
    const tabs = ref([
      {
        label: "Tab 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt minima?",
      },
      {
        label: "Tab 2",
        content:
          "Reprehenderit temporibus, assumenda cupiditate consequatur soluta odit ex repudiandae delectus cumque.",
      },
      {
        label: "Tab 3",
        content:
          "Bored ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt minima?",
      },
      {
        label: "Tab 4",
        content:
          "Deus reprehenderit temporibus, assumenda cupiditate consequatur soluta odit ex repudiandae delectus cumque.",
      },
      {
        label: "Tab 5",
        content:
          "Voluptates deserunt minima, reprehenderit temporibus, assumenda cupiditate consequatur soluta.",
      },
    ]);

    const activeTab = ref(0);

    const setActiveTab = (index) => {
      activeTab.value = index;
    };

    const isActiveTab = (index) => {
      return activeTab.value === index;
    };

    return {
      tabs,
      activeTab,
      setActiveTab,
      isActiveTab,
    };
  },
};
</script>

<style scoped>
.accordion {
  background: #f9f9f9;
  box-shadow: 0 1em 2em -0.9em rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

@media (min-width: 600px) {
  .accordion {
    max-width: 600px;
  }
}

.accordion-tabs {
  display: none;
}

@media (min-width: 600px) {
  .accordion-tabs {
    display: flex;
    background: rgba(68, 127, 255, 0.1);
  }

  .accordion-tab {
    background: rgba(68, 127, 255, 0.1);
    padding: 1rem 2rem;
    font: inherit;
    flex: 1;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease;
  }

  .accordion-tab:hover {
    background: rgba(249, 249, 249, 0.1);
  }

  .accordion-tab.accordion-active {
    background: #f9f9f9;
  }
}

.accordion-content .accordion-item {
  border-bottom: 1px solid #eaeaea;
  padding: 1.25rem;
  background: #f9f9f9;
  transition: height 0.5s ease;
  cursor: pointer;
}

.accordion-content .accordion-item:last-child {
  border-bottom: none;
}

.accordion-content .accordion-item__label {
  margin: 0;
  cursor: pointer;
  transition: padding 0.2s ease;
}

/* Article не видны по умолчанию  */
.accordion-item {
  display: block;
}

.accordion-content .accordion-item__container {
  padding: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: padding 0.2s ease, opacity 0.5s 0.15s ease;
}

.accordion-content .accordion-active {
  background: rgba(68, 127, 255, 0.1);
  padding: 1rem;
  display: block;
  border: none;
  min-height: 100px;
}

.accordion-content .accordion-active .accordion-item__label {
  padding-bottom: 1.5rem;
  cursor: inherit;
}

.accordion-content .accordion-active .accordion-item__container {
  padding: 0;
  height: auto;
  opacity: 1;
}

@media (min-width: 600px) {
  .accordion-item {
    display: none;
  }

  .accordion-content .accordion-active {
    padding: 2.4rem;
    min-height: 260px;
  }

  .accordion-content .accordion-active .accordion-item__container {
    padding: 1.25em;
  }
}
</style>
