<template>
  <div class="home">
    <hoo></hoo>
    <section>
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../../../static/images/lunbo/banner1.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../static/images/lunbo/banner2.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../static/images/lunbo/banner3.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../static/images/lunbo/banner4.jpg" alt>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="nav">
        <figure @click="onClick('sofa')">
          <i class="iconfont icon-shafa"></i>
          <figcaption>沙发</figcaption>
        </figure>
        <figure @click="onClick('bedclothes')">
          <i class="iconfont icon-chuang"></i>
          <figcaption>床具</figcaption>
        </figure>
        <figure @click="onClick('stool')">
          <i class="iconfont icon-dengzi"></i>
          <figcaption>凳椅</figcaption>
        </figure>
        <figure @click="onClick('Table')">
          <i class="iconfont icon-zhuozi"></i>
          <figcaption>桌几</figcaption>
        </figure>
        <figure @click="onClick('cabinet')">
          <i class="iconfont icon-guizi"></i>
          <figcaption>柜架</figcaption>
        </figure>
        <figure @click="onClick('lamp')">
          <i class="iconfont icon-deng"></i>
          <figcaption>灯具</figcaption>
        </figure>
        <figure @click="onClick('tableware')">
          <i class="iconfont icon-canju"></i>
          <figcaption>餐厨</figcaption>
        </figure>
        <figure @click="onClick('more')">
          <i class="iconfont icon-gengduoyundong"></i>
          <figcaption>更多</figcaption>
        </figure>
      </div>
      <div class="Sellwell">
        <h3 class="sell">
          好物热销
          <span class="more">
            MORE
            <i class="fa fa-caret-right"></i>
          </span>
        </h3>
        <p class="hot">HOT STUFF</p>
      </div>
      <div class="hotlist">
        <div v-for="i in products" :key="i._id" class="for" @click="onClick('xiangqing',i._id)">
          <span class="HOT">HOT</span>
          <p class="img">
            <img class="cover-img" :src="'https://api.cat-shop.penkuoer.com'+i.coverImg" alt>
          </p>
          <h3>{{i.name}}</h3>
          <p class="descriptions">{{i.descriptions}}</p>
          <p class="price">￥{{i.price}}</p>
        </div>
      </div>
      <div class="Sellwell">
        <h3 class="sell">
          限时折扣
          <span class="more">
            MORE
            <i class="fa fa-caret-right"></i>
          </span>
        </h3>
        <p class="hot">DISCOUNT</p>
      </div>
      <div class="Date">
        <p class="date">{{h}}</p>
        <p>:</p>
        <p class="date">{{m}}</p>
        <p>:</p>
        <p class="date">{{s}}</p>
      </div>
      <div class="Discount">
        <div class="zhuozi">
          <img :src="now" alt>
        </div>
        <div class="hua">
          <div class="huaping">
            <img :src="now1" alt>
          </div>
          <div class="canju">
            <img :src="now2" alt>
          </div>
        </div>
      </div>
      <div class="Sellwell">
        <h3 class="sell">最新单品</h3>
        <p class="hot">NEW PRODUCTS</p>
      </div>
      <div class="banner">
        <van-swipe @change="onChange">
          <van-swipe-item>
            <img src="../../../static/images/lunbo1.png" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../static/images/lunbo2.jpg" alt>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../../static/images/lunbo3.jpg" alt>
          </van-swipe-item>
          <div class="custom-indicator" slot="indicator">{{ current + 1 }}/3</div>
        </van-swipe>
      </div>
      <div class="products">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div v-for="i in list" :key="i._id" class="for1" @click="onClick('xiangqing',i._id)">
            <p class="img1">
              <img class="cover-img1" :src="'https://api.cat-shop.penkuoer.com'+i.coverImg" alt>
            </p>
            <div class="idxinxi">
              <h3>{{i.name}}</h3>
              <p class="descriptions1">{{i.descriptions}}</p>
              <p class="price1">￥{{i.price}}</p>
            </div>
          </div>
        </van-list>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import hoo from '../text/header.vue'
import { getProducts } from '../../api/products'
import { async } from 'q'
import axios from 'axios'

export default {
  name: 'home',
  data() {
    return {
      products: [],
      list: [],
      loading: false,
      finished: false,
      d: '',
      h: '',
      m: '',
      s: '',
      now: require('../../../static/images/zhuozi.png'),
      now1: require('../../../static/images/huaping.png'),
      now2: require('../../../static/images/canju.png'),
      current: 0,
      count: 0,
      currentpage: 1,
      page: 0,
      loed: null,
    }
  },
  components: {
    hoo,
  },
  methods: {
    async loadDtata() {
      try {
        const result = await getProducts()
        this.products = result.data.products
        // console.log(result.data.products)
      } catch (err) {
        console.log(err)
        console.log('错误')
      }
    },
    onLoad() {
      // 异步更新数据
      this.page += 1
      axios
        .get('https://api.cat-shop.penkuoer.com/api/v1/products', {
          params: {
            page: this.page,
          },
        })
        .then(res => {
          //console.log(this.page)
          this.list = this.list.concat(res.data.products)
          //console.log(res.data.products)
          this.loed = res.data.totalCount
          //console.log(this.loed)
          // 数据全部加载完成
          this.loading = false
          //console.log(this.list.length)
          if (this.list.length >= this.loed) {
            this.finished = true
          }
        })
    },
    onChange(index) {
      this.current = index
    },
    onClick(URL, id) {
      this.$router.push({
        name: URL,
        params: {
          id,
        },
      })
    },
    countTime: function() {
      //获取当前时间
      var date = new Date()
      var now = date.getTime()
      //设置截止时间
      var endDate = new Date('2019-10-22 23:23:23')
      var end = endDate.getTime()
      //时间差
      var leftTime = end - now
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.m = Math.floor((leftTime / 1000 / 60) % 60)
        this.s = Math.floor((leftTime / 1000) % 60)
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000)
    },
  },
  created() {
    this.countTime(), this.loadDtata(), this.onLoad()
  },
}
</script>
<style scoped>
@import url('../../font/iconfont.css');
@import url('../../assets/css/home.css');
</style>

