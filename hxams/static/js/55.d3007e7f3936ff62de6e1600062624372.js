webpackJsonp([55],{"A//S":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n[data-v-6cc96b79] .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {\n  background-color: #369FDD;\n  border-color: #369FDD;\n}\n[data-v-6cc96b79] .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {\n  background-color: #369FDD;\n  border-color: #369FDD;\n}\n.left-page[data-v-6cc96b79] .el-pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.queryLogs[data-v-6cc96b79] {\n  height: 100%;\n  background: #fff;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px;\n}\n.head[data-v-6cc96b79] {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ccc;\n}\n.head h4[data-v-6cc96b79] {\n    padding-left: 15px;\n    font-size: 16px;\n}\n.leftAside[data-v-6cc96b79] {\n  width: 420px;\n  height: 100%;\n  /*border-right: 1px solid #ccc;*/\n  position: relative;\n}\n.leftAside .leftHead[data-v-6cc96b79] {\n    height: 40px;\n    line-height: 40px;\n}\n.leftAside .dyna-l .el-pagination__total[data-v-6cc96b79] {\n    display: none !important;\n}\n.leftAside .authorization-cover[data-v-6cc96b79] {\n    background: #fff;\n    position: absolute;\n    width: 100.5%;\n    height: 49px;\n    border: 2px solid #1fa9f2;\n    border-right: none;\n    z-index: 100;\n    filter: alpha(Opacity=80);\n    opacity: 1;\n    top: 90px;\n    left: 15;\n}\n.leftAside .authorization-cover .checkspan[data-v-6cc96b79] {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: center;\n}\n.contentRight[data-v-6cc96b79] {\n  width: calc(100% - 420px);\n  margin-top: 40px;\n  border: 2px solid #1fa9f2;\n  overflow: auto;\n}\n.contentRight .righthead[data-v-6cc96b79] {\n    width: 100%;\n    padding-top: 10px;\n    height: 40px;\n}\n.contentRight .righthead .inputContent[data-v-6cc96b79] {\n      width: 22%;\n      margin-right: 10px;\n}\n.inputContent1[data-v-6cc96b79] {\n  width: 73%;\n}\n",""])},LWH0:function(e,t,a){"use strict";(function(e){var n=a("Dd8w"),i=a.n(n),o=a("cMGX"),s=a("sWo4");t.a={name:"SampleManagement",components:{Pagination:o.a,AddSample:s.a},data:function(){return{isTotal:!0,data:[],treeList:[],chioceValue:[],defaultProps:{key:"CatelogID",label:"Caption"},dynaLeftPageObj:{pageIndex:this.API.constObj.pageIndex,total:0,pageSize:20},addOrEditShow:!1,tableHeight:"",tableHeight2:"",leftSearchTable:[],currentRow:{},rightChioceRow:{},currentRowEdit:{},tableIndex:1,isCoverDiv:!0}},created:function(){this.getLeftSearchList()},mounted:function(){this.tableHeight=window.innerHeight-this.$refs.table.offsetTop-80+"px",this.tableHeight2=window.innerHeight-this.$refs.table.offsetTop-170},methods:{tableRowClassName:function(e){var t=e.row,a=e.rowIndex;t.index=a},leftRowClick:function(t,a,n){this.tableIndex=this.dynaLeftPageObj.pageIndex*this.dynaLeftPageObj.pageSize+t.index+1;var i=e(".el-table__body-wrapper"),o=n.currentTarget.offsetTop+n.currentTarget.offsetHeight;this.$refs.authorizationCover.style.top=o-i[0].scrollTop+40+"px"},PageTurning:function(e){this.dynaLeftPageObj.pageIndex=e.page_index,this.dynaLeftPageObj.pageSize=e.page_size,this.getLeftSearchList()},PageDynaRight:function(e){this.pageObj.pageIndex=e.page_index,this.pageObj.pageSize=e.page_size,this.queryFunc()},setCurrent:function(e){this.$refs.singleTable.setCurrentRow(e)},handleleftSearch:function(e){this.currentRowEdit=e,this.currentRow=i()({},e),this.dynaLeftPageObj.pageIndex=this.API.constObj.pageIndex,this.queryFunc()},getLeftSearchList:function(){var e=this;this.$axios({loading:{isShow:!0,target:"#queryLogs"},method:"get",url:this.API.getCatalogForUserList,params:{pageIndex:this.dynaLeftPageObj.pageIndex,pageSize:this.dynaLeftPageObj.pageSize}}).then(function(t){var a=t.data;if("1"==a.code){var n=a.list;e.leftSearchTable=n,e.dynaLeftPageObj.total=a.total,n.length>0&&(e.isCoverDiv=!0,e.tableIndex=e.dynaLeftPageObj.pageIndex*e.dynaLeftPageObj.pageSize+1,e.currentRowEdit=n[0],e.$refs.leftTable.setCurrentRow(n[0])),"0"==n.length&&(e.isCoverDiv=!1)}else e.$message({type:"error",message:"获取失败，请刷新！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},handleAdd:function(){this.addOrEditShow=!0},handleCancel:function(){var e=this;this.$confirm("确定删除选中记录?","操作提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios({loading:{isShow:!0,target:"#archivesRegister"},method:"get",url:e.API.deleteCatalogForUser,params:{id:e.currentRowEdit.id}}).then(function(t){"1"==t.data.code?e.getLeftSearchList():e.$message({type:"error",message:"获取失败，请刷新！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})}).catch(function(){})},queryFunc:function(){var e=this,t=this.currentRow;this.$axios({loading:{isShow:!0,target:"#queryLogs"},method:"post",url:this.API.getSysCatalogForUserDetailList,data:{pid:t.id}}).then(function(t){var a=t.data;if("1"==a.code){for(var n=a.data,i=[],o=0;o<n.length;o++)n[o].disabled=!0,n[o].ischeck&&"1"==n[o].ischeck&&i.push(n[o].CatelogID);e.treeList=e.commonFun.toTreeDataNormal(n,{childKey:"CatelogID",fatherKey:"ParentID"}),e.chioceValue=i}else e.$message({type:"error",message:"获取失败，请刷新！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},addBackCall:function(e){e&&(this.addOrEditShow=!1,this.getLeftSearchList())}}}}).call(t,a("7t+N"))},bXk4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("LWH0"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"table",staticClass:"queryLogs",style:{height:e.tableHeight},attrs:{id:"queryLogs"}},[a("div",{staticClass:"leftAside",attrs:{id:"dynamicLeft"}},[a("div",{staticClass:"leftHead"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleAdd}},[e._v("添加模板")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleCancel}},[e._v("删除模板")])],1),e._v(" "),a("div",{ref:"tableCover",staticClass:"topheight"},[a("el-table",{ref:"leftTable",staticStyle:{width:"100%"},attrs:{height:e.tableHeight2,data:e.leftSearchTable,"highlight-current-row":"","row-class-name":e.tableRowClassName},on:{"current-change":e.handleleftSearch,"row-click":e.leftRowClick}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.dynaLeftPageObj.pageIndex*e.dynaLeftPageObj.pageSize+t.$index+1))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"模板名称","show-overflow-tooltip":""}})],1)],1),e._v(" "),e.isCoverDiv?a("div",{ref:"authorizationCover",staticClass:"authorization-cover",staticStyle:{width:"422px",display:"flex","align-items":"center"}},[a("span",{staticStyle:{width:"60px","text-align":"center"}},[e._v(e._s(e.tableIndex))]),e._v(" "),a("span",{staticClass:"checkspan",staticStyle:{"text-align":"left"}},[e._v(e._s(e.currentRowEdit.title))])]):e._e(),e._v(" "),a("div",{staticClass:"Pagination dyna-l left-page"},[a("pagination",{attrs:{pageIndex:e.dynaLeftPageObj.pageIndex,total:e.dynaLeftPageObj.total,pageSize:e.dynaLeftPageObj.pageSize,enableSmall:e.isTotal},on:{PageTurning:e.PageTurning}})],1)]),e._v(" "),a("div",{staticClass:"contentRight"},[a("div",{staticClass:"topheight1",attrs:{id:"dynamicRight"}},[a("el-tree",{attrs:{data:e.treeList,"show-checkbox":"","node-key":e.defaultProps.key,"default-checked-keys":e.chioceValue,props:e.defaultProps}})],1)]),e._v(" "),e.addOrEditShow?a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"添加自定义样卷",width:"800px",visible:e.addOrEditShow,"append-to-body":""},on:{"update:visible":function(t){e.addOrEditShow=t}}},[a("AddSample",{on:{addBackCall:e.addBackCall}})],1):e._e()],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]},s=o;var r=!1;var l=function(e){r||a("l2c3")},c=a("VU/8")(n.a,s,!1,l,"data-v-6cc96b79",null);c.options.__file="src/views/archivesSpecialVerification/sampleManagement/SampleManagement.vue";t.default=c.exports},kskH:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.getRolePower .el-form[data-v-c0d4c122] {\n  width: 300px;\n}\n.getRolePower .el-tree[data-v-c0d4c122] {\n  height: 300px;\n  overflow-y: auto;\n}\n.getRolePower .el-row[data-v-c0d4c122] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-bottom: 10px;\n}\n",""])},l2c3:function(e,t,a){var n=a("A//S");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("19c4abe0",n,!1,{})},sWo4:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"getRolePower"},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"样卷标题"}},[a("el-input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1),e._v(" "),a("el-tree",{ref:"treeMenu",attrs:{"show-checkbox":"",data:e.treeData,"node-key":e.propsData.key,props:e.propsData}}),e._v(" "),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveRole}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.cancelSet}},[e._v("取 消")])],1)],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]},o=i;var s=!1;var r=a("VU/8")({name:"AddSample",data:function(){return{propsData:{key:"catelogid",label:"caption"},treeData:[],chioceValue:[],title:""}},created:function(){},mounted:function(){this.getData()},computed:{},methods:{getData:function(){var e=this;this.$axios({method:"get",url:this.API.getCatalogList}).then(function(t){var a=t.data;"1"==a.code?e.treeData=e.commonFun.toTreeDataNormal(a.data,{childKey:"catelogid",fatherKey:"parentid"}):e.$message({type:"error",message:"获取角色权限信息失败，请退出重试！"})}).catch(function(t){e.$message({type:"error",message:"请求异常，请检查网络！"})})},saveRole:function(){if(this.chioceValue=this.$refs.treeMenu.getCheckedKeys(),0!=this.chioceValue.length)if(this.title){var e="";this.chioceValue.forEach(function(t,a,n){a==n.length-1?e+=t:e+=t+","}),this.saveRolePower(e)}else this.$message({type:"warning",message:"请填写模版名称！"});else this.$message({type:"warning",message:"您还没有选择样卷!"})},saveRolePower:function(e){var t=this;this.$axios({loading:{isShow:!0,target:".setRolePower"},method:"post",url:this.API.CatalogForUserAdd,data:{title:this.title,params:e}}).then(function(e){"1"==e.data.code?(t.$message({type:"success",message:"添加成功!"}),t.$emit("addBackCall",!0)):t.$message({type:"error",message:"保存角色权限失败，请刷新重试！"})}).catch(function(e){t.$message({type:"error",message:"请求异常，请检查网络！"})})},cancelSet:function(){this.$emit("addBackCall",!0)}}},o,!1,function(e){s||a("wgs4")},"data-v-c0d4c122",null);r.options.__file="src/views/archivesSpecialVerification/sampleManagement/AddSample.vue";t.a=r.exports},wgs4:function(e,t,a){var n=a("kskH");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("32e908c0",n,!1,{})}});