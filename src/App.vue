<template>
  <div id="app">
    <router-view />
    <!-- <chtholly></chtholly> -->
  </div>
</template>

<script>
// import Chtholly from '@components/Chtholly';
export default {
  components: {
    // chtholly: Chtholly,
  }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
