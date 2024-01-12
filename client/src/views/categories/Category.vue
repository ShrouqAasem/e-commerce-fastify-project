<template>
  <div>
    <h1>{{ category?.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CategoryView",
  data() {
    return {
      category: null,
    };
  },
  created() {
    this.fetchCategory();
  },
  methods: {
    async fetchCategory() {
      const categoryId = this.$route.params.id;

      try {
        const response = await axios.get(`http://localhost:3000/api/categories/${categoryId}`);

        this.category = response.data;
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    },
  },
};
</script>
