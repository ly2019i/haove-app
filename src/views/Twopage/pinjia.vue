<template>
  <div class="app">
    <h1>评价</h1>
    <textarea v-model="txt" cols="36" rows="12" style="OVERFLOW:   hidden"></textarea>
    <button @click=" fasong" @keyup.enter="fasong">发送</button>
  </div>
</template>
<script>
export default {
  name: 'pinjia',
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    fasong() {
      var mymessage = confirm('确认是否发送？')
      if (mymessage == true) {
        console.log('发送成功')
        this.$router.go(-1)
      } else {
        console.log('取消发送')
      }
    },
  },
}
</script>
<style scoped>
textarea {
  font-size: 20px;
}
</style>

