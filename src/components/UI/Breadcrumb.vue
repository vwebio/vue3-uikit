<template>
  <div>
    <!-- Стандартные хлебные крошки -->
    <div class="breadcrumb-wrapper">
      <h3>Standard Breadcrumb</h3>
      <nav class="breadcrumb">
        <ul>
          <li v-for="(item, index) in breadcrumbs" :key="index" :class="{ 'is-active': index === breadcrumbs.length - 1 }">
            <a :href="item.link">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Разделенные хлебные крошки -->
    <div class="breadcrumb-wrapper">
      <h3>Separated Breadcrumb</h3>
      <nav class="breadcrumb breadcrumb-separated">
        <ul>
          <li v-for="(item, index) in breadcrumbs" :key="index" :class="{ 'is-active': index === breadcrumbs.length - 1 }">
            <a :href="item.link">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Хлебные крошки с иконками -->
    <div class="breadcrumb-wrapper">
      <h3>Icon Breadcrumb</h3>
      <nav class="breadcrumb breadcrumb-icons">
        <ul>
          <li v-for="(item, index) in breadcrumbs" :key="index" :class="{ 'is-active': index === breadcrumbs.length - 1 }">
            <a :href="item.link">
              <font-awesome-icon :icon="item.icon" />
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  setup() {
    const breadcrumbs = [
      { label: "Home", link: "/", icon: "fas fa-home" },
      { label: "Products", link: "/products", icon: "fas fa-box-open" },
      { label: "Electronics", link: "/products/electronics", icon: "fas fa-tv" },
      { label: "Laptops", link: "/products/electronics/laptops", icon: "fas fa-laptop" },
    ];

    return {
      breadcrumbs,
    };
  },
};
</script>

<style scoped>
/* Общие стили для хлебных крошек */
.breadcrumb-wrapper {
  margin-bottom: 30px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.breadcrumb li {
  margin-right: 10px;
}

.breadcrumb a {
  text-decoration: none;
  color: #6200ea;
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: #3700b3;
}

.breadcrumb .is-active a {
  color: #333;
  font-weight: bold;
  pointer-events: none;
}

/* Разделенные хлебные крошки */
.breadcrumb-separated li::after {
  content: "/";
  margin-left: 10px;
  color: #999;
}

.breadcrumb-separated li:last-child::after {
  content: "";
}

/* Хлебные крошки с иконками */
.breadcrumb-icons a {
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumb-icons i {
  margin-right: 5px;
  font-size: 16px;
  color: #6200ea;
  transition: color 0.3s;
}

.breadcrumb-icons i:hover {
  color: #3700b3;
}
</style>
