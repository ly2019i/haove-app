<template>
  <div class="bedclothes">
    <van-nav-bar title="床具" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <h2>床具页面</h2>
  </div>
</template>
<script>
export default {
  name: 'bedclothes',
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
