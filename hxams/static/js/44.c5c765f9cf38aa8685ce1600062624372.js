webpackJsonp([44],{"+iUf":function(e,t,i){var a=i("wM4n");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("2a144629",a,!1,{})},"5rXD":function(e,t,i){var a=i("gQ9m");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("5dec1bda",a,!1,{})},"9tsO":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("icmf"),l=i("41Z1"),o=i("Wne/"),n={name:"ArchivesCollection",components:{hxTables:a.a,areaTreeSelect:l.a,addMaterialCollection:o.a},data:function(){return{addarchiver_collection_popUp:!1,defaultOptions:"",title:"请选择发往单位",tableHeight:0,isArchivesCollection:!0,columns:[{index:!0,prop:"tableindex",label:"序号",width:"6%",align:"center"},{prop:"receiveor",label:"发往单位",showOverflowTooltip:!0,width:"18%"},{prop:"title",label:"标题",showOverflowTooltip:!0,width:"27%"},{prop:"content",label:"催收内容",showOverflowTooltip:!0,width:"42%"},{prop:"statusValue",label:"状态",width:"6%"}],tableData:[],pageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:this.API.constObj.pageSize},options:{mutiSelect:!1,index:!1,loading:!1,initTable:!0,border:!1,maxHeight:0},e01z209b:"",type:"1",checkedArchivesCollection:""}},watch:{tableData:{handler:function(e){this.tableHeight=window.innerHeight-this.$refs.table.$el.offsetTop-50-52-83,this.options.maxHeight=this.tableHeight}}},methods:{delArchivesCollection:function(){var e=this;""!==this.checkedArchivesCollection?this.$confirm("您确认删除这条数据吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.delFromNet()}):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},delFromNet:function(){var e=this;this.$axios({method:"get",url:this.API.deletefileOnlinePretrial,params:{id:this.checkedArchivesCollection.id}}).then(function(t){"1"==t.data.code?(e.$message.success("删除数据成功！"),e.fetchTableData(),e.checkedArchivesCollection=""):e.$message.error("删除数据失败，请刷新重试！")}).catch(function(e){})},fetchTableData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".archives-collection-container"},method:"post",url:this.API.queryAllFilePretrial,data:{e01z209b:this.e01z209b,type:this.type,pageIndex:this.pageObj.pageIndex,pageSize:this.pageObj.pageSize}}).then(function(t){var i=t.data;"1"==i.code?(e.tableData=i.data.list,e.pageObj.total=i.data.total):e.$message({type:"error",message:"获取数据失败，请刷新重试！"})}).catch(function(e){})},searchArchivesCollection:function(){this.pageObj.pageIndex=this.API.constObj.pageIndex,this.fetchTableData(),this.checkedArchivesCollection=""},getSelect:function(e){e&&(this.e01z209b=e.code)},getAddBackmc:function(e){"success"===e&&this.fetchTableData(),this.addarchiver_collection_popUp=!1,this.checkedArchivesCollection=""},handleRowClick:function(e,t,i){this.checkedArchivesCollection=e}}},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"archives-collection-container"},[i("el-header",{staticClass:"my-header",staticStyle:{height:"45px"}},[i("h3",[e._v("档案催收")])]),e._v(" "),i("el-main",[i("div",{staticClass:"archives-collection-title"},[i("div",{staticClass:"archives-collection-title-lf"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addarchiver_collection_popUp=!0}}},[e._v("添加")])],1),e._v(" "),i("div",{staticClass:"archives-collection-title-rg"},[i("areaTreeSelect",{attrs:{defaultOptions:e.defaultOptions,title:e.title},on:{areaTreeSelectCall:e.getSelect}}),e._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchArchivesCollection}},[e._v("搜索")])],1)]),e._v(" "),i("hxTables",{ref:"table",attrs:{pageObj:e.pageObj,columns:e.columns,dataSource:e.tableData,options:e.options,fetch:e.fetchTableData},on:{"row-click":e.handleRowClick}}),e._v(" "),e.addarchiver_collection_popUp?i("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"outDialog",attrs:{title:"添加","append-to-body":"","close-on-click-modal":!1,width:"40%","max-height":"60%",visible:e.addarchiver_collection_popUp},on:{"update:visible":function(t){e.addarchiver_collection_popUp=t}}},[i("addMaterialCollection",{attrs:{isArchivesCollection:e.isArchivesCollection},on:{backAddMC:e.getAddBackmc}})],1):e._e()],1)],1)};r._withStripped=!0;var c={render:r,staticRenderFns:[]},s=c;var d=!1;var p=i("VU/8")(n,s,!1,function(e){d||i("+iUf")},null,null);p.options.__file="src/views/archivesDailyManagement/filePrequalificationOnline/archivesCollection/ArchivesCollection.vue";t.default=p.exports},MDG2:function(e,t,i){var a=i("fQKW");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("04f88942",a,!1,{})},"Wne/":function(e,t,i){"use strict";var a=i("41Z1"),l=(i("g7ZD"),{name:"userGroupTreeSelect2",props:["defaultOptions"],data:function(){return{selectedOptions:[],treeProps:{value:"id",label:"name",children:"children"},oldTreeList:[],treeList:[]}},created:function(){this.getData()},mounted:function(){},methods:{handleChange:function(e){var t="";e&&e.length>0&&(t=e[e.length-1]);var i=this.findObjById(t);this.$emit("UserGroupTreeSelectCall",i)},findObjById:function(e){for(var t={},i=0;i<this.oldTreeList.length;i++)if(e==this.oldTreeList[i].id){t=this.oldTreeList[i];break}return t},getData:function(){var e=this,t=this;this.$axios({loading:{isShow:!1},method:"get",url:this.API.findUserOrganizationTree,params:{type:1}}).then(function(i){var a=i.data;if("1"==a.code){t.oldTreeList=a.data,t.treeList=t.commonFun.toTreeData(a.data);var l={};if(t.defaultOptions){var o=t.commonFun.findTreeNodeById(t.oldTreeList,t.defaultOptions,{childKey:"id",fatherKey:"pId"});t.selectedOptions=t.commonFun.createArrIdAndReverse(o,"id"),l=e.findObjById(t.defaultOptions)}else""==t.defaultOptions?l={}:(t.selectedOptions.push(t.treeList[0].id),l=t.treeList[0]);e.$emit("UserGroupTreeSelectCall",l)}else t.$message({type:"error",message:"获取用户组树形下拉框数据失败，请刷新重试！"})}).catch(function(e){t.$message({type:"error",message:"请求异常，请检查网络！"})})}}}),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"userGroupTreeSelect"},[i("el-cascader",{attrs:{placeholder:"请选择","expand-trigger":"hover",options:e.treeList,"change-on-select":!0,props:e.treeProps,clearable:!0,"show-all-levels":!1,clearable:""},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1)};o._withStripped=!0;var n={render:o,staticRenderFns:[]},r=n;var c=!1;var s=i("VU/8")(l,r,!1,function(e){c||i("MDG2")},"data-v-33786154",null);s.options.__file="src/components/UserGroupTreeSelect2.vue";var d=s.exports,p={name:"AddMaterialCollection",components:{areaTreeSelect:a.a,userGroupTreeSelect:d},props:["isArchivesCollection"],data:function(){return{defaultOptions:"",materialCollectionForm:{receiveareacode:"",title:"",content:"",departmentId:""},rules:{receiveareacode:[{required:!0,message:"请选择接收单位",trigger:"blur"}],departmentId:[{required:!0,message:"请选择接收部门",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:0,max:66,message:"长度必须在0到200位字符之间",trigger:"blur"}],content:[{required:!0,message:"请输入催收内容",trigger:"blur"},{min:0,max:333,message:"长度必须在0到1000位字符之间",trigger:"blur"}]}}},created:function(){void 0===this.isArchivesCollection&&(this.isArchivesCollection=!1)},methods:{UserGroupTreeSelectCall:function(e){this.materialCollectionForm.departmentId=e.id},getSelect:function(e){e&&(this.materialCollectionForm.receiveareacode=e.code),this.receiveareacode=this.materialCollectionForm.receiveareacode,this.uAreacode=this.$store.state.user.uAreacode},save:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;if(1==t.isArchivesCollection){var i=t.$store.state.user.uAreacode;if(t.materialCollectionForm.receiveareacode===i)return void t.$confirm("不能对本单位进行催收，请选择正确单位！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})}t.saveForNet()})},saveForNet:function(){var e=this,t="";t=this.isArchivesCollection?this.API.addfileOnlinePretrial:this.API.addMaterialCollection,this.$axios({method:"post",url:t,data:{receiveareacode:this.materialCollectionForm.receiveareacode,title:this.materialCollectionForm.title,content:this.materialCollectionForm.content,departmentId:this.materialCollectionForm.departmentId}}).then(function(t){"1"==t.data.code?(e.$message.success("添加数据成功！"),e.resetForm(),e.isArchivesCollection?e.$emit("backAddMC","success"):e.$emit("backAdd","success")):e.$message.error("添加数据失败，请刷新重试！")}).catch(function(e){})},cancle:function(){this.resetForm(),this.isArchivesCollection?this.$emit("backAddMC",""):this.$emit("backAdd","")},resetForm:function(){this.$refs.addMaterialCollection.resetFields()}}},h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add-material-collection-container"},[i("el-form",{ref:"addMaterialCollection",attrs:{rules:e.rules,model:e.materialCollectionForm,"label-width":"110px"}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"接收单位",prop:"receiveareacode"}},[i("areaTreeSelect",{staticClass:"areaTree",staticStyle:{width:"100%"},attrs:{defaultOptions:e.defaultOptions,title:e.title,readonly:""},on:{areaTreeSelectCall:e.getSelect},model:{value:e.materialCollectionForm.receiveareacode,callback:function(t){e.$set(e.materialCollectionForm,"receiveareacode",t)},expression:"materialCollectionForm.receiveareacode"}})],1)],1),e._v(" "),e.receiveareacode===e.uAreacode&&0==this.isArchivesCollection?i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"接收部门",prop:"departmentId"}},[i("userGroupTreeSelect",{staticClass:"areaTree",staticStyle:{width:"100%"},attrs:{defaultOptions:e.defaultOptions},on:{"v-model":e.materialCollectionForm.departmentId,UserGroupTreeSelectCall:e.UserGroupTreeSelectCall}})],1)],1):i("el-col",{attrs:{span:24}}),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:e.materialCollectionForm.title,callback:function(t){e.$set(e.materialCollectionForm,"title",t)},expression:"materialCollectionForm.title"}})],1)],1)],1),e._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"催收内容",prop:"content"}},[i("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:e.materialCollectionForm.content,callback:function(t){e.$set(e.materialCollectionForm,"content",t)},expression:"materialCollectionForm.content"}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.save("addMaterialCollection")}}},[e._v("发送")]),e._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:e.cancle}},[e._v("取消")])],1)],1)};h._withStripped=!0;var u={render:h,staticRenderFns:[]},m=u;var f=!1;var v=i("VU/8")(p,m,!1,function(e){f||i("5rXD")},null,null);v.options.__file="src/views/materialManage/materialCollection/AddMaterialCollection.vue";t.a=v.exports},fQKW:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.el-scrollbar .el-scrollbar__view .el-select-dropdown__item[data-v-33786154] {\n  height: auto;\n  padding: 0;\n}\n.el-select-dropdown__item.selected[data-v-33786154] {\n  font-weight: normal;\n}\nul li > .el-tree .el-tree-node__content[data-v-33786154] {\n  height: auto;\n}\n.el-tree-node__label[data-v-33786154] {\n  font-weight: normal;\n}\n.el-tree > .is-current .el-tree-node__label[data-v-33786154] {\n  color: #409EFF;\n  font-weight: 700;\n}\n.el-tree > .is-current .el-tree-node__children .el-tree-node__label[data-v-33786154] {\n  color: #606266;\n  font-weight: normal;\n}\n",""])},gQ9m:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.add-material-collection-container .footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 10px;\n}\n.add-material-collection-container /deep/ .el-cascader {\n  display: inline !important;\n}\n.add-material-collection-container /deep/ .el-cascader__label {\n  position: absolute;\n  left: 0;\n  top: -4px;\n  height: 40px;\n  padding: 0 25px 0 15px;\n  color: #606266;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  text-align: left;\n  font-size: inherit;\n}\n",""])},wM4n:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.outDialog /deep/ .el-dialog .el-dialog__body {\n  padding: 10px 0 0 0 !important;\n}\n.archives-collection-container .my-header {\n  padding-top: 15px;\n  display: none;\n}\n.archives-collection-container .el-main {\n  background-color: #fff;\n  padding: 0 !important;\n}\n.archives-collection-container .el-main .archives-collection-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n}\n.archives-collection-container .el-main .archives-collection-title .archives-collection-title-lf {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n.archives-collection-container .el-main .archives-collection-title .archives-collection-title-rg {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n",""])}});