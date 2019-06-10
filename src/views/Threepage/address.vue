<template>
  <div class="addres">
    <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="Mdizhi"
    />
  </div>
</template>
<script>
import { get, post } from '../../untile/requets'
export default {
  name: 'addres',
  data() {
    return {
      chosenAddressId: '1',
      list: [],
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onAdd() {
      this.$router.push({
        name: 'adddzhi',
      })
    },
    Mdizhi(item) {
      var id1 = item._id
      var id = JSON.parse(localStorage.getItem('xiangqingid'))
      console.log(id)
      localStorage.setItem('shouhuo', id1)
      this.$router.push({
        name: 'xiangqing',
        params: {
          id,
        },
      })
    },
    onEdit(item) {
      var id = item._id
      this.$router.push({
        name: 'addxiugai',
        params: {
          id,
        },
      })
      console.log(item, id)
    },
    getaddress() {
      get('/api/v1/addresses', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res.data.addresses)
        this.list = res.data.addresses
        for (let i = 0; i < res.data.addresses.length; i++) {
          this.list[i].name = res.data.addresses[i].receiver
          this.list[i].tel = res.data.addresses[i].mobile
          this.list[i].id = res.data.addresses[i]._id
          this.list[i].isDefault = res.data.addresses[i].isDefault
        }
      })
    },
  },
  created() {
    this.getaddress()
  },
}
</script>

<style scoped>
.van-nav-bar__arrow {
  color: #333;
}
</style>
