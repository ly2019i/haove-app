<template>
  <div class="cabinet">
    <van-nav-bar title="柜架" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>柜架页面</h2>
  </div>
</template>
<script>
export default {
  name: 'cabinet',
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
