<template>
  <a>id = {{$route.params.id}}</a>
</template>

<script>
export default {
  data() {
    return { id: "0" };
  },
  mounted() {
    console.info(this.$route);
    this.id = this.$route.params.id;
  }
};
</script>

<style>
</style>