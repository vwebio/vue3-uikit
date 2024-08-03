<template>
    <Header />
    <div class="main-layout">
      <Sidebar />
      <router-view />
    </div>
    <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
}

router-view {
  flex: 1;
  padding: 16px;
}
</style>
