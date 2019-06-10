<template>
  <div class="orderlist">
    <van-nav-bar class="cartnav" title="确认订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="section">
      <div class="address" @click="dizhi">
        <van-icon name="location-o" style="float:left;font-size:20px;line-height:70px"/>
        <p>张三 12222222222</p>
        <p>银河系地球星中国河南省郑州市二七区</p>
        <van-icon name="arrow" class="address-right"/>
      </div>
      <div class="zhifu">
        <p>
          支付方式
          <span>
            在线支付
            <van-icon name="arrow" style="right:20px;margin-left:20px;top:3px"/>
          </span>
        </p>
      </div>
      <ul>
        <li class="orderCard" v-for="(p,i) in products" :key="i">
          <van-card
            :num="p.quantity"
            :price="p.price*p.quantity"
            :desc="p.product.descriptions"
            :title="p.product.name"
            :thumb="p.product.coverImg | setImgUrl"
          />
          <van-cell title="配送方式" is-link @click="sorry">
            <template slot="title">
              <span class="van-cell-text">已选：</span>
              <span class="van-cell-text">hove物流</span>
            </template>
          </van-cell>
          <van-cell title="留言" is-link @click="sorry">
            <template slot="title">
              <input type="text" class="van-cell-text liuyan" placeholder="给商家留言，最多100字">
            </template>
          </van-cell>
          <van-cell title="服务" @click="sorry">
            <template slot="title">
              <span class="van-cell-text">服务：</span>
              <span class="fa fa-check-square-o">欧美标准</span>
              <span class="fa fa-check-square-o">7天退换</span>
              <span class="fa fa-check-square-o">免费送装</span>
            </template>
          </van-cell>
        </li>
      </ul>
    </div>
    <van-submit-bar :price="getTotalPrice" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>
<script>
import { get } from '../../untile/requets'
export default {
  name: 'OrderList',
  data() {
    return {
      orders: [],
      id: '',
      products: [],
      no: '',
    }
  },
  computed: {
    getTotalPrice() {
      var sumPrice = 0
      this.products.forEach(item => {
        sumPrice += item.price * item.quantity
      })
      return sumPrice * 100
    },
  },
  filters: {
    setImgUrl(url) {
      if (url) {
        return 'https://api.cat-shop.penkuoer.com' + url
      }
    },
  },
  created() {
    this.getOrderList()
  },
  methods: {
    async getOrderList() {
      await get('/api/v1/orders', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res.data)
        this.orders = res.data.orders
        this.id = this.orders[0]._id
        this.getOrderById(this.id)
        this.no = this.orders[0].no
      })
    },
    dizhi() {
      this.$router.push({
        name: 'address',
      })
    },
    sorry() {
      this.showBase = true
    },
    getOrderById(id) {
      get('/api/v1/orders/' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        this.products = res.data.details
      })
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    onSubmit() {
      this.$router.push({
        name: 'Pay',
        params: {
          no: this.no,
          price: this.getTotalPrice,
          id: this.id,
        },
      })
    },
  },
}
</script>
<style scoped>
.address {
  width: 100%;
  height: 70px;
  background: #fffae7;
  position: relative;
  padding: 0 10px;
}
.address p {
  display: inline-block;
  line-height: 35px;
  margin-left: 10px;
}
.address-right {
  font-size: 20px;
  position: absolute;
  top: 25px;
  right: 30px;
}
.zhifu {
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
}
.zhifu span {
  float: right;
}
.orderCard {
  margin-top: 10px;
}
.section {
  overflow: auto;
  height: 570px;
}
.liuyan {
  width: 100%;
  height: 100%;
  line-height: 100%;
  outline: none;
  border: none;
}
</style>
