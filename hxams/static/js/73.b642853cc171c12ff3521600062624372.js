webpackJsonp([73],{"4ZpE":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("bOdI"),n=i.n(a),s=(i("mvHQ"),i("cMGX")),r=i("kvU4"),o=i("vW5d"),l={name:"ArchivesDetailList",props:["flagDeliver","flagType","time"],components:{pagination:s.a,browsePersonal:r.a,DReaderDouble:o.a},data:function(){return{browse_personal:!1,DReaderDoubleVisible:!1,fourthShow:"hidden",pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},pagerList:[],checkedArchives:""}},created:function(){this.getPagerList()},methods:{browsePersonalOnclick:function(e,t){this.browse_personal=!0,this.checkedArchives=t},handleDoubleFile:function(e,t){this.checkedArchives=t,this.DReaderDoubleVisible=!0},DReaderDoubleCall:function(){this.DReaderDoubleVisible=!1},handleCurrentChange:function(e){this.pageObj.pageIndex=e,this.getPagerList()},PageTurning:function(e){this.pageObj.pageIndex=e.page_index,this.pageObj.pageSize=e.page_size,this.getPagerList()},getPagerList:function(){var e=this;this.$axios({method:"post",url:this.API.archivalAccountManagementPage,data:{stype:this.flagType,ymds:this.time.startTime,ymde:this.time.endTime,pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize}}).then(function(t){var i=t.data;"1"==i.code?(e.pagerList=i.data.list,e.pageObj.total=i.data.total):e.$message({type:"error",message:"查询数据失败，请刷新重试！"})}).catch(function(e){})}}},c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"archives-detail-llst-container"},[i("el-table",{staticClass:"material_table",staticStyle:{width:"100%"},attrs:{data:e.pagerList,height:"400px"}},[i("el-table-column",{attrs:{label:"序号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.pageObj.pageIndex*e.pageObj.pageSize+t.$index+1)+" ")]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"a0101",label:"姓名","show-overflow-tooltip":"",width:"110"}}),e._v(" "),i("el-table-column",{attrs:{prop:"a0104",label:"性别",width:"80","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"a0107",label:"出生年月","show-overflow-tooltip":"",width:"110"}}),e._v(" "),i("el-table-column",{attrs:{prop:"a0192a",label:"工作单位及职务","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{prop:"operation",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"success",icon:"iconfont opera-icon-size gd-chakan",circle:"",title:"详情"},on:{click:function(i){e.browsePersonalOnclick(t.$index,t.row)}}}),e._v(" "),i("el-button",{attrs:{type:"success",icon:"iconfont opera-icon-size gd-techreport-",circle:"",title:"数字档案"},on:{click:function(i){e.handleDoubleFile(t.$index,t.row)}}})]}}])})],1),e._v(" "),i("div",[i("pagination",{attrs:{pageIndex:e.pageObj.pageIndex,total:e.pageObj.total,pageSize:e.pageObj.pageSize},on:{PageTurning:e.PageTurning}})],1),e._v(" "),e.browse_personal?i("el-dialog",{attrs:{title:"人员信息","append-to-body":"",width:"100%",fullscreen:"",visible:e.browse_personal,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(t){e.browse_personal=t}}},[i("browsePersonal",{attrs:{fourthShow:e.fourthShow,selectDeceive:e.checkedArchives}})],1):e._e(),e._v(" "),e.DReaderDoubleVisible?i("el-dialog",{attrs:{fullscreen:"",title:"数字档案","append-to-body":"",visible:e.DReaderDoubleVisible,"append-to-body":""},on:{"update:visible":function(t){e.DReaderDoubleVisible=t}}},[i("DReaderDouble",{attrs:{fileObject:e.checkedArchives},on:{DReaderDoubleCall:e.DReaderDoubleCall}})],1):e._e()],1)};c._withStripped=!0;var d={render:c,staticRenderFns:[]},p=d;var h=!1;var g=i("VU/8")(l,p,!1,function(e){h||i("N/Zs")},"data-v-42dcf7f8",null);g.options.__file="src/views/archivesDailyManagement/archivesLedgerManagement/ArchivesDetailList.vue";var m={name:"ArchivesLedgerManagement",components:{archivesDetailList:g.exports},data:function(){var e;return e={archives_popUp:!1,ledgerFlag:!0,flagType:"1",title:"",id:""},n()(e,"archives_popUp",!1),n()(e,"archives_popUp",!1),n()(e,"archives_popUp",!1),n()(e,"archives_popUp",!1),n()(e,"ledger_back_popUp",!1),n()(e,"time",{startTime:"",endTime:""}),n()(e,"flag",!1),n()(e,"canvasId","myCanvas"),n()(e,"type","bar"),n()(e,"options",{title:"档案日常统计",bottomPadding:30,radius:130}),n()(e,"data",[]),n()(e,"colors",["#FFAE8B","#3CB2EF","#AEFDCA","#37D8FF","#71F6F9"]),n()(e,"chartHeight",0),e},created:function(){this.getData()},methods:{startTimeChange:function(){var e=this.time.startTime.substring(0,4)+"-"+this.time.startTime.substring(4,6)+"-"+this.time.startTime.substring(6),t=this.time.endTime.substring(0,4)+"-"+this.time.endTime.substring(4,6)+"-"+this.time.endTime.substring(6);e&&e.length>0&&t&&t.length>0&&(new Date(e).getTime()>new Date(t).getTime()&&(this.$message({type:"error",message:"开始日期不能大于结束日期!"}),this.time.startTime=""))},endTimeChange:function(){var e=this.time.startTime.substring(0,4)+"-"+this.time.startTime.substring(4,6)+"-"+this.time.startTime.substring(6),t=this.time.endTime.substring(0,4)+"-"+this.time.endTime.substring(4,6)+"-"+this.time.endTime.substring(6);e&&e.length>0&&t&&t.length>0&&(new Date(e).getTime()>new Date(t).getTime()&&(this.$message({type:"error",message:"开始日期不能大于结束日期!"}),this.time.endTime=""))},getStyleBgc:function(e,t){return"background-color:"+e.color},pieChart:function(e){var t=this.$echarts.init(this.$refs.chartDiv);t.clear(),t.setOption({color:this.colors,title:{text:"档案日常统计",top:"10px",x:"30%",textStyle:{fontSize:16}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)",backgroundColor:"rgba(255,150,15,0.5)",textStyle:{color:"rgba(0,0,0,0.85)",fontSize:"12"}},legend:{show:!1},series:[{name:"统计",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!0,center:["35%","55%"],label:{emphasis:{show:!0,textStyle:{fontSize:"15",fontWeight:"500"}}},labelLine:{normal:{show:!0}},data:this.data}]})},getData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".archives-ledger-statistica-container"},method:"get",url:this.API.archivalAccountManagement,params:{ymds:this.time.startTime,ymde:this.time.endTime,year:"",ym:""}}).then(function(t){var i=t.data;"1"==i.code?(e.data=i.data,e.data.forEach(function(t,i){t.color=e.colors[i]}),e.pieChart("档案日常管理台账")):e.$message({type:"error",message:"获取数据失败，请刷新重试！"})}).catch(function(e){})},search:function(){this.getData()},goDetail:function(e){e.name.match("接收")?(this.archives_popUp=!0,this.flagType="1",this.title="档案接收"):e.name.match("审核")?(this.archives_popUp=!0,this.flagType="2",this.title="档案审核"):e.name.match("入库")?(this.flagType="3",this.archives_popUp=!0,this.title="档案入库"):e.name.match("转递")&&(this.flagType="4",this.archives_popUp=!0,this.title="档案转递")}}},v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"archives-ledger-statistica-container",staticStyle:{height:"calc(100% - 47px)"}},[i("el-main",[i("div",{staticClass:"title"},[i("div",{staticClass:"left"}),e._v(" "),i("div",{staticClass:"right"},[i("el-date-picker",{staticStyle:{"padding-right":"10px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyyMMdd","value-format":"yyyyMMdd"},on:{change:e.startTimeChange},model:{value:e.time.startTime,callback:function(t){e.$set(e.time,"startTime",t)},expression:"time.startTime"}}),e._v(" "),i("el-date-picker",{staticStyle:{"padding-right":"10px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyyMMdd","value-format":"yyyyMMdd"},on:{change:e.endTimeChange},model:{value:e.time.endTime,callback:function(t){e.$set(e.time,"endTime",t)},expression:"time.endTime"}}),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1)]),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"data-title"},e._l(e.data,function(t,a){return i("div",{key:a,staticClass:"item",on:{click:function(i){e.goDetail(t)}}},[i("a",{attrs:{href:"#"}},[i("div",{staticClass:"tip"},[i("div",{ref:"colorDiv",refInFor:!0,staticClass:"colordiv",style:e.getStyleBgc(t,a)}),e._v("\n\t\t\t\t\t\t\t"+e._s(t.name)+" "),i("span",{staticClass:"red"},[e._v("("+e._s(t.value)+")")])])])])}),0),e._v(" "),i("div",{staticClass:"content-right"},[i("div",{ref:"chartDiv",staticClass:"charts",staticStyle:{float:"left",width:"100%",height:"500px"},attrs:{id:"charts"}}),e._v(" "),i("div",{staticClass:"tip-bottom"},e._l(e.data,function(t,a){return i("div",{key:a,staticClass:"item item-left",on:{click:function(i){e.goDetail(t)}}},[i("a",{attrs:{href:"#"}},[i("div",{staticClass:"tip"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(t.name)+" "),i("span",{staticClass:"red"},[e._v("("+e._s(t.value)+");")])])])])}),0)])]),e._v(" "),e.archives_popUp?i("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",attrs:{title:e.title,"append-to-body":"","close-on-click-modal":!1,width:"50%",visible:e.archives_popUp},on:{"update:visible":function(t){e.archives_popUp=t}}},[i("archivesDetailList",{attrs:{flagType:e.flagType,time:e.time}})],1):e._e()],1)],1)};v._withStripped=!0;var f={render:v,staticRenderFns:[]},u=f;var b=!1;var y=i("VU/8")(m,u,!1,function(e){b||i("pfAF")},null,null);y.options.__file="src/views/archivesDailyManagement/archivesLedgerManagement/ArchivesLedgerManagement.vue";t.default=y.exports},"N/Zs":function(e,t,i){var a=i("SI0N");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("5f5d24ef",a,!1,{})},SI0N:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.archives-detail-llst-container .receive_page[data-v-42dcf7f8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 10px 0;\n}\n",""])},pfAF:function(e,t,i){var a=i("yhxR");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("58bcc1fc",a,!1,{})},yhxR:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.outDialog /deep/ .el-dialog .el-dialog__body {\n  padding: 10px 0 0 0 !important;\n}\n.archives-ledger-statistica-container .el-main {\n  background-color: #fff;\n  padding: 10px;\n  height: 100%;\n  overflow: hidden;\n}\n.archives-ledger-statistica-container .el-main .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.archives-ledger-statistica-container .el-main .title .right {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.archives-ledger-statistica-container .el-main .content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.archives-ledger-statistica-container .el-main .content .data-title {\n      width: 22%;\n      font-size: 14px;\n}\n.archives-ledger-statistica-container .el-main .content .item .tip {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 30px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.archives-ledger-statistica-container .el-main .content .item .tip .colordiv {\n        height: 18px;\n        width: 50px;\n        background-color: red;\n        margin-right: 10px;\n}\n.archives-ledger-statistica-container .el-main .content .item .tip .red {\n        color: red;\n        margin-top: 2px;\n}\n.archives-ledger-statistica-container .el-main .content .content-right {\n      width: 77%;\n}\n.archives-ledger-statistica-container .el-main .content .content-right .title {\n        text-align: center;\n        margin-right: 266px;\n}\n.archives-ledger-statistica-container .el-main .content .content-right .tip-bottom {\n        position: fixed;\n        bottom: 2%;\n        right: 30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.archives-ledger-statistica-container .el-main .content .content-right .tip-bottom .item-left {\n          margin-left: 10px;\n}\n",""])}});