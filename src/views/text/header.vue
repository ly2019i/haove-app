<template>
  <header>
    <div id="header">
      <span class="logo">
        <img src="../../assets/img/logo.png" alt>
      </span>
      <van-search style="width:100%;padding:10px 7px" placeholder="沙发艺术" v-model="value"/>
      <router-link :to="{name:'xiaoxi'}">
        <i class="fa fa-bell-o"></i>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'heade',
  data() {
    return {
      value: '',
    }
  },
  components: {},
}
</script>
<style scoped>
header {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
}
#header {
  display: flex;
  justify-content: space-around;
}
.fa-bell-o {
  line-height: 54px;
  width: 30px;
  text-align: center;
}
.logo {
  padding: 0 5px;
  padding-top: 13px;

  box-sizing: border-box;
}
.logo img {
  width: 30px;
  height: 30px;
}
</style>
