(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sheshibaoxiu-list"],{"1a06":function(e,t,i){"use strict";var n={"mescroll-uni":i("f05e").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("mescroll-uni",{attrs:{up:e.upOption,down:e.downOption},on:{init:function(t){arguments[0]=t=e.$handleEvent(t),e.mescrollInit.apply(void 0,arguments)},down:function(t){arguments[0]=t=e.$handleEvent(t),e.downCallback.apply(void 0,arguments)},up:function(t){arguments[0]=t=e.$handleEvent(t),e.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"20rpx 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[i("v-uni-view",{style:{width:"calc(98% - 120rpx)",position:"relative",alignItems:"center",justifyContent:"space-between",display:"flex"}},[i("v-uni-view",{style:{backgroundColor:"#f5f5f5",margin:"0 30rpx 0 30rpx",color:"#333333",alignItems:"center",borderRadius:"40rpx",flex:"1",display:"flex",lineHeight:"64rpx",fontSize:"24rpx",height:"64rpx"}},[i("v-uni-text",{staticClass:"iconfont icon-sousuo1",style:{margin:"0 16rpx 0 16rpx"}}),i("v-uni-input",{style:{background:"transparent",height:"100%"},attrs:{type:"text",placeholder:"设施编号"},model:{value:e.searchForm.sheshibianhao,callback:function(t){e.$set(e.searchForm,"sheshibianhao",t)},expression:"searchForm.sheshibianhao"}})],1),i("v-uni-button",{style:{border:"0px",padding:"0 40rpx 0 40rpx",margin:"0 20rpx 0 0px",borderRadius:"40rpx",color:"#fff",background:"#3da742",fontSize:"28rpx",lineHeight:"64rpx",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1),i("v-uni-view",{style:{width:"100%",flexWrap:"wrap",background:"#ffffff",justifyContent:"space-between",display:"flex",height:"auto"}},[i("v-uni-view",{staticClass:"list",style:{width:"100%",padding:"40rpx 24rpx 24rpx 24rpx",margin:"20rpx 0 0 0",flex:"1",height:"auto"}},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"listm flex flex-between",style:{boxShadow:"0 0px 0px #00000020",padding:"0 0 20rpx 0",margin:"0 0 40rpx 0",borderColor:"#cccccc",flexWrap:"wrap",borderWidth:"0 0 2rpx 0",display:"flex",width:"100%",borderStyle:"dashed",justifyContent:"space-between",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onDetailTap(t)}}},[e.preHttp(t.sheshitupian)?i("v-uni-image",{staticClass:"listmpic",style:{margin:"0 20rpx 0 0",objectFit:"cover",borderRadius:"8rpx",display:"block",width:"200rpx",height:"200rpx",order:"2"},attrs:{mode:"aspectFill",src:t.sheshitupian.split(",")[0]}}):i("v-uni-image",{staticClass:"listmpic",style:{margin:"0 20rpx 0 0",objectFit:"cover",borderRadius:"8rpx",display:"block",width:"200rpx",height:"200rpx",order:"2"},attrs:{mode:"aspectFill",src:t.sheshitupian?e.baseUrl+t.sheshitupian.split(",")[0]:""}}),i("v-uni-view",{staticClass:"listmr",style:{width:"calc(100% - 240rpx)",padding:"0 0 0 0",margin:"20rpx 0 0 0",height:"auto"}},[i("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx 0 20rpx",margin:"0 0 12rpx",overflow:"hidden",whiteSpace:"nowrap",color:"#333",borderRadius:"8rpx",background:"#ffffff",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis",height:"60rpx"}},[e._v("设施编号:"+e._s(t.sheshibianhao))]),i("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx 0 20rpx",margin:"0 0 12rpx",overflow:"hidden",whiteSpace:"nowrap",color:"#333",borderRadius:"8rpx",background:"#ffffff",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis",height:"60rpx"}},[e._v(e._s(t.sheshimingcheng))]),i("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx 0 20rpx",margin:"0 0 12rpx",overflow:"hidden",whiteSpace:"nowrap",color:"#333",borderRadius:"8rpx",background:"#ffffff",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis",height:"60rpx"}},[e._v("所在地点:"+e._s(t.suozaididian))]),i("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx 0 20rpx",margin:"0 0 12rpx",overflow:"hidden",whiteSpace:"nowrap",color:"#333",borderRadius:"8rpx",background:"#ffffff",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis",height:"60rpx"}},[e._v("申报时间:"+e._s(t.shenbaoshijian))]),i("v-uni-view",{staticClass:"col3 f30 elip mb15",style:{padding:"0 20rpx 0 20rpx",margin:"0 0 12rpx",overflow:"hidden",whiteSpace:"nowrap",color:"#333",borderRadius:"8rpx",background:"#ffffff",width:"100%",lineHeight:"60rpx",fontSize:"28rpx",textOverflow:"ellipsis",height:"60rpx"}},[e._v("报修状态:"+e._s(t.baoxiuzhuangtai))])],1),i("v-uni-view",{style:{width:"100%",padding:"40rpx 20rpx 40rpx 20rpx",justifyContent:"space-between",display:"flex",height:"auto",order:"5"}},[e.userid&&e.isAuth("sheshibaoxiu","修改")||!e.userid&&e.isAuthFront("sheshibaoxiu","修改")?i("v-uni-view",{style:{display:"flex"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.onUpdateTap(t.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-xiugai2",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#3da742",display:"inline-block"}}),i("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#3da742",display:"inline-block"}},[e._v("修改")])],1):e._e(),e.userid&&e.isAuth("sheshibaoxiu","删除")||!e.userid&&e.isAuthFront("sheshibaoxiu","删除")?i("v-uni-view",{style:{display:"flex"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.onDeleteTap(t.id)}}},[i("v-uni-text",{staticClass:"iconfont icon-shanchu4",style:{margin:"0 8rpx 0 0",fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}}),i("v-uni-text",{style:{fontSize:"28rpx",lineHeight:"1",color:"#cc0000",display:"inline-block"}},[e._v("删除")])],1):e._e()],1)],1)})),1)],1)],1),i("v-uni-button",{staticClass:"add-btn",style:{margin:"20rpx 2% 0 0",borderColor:"#eeeeee",borderRadius:"40rpx",textAlign:"center",background:"#ffffff",borderWidth:"2rpx 2rpx 2rpx 2rpx",width:"100rpx",lineHeight:"64rpx",fontSize:"28rpx",borderStyle:"solid",height:"64rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.screenBoxShow=!0}}},[e._v("筛选")]),e.userid&&e.isAuth("sheshibaoxiu","新增")?i("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 0px 0px #cccccc",color:"#ffffff",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#3da742",width:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e(),!e.userid&&e.isAuthFront("sheshibaoxiu","新增")?i("v-uni-button",{staticClass:"add-btn",style:{border:"0",boxShadow:"0 0px 0px #cccccc",color:"#ffffff",bottom:"120rpx",right:"120rpx",outline:"none",borderRadius:"100%",background:"#3da742",width:"80rpx",lineHeight:"80rpx",fontSize:"26rpx",position:"fixed",height:"80rpx",zIndex:"999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddTap()}}},[e._v("新增")]):e._e()],1),e.screenBoxShow?i("v-uni-view",{staticClass:"screenBoxBG",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.screenBoxShow=!1}}}):e._e(),i("v-uni-view",{staticClass:"screenBox",class:e.screenBoxShow?"screenBoxActive":"",style:{width:"80%",padding:"40rpx 20rpx",background:"#d1f1ed"}},[i("v-uni-view",{style:{width:"100%",padding:"20rpx 0 20rpx 0"}},[i("v-uni-view",{style:{width:"100%",padding:"0 0 20rpx 20rpx",fontSize:"24rpx"}},[e._v("报修状态")]),i("v-uni-view",{style:{width:"100%",flexWrap:"wrap",justifyContent:"space-around",display:"flex"}},e._l(e.baoxiuzhuangtaiOptions,(function(t,n){return i("v-uni-view",{key:n,staticClass:"screenTab",class:e.searchForm.baoxiuzhuangtai==t?"screenTabActive":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.baoxiuzhuangtaiChange(t)}}},[e._v(e._s(t))])})),1)],1),i("v-uni-view",{style:{width:"100%",padding:"0 24rpx 0 24rpx",margin:"110rpx 0 0 0",alignItems:"center",justifyContent:"flex-start",display:"flex"}},[i("v-uni-button",{style:{margin:"0 20rpx 0 0",color:"#888888",borderRadius:"60rpx",textAlign:"center",background:"#ffffff",width:"30%",lineHeight:"60rpx",height:"60rpx",order:"2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.screenReset.apply(void 0,arguments)}}},[e._v("重置")]),i("v-uni-button",{style:{margin:"0 20rpx 0 0",color:"#333333",borderRadius:"60rpx",textAlign:"center",background:"#75ebde",width:"30%",lineHeight:"60rpx",height:"60rpx",order:"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},"26b27":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-355d6627]{min-height:calc(100vh - 44px);box-sizing:border-box}.category-one .tab[data-v-355d6627]{cursor:pointer;padding:0 %?20?% 0 %?20?%;color:#333;background:#fff;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%;height:%?80?%}.category-one .tab.active[data-v-355d6627]{cursor:pointer;padding:0 %?20?% 0 %?20?%;color:#fff;background:#1d5dca;display:inline-block;width:auto;font-size:%?28?%;line-height:%?80?%}.category-two .tab[data-v-355d6627]{cursor:pointer;padding:0 0 0 0;margin:0 0 %?24?%;color:#333;background:url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat 100%,rgba(6,152,136,.19);display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center;height:%?80?%}.category-two .tab.active[data-v-355d6627]{cursor:pointer;padding:0 0 0 0;margin:0 0 %?24?%;color:#fff;background:url(http://chy2.gdnxeco.com/20230914/9a307f891d964f0cb446d562b4d23d72.png) no-repeat 100%,#069888;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.category-three .tab[data-v-355d6627]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#333;background:none;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center;height:%?80?%}.category-three .tab.active[data-v-355d6627]{cursor:pointer;padding:0 %?20?%;margin:0 0 %?24?%;color:#fff;background:#3da742;display:inline-block;width:100%;font-size:%?28?%;line-height:%?80?%;text-align:center}.screenBoxBG[data-v-355d6627]{position:fixed;width:100%;height:100%;z-index:665;top:0;left:0;background:rgba(0,0,0,.3)}.screenBox[data-v-355d6627]{width:80%;position:fixed;height:100%;right:0;top:0;z-index:666;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;overflow-y:scroll}.screenBox .screenTab[data-v-355d6627]{border-radius:%?40?%;margin:%?10?% 0 %?10?% 0;color:#666;background:#fff;width:calc(100% / 3 - %?24?%);line-height:%?72?%;text-align:center}.screenBox .screenTabActive[data-v-355d6627]{border-radius:%?40?%;margin:%?10?% 0 %?10?% 0;color:#333;background:#75ebde;width:calc(100% / 3 - %?20?%);line-height:%?72?%;text-align:center}.screenBoxActive[data-v-355d6627]{-webkit-transform:translateZ(0);transform:translateZ(0)}',""]),e.exports=t},4928:function(e,t,i){"use strict";var n=i("5e72"),r=i.n(n);r.a},"553d":function(e,t,i){"use strict";i.r(t);var n=i("baa8"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"5e72":function(e,t,i){var n=i("26b27");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("73cbfbb6",n,!0,{sourceMap:!1,shadowMode:!1})},baa8:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6"),i("28a5"),i("55dd"),i("96cf");var r=n(i("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],baoxiuzhuangtaiOptions:[],list:[],lists:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",screenBoxShow:!1}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.userid?this.userid=t.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll(),{},this.baoxiuzhuangtaiOptions="已处理,报修中".split(",");case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{baoxiuzhuangtaiChange:function(e){this.searchForm.baoxiuzhuangtai=e,this.$forceUpdate()},screenReset:function(){this.searchForm={},this.$forceUpdate()},priceChange:function(e){return Number(e).toFixed(2)},preHttp:function(e){return e&&"http"==e.substr(0,4)},queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.sheshibianhao="",this.searchForm.baoxiuzhuangtai=""},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i,n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i={page:t.num,limit:t.size},this.searchForm.sheshibianhao&&(i["sheshibianhao"]="%"+this.searchForm.sheshibianhao+"%"),this.searchForm.baoxiuzhuangtai&&(i["baoxiuzhuangtai"]="%"+this.searchForm.baoxiuzhuangtai+"%"),n={},!this.userid){e.next=10;break}return e.next=7,this.$api.page("sheshibaoxiu",i);case 7:n=e.sent,e.next=13;break;case 10:return e.next=12,this.$api.list("sheshibaoxiu",i);case 12:n=e.sent;case 13:for(1==t.num&&(this.list=[]),this.list=this.list.concat(n.data.list),r=Math.ceil(this.list.length/6),a=[],s=0;s<r;s++)a[s]=this.list.slice(6*s,6*(s+1));this.lists=a,0==n.data.list.length&&(this.hasNext=!1),t.endSuccess(t.size,this.hasNext);case 21:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onDetailTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onUpdateTap:function(e){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var t=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var i=(0,r.default)(regeneratorRuntime.mark((function i(n){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.confirm){i.next=5;break}return i.next=3,t.$api.del("sheshibaoxiu",JSON.stringify([e]));case 3:t.hasNext=!0,t.mescroll.resetUpScroll();case 5:case"end":return i.stop()}}),i)})));function n(e){return i.apply(this,arguments)}return n}()})},search:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t,i,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.mescroll.num=1,t={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.sheshibianhao&&(t["sheshibianhao"]="%"+this.searchForm.sheshibianhao+"%"),this.searchForm.baoxiuzhuangtai&&(t["baoxiuzhuangtai"]=this.searchForm.baoxiuzhuangtai),i={},!this.userid){e.next=11;break}return e.next=8,this.$api.page("sheshibaoxiu",t);case 8:i=e.sent,e.next=14;break;case 11:return e.next=13,this.$api.list("sheshibaoxiu",t);case 13:i=e.sent;case 14:for(1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(i.data.list),n=Math.ceil(this.list.length/6),r=[],a=0;a<n;a++)r[a]=this.list.slice(6*a,6*(a+1));this.lists=r,0==i.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext),this.screenBoxShow=!1;case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=a},f081:function(e,t,i){"use strict";i.r(t);var n=i("1a06"),r=i("553d");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("4928");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"355d6627",null,!1,n["a"],s);t["default"]=c.exports}}]);