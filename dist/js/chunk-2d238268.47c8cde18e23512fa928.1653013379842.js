(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238268"],{fdc7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"site"}},[[n("markdown",{attrs:{content:t.content}})]],2)},c=[],o=n("43a5"),d=n("c24f"),r={name:"",components:{markdown:o["a"]},data(){return{query:"",content:"# 加载中...."}},props:{type:{type:String,default:"daili"}},computed:{},created(){this.getList()},mounted(){},methods:{getList(){let t=this,e={};e.type=t.type,Object(d["a"])(e).then(e=>{let n=e.data.data.content;t.content=n})}}},s=r,i=n("cba8"),u=Object(i["a"])(s,a,c,!1,null,null,null);e["default"]=u.exports}}]);