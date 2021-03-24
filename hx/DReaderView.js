var tenTypeList = []; //档案十大类数组
var R_ZOOM = 0x01; //全屏
var R_PRINT = 0x01 << 2; //打印
var R_SHENQING = 0x01 << 4; //打印申请
var R_VIEW_WORDS = 0x01 << 5; //查看文字
var R_FIT_WIDTH = 0x01 << 6; //横向适应
var R_FIT_HEIGHT = 0x01 << 7; //纵向适应
var wmdata = [
{
	text: '水印文字设置',
	degree: 315,
	position: 'repeat',
	alpha: 0.2,
	font: {
		name: '方正',
		size: 50,
		style: 'bold',
		color: 0xff0000
	}
}
];
var parameters = {
	tmask: R_ZOOM | R_PRINT  | R_FIT_WIDTH  | R_FIT_HEIGHT,
	token: '', //授权码
	appname: '', //应用ID
	host: '', //主机地址，注意，没有端口号
	port: 7777, //服务端口
	wmdata: [] //水印数据
};
/**
 * 获取当前时间
 */
function getNowtime() {
	var date = new Date();
	return date.getYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
/**
 * 加载文件--单页浏览
 * @param {Object} paramsObj
 * @param {String} paramsObj.docfile 文件位置
 * @param {String} paramsObj.displayName 默认打开的文件 ，不写默认是第一个文件
 * @param {Array}  paramsObj.HDImage 高清图像数组
 * @param {Array}  paramsObj.originalImage 原始图像数组
 * @param {Array}  paramsObj.printIndexList 可打印的图片下标列表
 * @param {Array}  paramsObj._archArea 文件显示区域(与region字段搭配使用) ，为空则显示完整图片
 * @param {Boolean}  paramsObj.region 是否开启区域授权功能  false=只显示区域图片
 * @param {Boolean}  paramsObj.regionDisplay 是否开启区域授权功能  false=只显示区域图片
 * @param {Number}  paramsObj.defaultimgtype 图片类型    0代表原始图像 1代表高清图像 默认是0
 */
function loadFile(paramsObj) {
	if(window.reader) {
		//不显示打印按钮
		if(paramsObj.printIndexList.length == 0) {
			parameters.tmask = R_ZOOM | R_FIT_WIDTH  | R_FIT_HEIGHT;
		}else{
			parameters.tmask = R_ZOOM | R_PRINT  | R_FIT_WIDTH  | R_FIT_HEIGHT;
		}
		//路径规则： umsp主路径   原始/高清图像文件夹路径    parameters.file文件位置
		//parameters.imgtype_YS_Arr = paramsObj.originalImage; //版本为V2时，该参数为原始图像文件MD5值列表
		//parameters.imgtype_GQ_Arr = paramsObj.HDImage; //版本为V2时，该参数为高清图像文件MD5值列表
		
		var documents = [];
		parameters.imgtype_YS = "";
		parameters.imgtype_GQ = "";
		paramsObj.originalImage.forEach(function(item, index) {
			parameters.imgtype_YS = item.fileName;
			documents.push(item.name);
		});
		paramsObj.HDImage.forEach(function(item, index) {
			parameters.imgtype_GQ = item.fileName;
		});
		parameters.names=documents;
		parameters.file = paramsObj.docfile; //文件位置
		
		if(paramsObj.displayName && paramsObj.displayName.length > 0) {
			parameters.displayName = paramsObj.displayName; //默认打开的文件 ，不写默认是第一个文件 如：默认打开002.JPG	 
		}
		
		parameters.defaultimgtype = paramsObj.defaultimgtype==undefined?0:paramsObj.defaultimgtype; //0代表原始图像 1代表高清图像 不赋值默认是0
		parameters.show_YS = true;//是否显示原始选项 默认为 true 
		parameters.show_GQ = true;//是否显示高清选项 默认为 true 

		if(!parameters.imgtype_YS){
			parameters.show_YS = false;
			parameters.defaultimgtype = 1;
		}
		if(!parameters.imgtype_GQ){
			parameters.show_GQ = false;
			parameters.defaultimgtype = 0;
		}
		
		parameters.viewIndexVisiable = true; //是否显示索引，注意，只有多页文件有效，如：pdf/tiff（未来支持的doc、docx）
		parameters.fit = 1; //0代表页面适应宽度，1代表页面适应高度  在有区域授权的情况下，必须为1，否则区域授权无效
		parameters.archArea = paramsObj._archArea, //文件显示区域 注意：region=true 会在右侧显示区域的内容，否则只加载区域内的图片
		parameters.region = paramsObj.region; //是否开启区域授权功能，不写默认不开启
		parameters.regionDisplay = paramsObj.regionDisplay || false; //区域显示 默认为true true的情况下，用户只能查看授权的区域。 false ：用户不能查看授权的区域
		parameters.printJurisdiction = paramsObj.printIndexList; //可打印的图片下标列表
		//parameters.edition = "V2"; //版本号
		console.log(parameters);
		reader.load(parameters); //请求加载
	} else {
		alert('阅读器正在加载中，请稍后...');
	}
}
/**
 * 加载文件--双页浏览
 * @param {Object} paramsObj
 * @param {String} paramsObj.docfile 文件位置
 * @param {Boolean}  paramsObj.showYS 是否显示原始选项 默认为true（多页浏览）
 * @param {Boolean}  paramsObj.showGQ 是否显示高清选项 默认为true（多页浏览）
 * @param {String}  paramsObj.archByName 双页浏览的查阅人名字(双页时必传)
 * @param {String}  paramsObj.displayName 默认打开的文件
 * @param {Number}  paramsObj.defaultimgtype 图片类型    0代表原始图像 1代表高清图像 默认是0
 */
function loadFileDoublePage(paramsObj) {
	if(window.reader) {
		//路径规则： umsp主路径   原始/高清图像文件夹路径    parameters.file文件位置
//		parameters.imgtype_YS = "scan/PT";//原始图像文件夹名称
//		parameters.imgtype_GQ = "scan/GQ"; //高清图像文件夹名称
		parameters.show_YS = paramsObj.showYS || true; //是否显示原始选项 默认为true（多页浏览）
		parameters.show_GQ = paramsObj.showGQ || true; //是否显示高清选项 默认为true（多页浏览）
		parameters.file = paramsObj.docfile; //文件位置
		if(paramsObj.displayName && paramsObj.displayName.length > 0) {
			parameters.displayName = paramsObj.displayName; //默认打开的文件 ，不写默认是第一个文件 如：默认打开002.JPG	
		}
		parameters.defaultimgtype = paramsObj.defaultimgtype==undefined?0:paramsObj.defaultimgtype; //0代表原始图像 1代表高清图像 不赋值默认是0
		parameters.viewIndexVisiable = true; //是否显示索引，注意，只有多页文件有效，如：pdf/tiff（未来支持的doc、docx）
		parameters.fit = 1; //0代表页面适应宽度，1代表页面适应高度  在有区域授权的情况下，必须为1，否则区域授权无效
		//parameters.pagesize =5;// 双页浏览每页显示的页数，不写默认当前容器的最大条数
		parameters.archByName = paramsObj.archByName; //双页浏览的查阅人名字
		//parameters.edition = "V2"; //版本号
		reader.load(parameters); //请求加载
	} else {
		alert('阅读器正在加载中，请稍后...');
	}
}
/**
 * 生成打印记录，点击打印按钮后调用此方法
 * @param {Object} page
 */
function sendPrintRecord(page) {
	//page ： 打印的页次 如区间 1-10  或者单页 2
	window.parent["vuePrintRecordCall"](page); //调用id为vuePrintRecordCall的父vue中的回调方法
}
/**
 * 生成浏览记录，每浏览图片时候自动调用此方法，
 * 此函数用户获取浏览记录,返回的是文件序号,如1,2,函数名不可修改,浏览过的不会再次回调
 * @param {Object} params
 * @param {String} params[0] 文件目录id
 * @param {Number} params[1] 文件序号
 * @param {Object} params[2] 自定义数据对象
 */
function sendViewRecord(params) {
	//pageIndex ： 打印的序号 
	window.parent["vueLookRecordCall"](params); //调用id为vuePrintRecordCall的父vue中的回调方法
}
/**
 * 打印申请 ，点击打印申请按钮后调用此方法
 * @param {Object} page
 */
function sendCheckPages(page) {
	//page ： 打印的页次 如区间 1-10  或者单页 2
}
//多页浏览 需要加载的文件名称(中组部-v1)
function getPageNames() {
	return ["001.JPG", "002.JPG", "003.JPG", "004.JPG", "005.JPG"];
}
/**
 * 提交区域 多页浏览
 * @param {Array} parameters
 */
function getRegionData(parameters) {
	//返回的parameters为数组对象
	var regionData = parameters[0]; //regionData为数组对象
	var fileName = parameters[1]; //fileName为当前显示的图片名称
	window.parent["vueIframeId"](parameters); //FileDReader.vue  调用id为vueIframeId的父vue中的回调方法
}
/**
 * 打开多页浏览
 * @param {Array} parameters 回传的参数
 * @param {Array} parameters[0] 目录id
 * @param {Array} parameters[1] 图片name
 */
function openMultiPageView(parameters) {
	var aFiles = [];
	if(parameters[0] && parameters[0].length > 0) {
		tenTypeList.aPicture.forEach(function(item, index) {
			if(parameters[0] == item.parentcode) {
				aFiles.push(item);
			}
		});
	}
	let oReturnData = {
		aFiles: aFiles,
		catalogId:parameters[0],
		defaultFile: parameters[1]
	};
	window.parent["vueLookSingleReader"](oReturnData); //DReaderDouble.vue 调用id为vueLookSingleReader的父vue中的回调方法
}
/**
 * 获取目录（双页浏览）
 */
function getProperties() {
	var obj = {
		titles: [], //标题数组
		properties: [] //目录数组
	};
	tenTypeList.aTitle.forEach(function(item, index) {
		obj.titles.push({
			fileType: item.code,
			fileIndex: item.codeno,
			title: item.name,
			parentCode: item.parentcode
		});
	});
	if(tenTypeList.aCatalog.length > 0) {
		tenTypeList.aCatalog.forEach(function(item, index) {
			obj.properties.push({
				fileId: item.code, //目录code
				fileName: item.name,
				filePage: item.total, //目录下文件总数
				fileType: item.parentcode //标题code
			});
		});
	}
	reader.dplayer.CD.initCatalog(obj);
}
/**
 * 根据原文id获取原文路径和图片名称 （双页浏览）
 * @param {Object} id 目录id
 * @param {Object} type 图像类型 0: 原始; 1:高清
 */
function getFileDataById(id, type) {
	var fileData = {
		filepath: "",
		filepages: []
	};
	if(tenTypeList.aPicture.length > 0) {
		tenTypeList.aPicture.forEach(function(item, index) {
			if(id === item.parentcode) {
				if(type === 0) {
					fileData.filepages.push(item.expanded+"/"+item.name);
				} else {
					fileData.filepages.push(item.gaoqin+"/"+item.name);
				}
			}
		});
	}
	reader.dplayer.CD.initFileData(fileData);
}
/**
 * vue数据转换器
 * @desc 将vue数据转换为纯粹的json数据
 * @param {Object||Array} vueObject 数据源
 * @return {Object||Array} result 转换后的纯粹数据
 */
function vueDataConverter(vueObject) {
	var result = null;
	var type = Object.prototype.toString.call(vueObject);
	switch(type) {
		case '[object Array]':
			result = toArray(vueObject);
			break;
		case '[object Object]':
			result = toObject(vueObject);
			break;
		default:
			result = vueObject;
			break;
	};

	function toArray(vueArray) {
		var array = [];
		for(var index in vueArray) {
			var item = vueDataConverter(vueArray[index]);
			array.push(item);
		}
		return array;
	}

	function toObject(vueObject) {
		var obj = new Object();
		for(var index in vueObject) {
			var item = vueDataConverter(vueObject[index]);
			obj[index] = item;
		}
		return obj;
	}
	return result;
};
/**
 * 初始化阅读器--单页浏览
 * @param {Object} initParamsObj初始化参数对象
 * @param {Array} initParamsObj.HD 高清图片列表
 * @param {Array} initParamsObj.oldPicture 原始图片列表
 * @param {Array} initParamsObj.aPrintIndexs 可打印的图片下标数组
 * @param {Array} initParamsObj._archArea 文件显示区域
 * @param {Boolean} initParamsObj.region 是否开启区域授权功能  
 * @param {Boolean} initParamsObj.regionDisplay 区域显示 默认为false true的情况下，用户只能查看授权的区域。 false ：用户不能查看授权的区域
 * @param {Number}  initParamsObj.defaultimgtype 图像类型  0 原始图 ；1 高清图像  默认1
 * @param {Number}  initParamsObj.displayName 默认打开的图片  不写则默认第一个图片
 * @param {String}  initParamsObj.appname 应用ID
 * @param {String}  initParamsObj.host 主机地址，注意，没有端口号
 * @param {String}  initParamsObj.port 主机服务端口
 * @param {String}  initParamsObj.token 授权码
 * @param {String}  initParamsObj.watermark 水印
 * @param {String}  initParamsObj.archByName //被查阅人姓名
 */
function initReader(initParamsObj) {
	setTimeout(() => {
		let initParams = {
			docfile: '/.cadremultip', // 文件位置
			HDImage: initParamsObj.HD, // 高清图像数组
			originalImage: initParamsObj.oldPicture, // 原始图像数组
			printIndexList: initParamsObj.aPrintIndexs, // 可打印的图片下标列表
			_archArea: initParamsObj._archArea, //文件显示区域
			region: initParamsObj.region, //是否开启区域授权功能
			regionDisplay: initParamsObj.regionDisplay,
			defaultimgtype: initParamsObj.defaultimgtype==undefined?1:initParamsObj.defaultimgtype,
			archByName: initParamsObj.archByName //被查阅人姓名
		};
		if(initParamsObj.displayName && initParamsObj.displayName.length > 0) {
			initParams["displayName"] = initParamsObj.displayName;
		}
		if(initParamsObj.watermark && initParamsObj.watermark.length > 0){//水印
			wmdata[0].text = initParamsObj.watermark;
			parameters.wmdata = wmdata;
		}else{
			parameters.wmdata = [];
		}
		parameters.appname = initParamsObj.appname;
		parameters.host = initParamsObj.host;
		parameters.port = initParamsObj.port;
		parameters.token = initParamsObj.token;
		let paramsObj = vueDataConverter(initParams);
		window.reader = UMSPHelper.createReader('#flashContainer');
		loadFile(paramsObj);
	}, 0);
}
/**
 * 初始化阅读器--双页浏览
 * @param {Object} initParamsObj初始化参数对象
 * @param {Boolean}  initParamsObj.tenTypeList 档案信息
 * @param {Boolean}  initParamsObj.showYS 是否显示原始选项 默认为true
 * @param {Boolean}  initParamsObj.showGQ 是否显示高清选项 默认为true
 * @param {String}  initParamsObj.archByName 双页浏览的被查阅人名字
 * @param {Number}  initParamsObj.defaultimgtype 图像类型  0 原始图 ；1 高清图像  默认1
 * @param {String}  initParamsObj.appname 应用ID
 * @param {String}  initParamsObj.host 主机地址，注意，没有端口号
 * @param {String}  initParamsObj.port 主机服务端口
 * @param {String}  initParamsObj.token 授权码
 * @param {String}  initParamsObj.watermark 水印
 */
function initReaderDoublePage(initParamsObj) {
	setTimeout(() => {
		tenTypeList = initParamsObj.tenTypeList;
		let paramsObj = vueDataConverter({
			docfile: '/.cadredblp', // 文件位置
			showYS: initParamsObj.showYS, // 是否显示原始选项
			showGQ: initParamsObj.showGQ, // 原始图像数组
			archByName: initParamsObj.archByName, //双页浏览的查阅人名字
			defaultimgtype: initParamsObj.defaultimgtype==undefined?1:initParamsObj.defaultimgtype
		});
		if(initParamsObj.watermark && initParamsObj.watermark.length > 0){//水印
			wmdata[0].text = initParamsObj.watermark;
			parameters.wmdata = wmdata;
		}else{
			parameters.wmdata = [];
		}
		parameters.appname = initParamsObj.appname;
		parameters.host = initParamsObj.host;
		parameters.port = initParamsObj.port;
		parameters.token = initParamsObj.token;
		window.reader = UMSPHelper.createReader('#flashContainer');
		loadFileDoublePage(paramsObj);
	}, 0);
}