<template>
  <div class="menu-container">
   
    <el-menu class="menu" router :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>信息模块
        </template>
        <template slot="title"></template>
        <el-menu-item index="/summary">
          <i class="el-icon-guide"></i>汉化概述
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-coffee-cup"></i>人员概况
        </el-menu-item>
        <el-menu-item margin-right index="1-3">
          <i class="el-icon-chat-line-round"></i>留言墙
        </el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">
            <i class="el-icon-document"></i>作品列表
          </template>
          <el-menu-item
            v-for="item in items"
            :key="item.id"
            :index="'/workspace/'+item.id"
            :title="item.message"
          >{{item.message}}</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>文件模块
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-milk-tea"></i>翻译
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-potato-strips"></i>校对
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-ice-cream-round"></i>测试
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>管理模块
        </template>
        <el-menu-item index="3-1">
          <i class="el-icon-key"></i>权限管理
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-truck"></i>职务管理
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-message"></i>消息中心
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
//import worksform from "../informationmodel/worksform"
export default {
  data() {
    return {
      items: [
        { id: "123", message: "向日葵：天空下的鹅卵石" },
        { id: "001", message: "Dal Segno" }
      ]
    };
  },
  mounted() {
    console.info("sider", this.$route);
  }
};
</script>

<style lang="less">
.menu-container {
  height: 100%;
  width: 240px;
}
.menu {
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  .el-menu-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.el-icon-delete {
  font-size: 1000;
}
</style>