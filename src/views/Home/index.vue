<template>
  <div class="main-layout">
    <topbar></topbar>
      <div class="body-layout">
       <siderbar></siderbar>
          <div class="content-wrapper">
          <router-view></router-view></div>
      </div>
    </div>
  
</template>

<script>
import siderbar from "@components/Siderbar";
import topbar from "@components/Topbar";

export default {
  components: {topbar, siderbar }
};
</script>

<style lang="less" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  .body-layout {
    display: flex;
    flex-direction: row;
    flex: 1;
    overflow: hidden;

    .content-wrapper {
      padding: 20px;
      box-sizing: border-box;
    }
  }
}
</style>