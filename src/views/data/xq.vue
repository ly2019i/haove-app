<template>
  <div>
     <h1><span @click="hui"><返回</span><p>订单详情</p></h1>

  </div>
</template>
<style scoped>
p{
  font-size: 20px;
  line-height: 40px;
  text-align: center;
}
h1{
  padding-top: 10px
}
</style>
<script>
import dindan from '../../api/user_data'
export default {
  data()
  {
      return{
       arr:[]
      }
  },
  methods:
  {
      hui()
    {
      this.$router.go(-1)
    }
  },
  async created()
  {
    const arrs=await dindan.xqdata(this.$route.query.ids);
    console.log(arrs);
  }

}
</script>


