/*
 * @Page: 首页
 * @Author: sun
 * @Date: 2019-10-08 17:48:17
 * @Last Modified by: sun
 */
 <template>
 <div class="home">
   首页
   <el-button @click="toA">跳转1</el-button>
   <el-button @click="toA">跳转2</el-button>
 </div>
 </template>
<script>
import 'echarts/map/js/china.js'
export default {
  data () {
    return {

    }
  },
  methods: {
    toA () {
      this.$router.push({
        path: '/aboutUs/about1'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  height:100%;
}
</style>
