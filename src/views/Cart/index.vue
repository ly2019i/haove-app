<template>
  <div class="cartlist">
    <van-nav-bar class="cartnav" title="购物车" right-text="管理" @click-right="onClickRight"/>
    <p v-show="empty" class="empty">空空如也</p>
    <ul class="products">
      <li v-for="item in list" :key="item._id" :name="item._id">
        <div style="height:130px;float:left">
          <van-checkbox
            class="card-goods__item"
            v-model="item.checked"
            style="width:40px;height:100%"
          ></van-checkbox>
        </div>
        <van-card
          :title="item.product.name"
          :desc="item.product.descriptions"
          :num="item.quantity"
          :price="item.product.price"
          :thumb="item.product.coverImg | setImUrl"
        >
          <div slot="footer">
            <van-stepper v-model="item.quantity" integer :min="1" :max="40"/>
          </div>
        </van-card>
      </li>
    </ul>
    <van-submit-bar
      :price="totalPrice"
      button-text="结算"
      @submit="onSubmit"
      style="margin-bottom:50px"
      v-show="isShow"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar
      button-text="删除"
      @submit="clearCart"
      style="margin-bottom:50px"
      v-show="!isShow"
    >
      <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { get, post, del } from '../../untile/requets'
import { getLocalStorages } from '../../untile/requets'
export default {
  name: 'Cart',
  created() {
    this.getCartList()
  },
  filters: {
    setImUrl(url) {
      if (url) {
        return 'https://api.cat-shop.penkuoer.com' + url
      }
    },
  },
  data() {
    return {
      products: [],
      list: [],
      checked: false,
      num: 0,
      order: [],
      orderproduct: {},
      isShow: true,
      empty: false,
    }
  },
  computed: {
    totalPrice() {
      var sumPrice = 0
      this.list.forEach(item => {
        if (item.checked) {
          sumPrice += item.product.price * item.quantity
        }
      })
      return sumPrice * 100
    },
  },
  inject: ['reload'],
  methods: {
    // 点击全选按钮
    checkAll() {
      this.list.forEach(item => {
        item.checked = !this.checked
      })
    },
    getCartList() {
      get('/api/v1/shop_carts', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res.data)
        for (var i in res.data) {
          res.data[i].checked = false
        }
        this.list = res.data
        if (this.list.length == 0) {
          this.empty = true
        } else {
          this.empty = false
        }
      })
    },
    onClickRight() {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },

    clearCart() {
      this.list.forEach(item => {
        if (item.checked) {
          del('/api/v1/shop_carts/' + item._id, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }).then(res => {
            console.log(res)
            this.reload()
          })
        }
      })
    },
    onSubmit() {
      let orderDetails = []
      this.list.forEach(item => {
        if (item.checked) {
          orderDetails.push({
            quantity: item.quantity,
            product: item.product._id,
            price: item.product.price,
          })
        }
      })
      post(
        '/api/v1/orders',
        {
          receiver: '小明',
          orderDetails: orderDetails,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then(res => {
          this.clearCart()
          this.$router.push({
            name: 'OrderList',
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>


<style lang="less">
.cartlist {
  .empty {
    margin-top: 45%;
    text-align: center;
    font-size: 16px;
    color: #000;
  }
  .cartnav {
    position: fixed;
    width: 100%;
    top: 0;
  }
  .products {
    overflow: auto;
    margin: 36px 0 50px 0;
  }
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
