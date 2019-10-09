/*
 * @Page: header
 * @Author: sun
 * @Date: 2019-10-09 09:14:27
 * @Last Modified by: sun
 */
 <template>
  <div class="header-box">
    <h1 class="logo">LOGO</h1>
    <Header1/>
  </div>
 </template>
<script>
import Header1 from './header1'
export default {
  components: {
    Header1
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.header-box /deep/ {
  height: 100%;
  background:#FABD00;
  display:flex;
  .logo{
    width:20%;
  }
  .header1-box{
    width:80%;
    .el-menu-demo{
      display: block;
      height: 100%;
      width:100%;
      li,.el-submenu__title{
        height: 100%;
        line-height: 80px;
      }
    }
    .el-menu--horizontal>.el-menu-item {
        height: 100%;
        line-height: 80px;
      }
  }
}
</style>
