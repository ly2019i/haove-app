<template>
  <div class="Table">
    <van-nav-bar title="桌几" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>桌几页面</h2>
  </div>
</template>
<script>
export default {
  name: 'Table',
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
