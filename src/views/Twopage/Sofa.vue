<template>
  <div class="sofa">
    <van-nav-bar title="沙发" left-text="返回" left-arrow @click-left="onClickLeft('home')"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="nav1">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option"/>
          <van-dropdown-item title="筛选" ref="item">
            <van-switch-cell v-model="switch1" title="包邮"/>
            <van-switch-cell v-model="switch2" title="团购"/>
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="products1">
          <div v-for="i in list" :key="i._id" class="for2" @click="onClickLeft('xiangqing',i._id)">
            <p class="img2">
              <img class="cover-img2" :src="'https://api.cat-shop.penkuoer.com'+i.coverImg" alt>
            </p>
            <h3>{{i.name}}</h3>
            <p class="price2">￥{{i.price}}</p>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Sofa',
  data() {
    return {
      list: [],
      page: 0,
      loed: null,
      loading: false,
      finished: false,
      value: 0,
      switch1: false,
      switch2: false,
      value1: 0,
      value2: 'a',
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      count: 0,
      isLoading: false,
    }
  },
  methods: {
    onClickLeft(URL, id) {
      this.$router.push({
        name: URL,
        params: {
          id,
        },
      })
    },
    onRefresh() {
      setTimeout(() => {
        this.onLoad()
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
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
    onConfirm() {
      this.$refs.item.toggle()
    },
  },
  created() {
    this.onLoad()
  },
}
</script>

<style scoped>
@import url('../../assets/css/sofa.css');
.van-nav-bar__arrow {
  color: #333;
}
</style>
