(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0384f2d8"],{"02f4":function(e,t,r){var n=r("4588"),a=r("be13");e.exports=function(e){return function(t,r){var s,o,i=String(a(t)),c=n(r),u=i.length;return c<0||c>=u?e?"":void 0:(s=i.charCodeAt(c),s<55296||s>56319||c+1===u||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):s:e?i.slice(c,c+2):o-56320+(s-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"0bfb":function(e,t,r){"use strict";var n=r("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"161a":function(e,t,r){},"1d5f":function(e,t,r){"use strict";var n=r("161a"),a=r.n(n);a.a},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),a=r("32e9"),s=r("79e5"),o=r("be13"),i=r("2b4c"),c=r("520a"),u=i("species"),l=!s(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var f=i(e),d=!s(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),v=d?!s(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[u]=function(){return r}),r[f](""),!t}):void 0;if(!d||!v||"replace"===e&&!l||"split"===e&&!p){var h=/./[f],g=r(o,f,""[e],function(e,t,r,n,a){return t.exec===c?d&&!a?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),b=g[0],m=g[1];n(String.prototype,e,b),a(RegExp.prototype,f,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},2706:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("van-nav-bar",{attrs:{title:"注册","left-text":"返回","left-arrow":""},on:{"click-left":function(t){return e.onClickLeft("login")}}}),r("div",{staticClass:"data1"},[r("div",{staticClass:"photo"},[r("span",[e._v("个人头像")]),r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://api.cat-shop.penkuoer.com/api/v1/common/file_upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.users.avatar?r("img",{staticClass:"avatar",attrs:{src:e._f("setImgUrl")(e.users.avatar)}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("van-cell-group",[r("van-field",{attrs:{required:"",label:"昵称",placeholder:"请输入昵称"},model:{value:e.users.nickName,callback:function(t){e.$set(e.users,"nickName",t)},expression:"users.nickName"}}),r("van-field",{attrs:{required:"",label:"用户名",placeholder:"请输入用户名"},on:{keydown:function(t){return e.rules(e.users.userName,"user")}},model:{value:e.users.userName,callback:function(t){e.$set(e.users,"userName",t)},expression:"users.userName"}}),r("van-field",{attrs:{required:"",type:"password",label:"密码",placeholder:"请输入密码"},on:{keydown:function(t){return e.rules(e.users.password,"pass")}},model:{value:e.users.password,callback:function(t){e.$set(e.users,"password",t)},expression:"users.password"}}),r("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"},model:{value:e.users.phone,callback:function(t){e.$set(e.users,"phone",t)},expression:"users.phone"}})],1),r("div",{staticClass:"btnregister"},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.register}},[e._v("立即注册")])],1)],1)],1)},a=[],s=(r("28a5"),r("bc3a")),o=r.n(s),i=(r("2f62"),r("b970")),c={name:"register",data:function(){return{users:{password:"",userName:"",nickName:"",phone:"",avatar:""}}},filters:{setImgUrl:function(e){return"https://api.cat-shop.penkuoer.com"+e}},methods:{onClickLeft:function(e){this.$router.push({name:e})},rules:function(e,t){this.users;if("user"==t){var r=e.trim(),n=/^[a-zA-Z0-9_]{4,12}$/g;if(r.split("").length>12)return!1;n.test(r)||Object(i["a"])("请输入4到16位(字母,数字,下划线)"),console.log(r,e.trim())}else if("pass"==t){var a=e.trim(),s=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;s.test(a)?(Object(i["a"])("密码强度 安全^_^"),console.log("Aaa")):(Object(i["a"])("密码强度较弱o(╥﹏╥)o"),console.log("Aaa"))}},register:function(){var e=this,t=this.users;t.avatar&&t.password&&t.userName&&t.nickName?o.a.post("https://api.cat-shop.penkuoer.com/api/v1/auth/reg",t).then(function(r){console.log(r),console.log(t),"success"==r.data.code?(alert("注册成功，请登录"),e.$router.push({name:"login"})):"user not found"==r.data.message?alert("用户不存在，请注册"):(console.log(r.data),alert(r.data.message))}).catch(function(e){console.log(e)}):alert("请输入正确的密码")},handleAvatarSuccess:function(e,t){this.users.avatar=e.info},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}}};var u=c,l=(r("1d5f"),r("2877")),p=Object(l["a"])(u,n,a,!1,null,"1f6bf4f2",null);t["default"]=p.exports},"28a5":function(e,t,r){"use strict";var n=r("aae3"),a=r("cb7c"),s=r("ebd6"),o=r("0390"),i=r("9def"),c=r("5f1b"),u=r("520a"),l=r("79e5"),p=Math.min,f=[].push,d="split",v="length",h="lastIndex",g=4294967295,b=!l(function(){RegExp(g,"y")});r("214f")("split",2,function(e,t,r,l){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[v]||2!="ab"[d](/(?:ab)*/)[v]||4!="."[d](/(.?)(.?)/)[v]||"."[d](/()()/)[v]>1||""[d](/.?/)[v]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(a,e,t);var s,o,i,c=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,d=void 0===t?g:t>>>0,b=new RegExp(e.source,l+"g");while(s=u.call(b,a)){if(o=b[h],o>p&&(c.push(a.slice(p,s.index)),s[v]>1&&s.index<a[v]&&f.apply(c,s.slice(1)),i=s[0][v],p=o,c[v]>=d))break;b[h]===s.index&&b[h]++}return p===a[v]?!i&&b.test("")||c.push(""):c.push(a.slice(p)),c[v]>d?c.slice(0,d):c}:"0"[d](void 0,0)[v]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var a=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,a,n):m.call(String(a),r,n)},function(e,t){var n=l(m,e,this,t,m!==r);if(n.done)return n.value;var u=a(e),f=String(this),d=s(u,RegExp),v=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),x=new d(b?u:"^(?:"+u.source+")",h),w=void 0===t?g:t>>>0;if(0===w)return[];if(0===f.length)return null===c(x,f)?[f]:[];var k=0,y=0,E=[];while(y<f.length){x.lastIndex=b?y:0;var C,$=c(x,b?f:f.slice(y));if(null===$||(C=p(i(x.lastIndex+(b?0:y)),f.length))===k)y=o(f,y,v);else{if(E.push(f.slice(k,y)),E.length===w)return E;for(var R=1;R<=$.length-1;R++)if(E.push($[R]),E.length===w)return E;y=k=C}}return E.push(f.slice(k)),E}]})},"520a":function(e,t,r){"use strict";var n=r("0bfb"),a=RegExp.prototype.exec,s=String.prototype.replace,o=a,i="lastIndex",c=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[i]||0!==t[i]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(o=function(e){var t,r,o,l,p=this;return u&&(r=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),c&&(t=p[i]),o=a.call(p,e),c&&o&&(p[i]=p.global?o.index+o[0].length:t),u&&o&&o.length>1&&s.call(o[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),a=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},aae3:function(e,t,r){var n=r("d3f4"),a=r("2d95"),s=r("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);
//# sourceMappingURL=chunk-0384f2d8.a6e84214.js.map