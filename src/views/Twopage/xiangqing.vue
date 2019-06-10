<template>
  <div class="app">
    <van-nav-bar
      v-show="isShow"
      title="详情"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="i in 4" :key="i">
        <img :src="list.coverImg?'https://api.cat-shop.penkuoer.com'+list.coverImg:''">
      </van-swipe-item>
    </van-swipe>

    <span class="iconfont left" @click="onleft">&#xe65a;</span>
    <span class="iconfont right" @click="onright">&#xe68f;</span>
    <h1>{{list.name}}</h1>
    <van-row class="box">
      <van-col span="2"></van-col>
      <van-col span="2">
        <img :src="list.coverImg?'https://api.cat-shop.penkuoer.com'+list.coverImg:''" alt>
      </van-col>
      <van-col span="14">奥古斯塔</van-col>
      <div @click="guanzhu">
        <van-col span="6" class="boxs">关注 +</van-col>
      </div>
    </van-row>

    <van-row gutter="20" class="box3">
      <van-col span="2" class="box1"></van-col>
      <van-col span="22">发布于2018-12-09</van-col>
    </van-row>
    <div class="box2">
      <van-row gutter="20">
        <van-col
          span="20"
        >无论是单身狗还是小情侣，不管是高端烹饪玩家还是外卖专业户，结束一天的疲劳工作后，卸下满身压力的用餐时光才是最让人放松。正因如此，餐厅的地位才愈发凸显</van-col>
      </van-row>
    </div>
    <div class="box4">
      <div v-model="tiao">评价{{tiao}}</div>
      <div class="boxx">
        <div class="bbox">
          <div class="box0">
            <img :src="list.coverImg?'https://api.cat-shop.penkuoer.com'+list.coverImg:''" alt>
          </div>

          <div class="bbox0">
            <h3>
              {{list.name}}
              <em class="iconfont">&#xe629;</em>
            </h3>
          </div>
        </div>
        <p>餐走很好，亲吻时声呐生个</p>
      </div>
      <div class="boxx">
        <div class="bbox">
          <div class="box0">
            <img :src="list.coverImg?'https://api.cat-shop.penkuoer.com'+list.coverImg:''" alt>
          </div>
          <div class="bbox0">
            <h3>
              {{list.name}}
              <em class="iconfont">&#xe629;</em>
            </h3>
          </div>
        </div>
        <p>餐走很好，亲吻时声呐生个</p>
      </div>
      <div class="boxx">
        <div class="bbox">
          <div class="box0">
            <img :src="list.coverImg?'https://api.cat-shop.penkuoer.com'+list.coverImg:''" alt>
          </div>
          <div class="bbox0">
            <h3>
              {{list.name}}
              <em class="iconfont">&#xe629;</em>
            </h3>
          </div>
        </div>
        <p>餐走很好，亲吻时声呐生个</p>
      </div>
      <div class="boxx">
        <div class="bbox">
          <div class="box0">
            <img :src="list.coverImg?'http://api.cat-shop.penkuoer.com'+list.coverImg:''" alt>
          </div>
          <div class="bbox0">
            <h3>
              {{list.name}}
              <em class="iconfont">&#xe629;</em>
            </h3>
          </div>
        </div>
        <p>餐走很好，亲吻时声呐生个</p>
      </div>
      <div class="dibu">
        <input type="text" v-model="value" placeholder="你也来写一些评价吧" @keyup.enter="fasong">
        <div @click="xiaoxi">
          <em class="iconfont">&#xe608;</em>
          <p>22</p>
        </div>
        <div @click="xingxing">
          <em class="iconfont">&#xe61f;</em>
          <p>33</p>
        </div>
        <div @click="zhan">
          <em class="iconfont">&#xe629;</em>
          <p>{{zhan1}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProductsId } from '../../api/prosuctss1'
export default {
  name: 'xiangqing1',
  data() {
    return {
      list: {},
      isShow: false,
      tiao: 22,
      value: '',
      zhan1: 22,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {},
    onleft() {
      this.$router.go(-1)
    },
    onright() {
      alert('凤祥完成')
    },
    xiaoxi() {
      this.$router.push({
        path: '/pinjia',

        name: 'pinjia',
      })
    },
    xingxing() {},
    zhan() {
      this.zhan1++
    },
    guanzhu() {
      confirm('是否确认关注')
    },
    fasong() {
      alert('发送成功')
    },
  },

  created() {
    getProductsId(this.$route.params.id).then(res => {
      this.list = res.data
    })
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bbox {
  display: flex;
  margin-top: 10px;
}
.bbox em {
  float: right;
}
.dibu {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  color: red;
}
.dibu div {
  margin-top: 5px;
}
.dibu div em {
  font-size: 24px;
}
.dibu div p {
  font-size: 12px;
}
@import url('../../font_kkww44xuum/iconfont.css');
.box4 {
  height: 5rem;
  padding: 0.5rem;
}
.box img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
input {
  background: none;
  outline: none;
  border: 0px;
}
.box0 img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-top: 10px;
}
.box0 {
  width: 45px;
}
.bbox0 {
  width: 100%;

  line-height: 45px;
  margin-right: 10px;
  font-size: 20px;
}
p {
  margin: 10px 0;
}
.boxs {
  font-size: 20px;
}
.box1 {
  height: 20px;
}
.box2 {
  padding: 30px;
  height: 90px;
}
img {
  width: 100%;
  height: 7rem;
}
span {
  position: fixed;
  display: block;
  font-size: 0.5rem;
  text-align: center;
}
.left {
  top: 1rem;
  left: 0.5rem;
}
.right {
  top: 1rem;
  right: 0.5rem;
  font-size: 0.6rem;
}
h1 {
  height: 45px;
  line-height: 45px;
  text-align: center;
  margin: 5px 0;
  font-size: 20px;
}
</style>
