<template>
  <el-header style="text-align: right; font-size: 15px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的信息</el-dropdown-item>
          <el-dropdown-item>消息</el-dropdown-item>
          <router-link :to="{ path:'/login'}"><el-dropdown-item>退出登录</el-dropdown-item></router-link>
        </el-dropdown-menu>
      </el-dropdown>
      <span>萌田薰子</span>
    </el-header>
</template>

<script>
export default {

}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
   
  }
  
</style>