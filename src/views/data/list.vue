<template>
  <div class="list">
    <hoo></hoo>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <section>
        <van-tabs v-model="active">
          <van-tab title="推  荐">
            <van-row>
              <van-list
                v-model="loading"
                style="height: 500px;overflow:auto"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <van-col span="12" v-for="img in imageList" :key="img._id">
                  <router-link :to="{path:'/xiangqing1/'+img._id}">
                    <van-card
                      class="infinite-list-item"
                      :key="img._id"
                      :desc="img.descriptions"
                      :title="img.name"
                      lazy-load:false
                      :thumb="'https://api.cat-shop.penkuoer.com'+img.coverImg"
                    />
                  </router-link>
                </van-col>
              </van-list>
            </van-row>
          </van-tab>
          <van-tab title="关  注">
            <van-list
              v-model="loading"
              style="height: 520px;  overflow: auto;"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <van-card
                class="infinite-list-item"
                v-for="img in imageList"
                :key="img._id"
                :desc="img.descriptions"
                :title="img.name"
                :thumb="'https://api.cat-shop.penkuoer.com'+img.coverImg"
              />
            </van-list>
          </van-tab>
        </van-tabs>
      </section>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import hoo from '../text/header.vue'
import axios from 'axios'
import { truncateSync } from 'fs'
import { getProducts } from '../../api/prosuctss1'
export default {
  name: 'list',
  components: {
    hoo,
  },
  data() {
    return {
      isLoading: false,
      active: 2,
      imageList: [],
      loading: false,
      finished: false,
      page: 0,
      list: 0,
    }
  },

  methods: {
    getProduct(page) {
      getProducts(page).then(res => {
        this.imageList = this.imageList.concat(res.data.products)
        this.list = res.data.totalCount

        this.loading = false
        if (this.imageList.length >= this.list) {
          this.finished = true
        }
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
      this.page += 1

      this.getProduct(this.page)

      this.loading = false
    },
  },
}
</script>
<style>
</style>


