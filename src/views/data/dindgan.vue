<template>
  <div class="orderlist">
    <van-nav-bar class="cartnav" title="订单列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="section">
      <ul>
        <li class="orderCard" v-for="(p,i) in products" :key="i">
          <van-card
            :num="p[0].quantity"
            :price="p[0].price*p[0].quantity"
            :desc="p[0].product.descriptions"
            :title="p[0].product.name"
            :thumb="p[0].product.coverImg | setImgUrl"
          >
            <div slot="footer">
              <van-button size="mini" @click="xiangqing(p[0].order)">查看详情</van-button>
              <van-button size="mini" @click="delOrder(p[0].order)">删除订单</van-button>
            </div>
          </van-card>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { get, del } from '../../untile/requets'
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
  inject: ['reload'],
  methods: {
    async getOrderList() {
      await get('/api/v1/orders', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res.data)
        this.orders = res.data.orders
        this.orders.forEach(item => {
          this.getOrderById(item._id)
        })
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
        this.products.push(res.data.details)
        console.log(this.products)
      })
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    delOrder(id) {
      del('/api/v1/orders/' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res)
        this.$toast({
          message: '删除成功',
        })
        this.reload()
      })
    },
    xiangqing(id) {
      this.$router.push({
        name: 'OrderList',
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
