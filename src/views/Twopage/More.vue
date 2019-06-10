<template>
  <div class="More">
    <van-nav-bar title="更多" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>更多页面</h2>
  </div>
</template>
<script>
export default {
  name: 'More',
  data() {
    return {}
  },
  methods: {
    onClickLeft(URL) {
      this.$router.push({
        name: URL,
      })
    },
  },
}
</script>

<style scoped lang="less">
.van-nav-bar__arrow {
  color: #333;
}
</style>
