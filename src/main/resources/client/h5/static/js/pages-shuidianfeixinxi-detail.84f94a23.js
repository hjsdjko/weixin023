(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shuidianfeixinxi-detail"],{"08de":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2ad2e38b]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-2ad2e38b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-2ad2e38b]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-2ad2e38b]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-2ad2e38b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-2ad2e38b] .uni-audio-default{width:inherit}',""]),t.exports=i},2912:function(t,i,e){"use strict";var n=e("c0ed"),r=e.n(n);r.a},"492f":function(t,i,e){"use strict";e.r(i);var n=e("6528"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},6528:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("f559"),e("55dd"),e("96cf");var r=n(e("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:null,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=i.id,i.userid&&(this.userid=i.userid),this.init();case 3:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:if(n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),r=uni.getStorageSync("crossCleanType"),!r){t.next=13;break}return uni.removeStorageSync("crossCleanType"),t.next=11,this.$api.info("shuidianfeixinxi",this.id);case 11:n=t.sent,this.detail=n.data;case 13:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","shuidianfeixinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(t,i,e,n,r){if(!this.user)return!1;if(uni.setStorageSync("crossTable","shuidianfeixinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",e),uni.setStorageSync("statusColumnValue",r),uni.setStorageSync("tips",n),""!=e&&!e.startsWith("[")){var a=uni.getStorageSync("crossObj");for(var s in a)if(s==e&&a[s]==r)return void this.$utils.msg(n)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timer&&clearInterval(this.timer),t.next=3,this.$api.info("shuidianfeixinxi",this.id);case 3:i=t.sent,this.detail=i.data;case 5:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i.endSuccess(i.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var i=this;t=i.$base.url+t,uni.downloadFile({url:t,success:function(e){200===e.statusCode&&(i.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.user){t.next=2;break}return t.abrupt("return",!1);case 2:this.$utils.jump("../discussshuidianfeixinxi/add-or-update?refid=".concat(this.id));case 3:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),onSHTap:function(){if(!this.user)return!1;this.$refs.popup.open()}}};i.default=a},"9c4d":function(t,i,e){"use strict";var n={"mescroll-uni":e("f05e").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(i){arguments[0]=i=t.$handleEvent(i),t.mescrollInit.apply(void 0,arguments)},down:function(i){arguments[0]=i=t.$handleEvent(i),t.downCallback.apply(void 0,arguments)},up:function(i){arguments[0]=i=t.$handleEvent(i),t.upCallback.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"container",style:{width:"100%",padding:"0px",position:"relative",background:"#ffffff",height:"auto"}},[e("v-uni-view",{staticClass:"detail-content",style:{padding:"24rpx 24rpx 24rpx 24rpx",flexWrap:"wrap",background:"#ffffff",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("订单号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.dingdanhao))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("用户账号：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.yonghuzhanghao))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("计费日期：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.jifeiriqi))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("截止日期：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.jiezhiriqi))])],1),e("v-uni-view",{staticClass:"detail-list-item title",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("是否支付：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.ispay))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("家庭住址：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.jiatingzhuzhi))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("用电量（度）：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.yongdianliang))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("电费单价：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.dianfeidanjia))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("用水量(m³)：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.yongshuiliang))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("水费单价：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.shuifeidanjia))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("应收水电费：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.yingshoushuidianfei))])],1),e("v-uni-view",{staticClass:"detail-list-item",style:{margin:"12rpx 0 12rpx 0",borderColor:"#cccccc",borderWidth:"0 0 0px 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[e("v-uni-view",{staticClass:"lable",style:{width:"auto",padding:"0 20rpx 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[t._v("缴费日期：")]),e("v-uni-view",{staticClass:"text",style:{padding:"0px 0 0 0",margin:"0 0 0 0",lineHeight:"48rpx",fontSize:"28rpx",color:"#666666"}},[t._v(t._s(t.detail.jiaofeiriqi))])],1),e("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{width:"100%",padding:"0",flexWrap:"wrap",background:"none",display:"flex",height:"auto"}},[t.userid&&t.isAuth("shuidianfeixinxi","支付")&&"已支付"!=t.detail.ispay?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx 0 20rpx",margin:"0 20rpx 12rpx 0",color:"#ffffff",borderRadius:"0",background:"#3da742",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPayTap.apply(void 0,arguments)}}},[t._v("支付")]):t._e(),!t.userid&&t.isAuthFront("shuidianfeixinxi","支付")&&"已支付"!=t.detail.ispay?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx 0 20rpx",margin:"0 20rpx 12rpx 0",color:"#ffffff",borderRadius:"0",background:"#3da742",width:"auto",fontSize:"28rpx",height:"80rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPayTap.apply(void 0,arguments)}}},[t._v("支付")]):t._e(),t.isAuth("shuidianfeixinxi","支付")||"已支付"==t.detail.ispay?t._e():e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx 0 20rpx",margin:"0 20rpx 12rpx 0",color:"#ffffff",borderRadius:"0",background:"#3da742",width:"auto",fontSize:"28rpx",height:"80rpx"}},[t._v("未支付")]),"已支付"==t.detail.ispay?e("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",style:{border:"0",padding:"0 20rpx 0 20rpx",margin:"0 20rpx 12rpx 0",color:"#ffffff",borderRadius:"0",background:"#3da742",width:"auto",fontSize:"28rpx",height:"80rpx"}},[t._v("已支付")]):t._e()],1)],1)],1)],1)],1)],1)},a=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},b1b7:function(t,i,e){"use strict";e.r(i);var n=e("9c4d"),r=e("492f");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("2912");var s,o=e("f0c5"),l=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2ad2e38b",null,!1,n["a"],s);i["default"]=l.exports},c0ed:function(t,i,e){var n=e("08de");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("6ac27cbd",n,!0,{sourceMap:!1,shadowMode:!1})}}]);