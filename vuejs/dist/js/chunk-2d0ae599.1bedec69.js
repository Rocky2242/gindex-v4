(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae599"],{"0a4f":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container has-text-white has-text-centered",staticStyle:{"border-radius":"0.5rem",border:"2px solid #ff9595",margin:"5px",padding:"5px"}},[e("div",{staticClass:"loading"},[e("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(a){t.loading=a}}})],1),e("div",{staticClass:"tags-has-addons"},[e("p",{staticClass:"home-welcome has-text-white"},[t._v(" > "+t._s(t.data)+" ")])])])},s=[],n=e("9062"),r=e.n(n),o=(e("e40d"),{data:function(){return{data:"",loading:!0,fullpage:!0}},components:{Loading:r.a},mounted:function(){var t=this;this.$route.params.data&&this.$route.params.redirectUrl?(this.data=this.$route.params.data,setTimeout((function(){t.$router.push({path:t.$route.params.redirectUrl})}),1e3)):(this.data="Nothing Here!...You will be Redirected",setTimeout((function(){t.$router.push({path:"/0:home/"})}),1e3))}}),d=o,u=e("2877"),l=Object(u["a"])(d,i,s,!1,null,null,null);a["default"]=l.exports}}]);