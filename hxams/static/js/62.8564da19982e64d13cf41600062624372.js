webpackJsonp([62],{Fepv:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.noticeMaintain-container {\n  border: none;\n}\n.noticeMaintain-container .my-header {\n    padding-top: 15px;\n    font-size: 16px;\n    font-weight: bold;\n}\n.noticeMaintain-container .el-main {\n    padding: 0 !important;\n    background-color: #fff;\n}\n.noticeMaintain-container .el-main .noticeMaintain-title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 10px;\n}\n.noticeMaintain-container .el-main .noticeMaintain-title .noticeMaintain-title-l {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.noticeMaintain-container .el-main .noticeMaintain-title .noticeMaintain-title-r {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.noticeMaintain-container .el-main .noticeMaintain-title .noticeMaintain-title-r .el-input {\n          width: 180px;\n          margin-right: 10px;\n}\n.noticeMaintain-container .el-main .noticeMaintain-content .el-table__body tr.current-row > td {\n      background: #dcebfa !important;\n      color: #606266;\n}\n.noticeMaintain-container .el-main .noticeMaintain-content .material_page {\n      margin-top: 10px;\n      text-align: right;\n}\n",""])},MSX2:function(t,e,n){var i=n("Fepv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("688231b2",i,!1,{})},jzoE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("cMGX"),a={name:"noticeMainAddContainer",components:{},props:["selectColumn"],data:function(){return{noticeMainTable:{id:"",title:"",ispublic:"",comments:"",content:""},rules:{title:[{required:!0,message:"请输入名称",trigger:"change"},{min:1,max:60,message:"长度必须在1到60位字符之间",trigger:"blur"}],comments:[{required:!0,message:"请输入简要说明",trigger:"change"},{min:1,max:15,message:"长度必须在1到15位字符之间",trigger:"blur"}],content:[{min:0,max:7e8,message:"长度必须在0到700000000位字符之间",trigger:"blur"}]},options:[{value:!0,label:"是"},{value:!1,label:"否"}],editorOption:{placeholder:"请在这里输入...",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["image","link"]]}},isEdit:!1}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},watch:{},methods:{save:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.addNoticeMainToNet()})},addNoticeMainToNet:function(){var t=this;this.$axios({method:"post",url:this.API.saveOrUpdateSysMessage,data:{id:this.noticeMainTable.id,title:this.noticeMainTable.title,ispublic:this.noticeMainTable.ispublic,comments:this.noticeMainTable.comments,content:this.noticeMainTable.content}}).then(function(e){"1"==e.data.code?(t.$message({message:"操作成功！",type:"success"}),t.$emit("noticeMainCall",!0)):t.$message({type:"error",message:"操作失败，请刷新重试！"})}).catch(function(e){t.$message({type:"error",message:"请求异常，请检查网络！"})})},cancel:function(){this.resetForm("noticeMainTable"),this.$emit("noticeMainCall",!1)},resetForm:function(t){this.$refs[t].resetFields()},onEditorChange:function(){}},created:function(){""!=this.selectColumn&&(this.noticeMainTable.id=this.selectColumn.id,this.noticeMainTable.title=this.selectColumn.title,this.noticeMainTable.comments=this.selectColumn.comments,this.noticeMainTable.content=this.selectColumn.content,this.noticeMainTable.ispublic=this.selectColumn.ispublic,this.isEdit=!0)},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notice-mainAdd-container"},[n("el-form",{ref:"noticeMainTable",staticClass:"demo-ruleForm",attrs:{model:t.noticeMainTable,rules:t.rules,"label-width":"100px",size:"small"}},[n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"title",label:"标题："}},[n("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.noticeMainTable.title,callback:function(e){t.$set(t.noticeMainTable,"title",e)},expression:"noticeMainTable.title"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"ispublic",label:"是否发布："}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.noticeMainTable.ispublic,callback:function(e){t.$set(t.noticeMainTable,"ispublic",e)},expression:"noticeMainTable.ispublic"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"comments",label:"简要说明："}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入简要说明"},model:{value:t.noticeMainTable.comments,callback:function(e){t.$set(t.noticeMainTable,"comments",e)},expression:"noticeMainTable.comments"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"content",label:"内容："}},[n("div",{staticClass:"editorContent",staticStyle:{"min-height":"450px"}},[n("quill-editor",{ref:"myQuillEditor",staticStyle:{height:"400px"},attrs:{options:t.editorOption},on:{change:function(e){t.onEditorChange(e)}},model:{value:t.noticeMainTable.content,callback:function(e){t.$set(t.noticeMainTable,"content",e)},expression:"noticeMainTable.content"}})],1)])],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.save("noticeMainTable")}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.cancel}},[t._v("取 消")])],1)],1)};o._withStripped=!0;var l={render:o,staticRenderFns:[]},s=l;var c=!1;var r=n("VU/8")(a,s,!1,function(t){c||n("xVVx")},"data-v-6c4e52d8",null);r.options.__file="src/views/systemMaintenance/benchAndKnowledgeBase/NoticeMainAdd.vue";var d=r.exports,u={name:"noticeMainList",components:{pagination:i.a,noticeMainAdd:d},props:[""],data:function(){return{pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},tableHeight:0,noticeMainAddVisble:!1,dialogTitle:"添加",selectColumn:"",noticeMainList:[],title:""}},computed:{},watch:{noticeMainList:{handler:function(t){this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-70-52-104}}},methods:{handleCurrentChange:function(t){this.pageObj.pageIndex=t,this.getData()},PageTurning:function(t){this.pageObj.pageIndex=t.page_index,this.pageObj.pageSize=t.page_size,this.getData()},clickRow:function(t){this.selectColumn=t},getData:function(){var t=this;this.$axios({loading:{isShow:!0,target:".noticeMaintain-container"},method:"post",url:this.API.querySysSysMessage,data:{pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize,title:this.title}}).then(function(e){var n=e.data;"1"==n.code?(t.noticeMainList=n.data.list,t.pageObj.total=n.data.total):t.$message({type:"error",message:"获取数据失败，请刷新重试！"})}).catch(function(t){})},noticeAdd:function(){this.selectColumn="",this.dialogTitle="添加",this.noticeMainAddVisble=!0},noticeEdit:function(){null!=this.selectColumn&&""!=this.selectColumn?(this.dialogTitle="编辑",this.noticeMainAddVisble=!0):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},noticeDelete:function(){var t=this;""!=this.selectColumn?this.$confirm("确定删除选中记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){t.deleteFromNet()}).catch(function(){t.$message({type:"info",message:"已取消"})}):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},deleteFromNet:function(){var t=this;this.$axios({loading:{isShow:!1},method:"get",url:this.API.deleteSysMessage,params:{id:this.selectColumn.id}}).then(function(e){"1"==e.data.code?(t.selectColumn="",t.$message({type:"success",message:"删除成功！"}),t.getData()):t.$message({type:"error",message:"操作失败，请重新尝试！"})}).catch(function(e){t.$message({type:"error",message:"请求异常，请检查网络！"})})},search:function(){this.pageObj.pageIndex=this.API.constObj.pageIndex,this.getData()},noticeMainCall:function(t){this.noticeMainAddVisble=!1,t&&this.getData()}},created:function(){this.getData()},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"noticeMaintain-container"},[n("el-main",[n("div",{staticClass:"noticeMaintain-title"},[n("div",{staticClass:"noticeMaintain-title-l"},[n("el-button",{attrs:{type:"primary"},on:{click:t.noticeAdd}},[t._v("添加")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.noticeEdit}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:t.noticeDelete}},[t._v("删除")])],1),t._v(" "),n("div",{staticClass:"noticeMaintain-title-r"},[n("el-input",{attrs:{placeholder:"标题",clearable:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)]),t._v(" "),n("div",{staticClass:"noticeMaintain-content"},[n("el-table",{ref:"table",staticClass:"table",staticStyle:{width:"100%",height:"100%"},attrs:{height:t.tableHeight,"highlight-current-row":"",data:t.noticeMainList},on:{"row-click":t.clickRow}},[n("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.pageObj.pageIndex*t.pageObj.pageSize+e.$index+1))]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),n("el-table-column",{attrs:{prop:"comments",label:"简要说明"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ispublic",label:"是否发布"},scopedSlots:t._u([{key:"default",fn:function(e){return[!0===e.row.ispublic?n("span",[t._v("是")]):!1===e.row.ispublic?n("span",[t._v("否")]):n("span")]}}])})],1),t._v(" "),n("pagination",{attrs:{pageIndex:t.pageObj.pageIndex,total:t.pageObj.total,pageSize:t.pageObj.pageSize},on:{PageTurning:t.PageTurning}}),t._v(" "),t.noticeMainAddVisble?n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:t.dialogTitle,visible:t.noticeMainAddVisble,"close-on-click-modal":!1,"append-to-body":""},on:{"update:visible":function(e){t.noticeMainAddVisble=e}}},[n("noticeMainAdd",{attrs:{selectColumn:t.selectColumn},on:{noticeMainCall:t.noticeMainCall}})],1):t._e()],1)])],1)};p._withStripped=!0;var m={render:p,staticRenderFns:[]},g=m;var b=!1;var f=n("VU/8")(u,g,!1,function(t){b||n("MSX2")},null,null);f.options.__file="src/views/systemMaintenance/benchAndKnowledgeBase/NoticeMaintain.vue";e.default=f.exports},sqsW:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.editorContent[data-v-6c4e52d8] em {\n  font-style: italic;\n}\n.notice-mainAdd-container[data-v-6c4e52d8] {\n  padding-right: 10px;\n}\n.notice-mainAdd-container .dialog-footer[data-v-6c4e52d8] {\n    text-align: center;\n}\n.notice-mainAdd-container .dialog-footer .el-button[data-v-6c4e52d8] {\n      margin-bottom: 10px;\n}\n",""])},xVVx:function(t,e,n){var i=n("sqsW");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("93c4651c",i,!1,{})}});