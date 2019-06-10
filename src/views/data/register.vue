<template>
  <div class="register">
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft('login')"/>
    <div class="data1">
      <div class="photo">
        <span>个人头像</span>
        <el-upload
          class="avatar-uploader"
          action="https://api.cat-shop.penkuoer.com/api/v1/common/file_upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="users.avatar" :src="users.avatar | setImgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <van-cell-group>
        <van-field v-model="users.nickName" required label="昵称" placeholder="请输入昵称"/>
        <van-field
          v-model="users.userName"
          required
          label="用户名"
          placeholder="请输入用户名"
          @keydown="rules(users.userName,'user')"
        />

        <van-field
          v-model="users.password"
          required
          type="password"
          label="密码"
          placeholder="请输入密码"
          @keydown="rules(users.password,'pass')"
        />
        <van-field v-model="users.phone" label="手机号" placeholder="请输入手机号"/>
      </van-cell-group>
      <div class="btnregister">
        <el-button type="primary" style="width:100%;" @click="register">立即注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { Toast } from 'vant'
import { Dialog } from 'vant'
import { Uploader } from 'vant'

export default {
  name: 'register',
  data() {
    return {
      users: {
        password: '',
        userName: '',
        nickName: '',
        phone: '',
        avatar: '',
      },
    }
  },
  filters: {
    setImgUrl(url) {
      return 'https://api.cat-shop.penkuoer.com' + url
    },
  },
  methods: {
    onClickLeft(URL) {
      this.$router.push({
        name: URL,
      })
    },
    rules(v, choose) {
      const { users } = this
      if (choose == 'user') {
        let userName = v.trim()
        let uPattern = /^[a-zA-Z0-9_]{4,12}$/g

        if (userName.split('').length > 12) {
          return false
        }
        if (!uPattern.test(userName)) {
          Toast('请输入4到16位(字母,数字,下划线)')
        }
        console.log(userName, v.trim())
      } else if (choose == 'pass') {
        let password = v.trim()
        //最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
        let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
        if (!pPattern.test(password)) {
          Toast('密码强度较弱o(╥﹏╥)o')
          console.log('Aaa')
        } else {
          Toast('密码强度 安全^_^')
          console.log('Aaa')
        }
      }
    },
    register() {
      const { users } = this
      if (users.avatar && users.password && users.userName && users.nickName) {
        axios
          .post('https://api.cat-shop.penkuoer.com/api/v1/auth/reg', users)
          .then(res => {
            console.log(res)
            console.log(users)
            if (res.data.code == 'success') {
              alert('注册成功，请登录')
              this.$router.push({ name: 'login' })
            } else if (res.data.message == 'user not found') {
              alert('用户不存在，请注册')
            } else {
              console.log(res.data)
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
    handleAvatarSuccess(res, file) {
      this.users.avatar = res.info
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
  },
}
function foo() {
  var a = 10
  return function bar() {}
}
</script>
<style scoped>
@import url('../../assets/css/register.css');
</style>
