webpackJsonp([83],{"9Qxm":function(t,i,e){var n=e("CgHc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("35a3f4d2",n,!1,{})},CgHc:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.archiveBorrowPrint[data-v-76d2671c] {\n  width: 100%;\n  min-width: 1366px;\n  min-height: 600px;\n  height: calc(100vh-46px);\n  height: -webkit-calc(100vh-46px);\n  background-color: #808080;\n  text-align: center;\n  position: relative;\n}\n.archiveBorrowPrint .el-button[data-v-76d2671c] {\n    position: absolute;\n    top: 20px;\n    z-index: 2;\n}\n.archiveBorrowPrint .el-button i[data-v-76d2671c] {\n      font-size: 30px !important;\n}\n.archiveBorrowPrint .container[data-v-76d2671c] {\n    width: 707px;\n    margin: 0 auto;\n    border-radius: 0;\n    padding: 0 10px !important;\n}\n.archiveBorrowPrint .container table[data-v-76d2671c] {\n      width: 100%;\n      border-spacing: 0;\n}\n.archiveBorrowPrint .container table tr th[data-v-76d2671c], .archiveBorrowPrint .container table tr td[data-v-76d2671c] {\n        height: 36px;\n        padding: 0 5px;\n        border: 1px solid #000;\n}\n",""])},gfoo:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("uVQN"),r={name:"ArchiveBorrowPrint",data:function(){return{tableData:[],tableHeight:window.innerHeight-55+"px",buttonLeft:(window.innerWidth-707)/2+20+"px"}},created:function(){this.tableData=this.$store.state.printList},mounted:function(){},computed:{},methods:{printPreview:function(){Object(n.a)(document.getElementById("areaPrint").innerHTML).close()}}},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"archiveBorrowPrint"},[e("el-button",{staticClass:"noPrint",style:{left:t.buttonLeft},attrs:{id:"printPre",type:"text"},on:{click:t.printPreview}},[e("i",{staticClass:"iconfont gd-dayinrizhi"})]),t._v(" "),e("div",{staticClass:"container",staticStyle:{"overflow-y":"auto"},style:{height:t.tableHeight},attrs:{id:"areaPrint"}},[e("el-row",{staticStyle:{width:"677px","text-align":"center"},style:{height:t.tableHeight}},[e("table",{staticStyle:{"font-family":"'SimSun' !important",width:"100%",margin:"0 auto"},attrs:{border:"0",id:"printTable",cellpadding:"0",cellspacing:"0"}},[e("thead",{staticStyle:{display:"table-header-group","font-weight":"bold"}},[e("tr",[e("th",{staticStyle:{border:"none","font-size":"26px","font-weight":"200",padding:"20px 0 !important"},attrs:{colspan:"8"}},[t._v("档案借阅记录")])]),t._v(" "),e("tr",[e("th",{staticStyle:{width:"8%",height:"36px",padding:"0 5px",border:"1px solid #000"}},[t._v("序号")]),t._v(" "),e("th",{staticStyle:{width:"11%",border:"1px solid #000"}},[t._v("档案编号")]),t._v(" "),e("th",{staticStyle:{width:"11%",border:"1px solid #000"}},[t._v("姓名")]),t._v(" "),e("th",{staticStyle:{width:"26%",border:"1px solid #000"}},[t._v("工作单位及职务")]),t._v(" "),e("th",{staticStyle:{width:"11%",border:"1px solid #000"}},[t._v("出生年月")]),t._v(" "),e("th",{staticStyle:{width:"16%",border:"1px solid #000"}},[t._v("籍贯")]),t._v(" "),e("th",{staticStyle:{width:"8%",border:"1px solid #000"}},[t._v("正本")]),t._v(" "),e("th",{staticStyle:{width:"8%",border:"1px solid #000"}},[t._v("副本")])])]),t._v(" "),e("tbody",t._l(t.tableData,function(i,n){return e("tr",[e("td",{staticStyle:{width:"8%",height:"36px",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(n+1))]),t._v(" "),e("td",{staticStyle:{width:"11%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.e100a))]),t._v(" "),e("td",{staticStyle:{width:"11%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.applyedManName))]),t._v(" "),e("td",{staticStyle:{width:"27%",border:"1px solid #000","text-align":"left",padding:"0 5px"}},[t._v(t._s(i.a0192a))]),t._v(" "),e("td",{staticStyle:{width:"11%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.a0107))]),t._v(" "),e("td",{staticStyle:{width:"16%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.a0111a))]),t._v(" "),e("td",{staticStyle:{width:"8%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.e1014))]),t._v(" "),e("td",{staticStyle:{width:"8%",border:"1px solid #000","text-align":"center",padding:"0 5px"}},[t._v(t._s(i.e1014b))])])}),0)])])],1)],1)};a._withStripped=!0;var d={render:a,staticRenderFns:[]},o=d;var l=!1;var s=e("VU/8")(r,o,!1,function(t){l||e("9Qxm")},"data-v-76d2671c",null);s.options.__file="src/views/print/ArchiveBorrowPrint.vue";i.default=s.exports}});