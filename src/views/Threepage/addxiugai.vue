<template>
  <div class="adddzhi">
    <van-nav-bar title="修改地址" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="add"
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
      add: {
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        areaCode: '',
        postalCode: '',
        isDefault: '',
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
      var id = this.$route.params.id
      const { address } = this
      console.log(data)
      address.receiver = data.name
      address.mobile = data.tel
      address.regions = data.province + data.city + data.county
      address.address = data.addressDetail
      address.isDefault = data.isDefault
      put('/api/v1/addresses/' + id, address, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        Toast('修改成功')
        this.$router.push({
          name: 'address',
        })
      })
    },
    onDelete() {
      var id = this.$route.params.id
      console.log(localStorage.getItem('token'))
      del('/api/v1/addresses/' + id, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(res => {
        Toast('删除成功')
        this.$router.push({
          name: 'address',
        })
      })
    },
    onChangeDetail(val) {
      console.log(val)
      console.log(addressInfo)
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

  created() {
    console.log(this.province)
    var id = this.$route.params.id
    get('/api/v1/addresses/' + id, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => {
      console.log(res.data)

      const { add } = this
      add.name = res.data.receiver
      add.tel = res.data.mobile
      console.log(res.data.regions)
      add.province = res.data.regions.split('-')[0]
      add.city = res.data.regions.split('-')[1]
      add.county = res.data.regions.split('-')[2]
      console.log(add.province, add.city, add.county)
      add.addressDetail = res.data.address
      add.isDefault = res.data.isDefault
    })
  },
}
</script>

<style scoped>
.van-nav-bar__arrow {
  color: #333;
}
</style>
