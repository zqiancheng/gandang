webpackJsonp([74],{"3NFz":function(e,t,a){var i=a("GMdb");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("9cb12440",i,!1,{})},GMdb:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.outDialog[data-v-9f4d2a04] .el-dialog .el-dialog__body {\n  padding: 10px 0 !important;\n}\n.material-archive-container .el-main[data-v-9f4d2a04] {\n  background-color: #fff;\n  padding: 0 !important;\n}\n.material-archive-container .el-main .material-archive-title[data-v-9f4d2a04] {\n    padding: 10px;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-top[data-v-9f4d2a04] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-top .material-archive-title-topl[data-v-9f4d2a04] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-top .material-archive-title-topl div[data-v-9f4d2a04] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-right: 10px;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-top .material-archive-title-topl div span[data-v-9f4d2a04] {\n            width: 78px;\n            text-align: right;\n            margin-right: 10px;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-bt[data-v-9f4d2a04] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 10px;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-bt div[data-v-9f4d2a04] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-right: 10px;\n}\n.material-archive-container .el-main .material-archive-title .material-archive-title-bt div span[data-v-9f4d2a04] {\n          width: 78px;\n          text-align: right;\n          margin-right: 10px;\n}\n.material-archive-container .el-main .material-archive-title .elInput[data-v-9f4d2a04] {\n      width: 180px;\n}\n.material-archive-container .el-main .material-archive-title .elSelect[data-v-9f4d2a04] {\n      width: 180px;\n}\n",""])},HlHY:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.archive-operation-container .opration[data-v-285f6bf2] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n",""])},LL7v:function(e,t,a){var i=a("HlHY");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("294755ed",i,!1,{})},OAsn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("icmf"),r=a("Dd8w"),l=a.n(r),o={name:"ArchiveOperation",props:["checkedArchive"],components:{materialTypeSelect:a("a6hc").a},data:function(){return{isBackObj:!0,archiveOperationForm:{archivist1:"",archivistTime:"",e01z211:"",e01z217:"",e01z231:""},chioceOptionId:"",name:"档案管理员",userInfo:"",rules:{archivistTime:[{required:!0,message:"请选择归档时间",trigger:"change"}],e01z211:[{required:!0,message:"请选择材料类别",trigger:"change"}]}}},created:function(){this.checkedArchive&&(this.archiveOperationForm=l()({},this.checkedArchive),this.archiveOperationForm.e01z211=this.checkedArchive.sysName,this.chioceOptionId=this.archiveOperationForm.sysId,this.userInfo=this.$store.state.user,this.archiveOperationForm.archivistTime1=new Date,this.userInfo&&(this.archiveOperationForm.archivist1=this.userInfo.cn?this.userInfo.cn:this.name))},methods:{applyTypeCall:function(e){this.archiveOperationForm.e01z211=e.codeno,this.archiveOperationForm.e01z217=e.code},archive:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$confirm("您确定要归档该材料吗？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){t.doDeal()}).catch(function(){t.$message.info("已取消")})})},doDeal:function(){var e=this;this.$axios({method:"post",url:this.API.archivalFiling,data:{e01z200:this.checkedArchive.e01z200,archivist:this.archiveOperationForm.archivist1,archivistTime:this.commonFun.dateFormat(this.archiveOperationForm.archivistTime1,"yyyyMMdd"),e01z211:this.archiveOperationForm.e01z211,e01z217:this.archiveOperationForm.e01z217,e01z231:this.archiveOperationForm.e01z231}}).then(function(t){"1"==t.data.code?e.$message.success("归档成功！"):e.$message.error("归档失败，请刷新重试！"),e.$emit("getArchiveOperation")}).catch(function(e){this.$message.error("连接错误"+e)})},cancle:function(){this.$emit("getArchiveOperation","cancle")}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"archive-operation-container"},[a("el-form",{ref:"archiveOperationForm",staticStyle:{margin:"0 10px"},attrs:{rules:e.rules,model:e.archiveOperationForm,"label-width":"150px"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"归档人",prop:"archivist1"}},[a("el-input",{attrs:{readonly:"",clearabled:""},model:{value:e.archiveOperationForm.archivist1,callback:function(t){e.$set(e.archiveOperationForm,"archivist1",t)},expression:"archiveOperationForm.archivist1"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"归档时间",prop:"archivistTime1"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{format:"yyyyMMdd",type:"date",placeholder:"选择归档时间","value-format":"yyyyMMdd"},model:{value:e.archiveOperationForm.archivistTime1,callback:function(t){e.$set(e.archiveOperationForm,"archivistTime1",t)},expression:"archiveOperationForm.archivistTime1"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"材料类别",prop:"e01z211"}},[a("materialTypeSelect",{attrs:{chioceOptionId:e.chioceOptionId,isAll:!0,isBackObj:e.isBackObj},on:{applyTypeCall:e.applyTypeCall},model:{value:e.archiveOperationForm.e01z211,callback:function(t){e.$set(e.archiveOperationForm,"e01z211",t)},expression:"archiveOperationForm.e01z211"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",porp:"e01z231"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:e.archiveOperationForm.e01z231,callback:function(t){e.$set(e.archiveOperationForm,"e01z231",t)},expression:"archiveOperationForm.e01z231"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"opration"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.archive("archiveOperationForm")}}},[e._v("确定")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.cancle}},[e._v("取消")])],1)],1)};n._withStripped=!0;var c={render:n,staticRenderFns:[]},s=c;var h=!1;var p=a("VU/8")(o,s,!1,function(e){h||a("LL7v")},"data-v-285f6bf2",null);p.options.__file="src/views/materialManage/materialArchive/ArchiveOperation.vue";var v=p.exports,m={name:"MaterialArchive",components:{hxTables:i.a,archiveOperation:v},data:function(){var e=this;return{materialArchiveForm:{a0101:"",e01z211a:"",archivist:"",valStatus:"",archivistTime:"",archivistStartTime:"",archivistEndTime:"",sortWay:""},types1:[{value:"0",label:"Admin"},{value:"1",label:"部门负责人"},{value:"2",label:"档案管理员"},{value:"3",label:"普通查档用户"},{value:"4",label:"直接查档用户"}],types2:[{value:"0",label:"机要转递"},{value:"1",label:"专人取送"}],types3:[{value:"0",label:"档案编号"},{value:"1",label:"工作单位及职务"}],columns:[{button:!0,label:"操作",width:"80px",fixWidth:!0,render:!0,fixed:"right",prop:"val_status",group:[{value:"3",name:"归档",icon:"iconfont gd-guidang",type:"success",plain:!1,disabled:!0,onClick:function(t,a){e.checkedArchive=t,e.archiveOperationPop=!0}}]},{prop:"e100a",label:"档案编号",showOverflowTooltip:!0,fixWidth:!0,align:"left"},{prop:"a0101",label:"姓名",showOverflowTooltip:!0,fixWidth:!0,align:"left"},{prop:"a0192a",label:"工作单位与职务",showOverflowTooltip:!0,width:"180px",fixWidth:!0,align:"left"},{prop:"a0111a",label:"籍贯",showOverflowTooltip:!0,width:"80px",fixWidth:!0,align:"left"},{prop:"e01z211",label:"材料类别",showOverflowTooltip:!0,width:"100px",fixWidth:!0},{prop:"e01z211a",label:"材料名称",showOverflowTooltip:!0,fixWidth:!0,align:"left"},{prop:"e01z227",label:"形成时间",showOverflowTooltip:!0,width:"100px",fixWidth:!0},{prop:"e01z224",label:"页数",showOverflowTooltip:!0,width:"80px",fixWidth:!0},{prop:"e01z231",label:"备注",showOverflowTooltip:!0,fixWidth:!0,align:"left"},{prop:"valStatusName",label:"状态",showOverflowTooltip:!0,width:"80px",fixWidth:!0},{prop:"archivist",label:"归档人",showOverflowTooltip:!0,width:"100px",fixWidth:!0},{prop:"archivistTime",label:"归档日期",showOverflowTooltip:!0,width:"100px",fixWidth:!0},{prop:"typeName",label:"接收类型",showOverflowTooltip:!0,width:"100px",fixWidth:!0}],pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},tableData:[],options:{mutiSelect:!1,index:!0,loading:!1,initTable:!0,border:!1,maxHeight:500},archiveOperationPop:!1,checkedArchive:""}},watch:{tableData:{handler:function(e){this.options.maxHeight=window.innerHeight-this.$refs.table.$el.offsetTop-50-52-26}}},methods:{getDate:function(e){e&&2==e.length?(this.auditTime=e,this.materialArchiveForm.archivistStartTime=e[0],this.materialArchiveForm.archivistEndTime=e[1]):(this.materialArchiveForm.archivistStartTime="",this.materialArchiveForm.archivistEndTime="")},search:function(){this.pageObj.pageIndex=this.API.constObj.pageIndex,this.fetchTableData()},getExport:function(){var e=this;this.$confirm("确定导出？","操作提示",{confirmButtonText:"确定",cancleButtonText:"取消",type:"warning",center:!0}).then(function(){var t=e.$refs.table.columns,a=e.commonFun.getExportParameters1(t);e.$axios({method:"post",url:e.API.exportMaterialReceivingList,responseType:"arraybuffer",data:{stype:4,a0101:e.materialArchiveForm.a0101,e01z211a:e.materialArchiveForm.e01z211a,archivist:e.materialArchiveForm.archivist,type:e.materialArchiveForm.valStatus,e01z201:e.materialArchiveForm.e01z201,sortWay:e.materialArchiveForm.sortWay,archivistStartTime:e.materialArchiveForm.archivistStartTime,archivistEndTime:e.materialArchiveForm.archivistEndTime,titlels:a.titlels,colsls:a.colsls}}).then(function(e){this.commonFun.fileDownload(e.data,"材料归档列表.xlsx")}.bind(e))}).catch(function(e){this.$message.warning("取消！")}.bind(this))},fetchTableData:function(){var e=this;this.$axios({loading:{isShow:!0,tartget:".material-archive-container"},method:"post",url:this.API.queryMaterialReceivingPage,data:{stype:4,a0101:this.materialArchiveForm.a0101,e01z211a:this.materialArchiveForm.e01z211a,archivist:this.materialArchiveForm.archivist,type:this.materialArchiveForm.valStatus,e01z201:this.materialArchiveForm.e01z201,sortWay:this.materialArchiveForm.sortWay,archivistStartTime:this.materialArchiveForm.archivistStartTime,archivistEndTime:this.materialArchiveForm.archivistEndTime,pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize}}).then(function(t){var a=t.data;"1"==a.code?(e.tableData=a.data.list,e.pageObj.total=a.data.total):e.$message.error("获取归档列表数据失败，请刷新重试！")}).catch(function(e){this.$message.error(e)})},getArchiveOperation:function(e){this.archiveOperationPop=!1,"cancle"!==e&&this.fetchTableData()},clearSearch:function(){for(var e in this.materialArchiveForm)this.materialArchiveForm[e]="";this.pageObj.pageIndex=this.API.constObj.pageIndex,this.fetchTableData()}}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"material-archive-container"},[a("el-main",[a("div",{staticClass:"material-archive-title"},[a("div",{staticClass:"material-archive-title-top"},[a("el-popover",{attrs:{placement:"bottom",width:"400",trigger:"click"}},[a("el-form",{ref:"form",attrs:{model:e.materialArchiveForm,"label-width":"80px","label-position":"top"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticStyle:{width:"175px"},attrs:{clearable:""},model:{value:e.materialArchiveForm.a0101,callback:function(t){e.$set(e.materialArchiveForm,"a0101",t)},expression:"materialArchiveForm.a0101"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"材料名称"}},[a("el-input",{staticStyle:{width:"175px"},attrs:{clearable:""},model:{value:e.materialArchiveForm.e01z211a,callback:function(t){e.$set(e.materialArchiveForm,"e01z211a",t)},expression:"materialArchiveForm.e01z211a"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"归档人"}},[a("el-input",{staticStyle:{width:"175px"},attrs:{clearable:""},model:{value:e.materialArchiveForm.archivist,callback:function(t){e.$set(e.materialArchiveForm,"archivist",t)},expression:"materialArchiveForm.archivist"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"接收类型"}},[a("el-select",{staticClass:"elSelect",attrs:{clearable:""},model:{value:e.materialArchiveForm.valStatus,callback:function(t){e.$set(e.materialArchiveForm,"valStatus",t)},expression:"materialArchiveForm.valStatus"}},e._l(e.types2,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"归档日期"}},[a("el-date-picker",{staticStyle:{width:"380px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"yyyyMMdd"},on:{change:e.getDate},model:{value:e.materialArchiveForm.archivistTime,callback:function(t){e.$set(e.materialArchiveForm,"archivistTime",t)},expression:"materialArchiveForm.archivistTime"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.clearSearch}},[e._v("清空")])],1)],1)],1),e._v(" "),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("检索 "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})])],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.getExport}},[e._v("导出")])],1)],1)]),e._v(" "),a("hxTables",{ref:"table",attrs:{pageObj:e.pageObj,columns:e.columns,dataSource:e.tableData,options:e.options,fetch:e.fetchTableData}})],1),e._v(" "),e.archiveOperationPop?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",staticStyle:{height:"100%",overflow:"hidden"},attrs:{width:"40%",title:"归档","close-on-click-modal":!1,visible:e.archiveOperationPop,"append-to-body":""},on:{"update:visible":function(t){e.archiveOperationPop=t}}},[a("archiveOperation",{attrs:{checkedArchive:e.checkedArchive},on:{getArchiveOperation:e.getArchiveOperation}})],1):e._e()],1)};d._withStripped=!0;var f={render:d,staticRenderFns:[]},u=f;var b=!1;var g=a("VU/8")(m,u,!1,function(e){b||a("3NFz")},"data-v-9f4d2a04",null);g.options.__file="src/views/materialManage/materialArchive/MaterialArchive.vue";t.default=g.exports}});