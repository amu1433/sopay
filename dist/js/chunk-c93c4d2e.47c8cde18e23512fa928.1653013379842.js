(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c93c4d2e","chunk-648c461a","chunk-2d0d3c13","chunk-2d238268"],{"0df4":function(e,t,a){"use strict";a("7732")},"36fa":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block","vertical-align":"bottom"}},[a("Upload",{staticStyle:{display:"inline-block","vertical-align":"bottom"},attrs:{multiple:"",type:e.upstyleboj.isimg?"drag":"select",action:e.uploadUrl,format:["jpg","jpeg","png","gif","bmp"],"max-size":5120,name:"image",headers:e.headers,"show-upload-list":!1,data:e.uploadData,"before-upload":e.beforeUpload,"on-success":e.handleSuccess,"on-progress":e.handleprogress,"on-format-error":e.handleImgFormatError,"on-exceeded-size":e.handleImgMaxSize}},[e.upstyleboj.isimg?[a("div",{style:{width:e.upstyleboj.width+"px",height:e.upstyleboj.height+"px",lineHeight:e.upstyleboj.height+"px"}},[a("Icon",{attrs:{type:"ios-cloud-upload",size:e.upstyleboj.size}})],1)]:[a("Button",{attrs:{type:"info",icon:"ios-cloud-upload-outline"}},[e._v(e._s(e.upstyleboj.btname))])]],2),a("Modal",{attrs:{title:"上传进度",width:"600","footer-hide":"","mask-closable":!1},on:{"on-visible-change":e.change},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("Table",{attrs:{columns:e.columns1,data:e.data1},scopedSlots:e._u([{key:"isbot",fn:function(e){var t=e.row;e.index;return[a("Progress",{attrs:{percent:t.status2,"stroke-width":20}})]}}])})],1)],1)},i=[],s=a("f121");var o={data(){return{uploadData:{},uploadUrl:"",uploadList:[],headers:{},modal1:!1,data1:[],response:"",columns1:[{title:"名称",key:"name"},{title:"进度",key:"status2",slot:"isbot"},{title:"备注",key:"percentage"}]}},props:{upstyle:{type:Object,default:function(){return{}}},param:{type:Object,default:{}}},computed:{upstyleboj(){return Object.assign({btname:"上传图片",isimg:!1,width:80,height:80,size:30},this.upstyle)}},created(){this.uploadData=this.param;s["a"].baseUrl.pro;this.uploadUrl=s["a"].baseUrl.pro+"admin/Upload/index",this.init()},methods:{init(){},beforeUpload(){let e=JSON.parse(sessionStorage.getItem("userData"));this.uploadData.username=e.username,this.headers["api-Auth"]=e.apiAuth;const t=this.uploadList.length<20;return t||this.$Notice.warning({title:"Up to five pictures can be uploaded."}),t},change(e){},handleImgFormatError(e){this.$Notice.warning({title:"文件类型不合法",desc:e.name+"的文件类型不正确，请上传jpg或者png图片。"})},handleprogress(e,t,a){this.modal1=!0;let n=(e.loaded/e.total*100).toFixed(0);n=Number(n);for(let i in a)a[i]["uid"]==t.uid&&(a[i]["status2"]=n,a[i]["percentage"]="ok");this.data1=a},handleSuccess(e,t,a){let n=e.data;if(n.param=this.param,n.time=t.uid,this.$Message.destroy(),"1"==e.code)a.splice(a.indexOf(t),1),this.response=n,setTimeout(()=>{this.$emit("GetUploadDataList",n)},1500);else{for(let n in a)a[n]["uid"]==t.uid&&(a[n]["status2"]=0,a[n]["percentage"]=e.msg);this.$Notice.warning({title:"错误提示",desc:e.msg})}this.data1=a,a.length<1&&(this.modal1=!1)},handleImgMaxSize(e){this.$Notice.warning({title:"文件大小不合法",desc:e.name+"太大啦! 请上传小于5M的文件。"})}}},r=o,l=a("cba8"),c=Object(l["a"])(r,n,i,!1,null,null,null);t["a"]=c.exports},5167:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("div",[[a("Tabs",{model:{value:e.tabValue,callback:function(t){e.tabValue=t},expression:"tabValue"}},[a("TabPane",{attrs:{label:"支付宝个码",name:"alipay"}},[a("Table",{ref:"update_ref",attrs:{loading:e.listLoading,columns:e.columnsList,data:e.tableData,tooltip:!0,border:"","disabled-hover":""},scopedSlots:e._u([{key:"jine",fn:function(t){var n=t.row,i=t.index;return[e.editIndexxian===i?a("Input",{attrs:{type:"text"},model:{value:e.editJinexian,callback:function(t){e.editJinexian=t},expression:"editJinexian"}}):a("span",[e._v(e._s(n.jine))])]}},{key:"beizhu",fn:function(t){var n=t.row,i=t.index;return[e.editIndexxian===i?a("Input",{attrs:{type:"text"},model:{value:e.beizhu,callback:function(t){e.beizhu=t},expression:"beizhu"}}):a("span",[e._v(e._s(n.beizhu))])]}},{key:"iscite",fn:function(t){var n=t.row,i=t.index;return[a("i-switch",{attrs:{"true-value":1,"false-value":0},on:{"on-change":function(t){return e.switchchange(t,n,i)}},model:{value:n.iscite,callback:function(t){e.$set(n,"iscite",t)},expression:"row.iscite"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"yichang",fn:function(e){var t=e.row;e.index;return[t.shuoming?a("Badge",{attrs:{status:"error",text:t.shuoming}}):a("Progress",{attrs:{percent:99,"stroke-width":20,status:"active","hide-info":"","stroke-color":["#108ee9","#87d068"]}})]}},{key:"baifenbi",fn:function(t){var n=t.row;t.index;return[a("Tooltip",{attrs:{placement:"right"}},[e._v("\n                  "+e._s(n.filetype)+"\n                  "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[e._v("成功:"+e._s(n.zong)+"单")]),a("p",[e._v("漏单:"+e._s(n.lou)+"单")])])])]}},{key:"zhifulv",fn:function(t){var n=t.row;t.index;return[a("Tooltip",{attrs:{placement:"right"}},[e._v("\n                  "+e._s(n.paybi)+"\n                  "),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[e._v("下单:"+e._s(n.zongdan)+"单")]),a("p",[e._v("支付:"+e._s(n.paydan)+"单")])])])]}},{key:"fangfeng",fn:function(t){t.row,t.index;return[a("i-Switch",{attrs:{size:"large","true-value":0,"false-value":1},on:{"on-change":function(t){return e.Switchchange()}},model:{value:e.userInfo.userData.fangfeng,callback:function(t){e.$set(e.userInfo.userData,"fangfeng",t)},expression:"userInfo.userData.fangfeng"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("开")]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("关")])])]}},{key:"url",fn:function(t){var n=t.row;t.index;return[a("Avatar",{staticStyle:{cursor:"pointer"},attrs:{shape:"square",src:n.url,size:"50"},nativeOn:{click:function(t){return e.imgPreview(n.url)}}})]}},{key:"guma",fn:function(t){var n=t.row;t.index;return[a("Button",{attrs:{type:"info"},nativeOn:{click:function(t){return e.gumaview(n.id)}}},[e._v("上传固码")])]}},{key:"matongji",fn:function(t){var n=t.row;t.index;return[a("Button",{attrs:{type:"info"},nativeOn:{click:function(t){return e.matongji(n.id)}}},[e._v("收款码统计")])]}},{key:"action",fn:function(t){var n=t.row,i=t.index;return[e.editIndexxian===i?a("div",[a("Button",{attrs:{type:"info"},on:{click:function(t){return e.handleSavexian(i)}}},[e._v("保存")]),a("Button",{on:{click:function(t){e.editIndexxian=-1}}},[e._v("取消")]),a("Button",{on:{click:function(t){return e.handfilesDel(n)}}},[e._v("删除")])],1):a("div",[a("Button",{on:{click:function(t){return e.handleEditxiane(n,i)}}},[e._v("操作")])],1)]}}])}),a("div",{staticClass:"margin-top-15",staticStyle:{"text-align":"center"}},[a("Page",{attrs:{total:e.tableShow.listCount,current:e.tableShow.currentPage,"page-size":e.tableShow.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":e.changePage,"on-page-size-change":e.changeSize}})],1)],1),a("TabPane",{attrs:{label:"配置",name:"option"}},[a("alipayOption")],1),a("TabPane",{attrs:{label:"文档",name:"markdown"}},[a("Divider",{attrs:{orientation:"left"}},[a("Icon",{attrs:{type:e.QrcodeTypeDes.ico,size:"28",color:e.QrcodeTypeDes.color}}),a("span",{style:"color:"+e.QrcodeTypeDes.color+";font-size:14px"},[e._v(e._s(e.QrcodeTypeDes.val))]),"wechat"!=e.QrcodeType?a("span",{style:"color:"+e.QrcodeTypeDes.checkChannelColor+";font-size:16px;padding:0 8px"},[e._v("【"+e._s(e.QrcodeTypeDes.checkChannel)+"】\n                "),a("Tag",{attrs:{color:"purple"},nativeOn:{click:function(t){return e.help.apply(null,arguments)}}},[e._v("查看如何挂机")])],1):e._e()],1),a("markdown",{attrs:{type:e.QrcodeType}})],1),a("upload",{ref:"upload",attrs:{slot:"extra",param:{ispay:1,pid:"qr"},upstyle:{btname:"上传收款码"}},on:{GetUploadDataList:e.GetUploadDataList},slot:"extra"})],1)]],2)]),a("Modal",{attrs:{"footer-hide":!0,width:e.imgModel.width,"mask-closable":!1,"class-name":"imgPreview"},on:{"on-visible-change":e.doCancel},model:{value:e.imgModel.imgModel,callback:function(t){e.$set(e.imgModel,"imgModel",t)},expression:"imgModel.imgModel"}},[a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.imgModel.imgTitle))])]),a("div",{staticStyle:{"text-align":"center"}},[e.imgModel.time?a("count-down",{ref:"countdown",staticStyle:{color:"#000"},attrs:{start:e.imgModel.time,end:"0",autoshow:!1,splitsymbol:"时-分-秒",autostart:!0},on:{endcallback:e.endFn}}):e._e(),e.imgModel.centent?a("h2",[e._v(e._s(e.imgModel.centent))]):e._e(),a("img",{attrs:{src:e.imgModel.modelImg,width:"100%"}})],1)]),a("Modal",{attrs:{"footer-hide":!0,width:75,"mask-closable":!0,"class-name":"imgPreview"},on:{"on-visible-change":e.doCancel},model:{value:e.gumatotal.gumatotal,callback:function(t){e.$set(e.gumatotal,"gumatotal",t)},expression:"gumatotal.gumatotal"}},[a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v("收款码统计")])]),a("div",[a("Card",{attrs:{shadow:""}},[a("p",{staticStyle:{"text-align":"center"},attrs:{slot:"title"},slot:"title"},[e._v("收款码统计")]),e.countView?a("ChartBar",{staticStyle:{height:"400px"},attrs:{param:e.tongjimaparam,action:"shoukuanma"}}):e._e()],1)],1)]),a("Modal",{attrs:{"footer-hide":!0,width:75,"mask-closable":!1,"class-name":"imgPreview"},on:{"on-visible-change":e.doCancel},model:{value:e.gumaModel.gumaModel,callback:function(t){e.$set(e.gumaModel,"gumaModel",t)},expression:"gumaModel.gumaModel"}},[a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[a("span",[e._v("上传固码")])]),a("div",{staticStyle:{"max-height":"500px","overflow-y":"auto"}},[a("Tooltip",{attrs:{content:"支持批量上传文件",placement:"right"}},[a("upload",{ref:"upload",attrs:{param:e.param,upstyle:{btname:"上传固码"}},on:{GetUploadDataList:e.GetUploadDataList}})],1),a("Table",{ref:"update_ref",attrs:{loading:e.listLoading,columns:e.gumaList,data:e.tableDataguma,tooltip:!0,border:"","disabled-hover":""},scopedSlots:e._u([{key:"jine",fn:function(t){var n=t.row,i=t.index;return[e.editIndex===i?a("Input",{attrs:{type:"text"},model:{value:e.editJine,callback:function(t){e.editJine=t},expression:"editJine"}}):a("span",[e._v(e._s(n.jine))])]}},{key:"url",fn:function(t){var n=t.row;t.index;return[a("Avatar",{staticStyle:{cursor:"pointer"},attrs:{shape:"square",src:n.url,size:"50"},nativeOn:{click:function(t){return e.imgPreview(n.url)}}})]}},{key:"action",fn:function(t){var n=t.row,i=t.index;return[e.editIndex===i?a("div",[a("Button",{attrs:{type:"info"},on:{click:function(t){return e.handleSave(i)}}},[e._v("保存")]),a("Button",{on:{click:function(t){e.editIndex=-1}}},[e._v("取消")]),a("Button",{on:{click:function(t){return e.handfilesDelguma(n)}}},[e._v("删除")])],1):a("div",[a("Button",{on:{click:function(t){return e.handleEdit(n,i)}}},[e._v("操作")])],1)]}}])})],1)])],1)},i=[],s=a("c24f"),o=a("ebb6"),r=a.n(o),l=a("c9ae"),c=a("36fa"),u=a("49ea"),d=a("7736"),m=a("5db0"),h=a("fdc7"),p={name:"",components:{upload:c["a"],CountDown:r.a,ChartBar:l["a"],alipayOption:m["default"],markdown:h["default"]},data(){this.$createElement;return{userInfo:{},QrcodeType:"alipay",tabValue:"alipay",QrcodeTypeDes:{color:"#ec7000",val:"需要挂机-当前挂机软件",ico:"logo-android",checkChannel:"",checkChannelColor:""},columnsList:[{title:"ID",key:"id",width:90,align:"center"},{title:"图片",align:"center",key:"url",slot:"url",width:90},{title:"漏单率",align:"center",key:"filetype",slot:"baifenbi",width:95},{title:"今日/昨日",align:"center",key:"jinri",width:100},{title:"是否开启",sortable:!0,align:"center",key:"iscite",width:120,render:(e,{row:t,index:a})=>e("i-switch",{attrs:{"before-change":()=>this.switchchange(t,a),value:1==t.iscite}},[e("span",{slot:"open"},["开"]),e("span",{slot:"close"},["关"])])},{title:"码防封",sortable:!0,align:"center",key:"iscite",width:120,render:(e,{row:t,index:a})=>e("i-switch",{attrs:{"before-change":()=>this.switchchangeFangfeng(t,this.userInfo.userData.fangfeng),value:1==this.userInfo.userData.fangfeng}},[e("span",{slot:"open"},["开"]),e("span",{slot:"close"},["关"])])},{title:"今日异常",align:"center",key:"url",width:110,render:(e,t)=>{let a=t.row.yichang,n="";return a>3&&(n="异常笔数:"+a),e("div",[e("span",{style:"color:#878787"},n)])}},{title:"状态",align:"center",slot:"yichang",width:100,className:"demo-table"},{title:"查看固码",sortable:!0,align:"center",slot:"guma",width:120},{title:"收款码统计",sortable:!0,align:"center",slot:"matongji",width:180},{title:"收款限额",sortable:!0,align:"center",slot:"jine",width:120},{title:"备注",sortable:!0,align:"center",slot:"beizhu",width:120},{title:"操作",slot:"action",width:260},{title:"时间",sortable:!0,align:"center",key:"createTime",width:120}],gumaList:[{title:"ID",key:"id",width:100,align:"center"},{title:"图片",align:"center",key:"url",slot:"url",width:90},{title:"图片大小",align:"center",sortable:!0,key:"filesize",width:120},{title:"时间",sortable:!0,align:"center",key:"createTime",width:120},{title:"金额",sortable:!0,align:"center",slot:"jine",width:180},{title:"操作",slot:"action",width:180}],tableData:[],tableDataguma:[],tongjimaparam:{},tableShow:{currentPage:1,pageSize:10,listCount:0},searchConf:{searchname:"",searchval:""},editIndex:-1,editJine:"",editIndexxian:-1,editJinexian:"",beizhu:"",listLoading:!1,imgModel:{imgModel:!1,modelImg:"",imgTitle:"图片预览",width:"300",time:"",centent:""},gumaModel:{gumaModel:!1},gumatotal:{gumatotal:!1},countView:!1,param:{ispay:1}}},mounted(){let e=JSON.parse(sessionStorage.getItem("userData"));u["a"].then(t=>{t.send({type:"login",data:"home",uid:e.id})})},computed:{},created(){let e=this,t=JSON.parse(sessionStorage.getItem("userData"));this.userInfo=t,e.getList()},methods:{...Object(d["b"])(["getUserInfo"]),handlegetUserInfo(){this.getUserInfo().then(e=>{this.userInfo=e})},help(){this.$router.push({path:"/api/question?type=hang"})},imgPreview(e){this.imgModel.modelImg=e,this.imgModel.imgModel=!0},doCancel(e){e||(this.imgModel.time="",this.imgModel.centent="")},changePage(e){this.tableShow.currentPage=e,this.getList()},changeSize(e){this.tableShow.pageSize=e,this.getList()},handleEdit(e,t){this.editJine=e.jine,this.editIndex=t},handleSave(e){this.tableDataguma[e].jine=this.editJine,this.editIndex=-1,Object(s["s"])(this.tableDataguma[e]).then(e=>{this.$Message.success(e.data.msg)}).catch(()=>{})},handleEditxiane(e,t){this.editJinexian=e.jine,this.beizhu=e.beizhu,this.editIndexxian=t},handleSavexian(e){this.tableData[e].jine=this.editJinexian,this.tableData[e].beizhu=this.beizhu,this.editIndexxian=-1,Object(s["s"])(this.tableData[e]).then(e=>{this.$Message.success(e.data.msg)}).catch(()=>{})},handfilesDel(e){e.all=1,Object(s["g"])(e).then(e=>{this.$Message.success(e.data.msg),this.editIndexxian=-1,this.getList()}).catch(()=>{})},gumaview(e,t=""){this.gumaModel.gumaModel=!0,this.param.nid=e;let a=this,n={page:a.tableShow.currentPage,size:a.tableShow.pageSize,searchname:a.searchConf.searchname,searchval:a.searchConf.searchval,nid:e,time:t};a.listLoading=!0,Object(s["b"])(n).then(e=>{a.tableDataguma=e.data.data.list,a.listLoading=!1}).catch(()=>{a.listLoading=!1})},matongji(e){this.gumatotal.gumatotal=!0,this.tongjimaparam.nid=e,this.countView=!1,this.$nextTick(()=>{this.countView=!0})},handfilesDelguma(e){Object(s["g"])(e).then(t=>{this.editIndex=-1,this.gumaview(e.nid)}).catch(()=>{})},endFn(){this.imgModel.time="",this.imgModel.centent="超时-验证失败,请联系客服绑定店员",this.imgModel.modelImg=""},switchchangeFangfeng(e,t){let a=this,n=a.userInfo.userData.fangfeng,i=1==n?0:1,o=1==i?"此功能为收费功能,开启后会增加一定的费率,详情请咨询客服":"关闭后,码容易被封,建议开启";return new Promise(e=>{this.$Modal.confirm({title:"提示",content:o,onOk:()=>{let t={};t.fangfeng=i,Object(s["r"])(t).then(e=>{a.$Message.success(e.data.msg),a.handlegetUserInfo()}).catch(()=>{}),e()},onCancel:()=>{}})})},switchchange(e,t){let a=1==e.iscite?0:1,n=this,i="60",o={id:e.id,iscite:a,bingtype:"bing",time:i};return new Promise(e=>{Object(s["s"])(o).then(s=>{"undefined"!=typeof s.data.data.type?(n.tableData[t].iscite=0,n.imgModel.imgTitle="验证收款码",n.imgModel.time=i,n.imgModel.centent="请付款"+s.data.data.val+"元",n.imgModel.modelImg=s.data.data.imgbase64,n.imgModel.imgModel=!0,u["a"].then(i=>{i.$on("USER_QR_TYPE",(function(i){"1"==i.code&&(n.$Notice.destroy(),n.$Notice.success({top:50,duration:10,title:i.msg+"通知",desc:i.info})),e(),n.tableData[t].iscite=a,n.imgModel.imgModel=!1,n.isOnlineModel=!1}))})):(e(),n.tableData[t].iscite=a,this.$Message.warning(s.data.msg))}).catch(()=>{n.imgModel.imgModel=!1})})},getList(){let e=this,t={page:e.tableShow.currentPage,size:e.tableShow.pageSize,searchname:e.searchConf.searchname,searchval:e.searchConf.searchval,fileclass:e.QrcodeType};e.listLoading=!0,Object(s["b"])(t).then(t=>{e.tableData=t.data.data.list,e.QrcodeTypeDes.checkChannel=t.data.data.checkChannel,e.QrcodeTypeDes.checkChannelColor=t.data.data.checkChannelColor,e.tableShow.listCount=t.data.data.count,e.listLoading=!1}).catch(()=>{e.listLoading=!1})},GetUploadDataList(e){if("qr"==e.pid)return this.tabValue="alipay",void this.getList();this.gumaview(e.param.nid,e.time)}}},f=p,g=(a("0df4"),a("cba8")),b=Object(g["a"])(f,n,i,!1,null,null,null);t["default"]=b.exports},"5db0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{attrs:{shadow:""}},[a("Form",{ref:"myForm",attrs:{model:e.formItem,"label-position":"left","label-width":220}},[a("Divider",{attrs:{orientation:"left"}},[e._v("挂机通道设置")]),a("FormItem",{attrs:{label:"挂机回调信息方式",prop:"copy_total"}},[a("CheckboxGroup",{model:{value:e.formItem.userData.channelname,callback:function(t){e.$set(e.formItem.userData,"channelname",t)},expression:"formItem.userData.channelname"}},[a("Checkbox",{attrs:{label:"sms",border:""}},[e._v("短信")]),a("Checkbox",{attrs:{label:"alipay",border:""}},[e._v("支付宝")]),a("Checkbox",{attrs:{label:"wechat",border:""}},[e._v("微信")]),a("Checkbox",{attrs:{label:"qq",border:""}},[e._v("qq")]),a("Checkbox",{attrs:{label:"bankCard",border:""}},[e._v("银行卡")])],1)],1),a("FormItem",{attrs:{label:"挂机软件密码",prop:"hangpassword"}},[a("Tooltip",{attrs:{placement:"right","max-width":"270"}},[a("Input",{attrs:{placeholder:"安卓挂机软件密码"},model:{value:e.formItem.userData.hangpassword,callback:function(t){e.$set(e.formItem.userData,"hangpassword",t)},expression:"formItem.userData.hangpassword"}}),a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[e._v("不设置或者为空,则采用账户的密码")])])],1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1)],1)},i=[],s=a("c24f"),o=a("7736"),r={name:"",data(){return{userInfo:{},formItem:{userData:{color:"",channelname:[]}}}},created(){let e=this,t=JSON.parse(sessionStorage.getItem("userData"));e.userInfo=t,e.formItem.email=e.userInfo.email,e.formItem.mobile=e.userInfo.mobile,e.formItem.num3=e.userInfo.num3,e.formItem.userData.num1=e.userInfo.userData.num1,e.formItem.userData.num2=e.userInfo.userData.num2,e.formItem.userData.color=e.userInfo.userData.color,e.formItem.userData.video=e.userInfo.userData.video,e.formItem.userData.copy_total=e.userInfo.userData.copy_total,e.formItem.userData.tip=e.userInfo.userData.tip,e.formItem.userData.style=e.userInfo.userData.style,e.formItem.userData.fangfeng=e.userInfo.userData.fangfeng,e.formItem.userData.toalipay=e.userInfo.userData.toalipay,e.formItem.userData.channelname=e.userInfo.userData.channelname,e.formItem.userData.hangpassword=e.userInfo.userData.hangpassword},methods:{...Object(o["b"])(["getUserInfo"]),handlegetUserInfo(){let e=this;this.getUserInfo().then(t=>{e.userInfo=t,e.formItem.email=e.userInfo.email,e.formItem.mobile=e.userInfo.mobile,e.formItem.userData.num1=e.userInfo.userData.num1,e.formItem.userData.num2=e.userInfo.userData.num2,e.formItem.num3=e.userInfo.num3,e.formItem.userData.color=e.userInfo.userData.color,e.formItem.userData.video=e.userInfo.userData.video,e.formItem.userData.copy_total=e.userInfo.userData.copy_total,e.formItem.userData.tip=e.userInfo.userData.tip,e.formItem.userData.style=e.userInfo.userData.style,e.formItem.userData.fangfeng=e.userInfo.userData.fangfeng,e.formItem.userData.toalipay=e.userInfo.userData.toalipay,e.formItem.userData.channelname=e.userInfo.userData.channelname,e.formItem.userData.hangpassword=e.userInfo.userData.hangpassword})},colorchange(e){console.log(e),this.formItem.userData.color=e},inputChange(){},handleSubmit(){let e=this;this.$refs["myForm"].validate(t=>{Object(s["r"])(e.formItem).then(t=>{e.$Message.success(t.data.msg),e.handlegetUserInfo()}).catch(()=>{})})}}},l=r,c=a("cba8"),u=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=u.exports},7732:function(e,t,a){},ebb6:function(e,t,a){!function(t,a){e.exports=a()}("undefined"!=typeof self&&self,(function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"VueCountDown",data:function(){return{timer:null,gettime:0,hour:0,minute:0,second:0,showhour:!0,showmin:!0}},props:{start:{type:String,default:0},end:{type:String,default:0},autoshow:{type:Boolean,default:!1},EndCallBack:{type:Function},splitsymbol:{type:String,default:":-:-:"},autostart:{type:Boolean,default:!0}},methods:{timeToEnd:function(){this.$emit("endcallback")},countTime:function(){var e=this;this.gettime=this.start,this.timer=setInterval((function(){0!==e.gettime&&e.gettime--,0==e.gettime&&(e.timeToEnd(),clearInterval(e.timer)),e.currentTime(e.gettime)}),1e3)},currentTime:function(e){var t=Math.floor(e/3600),a=Math.floor(e/60%60),n=Math.floor(e%60);(t<10||0==t)&&(t="0"+t),(a<10||0==a)&&(a="0"+a),(n<10||0==n)&&(n="0"+n),this.autoshow&&"00"==t&&(this.showhour=!1),this.autoshow&&"00"==t&&"00"==a&&(this.showhour=!1,this.showmin=!1),this.hour=t,this.minute=a,this.second=n}},mounted:function(){this.start>216e3?alert("设置起始时间不可超过3600*60秒"):(this.currentTime(this.start),this.autostart&&this.countTime())}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2);n.a.install=function(e){return e.component(n.a.name,n.a)},t.default=n.a},function(e,t,a){"use strict";var n=a(0),i=a(4),s=a(3),o=s(n.a,i.a,!1,null,null,null);t.a=o.exports},function(e,t){e.exports=function(e,t,a,n,i,s){var o,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,r=e.default);var c,u="function"==typeof r?r.options:r;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),s?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,m=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),m(e,t)}):u.beforeCreate=m?[].concat(m,c):[c]}return{esModule:o,exports:r,options:u}}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"font-size":"20px"}},[a("i",{staticClass:"iconfont icon-clock"}),e._v(" "),e.showhour&&!e.showmin?[a("span",[e._v(e._s(e.minute)+e._s(e.splitsymbol.split("-")[1]?e.splitsymbol.split("-")[1]:"")+e._s(e.second)+e._s(e.splitsymbol.split("-")[2]?e.splitsymbol.split("-")[2]:""))])]:e._e(),e._v(" "),e.showhour&&e.showmin?[a("span",[e._v(e._s(e.hour)+e._s(e.splitsymbol.split("-")[0]?e.splitsymbol.split("-")[0]:"")+e._s(e.minute)+e._s(e.splitsymbol.split("-")[1]?e.splitsymbol.split("-")[1]:"")+e._s(e.second)+e._s(e.splitsymbol.split("-")[2]?e.splitsymbol.split("-")[2]:""))])]:e._e(),e._v(" "),e.showhour||e.showmin?e._e():[a("span",[e._v(e._s(e.second)+e._s(e.splitsymbol.split("-")[2]?e.splitsymbol.split("-")[2]:""))])]],2)},i=[],s={render:n,staticRenderFns:i};t.a=s}])}))},fdc7:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"site"}},[[a("markdown",{attrs:{content:e.content}})]],2)},i=[],s=a("43a5"),o=a("c24f"),r={name:"",components:{markdown:s["a"]},data(){return{query:"",content:"# 加载中...."}},props:{type:{type:String,default:"daili"}},computed:{},created(){this.getList()},mounted(){},methods:{getList(){let e=this,t={};t.type=e.type,Object(o["a"])(t).then(t=>{let a=t.data.data.content;e.content=a})}}},l=r,c=a("cba8"),u=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=u.exports}}]);