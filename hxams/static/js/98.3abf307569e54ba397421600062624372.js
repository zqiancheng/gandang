webpackJsonp([98],{EOaQ:function(e,a,t){var n=t("L2o0");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("1478a72e",n,!1,{})},L2o0:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.chioceAreaOrg[data-v-1bd31552] {\n  width: 100%;\n  height: 100%;\n  background-color: #FFFFFF;\n}\n.chioceAreaOrg .el-header[data-v-1bd31552] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n}\n.chioceAreaOrg .el-header .el-button[data-v-1bd31552] {\n      position: absolute;\n      left: 5vw;\n      bottom: 0;\n      cursor: pointer;\n}\n.chioceAreaOrg .el-main[data-v-1bd31552] {\n    padding: 0 10%;\n}\n.chioceAreaOrg .el-main .el-card[data-v-1bd31552] {\n      text-align: center;\n      margin-bottom: 18px;\n      border-radius: 0;\n}\n.chioceAreaOrg .el-main .el-card i[data-v-1bd31552] {\n        margin-bottom: 15px;\n        font-size: 90px;\n        color: #FFFFFF;\n}\n.chioceAreaOrg .el-main .el-card p[data-v-1bd31552] {\n        color: #FFFFFF;\n        font: 16px Extra large;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        -o-text-overflow: ellipsis;\n        -webkit-text-overflow: ellipsis;\n        -moz-text-overflow: ellipsis;\n        white-space: nowrap;\n}\n.chioceAreaOrg .el-main .el-card[data-v-1bd31552]:hover {\n      background-color: #F3AD00;\n      cursor: pointer;\n      border-radius: 30px;\n}\n",""])},U8AU:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-container",{staticClass:"chioceAreaOrg"},[t("el-header",{attrs:{height:"10%"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left"},on:{click:e.goBackPage}},[e._v("返回")])],1),e._v(" "),t("el-main",e._l(e.areaOrgList,function(a){return t("el-row",{attrs:{gutter:18,type:"flex",justify:"left",align:"left"}},[t("el-col",{attrs:{span:2}}),e._v(" "),e._l(a,function(a,n){return t("el-col",{attrs:{span:4}},[0==n?t("el-card",{staticStyle:{"background-color":"#00BDA9"},attrs:{shadow:"always"},nativeOn:{click:function(t){e.jumpUrl(a.code,a.name)}}},[t("i",{staticClass:"iconfont gd-xitong-zuzhijiagou"}),e._v(" "),t("p",[e._v(e._s(a.name))])]):e._e(),e._v(" "),1==n?t("el-card",{staticStyle:{"background-color":"#657FEE"},attrs:{shadow:"always"},nativeOn:{click:function(t){e.jumpUrl(a.code,a.name)}}},[t("i",{staticClass:"iconfont gd-xitong-zuzhijiagou"}),e._v(" "),t("p",[e._v(e._s(a.name))])]):e._e(),e._v(" "),2==n?t("el-card",{staticStyle:{"background-color":"#F36F5A"},attrs:{shadow:"always"},nativeOn:{click:function(t){e.jumpUrl(a.code,a.name)}}},[t("i",{staticClass:"iconfont gd-xitong-zuzhijiagou"}),e._v(" "),t("p",[e._v(e._s(a.name))])]):e._e(),e._v(" "),3==n?t("el-card",{staticStyle:{"background-color":"#F3AD00"},attrs:{shadow:"always"},nativeOn:{click:function(t){e.jumpUrl(a.code,a.name)}}},[t("i",{staticClass:"iconfont gd-xitong-zuzhijiagou"}),e._v(" "),t("p",[e._v(e._s(a.name))])]):e._e(),e._v(" "),4==n?t("el-card",{staticStyle:{"background-color":"#1FA9F2"},attrs:{shadow:"always"},nativeOn:{click:function(t){e.jumpUrl(a.code,a.name)}}},[t("i",{staticClass:"iconfont gd-xitong-zuzhijiagou"}),e._v(" "),t("p",[e._v(e._s(a.name))])]):e._e()],1)}),e._v(" "),t("el-col",{attrs:{span:2}})],2)}),1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[]},r=o;var i=!1;var c=t("VU/8")({name:"ChioceAreaOrg",data:function(){return{areaOrganization:this.API.constObj.areaName,areaOrgList:[],userInfo:{token:""}}},created:function(){this.getAreaOrgData()},methods:{getAreaOrgData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".chioceAreaOrg"},method:"get",url:this.API.areaTree}).then(function(a){var t=a.data;if("1"==t.code){for(var n=[],o=0;o<t.data.length;o+=5)n.push(t.data.slice(o,o+5));e.areaOrgList=n}else e.$message({type:"error",message:"获取区域数据失败，请刷新重试！"})}).catch(function(a){e.$message({type:"error",message:"请求异常，请检查网络！"})})},jumpUrl:function(e,a){this.$store.commit("saveStoreByName",{name:this.API.constObj.areaOrgInfo,storeInfo:{areaCode:e,areaOrganization:a}}),this.$router.push({path:"/applyMain"})},goBackPage:function(){this.$store.commit("removeStoreByName",this.API.constObj.loginInfo),this.$router.push({path:"/login"})}}},r,!1,function(e){i||t("EOaQ")},"data-v-1bd31552",null);c.options.__file="src/views/archivalBorrowing/outsider/ChioceAreaOrg.vue";a.default=c.exports}});