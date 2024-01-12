<template>
  <Navigationbar />
  <router-view />
</template>

<script>
import Navigationbar from '@/components/Navigationbar.vue';

export default {
  name: 'App',
  components: {
    Navigationbar,
  },
};
</script>

<style>

</style>
