<template>
  <div class="tableware">
    <van-nav-bar title="餐厨" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>餐厨页面</h2>
  </div>
</template>
<script>
export default {
  name: 'tableware',
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
