(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-huodongbaoming-add-or-update"],{"2d92":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.select-container[data-v-19a2c7ee]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:999}.select-container .mask[data-v-19a2c7ee]{width:100%;height:100%;background-color:rgba(0,0,0,.4);opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.select-container .mask.mask-show[data-v-19a2c7ee]{opacity:1}.select-container .select-box[data-v-19a2c7ee]{width:100%;position:absolute;bottom:0;left:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);background-color:#fff;-webkit-transition:all .3s;transition:all .3s}.select-container .select-box.select-box-show[data-v-19a2c7ee]{-webkit-transform:translateZ(0);transform:translateZ(0)}.select-container .select-box .header[data-v-19a2c7ee]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #c8c7cc;line-height:%?76?%;font-size:%?30?%;padding:0 %?18?%}.select-container .select-box .header .cancel[data-v-19a2c7ee]{color:#999}.select-container .select-box .header .all[data-v-19a2c7ee]{color:#4cd964}.select-container .select-box .header .all .all-active[data-v-19a2c7ee]::after{display:inline-block;content:"✔";padding-left:%?8?%}.select-container .select-box .header .confirm[data-v-19a2c7ee]{color:#007aff}.select-container .select-box .body-warp[data-v-19a2c7ee]{width:100%;height:30vh;box-sizing:border-box;padding:%?20?% %?18?%}.select-container .select-box .body[data-v-19a2c7ee]{width:100%;height:100%;overflow-y:auto}.select-container .select-box .body .empty-tips[data-v-19a2c7ee]{margin-top:25%;text-align:center;font-size:%?26?%;color:#dd524d}.select-container .select-box .body .select-item[data-v-19a2c7ee]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?26?%;line-height:%?58?%;color:#303133;position:relative;-webkit-transition:all .3s;transition:all .3s}.select-container .select-box .body .select-item.selected[data-v-19a2c7ee]{color:#007aff}.select-container .select-box .body .select-item.disabled[data-v-19a2c7ee]{color:silver}.select-container .select-box .body .select-item > .label[data-v-19a2c7ee]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.select-container .select-box .body .select-item > .selected-icon[data-v-19a2c7ee]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}',""]),e.exports=t},"2dfd":function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("活动编号")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.huodongbianhao,placeholder:"活动编号"},model:{value:e.ruleForm.huodongbianhao,callback:function(t){e.$set(e.ruleForm,"huodongbianhao",t)},expression:"ruleForm.huodongbianhao"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("活动名称")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.huodongmingcheng,placeholder:"活动名称"},model:{value:e.ruleForm.huodongmingcheng,callback:function(t){e.$set(e.ruleForm,"huodongmingcheng",t)},expression:"ruleForm.huodongmingcheng"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("活动地点")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.huodongdidian,placeholder:"活动地点"},model:{value:e.ruleForm.huodongdidian,callback:function(t){e.$set(e.ruleForm,"huodongdidian",t)},expression:"ruleForm.huodongdidian"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("参加人数")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.renshu,placeholder:"参加人数"},model:{value:e.ruleForm.renshu,callback:function(t){e.$set(e.ruleForm,"renshu",t)},expression:"ruleForm.renshu"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户账号")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(t){e.$set(e.ruleForm,"yonghuzhanghao",t)},expression:"ruleForm.yonghuzhanghao"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("用户姓名")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(t){e.$set(e.ruleForm,"yonghuxingming",t)},expression:"ruleForm.yonghuxingming"}})],1),r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0 0 2rpx 0",background:"#ffffff",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("电话号码")]),r("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.dianhuahaoma,placeholder:"电话号码"},model:{value:e.ruleForm.dianhuahaoma,callback:function(t){e.$set(e.ruleForm,"dianhuahaoma",t)},expression:"ruleForm.dianhuahaoma"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#ffffff",background:"#3da742",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},"38f0":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-87906e36]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},5757:function(e,t,r){"use strict";var n=r("95b2"),i=r.n(n);i.a},5825:function(e,t,r){var n=r("2d92");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("0e408066",n,!0,{sourceMap:!1,shadowMode:!1})},5956:function(e,t,r){"use strict";r.r(t);var n=r("2dfd"),i=r("7f89");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("5757");var o,s=r("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"87906e36",null,!1,n["a"],o);t["default"]=l.exports},7645:function(e,t,r){"use strict";var n=r("5825"),i=r.n(n);i.a},"7ec0":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac6a"),r("96cf");var i=n(r("3b8d"));r("6762"),r("2fdb");var a={model:{prop:"value",event:["input"]},data:function(){return{show:!1,activeClass:!1,selectedArr:[],selectedArrOld:[]}},onShow:function(){this.show=this.value},computed:{isAll:function(){var e=this.returnWipeDisabledList();return!!e.length&&!e.includes(!1)}},props:{value:{type:Boolean,default:!1},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"},labelName:{type:String,default:"label"},valueName:{type:String,default:"value"},maskCloseAble:{type:Boolean,default:!0},allShow:{type:Boolean,default:!0},mode:{type:String,default:"multiple"},defaultSelected:{type:Array,default:function(){return[]}},data:{type:Array,required:!0,default:function(){return[]}}},watch:{value:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.show=t,e.next=3,this.$nextTick();case 3:this.activeClass=t,t&&(this.selectedArrOld=JSON.parse(JSON.stringify(this.selectedArr)));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),show:function(e){this.$emit("input",e),this.$emit("change",e)},data:{handler:function(e){this.selectedArr=e.map((function(e){return!1})),this.setItemActiveState()},deep:!0,immediate:!0},defaultSelected:{handler:function(){this.setItemActiveState()},deep:!0,immediate:!0}},methods:{setItemActiveState:function(){var e=this;this.data.length&&this.defaultSelected.length&&this.data.forEach((function(t,r){for(var n=0;n<e.defaultSelected.length;n++)if(!t.disabled&&t[e.valueName]===e.defaultSelected[n]){e.selectedArr.splice(r,1,!0);break}}))},onSelected:function(e){if(!this.data[e].disabled){var t=this.selectedArr[e];this.selectedArr.splice(e,1,!t)}},onCancel:function(e){e&&!this.maskCloseAble||(this.show=!1,this.selectedArr=JSON.parse(JSON.stringify(this.selectedArrOld)),this.$emit("cancel"))},returnWipeDisabledList:function(){var e=this,t=[];return this.selectedArr.forEach((function(r,n){e.data[n].disabled||t.push(r)})),t},onAllToggle:function(){var e=this,t=this.returnWipeDisabledList();t.includes(!1)?this.selectedArr.forEach((function(t,r){e.data[r].disabled||e.selectedArr.splice(r,1,!0)})):this.selectedArr.forEach((function(t,r){e.data[r].disabled||e.selectedArr.splice(r,1,!1)}))},onConfirm:function(){var e=this;this.show=!1;var t=[];if(this.selectedArr.forEach((function(r,n){r&&t.push(e.data[n])})),"multiple"===this.mode)this.$emit("confirm",t);else{var r=t[0]||{};this.$emit("confirm",r)}}}};t.default=a},"7f89":function(e,t,r){"use strict";r.r(t);var n=r("9df2"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"83b0":function(e,t,r){"use strict";r.r(t);var n=r("7ec0"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"95b2":function(e,t,r){var n=r("38f0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("289eb504",n,!0,{sourceMap:!1,shadowMode:!1})},"9df2":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("456d"),r("ac6a"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),o=n(r("064f")),s=n(r("bd56")),l={data:function(){return{cross:"",ruleForm:{huodongbianhao:"",huodongmingcheng:"",huodongdidian:"",renshu:"1",yonghuzhanghao:"",yonghuxingming:"",dianhuahaoma:"",sfsh:"待审核",shhf:"",crossuserid:"",crossrefid:""},user:{},ro:{huodongbianhao:!1,huodongmingcheng:!1,huodongdidian:!1,renshu:!1,yonghuzhanghao:!1,yonghuxingming:!1,dianhuahaoma:!1,sfsh:!1,shhf:!1,crossuserid:!1,crossrefid:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.dianhuahaoma=this.user.dianhuahaoma,this.ro.dianhuahaoma=!0,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=19;break}return this.ruleForm.id=t.id,e.next=17,this.$api.info("huodongbaoming",this.ruleForm.id);case 17:n=e.sent,this.ruleForm=n.data;case 19:if(this.cross=t.cross,!t.cross){e.next=66;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 23:if((e.t1=e.t0()).done){e.next=63;break}if(a=e.t1.value,"huodongbianhao"!=a){e.next=29;break}return this.ruleForm.huodongbianhao=i[a],this.ro.huodongbianhao=!0,e.abrupt("continue",23);case 29:if("huodongmingcheng"!=a){e.next=33;break}return this.ruleForm.huodongmingcheng=i[a],this.ro.huodongmingcheng=!0,e.abrupt("continue",23);case 33:if("huodongdidian"!=a){e.next=37;break}return this.ruleForm.huodongdidian=i[a],this.ro.huodongdidian=!0,e.abrupt("continue",23);case 37:if("renshu"!=a){e.next=41;break}return this.ruleForm.renshu=i[a],this.ro.renshu=!0,e.abrupt("continue",23);case 41:if("yonghuzhanghao"!=a){e.next=45;break}return this.ruleForm.yonghuzhanghao=i[a],this.ro.yonghuzhanghao=!0,e.abrupt("continue",23);case 45:if("yonghuxingming"!=a){e.next=49;break}return this.ruleForm.yonghuxingming=i[a],this.ro.yonghuxingming=!0,e.abrupt("continue",23);case 49:if("dianhuahaoma"!=a){e.next=53;break}return this.ruleForm.dianhuahaoma=i[a],this.ro.dianhuahaoma=!0,e.abrupt("continue",23);case 53:if("crossuserid"!=a){e.next=57;break}return this.ruleForm.crossuserid=i[a],this.ro.crossuserid=!0,e.abrupt("continue",23);case 57:if("crossrefid"!=a){e.next=61;break}return this.ruleForm.crossrefid=i[a],this.ro.crossrefid=!0,e.abrupt("continue",23);case 61:e.next=23;break;case 63:this.ruleForm.renshu=1,this.ruleForm.renshu=0,this.ro.renshu=!1;case 66:this.styleChange(),this.$forceUpdate();case 68:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#3da742"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#3da742"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #3da742",borderRadius:"100%",background:"#3da742"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #3da742",color:"#ffffff",borderRadius:"100%",background:"#3da742"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,o,s,l,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.renshu||this.$validate.isIntNumer(this.ruleForm.renshu)){e.next=3;break}return this.$utils.msg("参加人数应输入整数"),e.abrupt("return");case 3:if(!this.cross){e.next=20;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=20;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=16;break}for(s in t)s==a&&(t[s]=o);return l=uni.getStorageSync("crossTable"),e.next=14,this.$api.update("".concat(l),t);case 14:e.next=20;break;case 16:r=Number(uni.getStorageSync("userid")),n=t["id"],i=uni.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 20:if(!n||!r){e.next=48;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=n,c={page:1,limit:10,crossuserid:r,crossrefid:n},e.next=26,this.$api.list("huodongbaoming",c);case 26:if(u=e.sent,!(u.data.total>=i)){e.next=33;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 33:return t||(t=uni.getStorageSync("crossObj")),l=uni.getStorageSync("crossTable"),t.renshu=parseFloat(t.renshu)+parseFloat(this.ruleForm.renshu),e.next=38,this.$api.update("".concat(l),t);case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("huodongbaoming",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("huodongbaoming",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:e.next=61;break;case 48:return t||(t=uni.getStorageSync("crossObj")),l=uni.getStorageSync("crossTable"),t.renshu=parseFloat(t.renshu)+parseFloat(this.ruleForm.renshu),e.next=53,this.$api.update("".concat(l),t);case 53:if(!this.ruleForm.id){e.next=58;break}return e.next=56,this.$api.update("huodongbaoming",this.ruleForm);case 56:e.next=60;break;case 58:return e.next=60,this.$api.add("huodongbaoming",this.ruleForm);case 60:this.$utils.msgBack("提交成功");case 61:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=l},bd56:function(e,t,r){"use strict";r.r(t);var n=r("f64d"),i=r("83b0");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("7645");var o,s=r("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"19a2c7ee",null,!1,n["a"],o);t["default"]=l.exports},f64d:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"select-container",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[r("v-uni-view",{staticClass:"mask",class:e.activeClass?"mask-show":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel(!0)}}}),r("v-uni-view",{staticClass:"select-box",class:e.activeClass?"select-box-show":""},[r("v-uni-view",{staticClass:"header"},[r("v-uni-text",{staticClass:"cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))]),e.allShow?r("v-uni-view",{staticClass:"all",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAllToggle.apply(void 0,arguments)}}},[r("v-uni-text",{class:e.isAll?"all-active":""},[e._v("全选")])],1):e._e(),r("v-uni-text",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)}}},[e._v(e._s(e.confirmText))])],1),r("v-uni-view",{staticClass:"body-warp"},[r("v-uni-scroll-view",{staticClass:"body",attrs:{"scroll-y":"true"}},[e.data.length?e._e():e._t("tips",[r("v-uni-view",{staticClass:"empty-tips"},[e._v("暂无数据~")])]),e._l(e.data,(function(t,n){return r("v-uni-view",{key:t[e.valueName],staticClass:"select-item",class:[t.disabled?"disabled":"",e.selectedArr[n]?"selected":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelected(n)}}},[r("v-uni-view",{staticClass:"label"},[e._v(e._s(t[e.labelName]))]),r("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:e.selectedArr[n],expression:"selectedArr[index]"}],staticClass:"selected-icon"},[e._v("✔")])],1)}))],2)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);