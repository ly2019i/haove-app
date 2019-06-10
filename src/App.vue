<template>
  <div id="app">
    <section>
      <router-view v-if="isRouterShow"></router-view>
    </section>
    <foo></foo>
  </div>
</template>
<script>
import foo from './views/text/footer'
export default {
  name: 'app',
  components: {
    foo,
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterShow: true,
    }
  },
  methods: {
    reload() {
      this.isRouterShow = false
      this.$nextTick(function() {
        this.isRouterShow = true
      })
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

section {
  flex: 1;
  overflow: auto;
  height: 100%;
}
.van-nav-bar__text,
.van-icon-arrow-left {
  color: #333;
}
</style>
