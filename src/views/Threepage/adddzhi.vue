<template>
  <div class="adddzhi">
    <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { Toast } from 'vant'
import { post, del, put, get } from '../../untile/requets'
export default {
  name: 'adddzhi',
  data() {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
        },
      },
      searchResult: [],
      address: {
        receiver: '',
        mobile: '',
        regions: '',
        address: '',
        isDefault: '',
      },
    }
  },
  methods: {
    onClickLeft(URL) {
      this.$router.go(-1)
    },
    onSave(data) {
      const { address } = this
      console.log(data)
      address.receiver = data.name
      address.mobile = data.tel
      address.regions = `${data.province}-${data.city}-${data.county}`
      address.address = data.addressDetail
      address.isDefault = data.isDefault
      post('/api/v1/addresses', address, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        Toast(res.data.message)
        console.log(address)
        console.log(res.data)
        if ((res.data.message = '收获地址保存成功')) {
          this.$router.push({
            name: 'address',
          })
        }
      })
    },
    onDelete() {
      var id = this.$route.params.id
      console.log(id)
      post('/api/v1/addresses' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        console.log(res.data)
      })
    },
    onChangeDetail(val) {
      console.log(val)
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ]
      } else {
        this.searchResult = []
      }
    },
  },
}
</script>

<style scoped>
.van-nav-bar__arrow {
  color: #333;
}
</style>
