webpackJsonp([25],{"3bfu":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.approvelHistoryList[data-v-cb46708e] {\n  width: 100%;\n}\n.approvelHistoryList .el-steps[data-v-cb46708e] {\n    margin-bottom: 20px;\n}\n",""])},"7JO6":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.applyRecordList[data-v-7b05d543] {\n  width: 100%;\n  font-size: 14px;\n}\n.applyRecordList .el-form[data-v-7b05d543] {\n    padding: 10px 10px 0 10px;\n}\n.applyRecordList .inputWidth120[data-v-7b05d543] {\n    width: 120px;\n}\n.applyRecordList .inputWidth240[data-v-7b05d543] {\n    width: 240px;\n}\n.applyRecordList .inputWidth210[data-v-7b05d543] {\n    width: 210px;\n}\n.applyRecordList .inputWidth150[data-v-7b05d543] {\n    width: 150px;\n}\n.applyRecordList .el-form-item--mini.el-form-item[data-v-7b05d543],\n  .applyRecordList .el-form-item--small.el-form-item[data-v-7b05d543] {\n    margin-bottom: 10px;\n}\n.applyRecordList .el-dialog .del-dialog-cnt[data-v-7b05d543] {\n    font-size: 16px;\n    text-align: center;\n}\n[data-v-7b05d543] .el-upload--text {\n  border: none !important;\n  width: 100px !important;\n}\n[data-v-7b05d543] .el-upload-list {\n  height: 160px;\n}\n[data-v-7b05d543] .el-dialog__body {\n  padding: 10px 0 10px !important;\n  min-height: 142px;\n}\n.approveImg[data-v-7b05d543] {\n  text-align: center;\n  padding: 20px 60px;\n}\n.approveShowDialog[data-v-7b05d543] .el-dialog {\n  border-radius: 0;\n}\n.approveShowDialog[data-v-7b05d543] .el-dialog /deep/ .el-dialog__header {\n  border-radius: 0;\n}\n",""])},"81aU":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.applyStatusSelect .el-select[data-v-cf7f0fc8] {\n  width: 100%;\n}\n",""])},"Q4V+":function(e,t,a){var i=a("nQuh");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("62827cf8",i,!1,{})},T3FD:function(e,t,a){"use strict";var i={name:"ApprovelHistoryList",components:{},props:["applyId"],data:function(){return{tableData:[],flowData:[]}},created:function(){},mounted:function(){this.getData()},computed:{},methods:{getData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".approvelHistoryList"},method:"get",url:this.API.approvaled,params:{id:this.applyId}}).then(function(t){var a=t.data;"1"==a.code?(e.tableData=a.data.flows,e.flowData=a.data.flow,e.flowData.push({gw:"",name:"完成"})):e.$message({type:"error",message:"查询审批历史列表失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})}}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"approvelHistoryList"},[a("el-steps",{attrs:{active:e.flowData.length,"align-center":"","process-status":"finish"}},e._l(e.flowData,function(e,t){return a("el-step",{key:t,attrs:{title:e.name,description:e.gw}})}),1),e._v(" "),a("el-table",{staticClass:"table",attrs:{data:e.tableData,height:"250px"}},[a("el-table-column",{attrs:{prop:"workflowstage",label:"流程阶段",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"approvestep",label:"具体审批步骤",width:"120","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作人类型",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gw",label:"操作人岗位",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"approvedate",label:"审核时间",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"approver",label:"审核人",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sStatue",label:"状态",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sResult",label:"结果",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"reason",label:"批注","min-width":"80","show-overflow-tooltip":""}})],1)],1)};o._withStripped=!0;var l={render:o,staticRenderFns:[]},r=l;var n=!1;var s=a("VU/8")(i,r,!1,function(e){n||a("fiN7")},"data-v-cb46708e",null);s.options.__file="src/views/archivalBorrowing/ApprovelHistoryList.vue";t.a=s.exports},YDKu:function(e,t,a){var i=a("7JO6");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("4aa3b940",i,!1,{})},YoTd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("cMGX"),o=a("T3FD"),l=a("KmTd"),r={name:"NormalReadingFile",props:["applyObj"],components:{ReadingArchivesList:a("FJaO").default},data:function(){return{readingArchivesVisible:!1,chioceObj:{},readForm:{},tableData:[]}},created:function(){this.applyObj?this.readForm=this.applyObj:this.readForm=this.$route.params,this.getFilesById()},mounted:function(){},computed:{},methods:{ReadingArchivesListBack:function(){this.readingArchivesVisible=!1,this.$refs.readingArchivesListChild.clearTimer(),this.getFilesById()},dialogBeforeClose:function(e){this.$refs.readingArchivesListChild.clearTimer(),this.readingArchivesVisible=!1},getFilesById:function(){var e=this;this.$axios({loading:{isShow:!0,target:".normalReadingFile"},method:"get",url:this.API.viewFiles,params:{id:this.readForm.id}}).then(function(t){var a=t.data;"1"==a.code?e.tableData=a.data:e.$message({type:"error",message:"查询档案信息失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},lookFile:function(e,t){this.chioceObj=t,this.readingArchivesVisible=!0}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container normalReadingFile"},[e.readForm.uAreaname?a("el-header",[e._v(e._s(e.readForm.uAreaname))]):e._e(),e._v(" "),a("el-main",{staticClass:"firstStep"},[a("el-form",{ref:"readForm",staticClass:"demo-ruleForm",attrs:{model:e.readForm,"label-width":"120px",size:"small"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"查阅目的"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.cyly,callback:function(t){e.$set(e.readForm,"cyly",t)},expression:"readForm.cyly"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"阅档时限(分钟)"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.timeout,callback:function(t){e.$set(e.readForm,"timeout",t)},expression:"readForm.timeout"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"查阅开始时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.readingstarttime,callback:function(t){e.$set(e.readForm,"readingstarttime",t)},expression:"readForm.readingstarttime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"查阅结束时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.readingendtime,callback:function(t){e.$set(e.readForm,"readingendtime",t)},expression:"readForm.readingendtime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"授权开始时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.impowerstarttime,callback:function(t){e.$set(e.readForm,"impowerstarttime",t)},expression:"readForm.impowerstarttime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"授权结束时间"}},[a("el-input",{attrs:{readonly:""},model:{value:e.readForm.impowerendtime,callback:function(t){e.$set(e.readForm,"impowerendtime",t)},expression:"readForm.impowerendtime"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"详细描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:2},readonly:""},model:{value:e.readForm.describe,callback:function(t){e.$set(e.readForm,"describe",t)},expression:"readForm.describe"}})],1)],1),e._v(" "),e.readForm.rstype==e.API.constObj.fileTypeList[1].id?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"授权说明"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:2},readonly:""},model:{value:e.readForm.powerDescribe,callback:function(t){e.$set(e.readForm,"powerDescribe",t)},expression:"readForm.powerDescribe"}})],1)],1):e._e()],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-table",{staticClass:"chioceFileTable",attrs:{data:e.tableData,"empty-text":"暂无数据，请先选择档案",border:"",height:"190px"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"a0101",label:"姓名",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"a0104",label:"姓别",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"a0107",label:"出生年月",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"a0117",label:"民族",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"a0111a",label:"籍贯"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isImpower",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[!0===t.row.isImpower?a("span",[e._v("已授权")]):!1===t.row.isImpower?a("span",[e._v("已拒绝")]):a("span",[e._v("处理中")])]}}])}),e._v(" "),e.readForm.rstype==e.API.constObj.fileTypeList[0].id?a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[!0===t.row.isImpower?a("el-button",{attrs:{type:"text"},on:{click:function(a){e.lookFile(t.$index,t.row)}}},[e._v("查阅")]):e._e()]}}])}):e._e()],1)],1)],1)],1),e._v(" "),e.readingArchivesVisible?a("el-dialog",{staticClass:"outDialog",attrs:{title:"阅览档案",visible:e.readingArchivesVisible,width:"95%","append-to-body":"","close-on-click-modal":!1,fullscreen:"","before-close":e.dialogBeforeClose},on:{"update:visible":function(t){e.readingArchivesVisible=t}}},[a("ReadingArchivesList",{ref:"readingArchivesListChild",attrs:{id:e.chioceObj.id},on:{ReadingArchivesListBack:e.ReadingArchivesListBack}})],1):e._e()],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]},p=s;var d=!1;var c=a("VU/8")(r,p,!1,function(e){d||a("Q4V+")},"data-v-0d520032",null);c.options.__file="src/views/archivalBorrowing/NormalReadingFile.vue";var m=c.exports,h=a("hPY1"),u=a("PODl"),g={name:"ApplyRecordList",props:["tableType","mainHeight"],components:{Pagination:i.a,ApplyStatusSelect:h.a,ReadReasonsSelect:u.a,ApplyFileDetail:l.a,ApprovelHistoryList:o.a,NormalReadingFile:m},data:function(){return{picId:"",imageFileUrl:"",formData:{id:""},isUpload:!1,dialogApproveVisible:!1,dialogApproveShowVisible:!1,approveUrl:"",tableHeight:"",authorizationType:this.tableType,tableData:[],newDate:this.commonFun.dateFormat(new Date,"yyyy-MM-dd HH:mm:ss"),pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},applyObj:{},multipleSelection:[],detailVisible:!1,approvelHistoryVisible:!1,readingVisible:!1,searchForm:{startDate:"",endDate:"",applyStatus:"",purpose:""}}},created:function(){this.getData()},mounted:function(){this.tableHeight=this.mainHeight-75-1*this.$refs.multipleTable.$el.offsetHeight-50,this.approveUrl=this.API.baseURL+this.API.approvalUpload},computed:{headers:function(){var e=window.vm.$store.state;if(e.user&&e.user.token){var t=encodeURIComponent(e.user.token),a=this.$axios.defaults.headers.selectmenuid,i=encodeURIComponent(t);return e.menuObj&&e.menuObj.id&&(a=e.menuObj.id),{token:i,selectmenuid:a}}return window.vm.commonFun.againLogin(!0),{}}},watch:{readingVisible:function(e,t){e||this.getData()},mainHeight:function(e,t){this.mainHeight=e,this.tableHeight=this.mainHeight-75-1*this.$refs.multipleTable.$el.offsetHeight-50}},methods:{handleCurrentChange:function(e){this.pageObj.pageIndex=e,this.getData()},PageTurning:function(e){this.pageObj.pageIndex=e.page_index,this.pageObj.pageSize=e.page_size,this.getData()},ReadReasonsCall:function(e){this.searchForm.purpose=e},ApplyStatusCall:function(e){this.searchForm.applyStatus=e},startDateChange:function(){var e=this.searchForm.startDate,t=this.searchForm.endDate;e&&e.length>0&&t&&t.length>0&&(new Date(e).getTime()>new Date(t).getTime()&&(this.$message({type:"error",message:"申请开始日期不能大于结束日期!"}),this.searchForm.startDate=""))},endDateChange:function(){var e=this.searchForm.startDate,t=this.searchForm.endDate;e&&e.length>0&&t&&t.length>0&&(new Date(e).getTime()>new Date(t).getTime()&&(this.$message({type:"error",message:"申请开始日期不能大于结束日期!"}),this.searchForm.endDate=""))},getData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".applyRecordList"},method:"get",url:this.API.applicationRecord,params:{sType:this.authorizationType,status:this.searchForm.applyStatus,startDate:this.searchForm.startDate,endDate:this.searchForm.endDate,purpose:this.searchForm.purpose,pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize}}).then(function(t){var a=t.data;if("1"==a.code){var i=a.data.list;if(e.tableData=i,"3"==e.authorizationType)for(var o=0;o<e.tableData.length;o++)e.tableData[o].daysRemaining=e.diffTime(e.newDate,e.tableData[o].impowerendtime);e.pageObj.total=a.data.total}else e.$message({type:"error",message:"查询失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},diffTime:function(e,t){var a=new Date(e.replace(/-/g,"/")),i=new Date(t.replace(/-/g,"/")).getTime()-a.getTime(),o=Math.floor(i/864e5),l=i%864e5,r=Math.floor(l/36e5),n=l%36e5,s=(Math.floor(n/6e4),n%6e4),p=(Math.round(s/1e3),"");return r>0&&(p=r+"小时"),o>0&&(p=o+"天"+p),p},dateFormat:function(e,t,a,i){return this.commonFun.dateFormat(a,"yyyy-MM-dd HH:mm")},handleDownload:function(e,t){var a=this;this.$confirm("确定下载？","操作提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){a.$axios({method:"post",url:a.API.approvalDownload,responseType:"arraybuffer",data:{id:t.id}}).then(function(e){this.commonFun.fileDownload(e.data,"审批表.xlsx")}.bind(a))}).catch(function(e){this.$message.warning("取消")}.bind(this))},handleUpload:function(e,t){this.formData.id=t.id,this.dialogApproveVisible=!0},handleApproveShowClose:function(){this.dialogApproveShowVisible=!1},handleApproveClose:function(){this.dialogApproveVisible=!1},beforeApproveUpload:function(e){var t="image/jpeg"===e.type,a="image/gif"===e.type,i="image/png"===e.type,o="image/bmp"===e.type,l=e.size/1024/1024<1;return t||a||i||o?l?void 0:(this.$message({type:"error",message:"上传图片大小不能超过 1MB!"}),l):(this.$message({type:"error",message:"上传图片必须是JPG/GIF/PNG/BMP格式!"}),t||o||a||i)},handleApproveImgSuccess:function(e,t){"1"==e.code?(this.picId=e.tid,this.isUpload=!0,this.dialogApproveVisible=!1,this.$message({type:"success",message:"上传成功!"})):"3"==e.code?this.$message({type:"error",message:"登录信息过期，请重新登录!"}):this.$message({type:"error",message:"上传图片失败，请重新上传！"})},handleView:function(e,t){var a=this;this.$axios({loading:{isShow:!0,targrt:".picUpload"},method:"post",url:this.API.approvalShow,data:{id:t.id}}).then(function(e){var t=e.data;"1"==t.code?""!=t.img.imagefile&&void 0!=t.img.imagefile?(a.dialogApproveShowVisible=!0,a.imageFileUrl=t.img.imagefile):a.$message({type:"warning",message:"图片未上传成功！"}):a.$message({type:"error",message:"获取失败，请刷新！"})}).catch(function(e){a.$message({type:"error",message:"请求异常，请检查网络！"})})},search:function(){this.pageObj.pageIndex=this.API.constObj.pageIndex,this.getData()},handleDetail:function(e,t){this.applyObj=t,this.detailVisible=!0},stopReading:function(e,t){var a=this;this.$confirm("点击终止后将无法继续查阅该人员档案，确定继续终止操作吗?","操作提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.overReading(t.id)}).catch(function(){})},handleApprovelHistory:function(e,t){this.applyObj=t,this.approvelHistoryVisible=!0},handleReading:function(e,t){this.applyObj=t,this.readingVisible=!0},overReading:function(e){var t=this;this.$axios({loading:{isShow:!0,target:".applyRecordList"},method:"get",url:this.API.termination,params:{id:e}}).then(function(e){"1"==e.data.code?(t.$message({type:"success",message:"终止操作成功！"}),t.getData()):t.$message({type:"error",message:"终止操作失败，请刷新重试！"})}).catch(function(e){t.$message({type:"error",message:"请求异常，请检查网络！"})})}}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"applyRecordList"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"0",model:e.searchForm}},[a("el-form-item",[a("el-date-picker",{staticStyle:{width:"145px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"申请开始日期"},on:{change:e.startDateChange},model:{value:e.searchForm.startDate,callback:function(t){e.$set(e.searchForm,"startDate",t)},expression:"searchForm.startDate"}})],1),e._v(" "),a("el-form-item",[a("el-date-picker",{staticStyle:{width:"145px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"申请结束日期"},on:{change:e.endDateChange},model:{value:e.searchForm.endDate,callback:function(t){e.$set(e.searchForm,"endDate",t)},expression:"searchForm.endDate"}})],1),e._v(" "),a("el-form-item",[a("ReadReasonsSelect",{staticClass:"inputWidth210",on:{ReadReasonsCall:e.ReadReasonsCall}})],1),e._v(" "),2==e.tableType?a("el-form-item",[a("ApplyStatusSelect",{staticClass:"inputWidth120",on:{ApplyStatusCall:e.ApplyStatusCall}})],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,height:e.tableHeight}},[a("el-table-column",{attrs:{fixed:"right",label:"审批单操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",icon:"el-icon-download",circle:"",title:"审批单下载"},on:{click:function(a){e.handleDownload(t.$index,t.row)}}}),e._v(" "),a("el-button",{attrs:{type:"success",icon:"el-icon-upload2",circle:"",title:"审批单上传"},on:{click:function(a){e.handleUpload(t.$index,t.row)}}}),e._v(" "),a("el-button",{attrs:{type:"success",icon:"el-icon-view",circle:"",title:"审批单预览"},on:{click:function(a){e.handleView(t.$index,t.row)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"申请记录操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",icon:"iconfont gd-chakan",circle:"",title:"详细"},on:{click:function(a){e.handleDetail(t.$index,t.row)}}}),e._v(" "),a("el-button",{attrs:{type:"success",icon:"iconfont gd-lishishuju",circle:"",title:"审批历史"},on:{click:function(a){e.handleApprovelHistory(t.$index,t.row)}}}),e._v(" "),t.row.rstype==e.API.constObj.fileTypeList[1].id&&2==e.authorizationType&&t.row.status==e.API.constObj.fileStatusList[2].id?a("el-button",{staticClass:"gray",attrs:{type:"success",icon:"el-icon-view",circle:"",title:"可查阅"}}):e._e(),e._v(" "),t.row.rstype==e.API.constObj.fileTypeList[0].id&&1==e.authorizationType&&t.row.status==e.API.constObj.fileStatusList[2].id?a("el-button",{attrs:{type:"success",icon:"el-icon-view",circle:"",title:"查阅"},on:{click:function(a){e.handleReading(t.$index,t.row)}}}):e._e(),e._v(" "),2==e.authorizationType&&t.row.status==e.API.constObj.fileStatusList[1].id||t.row.status==e.API.constObj.fileStatusList[3].id?a("el-button",{attrs:{type:"success",icon:"el-icon-close",circle:"",title:"终止"},on:{click:function(a){e.stopReading(t.$index,t.row)}}}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.pageObj.pageIndex*e.pageObj.pageSize+t.$index+1))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"u_createdate",label:"申请时间",sortable:"",width:"160",formatter:e.dateFormat}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"申请状态",width:"100",sortable:"","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"cyly",label:"查阅理由",width:"180","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"impowerstarttime",label:"授权开始日期",sortable:"",width:"160",formatter:e.dateFormat}}),e._v(" "),a("el-table-column",{attrs:{prop:"impowerendtime",label:"授权结束日期",sortable:"",width:"160",formatter:e.dateFormat}}),e._v(" "),3!=e.tableType?a("el-table-column",{attrs:{prop:"impowertime",label:"授权查看时间（分钟）",width:"160","show-overflow-tooltip":""}}):e._e(),e._v(" "),3==e.tableType?a("el-table-column",{attrs:{prop:"daysRemaining",label:"剩余天数",width:"160","show-overflow-tooltip":""}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"aData",label:"申请查看档案人员","min-width":"160","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"rsName",label:"档案类型","min-width":"80","show-overflow-tooltip":""}})],1),e._v(" "),a("Pagination",{attrs:{pageIndex:e.pageObj.pageIndex,total:e.pageObj.total,pageSize:e.pageObj.pageSize},on:{PageTurning:e.PageTurning}}),e._v(" "),e.detailVisible?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",attrs:{visible:e.detailVisible,title:"详细",width:"65%","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.detailVisible=t}}},[a("ApplyFileDetail",{attrs:{chioceObj:e.applyObj}})],1):e._e(),e._v(" "),e.approvelHistoryVisible?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",attrs:{visible:e.approvelHistoryVisible,title:"审批历史",width:"80%","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.approvelHistoryVisible=t}}},[a("ApprovelHistoryList",{attrs:{applyId:e.applyObj.id}})],1):e._e(),e._v(" "),e.readingVisible?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",attrs:{visible:e.readingVisible,title:"查阅",width:"75%","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.readingVisible=t}}},[a("NormalReadingFile",{attrs:{applyObj:e.applyObj}})],1):e._e(),e._v(" "),a("el-dialog",{attrs:{title:"审批单上传",visible:e.dialogApproveVisible,width:"30%","before-close":e.handleApproveClose,"append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogApproveVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-upload",{ref:"upload",staticClass:"approveUpload",attrs:{data:e.formData,name:"uploadFile",action:e.approveUrl,headers:e.headers,"show-file-list":!1,"on-success":e.handleApproveImgSuccess,"before-upload":e.beforeApproveUpload,accept:"image/jpg,image/jpeg,image/gif,image/png,image/bmp"}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",title:"审批单上传"},slot:"trigger"},[e._v("选取上传")])],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"approveShowDialog",attrs:{title:"审批单预览",visible:e.dialogApproveShowVisible,fullscreen:"","before-close":e.handleApproveShowClose,center:"","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogApproveShowVisible=t}}},[a("div",{staticClass:"approveImg"},[a("img",{attrs:{src:e.imageFileUrl,alt:""}})])])],1)};b._withStripped=!0;var f={render:b,staticRenderFns:[]},v=f;var y=!1;var w=a("VU/8")(g,v,!1,function(e){y||a("YDKu")},"data-v-7b05d543",null);w.options.__file="src/views/archivalBorrowing/ApplyRecordList.vue";var _={name:"ApplyRecord",components:{ApplyRecordList:w.exports},data:function(){return{mainHeight:"",activeName:"canApply",tabsData:[{label:"待查阅申请",name:"canApply",tableType:"1"},{label:"全部申请",name:"allApply",tableType:"2"},{label:"待归还档案",name:"returnedApply",tableType:"3"}]}},mounted:function(){this.mainHeight=window.innerHeight-this.$refs.elMain.$el.offsetTop+5},computed:{},methods:{handleClick:function(){}}},x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"applyRecord"},[a("div",{staticClass:"container"},[a("el-main",{ref:"elMain",style:{height:e.mainHeight}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabsData,function(t,i){return a("el-tab-pane",{key:i,attrs:{label:t.label,name:t.name}},[e.activeName==t.name?a("ApplyRecordList",{ref:"ApplyRecordList",refInFor:!0,attrs:{mainHeight:e.mainHeight,tableType:t.tableType}}):e._e()],1)}),1)],1)],1)])};x._withStripped=!0;var F={render:x,staticRenderFns:[]},D=F;var A=!1;var R=a("VU/8")(_,D,!1,function(e){A||a("psKN")},"data-v-e7edf3b6",null);R.options.__file="src/views/archivalBorrowing/applyRecord.vue";t.default=R.exports},apPt:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.applyRecord[data-v-e7edf3b6] {\n  min-width: 1126px;\n}\n.applyRecord .container[data-v-e7edf3b6] {\n    padding: 0 !important;\n    border-left: none;\n    border-right: none;\n}\n.applyRecord .container .el-main[data-v-e7edf3b6] {\n      padding: 0;\n}\n.applyRecord[data-v-e7edf3b6] .el-tabs__nav-wrap::after {\n    height: 1px;\n}\n",""])},cw61:function(e,t,a){var i=a("81aU");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("c48926a0",i,!1,{})},fiN7:function(e,t,a){var i=a("3bfu");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("2f07ea5a",i,!1,{})},hPY1:function(e,t,a){"use strict";a("g7ZD");var i={name:"ApplyStatusSelect",props:["chioceOptionId"],data:function(){return{dataList:[],chioceId:this.chioceOptionId}},computed:{},created:function(){this.getData()},methods:{changeChioceId:function(e){this.chioceId=e,this.$emit("ApplyStatusCall",e)},getData:function(){var e=this;this.$axios({loading:{isShow:!1},method:"get",url:this.API.getDataList,params:{id:this.API.constObj.applyStatusId}}).then(function(t){var a=t.data;"1"==a.code?(e.dataList=a.data,e.chioceOptionId&&e.chioceOptionId.length>0&&(e.chioceId=e.chioceOptionId,e.$emit("roleBenEditCall",e.chioceId))):e.$message({type:"error",message:"获取状态下拉框数据失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})}}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"applyStatusSelect"},[a("el-select",{attrs:{clearable:"",placeholder:"请选择状态"},on:{change:e.changeChioceId},model:{value:e.chioceId,callback:function(t){e.chioceId=t},expression:"chioceId"}},e._l(e.dataList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)};o._withStripped=!0;var l={render:o,staticRenderFns:[]},r=l;var n=!1;var s=a("VU/8")(i,r,!1,function(e){n||a("cw61")},"data-v-cf7f0fc8",null);s.options.__file="src/components/ApplyStatusSelect.vue";t.a=s.exports},nQuh:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.normalReadingFile[data-v-0d520032] {\n  padding-top: 0;\n}\n.normalReadingFile .el-header[data-v-0d520032], .normalReadingFile .el-footer[data-v-0d520032] {\n    background-color: #E9EEF3;\n    color: #333;\n    text-align: center;\n    height: 60px;\n    line-height: 60px;\n    font-size: 26px;\n}\n.normalReadingFile .el-row .el-col .chioceFileTable[data-v-0d520032] {\n    margin: 10px 0 10px 0;\n}\n",""])},psKN:function(e,t,a){var i=a("apPt");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("7fdd6336",i,!1,{})}});