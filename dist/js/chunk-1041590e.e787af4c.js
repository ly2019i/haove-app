(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1041590e"],{"2da2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"adddzhi"},[a("van-nav-bar",{attrs:{title:"新增地址","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-address-edit",{attrs:{"area-list":e.areaList,"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":e.searchResult},on:{save:e.onSave,delete:e.onDelete,"change-detail":e.onChangeDetail}})],1)},s=[],o=(a("7f7f"),a("b970")),c=a("8382"),r={name:"adddzhi",data:function(){return{areaList:{province_list:{110000:"北京市",120000:"天津市"},city_list:{110100:"北京市",110200:"县",120100:"天津市",120200:"县"},county_list:{110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区"}},searchResult:[],address:{receiver:"",mobile:"",regions:"",address:"",isDefault:""}}},methods:{onClickLeft:function(e){this.$router.go(-1)},onSave:function(e){var t=this,a=this.address;console.log(e),a.receiver=e.name,a.mobile=e.tel,a.regions="".concat(e.province,"-").concat(e.city,"-").concat(e.county),a.address=e.addressDetail,a.isDefault=e.isDefault,Object(c["c"])("/api/v1/addresses",a,{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){Object(o["a"])(e.data.message),console.log(a),console.log(e.data),(e.data.message="收获地址保存成功")&&t.$router.push({name:"address"})})},onDelete:function(){var e=this.$route.params.id;console.log(e),Object(c["c"])("/api/v1/addresses"+e,{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){console.log(e.data)})},onChangeDetail:function(e){console.log(e),this.searchResult=e?[{name:"黄龙万科中心",address:"杭州市西湖区"}]:[]}}},i=r,l=(a("97c2"),a("2877")),d=Object(l["a"])(i,n,s,!1,null,"f6ecd9ac",null);t["default"]=d.exports},"50fb":function(e,t,a){},"7f7f":function(e,t,a){var n=a("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in s||a("9e1e")&&n(s,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"97c2":function(e,t,a){"use strict";var n=a("50fb"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-1041590e.e787af4c.js.map