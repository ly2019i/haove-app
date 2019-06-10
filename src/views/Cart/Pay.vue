<template>
  <div class="pay">
    <van-nav-bar class="cartnav" title="好物收银台" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="zhifu">
      <p>
        订单编号:{{ no }}
        <span>
          需支付:
          <i>{{ price }}</i>元
        </span>
      </p>
    </div>
    <img src="../../../static/images/好物.png">
    <p class="elsePay">其他支付方式</p>
    <van-radio-group v-model="radio">
      <van-cell title="微信支付" clickable @click="radio = '1'">
        <van-radio name="1"/>
      </van-cell>
      <van-cell title="支付宝支付" clickable @click="radio = '2'">
        <van-radio name="2"/>
      </van-cell>
    </van-radio-group>
    <van-submit-bar button-text="确认支付" @submit="onSubmit"/>
  </div>
</template>
<script>
import { del } from '../../untile/requets'
export default {
  name: 'Pay',
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit() {
      if (this.radio != '') {
        del('/api/v1/orders/' + this.id, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }).then(res => {
          console.log(res)
          this.$toast({
            message: '支付成功',
          })
          this.$router.push({
            name: 'Cart',
          })
        })
      } else {
        this.$toast({
          message: '请选择支付方式',
        })
      }
    },
  },
  data() {
    return {
      no: '',
      price: '',
      radio: '',
      id: '',
    }
  },
  created() {
    this.no = this.$route.params.no
    this.price = this.$route.params.price
    this.id = this.$route.params.id
    console.log(this.$route.params)
  },
}
</script>
<style scoped>
.zhifu {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
}
.zhifu span {
  float: right;
  margin-right: 20px;
}
.zhifu span i {
  font-style: normal;
  color: red;
}
.elsePay {
  margin-top: 30px;
  font-size: 12px;
  color: #333333;
}
</style>
