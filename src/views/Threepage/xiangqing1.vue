<template>
  <div class="xiangqing">
    <van-nav-bar
      style="position: absolute;
  top: 0;width: 100%;
  display: flex;background: transparent;border:0px solid transparent;"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="goods">
      <van-swipe
        class="goods-swipe"
        :autoplay="3000"
        style="height:400px;"
        v-model="show"
        :images="goods.thumb"
        @change="onChange"
      >
        <van-swipe-item v-for="(thumb,i) in goods.thumb" :key="i" style="height:400px;">
          <img
            style="height:400px;width:100%"
            :src="list.coverImg ? 'https://api.cat-shop.penkuoer.com' + list.coverImg : ''"
          >
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ list.name }}</div>
          <div class="goods-price">
            <span>￥</span>
            {{ list.price }}
          </div>
          <van-col span="8" style="text-align: center;font-size:12px;">包邮</van-col>
          <van-col span="8" style="text-align: center;font-size:12px;">发货时间</van-col>
          <van-col span="8" style="text-align: center;font-size:12px;">1022人已买</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true"/>
        <van-popup v-model="showList" position="bottom">
          <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
            @click="onChange1"
            @exchange="onExchange"
          />
        </van-popup>
        <van-cell title="已选" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">已选：</span>
            <span class="van-cell-text">浅灰色-1件</span>
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
        <van-cell title="送至" is-link @click="dizhi">
          <template slot="title">
            <span class="van-cell-text">送至：</span>
            <span class="van-cell-text">
              <span>{{huo.receiver}}</span>
              <span>{{huo.mobile}}</span>
              <p style="padding-left:40px">
                {{huo.regions}}
                <span>{{huo.address}}</span>
              </p>
            </span>
          </template>
        </van-cell>
        <!-- <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">有赞的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>-->
      </van-cell-group>

      <van-cell-group
        class="goods-cell-group"
        style="border-top:7px solid #ebebeb;border-bottom:7px solid #ebebeb"
      >
        <van-cell title is-link @click="pingjia">
          <template slot="title">
            <span class="van-cell-text">好物评价(3531)</span>
            <span class="van-cell-text">好评率99.4%</span>
            <p>
              <van-tag plain>很舒服(110)</van-tag>
              <van-tag plain>商品很好(230)</van-tag>
              <van-tag plain>性价比高(780)</van-tag>
            </p>
            <div class="pinglun">
              <div>
                <h3>用户名</h3>
                <p>评论信息</p>
              </div>
              <div>
                <p>我是图片</p>
              </div>
            </div>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell title is-link @click="tuwen">
          <template slot="title">
            <h3 class="van-cell-text">图文详情</h3>
            <span class="van-cell-text">好评率99.4%</span>
          </template>
        </van-cell>
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon"/>
        <van-goods-action-icon
          icon="star-o"
          :class="item ==0? '':'SC'"
          text="收藏"
          @click="onClickIcon"
        />
        <van-goods-action-button type="warning" text="加入购物车" @click="showBase = true"/>

        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku"
          :stepper-title="buyNum"
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay"
          :custom-sku-validator="customSkuValidator"
          @buy-clicked="onBuyClicked"
          @add-cart="onClickCart3"
        />
        <van-goods-action-button type="danger" text="立即购买" @click="showBase = true"/>
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import skuData from '../../untile/data'
import { get, post } from '../../utils/requets'
import { Toast } from 'vant'
import data from '../../untile/data'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}
export default {
  name: 'xiangqing',

  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      item: 0,
      skuData: skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      buyNum: '0',
      initialSku: {
        s1: '30349',
        s2: '1193',
        s2: '1194',
        selectedNum: 1,
      },
      customSkuValidator: () => '请选择xxx!',
      show: false,
      list: {},

      index: 0,
      goods: {
        thumb: ['', '', '', ''],
      },
      cart: {
        product: '',
        quantity: '',
      },
      huo: {
        receiver: '',
        mobile: '',
        regions: '',
        address: '',
      },
    }
  },
  methods: {
    onChange1(index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange(code) {
      this.coupons.push(coupon)
    },
    onBuyClicked(data) {
      var { cart } = this
      data.goodsId = this.$route.params.id
      cart.quantity = data.selectedNum
      console.log(cart.product)
      // post('/api/v1/shop_carts', cart, {
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem('token')}`,
      //   },
      // }).then(res => {
      //   console.log(res.data + 'aa')
      //   console.log(cart)
      let orderDetails = [
        {
          quantity: cart.quantity,
          product: this.list._id,
          price: this.list.price,
        },
      ]
      console.log(orderDetails)
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
          console.log(res)
          this.$router.push({
            name: 'OrderList',
          })
        })
        .catch(err => {
          console.log(err)
        })
      // })
    },

    onClickCart3(data) {
      //加入购物车
      var { cart } = this
      data.goodsId = this.$route.params.id
      cart.product = data.goodsId
      cart.quantity = data.selectedNum
      post('/api/v1/shop_carts', cart, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        Toast(res.data.message)
        this.showBase = false
      })
    },
    onChange(index) {
      this.index = index
    },
    onClickIcon() {
      if (this.item == 0) {
        this.item = 1
      } else {
        this.item = 0
      }
    },
    formatPrice() {
      return '¥' + (this.goods.price / 100).toFixed(2)
    },
    sorry() {
      this.showBase = true
    },
    pingjia() {
      console.log('评价')
    },
    dizhi() {
      var id = this.$route.params.id
      localStorage.setItem('xiangqingid', JSON.stringify(id))
      this.$router.push({
        name: 'address',
      })
    },
    tuwen() {
      console.log('图文详情')
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    details() {
      var id = this.$route.params.id
      get('/api/v1/products/' + id).then(res => {
        this.list = res.data
      })
    },
    shouhuo() {
      var id = localStorage.getItem('shouhuo')
      console.log(id)
      get('/api/v1/addresses/' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        const { huo } = this
        huo.receiver = res.data.receiver
        huo.mobile = res.data.mobile
        huo.regions = res.data.regions
        huo.address = res.data.address
        console.log(res.data)
      })
    },
  },
  created() {
    this.details()
  },
}
</script>
<style scoped lang="less">
@import url('../../assets/css/xiangqing.css');
.van-nav-bar__arrow {
  color: #333;
}
.demo-sku {
  .sku-container {
    padding: 0 15px;
  }
}
</style>

