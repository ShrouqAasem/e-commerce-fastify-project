<template>
  <div class="container mt-4">
    <h2>Category List</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'category', params: { id: category.id } }">
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "categories-list-component",
      categories: [{
        id: 1,
        name: "hello 1"
      }],
    };
  },
}
</script>