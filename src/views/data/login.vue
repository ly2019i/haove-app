<template>
  <div class="login">
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <div class="welcome">
      <img src="../../assets/login.png">
    </div>
    <div class="login-form">
      <div class="login-inp">
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名" v-model="user.userName">
      </div>
      <div class="login-inp">
        <label>密码</label>
        <input type="password" placeholder="请输入密码" v-model="user.password">
      </div>
      <div class="login-inp1">
        <a href="#" @click="login" @keyup.enter="login">立即登录</a>
      </div>
    </div>
    <div class="login-txt">
      <router-link :to="{
        name:'register'
      }">立即注册&nbsp;</router-link>|
      <router-link :to="{
        name:'register'
      }">忘记密码？</router-link>
    </div>

    <div style="text-align:center;"></div>
    <div class="grant">
      <a href>
        <i class="fa fa-qq"></i>
      </a>
      <a href>
        <i class="fa fa-weixin"></i>
      </a>
      <a href>
        <i class="fa fa-weibo"></i>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { Toast } from 'vant'
import { Dialog } from 'vant'

export default {
  name: 'login',
  data() {
    return {
      user: {
        password: '',
        userName: '',
      },
    }
  },
  methods: {
    onClickLeft(URL) {
      this.$router.push({
        name: URL,
      })
    },
    login() {
      const { user } = this
      if (user.password && user.userName) {
        axios
          .post('https://api.cat-shop.penkuoer.com/api/v1/auth/login', user)
          .then(res => {
            if (res.data.code == 'success') {
              localStorage.setItem('token', res.data.token)
              this.$router.push({ name: 'home' })
            } else if (res.data.message == 'user not found') {
              alert('用户不存在，请注册')
            } else {
              alert(res.data.message)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('请输入正确的密码')
      }
    },
  },
}
</script>
<style scoped>
@import url('../../assets/css/login.css');
</style>
