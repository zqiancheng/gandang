webpackJsonp([65],{"IL+m":function(e,t,l){var a=l("SxBB");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("rjj0")("62538cb8",a,!1,{})},SxBB:function(e,t,l){(e.exports=l("FZ+f")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},u3xW:function(e,t,l){(e.exports=l("FZ+f")(!1)).push([e.i,"\n/deep/ .el-container {\n  border-top: 1px solid #ddd;\n}\n.outDialog /deep/ .el-dialog .el-dialog__body {\n  padding: 10px 0 0 0 !important;\n}\n.collection-handle-container .my-header {\n  padding-top: 10px;\n  display: none;\n}\n.collection-handle-container .el-main {\n  background-color: #fff;\n  padding: 0 !important;\n}\n.collection-handle-container .el-main .collection-handle-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 10px;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.collection-handle-container .el-main .collection-handle-title .areaTree {\n      margin-right: 10px;\n}\n",""])},x8MG:function(e,t,l){var a=l("u3xW");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l("rjj0")("5a1aa793",a,!1,{})},yjB7:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("icmf"),n=l("41Z1"),i=l("2quf"),o={name:"ReplyCollectionDetail",components:{replyCollectionHandle:i.a},props:["replyCollectionHandleObj"],data:function(){return{isDetail:!0}}},c=function(){var e=this.$createElement;return(this._self._c||e)("replyCollectionHandle",{attrs:{isDetail:this.isDetail,replyCollectionHandleObj:this.replyCollectionHandleObj}})};c._withStripped=!0;var p={render:c,staticRenderFns:[]},r=p;var d=!1;var s=l("VU/8")(o,r,!1,function(e){d||l("IL+m")},null,null);s.options.__file="src/views/materialManage/collectionHandle/ReplyCollectionDetail.vue";var h=s.exports,g={name:"CollectionHandle",components:{hxTables:a.a,areaTreeSelect:n.a,replyCollectionHandle:i.a,replyCorllectionDetail:h},data:function(){var e=this;return{dialogTitle:"",replycollection_handle_popUp:!1,replycollection_detail_popUp:!1,defaultOptions:"",e01z209a:"",title:"发往单位",tableHeight:0,replyCollectionHandleObj:"",columns:[{button:!0,label:"操作",width:"6%",fixed:"right",group:[{name:"回复",plain:!1,icon:"iconfont gd-xiaohuifu",type:"success",onClick:function(t,l){e.replyCollectionHandleObj=t,t.oprationValue?(e.dialogTitle="查看",e.replycollection_detail_popUp=!0):(e.dialogTitle="回复",e.replycollection_handle_popUp=!0)}}]},{index:!0,prop:"tableindex",label:"序号",width:"6%",align:"center"},{prop:"e01z209a",label:"发件单位",showOverflowTooltip:!0,width:"14%",align:"left"},{prop:"e01z208",label:"发件人",showOverflowTooltip:!0,width:"15%",align:"left"},{prop:"title",label:"标题",showOverflowTooltip:!0,align:"left",width:"18%"},{prop:"e01z4104",label:"收件日期",width:"12%"},{prop:"content",label:"催收内容",showOverflowTooltip:!0,align:"left",width:"17%"},{prop:"statusValue",label:"状态",width:"12%",align:"left"}],tableData:[],pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},options:{mutiSelect:!1,index:!1,loading:!1,initTable:!0,border:!1,maxHeight:0,indexWidth:"6%"}}},watch:{tableData:{handler:function(e){this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-50-52-26,this.options.maxHeight=this.tableHeight}}},methods:{fetchTableData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".material-collection-container"},method:"post",url:this.API.queryAllProcessing,data:{e01z209b:this.e01z209a,pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize}}).then(function(t){var l=t.data;"1"==l.code?(e.tableData=l.data.list,e.tableData.forEach(function(e){"未处理"===e.statusValue?e.oprationValue=!1:e.oprationValue=!0}),e.pageObj.total=l.data.total):e.$message({type:"error",message:"获取数据失败，请刷新重试！"})}).catch(function(e){})},handleRowClick:function(e,t,l){},search:function(){this.pageObj.pageIndex=this.API.constObj.pageIndex,this.fetchTableData()},getSelect:function(e){e&&(this.e01z209a=e.code)},getAddBack:function(e){this.replycollection_handle_popUp=!1,"cancle"!=e&&this.fetchTableData()}}},u=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-container",{staticClass:"collection-handle-container"},[l("el-header",{staticClass:"my-header",staticStyle:{height:"45px"}},[e._v("催收处理")]),e._v(" "),l("el-main",[l("div",{staticClass:"collection-handle-title"},[l("areaTreeSelect",{staticClass:"areaTree",attrs:{defaultOptions:e.defaultOptions,title:e.title},on:{areaTreeSelectCall:e.getSelect}}),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1),e._v(" "),l("hxTables",{ref:"table",attrs:{pageObj:e.pageObj,columns:e.columns,dataSource:e.tableData,options:e.options,fetch:e.fetchTableData},on:{"row-click":e.handleRowClick}}),e._v(" "),e.replycollection_handle_popUp?l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",staticStyle:{"margin-top":"1vh !important",overflow:"hidden"},attrs:{title:e.dialogTitle,"append-to-body":"","close-on-click-modal":!1,width:"80%","max-height":"94%",visible:e.replycollection_handle_popUp},on:{"update:visible":function(t){e.replycollection_handle_popUp=t}}},[l("replyCollectionHandle",{attrs:{replyCollectionHandleObj:e.replyCollectionHandleObj},on:{backAdd:e.getAddBack}})],1):e._e(),e._v(" "),e.replycollection_detail_popUp?l("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",staticStyle:{"margin-top":"1vh !important",overflow:"hidden"},attrs:{title:e.dialogTitle,"append-to-body":"","close-on-click-modal":!1,width:"80%","max-height":"94%",visible:e.replycollection_detail_popUp},on:{"update:visible":function(t){e.replycollection_detail_popUp=t}}},[l("replyCorllectionDetail",{attrs:{replyCollectionHandleObj:e.replyCollectionHandleObj},on:{backAdd:e.getAddBack}})],1):e._e()],1)],1)};u._withStripped=!0;var f={render:u,staticRenderFns:[]},b=f;var y=!1;var m=l("VU/8")(g,b,!1,function(e){y||l("x8MG")},null,null);m.options.__file="src/views/materialManage/collectionHandle/CollectionHandle.vue";t.default=m.exports}});