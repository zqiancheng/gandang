webpackJsonp([40],{AtNt:function(e,t,a){var n=a("MLY2");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("728534a0",n,!1,{})},D04U:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.container[data-v-5d07a80a] {\n  border: none;\n}\n.container .footer[data-v-5d07a80a] {\n    text-align: center;\n    margin-top: 10px;\n}\n",""])},MLY2:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.el-scrollbar .el-scrollbar__view .el-select-dropdown__item[data-v-029b4103] {\n  height: auto;\n  padding: 0;\n}\n.el-select-dropdown__item.selected[data-v-029b4103] {\n  font-weight: normal;\n}\nul li > .el-tree .el-tree-node__content[data-v-029b4103] {\n  height: auto;\n}\n.el-tree-node__label[data-v-029b4103] {\n  font-weight: normal;\n}\n.el-tree > .is-current .el-tree-node__label[data-v-029b4103] {\n  color: #409EFF;\n  font-weight: 700;\n}\n.el-tree > .is-current .el-tree-node__children .el-tree-node__label[data-v-029b4103] {\n  color: #606266;\n  font-weight: normal;\n}\n",""])},QeIi:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.sortManagementArch[data-v-092a04c2] {\n  width: 100%;\n}\n.sortManagementArch .title[data-v-092a04c2] {\n    padding: 0 20px 20px;\n}\n",""])},WeOg:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.managementArchivesUnit[data-v-22e39d57] .el-table__expand-icon {\n  margin-right: 10px;\n  float: left;\n}\n.table[data-v-22e39d57] .el-table__body-wrapper {\n  overflow-y: auto;\n}\n[data-v-22e39d57] .el-dialog__body {\n  padding: 10px !important;\n}\n.managementArchivesUnit[data-v-22e39d57] {\n  width: 100%;\n  min-width: 1126px;\n  font-size: 14px;\n}\n.managementArchivesUnit .container[data-v-22e39d57] {\n    padding: 15px 0 0 0 !important;\n    border-left: none;\n    border-right: none;\n}\n.managementArchivesUnit .container .el-form[data-v-22e39d57] {\n      padding: 0 10px;\n}\n.managementArchivesUnit .container .el-form .el-form-item--mini.el-form-item[data-v-22e39d57],\n      .managementArchivesUnit .container .el-form .el-form-item--small.el-form-item[data-v-22e39d57] {\n        margin-bottom: 14px;\n}\n",""])},bszP:function(e,t,a){var n=a("D04U");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("31317eca",n,!1,{})},gbaf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("g7ZD");var n={name:"ManagementArchTreeSelect",props:["defaultOptions"],data:function(){return{selectedOptions:[],treeProps:{value:"id",label:"title",children:"children"},oldTreeList:[],treeList:[]}},computed:{},created:function(){this.getData()},methods:{handleChange:function(e){var t="";e&&e.length>0&&(t=e[e.length-1]);var a=this.findObjById(t);this.$emit("TreeSelectCall",a)},findObjById:function(e){for(var t={},a=0;a<this.oldTreeList.length;a++)if(e===this.oldTreeList[a].id){t=this.oldTreeList[a];break}return t},getData:function(){var e=this;this.$axios({loading:{isShow:!1},method:"get",url:this.API.findAllOrganization}).then(function(t){var a=t.data;if("1"===a.code){e.oldTreeList=a.data,e.treeList=e.commonFun.toTreeDataNormal(a.data,{childKey:"id",fatherKey:"parentid"});var n={};if(e.defaultOptions){var i=e.commonFun.findTreeNodeById(e.oldTreeList,e.defaultOptions,{childKey:"id",fatherKey:"parentid"});e.selectedOptions=e.commonFun.createArrIdAndReverse(i,"id"),n=e.findObjById(e.defaultOptions)}else""===e.defaultOptions?n={}:(e.selectedOptions.push(e.treeList[0].id),n=e.treeList[0]);e.$emit("TreeSelectCall",n)}else e.$message({type:"error",message:"获取字典项下拉框数据失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})}},mounted:function(){}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"managementArchTreeSelect"},[a("el-cascader",{attrs:{options:e.treeList,placeholder:"请选择上级菜单","change-on-select":!0,clearable:!0,"show-all-levels":!1,props:e.treeProps,"expand-trigger":"hover"},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]},s=r;var o=!1;var c=a("VU/8")(n,s,!1,function(e){o||a("AtNt")},"data-v-029b4103",null);c.options.__file="src/components/ManagementArchTreeSelect.vue";var l={name:"UpdateManagementArch",props:["currentRow","isEdit"],components:{ManagementArchTreeSelect:c.exports},data:function(){return{rules:{title:[{required:!0,message:"请输入名称",trigger:"change"}],code:[{required:!0,message:"请输入编码",trigger:"change"}],isenable:[{required:!0,message:"请选择是否启用",trigger:"change"}]},managementArchForm:{id:"",title:"",code:"",parentid:"",isenable:"",mapareaid:"",level:1},isenable:[{value:!0,label:"是"},{value:!1,label:"否"}]}},created:function(){this.initForm()},methods:{initForm:function(){this.isEdit?(this.managementArchForm.id=this.currentRow.id,this.managementArchForm.title=this.currentRow.title,this.managementArchForm.parentid=this.currentRow.parentid,this.managementArchForm.code=this.currentRow.code,this.managementArchForm.isenable=this.currentRow.isenable,this.managementArchForm.mapareaid=this.currentRow.mapareaid,this.managementArchForm.level=this.currentRow.level):null===this.currentRow||""===this.currentRow?(this.managementArchForm.level=1,this.managementArchForm.parentid=""):(this.managementArchForm.level=this.currentRow.level+1,this.managementArchForm.parentid=this.currentRow.id)},treeSelectCall:function(e){e&&e.id&&(this.managementArchForm.parentid=e.id,this.managementArchForm.level=e.level+1)},onsubmit:function(){var e=this;this.$refs.managementArchFormRef.validate(function(t){if(!t)return!1;e.$axios({loading:{isShow:!0,target:".container"},method:"post",url:e.API.addOrUpdateOrganization,data:e.managementArchForm}).then(function(t){var a=t.data;"1"===a.code?(e.$message({message:a.message,type:"success"}),e.$emit("addback",!1)):e.$message({type:"error",message:a.message})}).catch(function(e){})})},cancle:function(){this.$emit("addback",!0)}}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-form",{ref:"managementArchFormRef",attrs:{rules:e.rules,model:e.managementArchForm,"label-width":"150px"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"管档单位",prop:"title"}},[a("el-input",{attrs:{type:"text",maxlength:"15",placeholder:"请输入管档单位"},model:{value:e.managementArchForm.title,callback:function(t){e.$set(e.managementArchForm,"title",t)},expression:"managementArchForm.title"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"上级菜单",prop:"parentid"}},[a("management-arch-tree-select",{attrs:{defaultOptions:e.managementArchForm.parentid},on:{TreeSelectCall:e.treeSelectCall}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{type:"text",maxlength:"10",placeholder:"请输入编码"},model:{value:e.managementArchForm.code,callback:function(t){e.$set(e.managementArchForm,"code",t)},expression:"managementArchForm.code"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"是否启用",prop:"isenable"}},[a("el-select",{model:{value:e.managementArchForm.isenable,callback:function(t){e.$set(e.managementArchForm,"isenable",t)},expression:"managementArchForm.isenable"}},e._l(e.isenable,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1),e._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.onsubmit}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.cancle}},[e._v("取消")])],1)],1)],1)};d._withStripped=!0;var h={render:d,staticRenderFns:[]},m=h;var u=!1;var g=a("VU/8")(l,m,!1,function(e){u||a("bszP")},"data-v-5d07a80a",null);g.options.__file="src/views/infoCenterManagement/managementArchivesUnit/UpdateManagementArch.vue";var p=g.exports,f={name:"SortManagementArch",props:["pid"],data:function(){return{data:[],currentRow:"",index:""}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".table"},method:"post",url:this.API.orgSortOrganization,data:{pid:this.pid}}).then(function(t){var a=t.data;"1"===a.code?e.data=a.data:e.$message({type:"error",message:"获取管档单位列表失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},tableRowClassName:function(e){var t=e.row,a=e.rowIndex;t.index=a},currentChange:function(e){this.currentRow=e,this.index=e.index},upData:function(){if(""!==this.currentRow)if(this.index>0){var e=this.data[this.index-1];this.data.splice(this.index-1,1),this.data.splice(this.index,0,e),this.index=this.index-1}else this.$message("已经是第一条，不可上移");else this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},downData:function(){if(""!==this.currentRow)if(this.index+1===this.data.length)this.$message("已经是最后一条，不可下移");else{var e=this.data[this.index+1];this.data.splice(this.index+1,1),this.data.splice(this.index,0,e),this.index=this.index+1}else this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},saveData:function(){var e=this,t=[];this.data.forEach(function(e){t.push(e.id)}),this.$axios({loading:{isShow:!0,target:".table"},method:"post",url:this.API.sortSaveOrganization,data:{ids:t.join(",")}}).then(function(t){"1"===t.data.code?(e.$message({type:"success",message:"排序成功！"}),e.$emit("sortBack")):e.$message({type:"error",message:"排序失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},initSort:function(){var e=this;this.$confirm("您确认初始化排序吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.initSortSubmit()}).catch(function(){e.$message({type:"info",message:"已取消"})})},initSortSubmit:function(){var e=this;this.$axios({loading:{isShow:!0,target:".table"},method:"post",url:this.API.initSortOrganization,data:{pid:this.pid}}).then(function(t){"1"===t.data.code?(e.$message({type:"success",message:"初始化排序成功！"}),e.$emit("sortBack")):e.$message({type:"error",message:"初始化排序失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})}}},v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sortManagementArch"},[a("div",{staticClass:"title"},[a("el-button",{attrs:{type:"primary"},on:{click:e.initSort}},[e._v("初始化排序")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.upData}},[e._v("上移")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.downData}},[e._v("下移")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveData}},[e._v("保存")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,height:"400","highlight-current-row":"","row-class-name":e.tableRowClassName},on:{"current-change":e.currentChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"名称"}})],1)],1)};v._withStripped=!0;var b={render:v,staticRenderFns:[]},w=b;var A=!1;var y=a("VU/8")(f,w,!1,function(e){A||a("iUE9")},"data-v-092a04c2",null);y.options.__file="src/views/infoCenterManagement/managementArchivesUnit/SortManagementArch.vue";var _={name:"ManagementArchivesUnit",components:{UpdateManagementArch:p,SortManagementArch:y.exports},data:function(){return{bSetTableHeight:!1,tableHeight:window.innerHeight-70-74-5,data:[],currentRow:"",updateArchiveVisiable:!1,title:"",isEdit:"",sortArchiveVisiable:!1}},created:function(){this.getData()},mounted:function(){},watch:{bSetTableHeight:function(e,t){this.tableHeight=window.innerHeight-this.$refs.multipleTable.$el.offsetTop-70-10}},updated:function(){},methods:{expandAll:function(){for(var e=document.getElementsByClassName("el-table__expand-icon"),t=0;t<e.length;t++)e[t].click()},getData:function(){var e=this;this.$axios({loading:{isShow:!0,target:".table"},method:"get",url:this.API.findAllOrganization}).then(function(t){var a=t.data;e.bSetTableHeight=!0,"1"===a.code?e.data=e.commonFun.toTreeDataNormal(a.data,{childKey:"id",fatherKey:"parentid"}):e.$message({type:"error",message:"获取管档单位列表失败，请刷新重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},currentChange:function(e){this.currentRow=e},addBack:function(e){this.updateArchiveVisiable=!1,e||(this.getData(),this.$refs.multipleTable.setCurrentRow(""))},addManagementArch:function(){this.title="添加管档单位",this.isEdit=!1,this.updateArchiveVisiable=!0},editManagementArch:function(){null!==this.currentRow&&""!==this.currentRow?(this.title="编辑管档单位",this.isEdit=!0,this.updateArchiveVisiable=!0):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},changeStatusManagementArch:function(e){var t=this;null!==this.currentRow&&""!==this.currentRow?this.$axios({loading:{isShow:!0,target:".manageContainer"},method:"post",url:this.API.changeOrgStatusOrganization,data:{id:this.currentRow.id,status:e}}).then(function(e){var a=e.data;"1"===a.code?(t.$message({message:a.message,type:"success"}),t.getData()):t.$message({type:"error",message:a.message})}).catch(function(e){}):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},delManagementArch:function(){var e=this;null!==this.currentRow&&""!==this.currentRow?this.currentRow.uIssystem?this.$confirm("系统内置不能删除！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0}):this.currentRow.isenable?this.$confirm("启用状态不能删除！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0}):void 0===this.currentRow.children?this.$confirm("您确认删除这条数据吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.delDataConfirm()}).catch(function(){e.$message({type:"info",message:"已取消"})}):this.$confirm("存在子节点不能删除！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0}):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})},delDataConfirm:function(){var e=this;this.$axios({loading:{isShow:!0,target:".manageContainer"},method:"post",url:this.API.delOrganization,data:{id:this.currentRow.id}}).then(function(t){var a=t.data;"1"===a.code?(e.$message({message:a.message,type:"success"}),e.getData()):e.$message({type:"error",message:a.message})}).catch(function(e){})},sortManagementArch:function(){if(null===this.currentRow||""===this.currentRow){if(this.data.length<2)return void this.$message("少于两条数据，不需要排序")}else if(void 0===this.currentRow.children||this.currentRow.children.length<2)return void this.$message("少于两条数据，不需要排序");this.sortArchiveVisiable=!0},sortBack:function(e){this.sortArchiveVisiable=!1,e||this.getData()},initPrivilegeData:function(){var e=this;null!==this.currentRow&&""!==this.currentRow?this.$axios({loading:{isShow:!0,target:".manageContainer"},method:"post",url:this.API.initPrivilegeData,data:{id:this.currentRow.id}}).then(function(t){var a=t.data;"1"===a.code?(e.$message({message:a.message,type:"success"}),e.getData()):e.$message({type:"error",message:a.message})}).catch(function(e){}):this.$confirm("请选择一条数据！","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning",center:!0})}}},x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"managementArchivesUnit"},[a("div",{staticClass:"container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addManagementArch}},[e._v("添加")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editManagementArch}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.delManagementArch}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.sortManagementArch}},[e._v("排序")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.changeStatusManagementArch(!0)}}},[e._v("启用")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.changeStatusManagementArch(!1)}}},[e._v("禁用")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.initPrivilegeData}},[e._v("权限数据初始化")])],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,height:e.tableHeight,"row-key":"id","default-expand-all":"","highlight-current-row":""},on:{"current-change":e.currentChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"levelvalue",label:"级别"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isenable?a("el-tag",{attrs:{type:"success"}},[e._v("是")]):a("el-tag",{attrs:{type:"danger"}},[e._v("否")])]}}])})],1),e._v(" "),e.updateArchiveVisiable?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:e.title,width:"60%",visible:e.updateArchiveVisiable,"close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":""},on:{"update:visible":function(t){e.updateArchiveVisiable=t}}},[a("update-management-arch",{attrs:{isEdit:e.isEdit,currentRow:e.currentRow},on:{addback:e.addBack}})],1):e._e(),e._v(" "),e.sortArchiveVisiable?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"排序",width:"60%",visible:e.sortArchiveVisiable,"close-on-click-modal":!1,"modal-append-to-body":!1,"append-to-body":""},on:{"update:visible":function(t){e.sortArchiveVisiable=t}}},[a("sort-management-arch",{attrs:{pid:e.currentRow.id},on:{sortBack:e.sortBack}})],1):e._e()],1)])};x._withStripped=!0;var $={render:x,staticRenderFns:[]},R=$;var F=!1;var C=a("VU/8")(_,R,!1,function(e){F||a("sPvZ")},"data-v-22e39d57",null);C.options.__file="src/views/infoCenterManagement/ManagementArchivesUnit.vue";t.default=C.exports},iUE9:function(e,t,a){var n=a("QeIi");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("ac342eb0",n,!1,{})},sPvZ:function(e,t,a){var n=a("WeOg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("0caba018",n,!1,{})}});