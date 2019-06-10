<template>
  <footer class="foot" v-if="$store.state.isShowFooter">
    <van-tabbar v-model="active" active-color="#000" inactive-color="#888">
      <van-tabbar-item :to="{
        name:'home'
      }" class="fa fa-home">首页</van-tabbar-item>

      <van-tabbar-item :to="{
        name:'list'
      }" class="fa fa-circle-o">社区</van-tabbar-item>

      <van-tabbar-item :to="{
        name:'Cart'
      }" class="fa fa-shopping-cart">购物车</van-tabbar-item>

      <van-tabbar-item :to="{
        name:'user'
      }" class="fa fa-etsy">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  name: 'foote',
  components: {},
  data() {
    return {
      active: this.$store.state.setActive,
    }
  },
}
</script>
<style scoped>
.foot {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  background: rgb(233, 233, 233);
}
.foot figure {
  width: 25%;
}
</style>
