/*
 * @Page: layout
 * @Author: sun
 * @Date: 2019-10-09 09:17:53
 * @Last Modified by: sun
 */
<template>
  <el-container class="layout-box">
    <el-header class="layout-header">
      <Header/>
    </el-header>
    <el-main class="layout-main">
      <router-view/>
    </el-main>
  </el-container>
 </template>
<script>
import Header from '@/components/Header/index'
export default {
  components: {
    Header
  },
  data () {
    return {

    }
  }
}
</script>
 <style lang="scss" scoped>
.layout-box{
  height:100%;
  .layout-header{
    height:80px !important;
    padding:0;
  }
  .layout-main{
    height: calc(100% - 80px);
    padding:0;
    /*滚动条样式*/
    &::-webkit-scrollbar {/*滚动条整体样式*/
      width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      background: rgba(0,0,0,0.3);
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
    }
    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
      border-radius: 0;
      background: rgba(0,0,0,0.2);
    }
  }
}
 </style>
