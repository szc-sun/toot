/*
 * @Page: undefined
 * @Author: sun
 * @Date: 2019-10-09 09:36:38
 * @Last Modified by: sun
 */
<template>
  <div class="header1-box">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#FABD00"
    text-color="#333"
    active-text-color="#333"
    :router="true"
    >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu index="aboutUs">
      <template slot="title">品牌介绍</template>
      <el-menu-item index="/aboutUs/about1">品牌介绍1</el-menu-item>
      <el-menu-item index="/aboutUs/about2">品牌介绍2</el-menu-item>
      <!-- <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu> -->
    </el-submenu>
    <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
    <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
  </el-menu>
  </div>
 </template>
<script>
export default {
  data () {
    return {
      // activeIndex: '1',
      menuList: [
        {
          title: '首页',
          path: '/home',
          // icon: 'yonghu',
          children: []
        },
        {
          title: '品牌介绍',
          path: '/aboutUs',
          children: []
        }
      ]
    }
  },
  computed: {
    activeIndex () {
      return window.location.hash.substr(1)
    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
 <style lang="scss" scoped>
 </style>
 <style lang="scss">
 .el-menu{
  .el-menu-item, .el-submenu__title{
    &:hover{
      background: #FABAA0 !important;
    }
  }
 }
 </style>
