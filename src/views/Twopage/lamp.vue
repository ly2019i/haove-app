<template>
  <div class="lamp">
    <van-nav-bar title="灯具" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>灯具页面</h2>
  </div>
</template>
<script>
export default {
  name: 'lamp',
  methods: {
    onClickLeft(URL) {
      this.$router.push({
        name: URL,
      })
    },
  },
}
</script>

<style scoped>
.van-nav-bar__arrow {
  color: #333;
}
</style>
