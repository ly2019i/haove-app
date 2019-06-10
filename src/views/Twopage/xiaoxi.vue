<template>
  <div class="xiaoxi">
    <van-nav-bar title="消息" left-text="返回" left-arrow @click-left="onClickLeft"/>

    <p>亲，你好！我是智能客服，你可以直接向我提问，例如：货到哪了？</p>
    <div class="bbox">
      <div v-for="item in list" class="box">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="dd">
      <input type="text" placeholder="请输入消息内容" v-model="txt" @keyup.enter="fasong">
      <button @click="fasong">发送</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xiaoxi',
  data() {
    return {
      txt: '',
      list: [],
    }
  },
  methods: {
    onClickLeft(URL) {
      this.$router.go(-1)
    },
    fasong() {
      if (this.txt) {
        this.list.push(this.txt)
      }

      this.txt = ''
    },
  },
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 34px;
  margin-top: 5px;
}
.van-nav-bar__arrow {
  color: #333;
}
p {
  line-height: 30px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 25px;
}
.box p {
  float: right;

  line-height: 30px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 0 10px;
}
.dd {
  position: fixed;
  height: 40px;
  width: 100%;
  background: #fff;
  bottom: 0px;
  left: 0px;
}
input {
  height: 30px;
  width: 80%;
  border: none;
  display: block;
  font-size: 25px;
  float: left;
  margin-left: 10px;
}
button {
  float: right;
  font-size: 25px;
  border: none;
  margin-right: 10px;
}
.bbox {
  height: 500px;
  width: 100%;

  overflow: auto;
}
</style>

