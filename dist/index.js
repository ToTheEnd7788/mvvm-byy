/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../BYY/byy-p/_Compiler.js":
/*!*********************************!*\
  !*** ../BYY/byy-p/_Compiler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Compiler; });\n/* harmony import */ var _Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Watcher */ \"../BYY/byy-p/_Watcher.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Compiler =\n/*#__PURE__*/\nfunction () {\n  function Compiler(data, baseNode) {\n    _classCallCheck(this, Compiler);\n\n    this.data = data;\n    this.node = baseNode;\n    this.watcher = new _Watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.data);\n  }\n\n  _createClass(Compiler, [{\n    key: \"compiler\",\n    value: function compiler(node) {\n      if (node.nodeType === 3) {\n        var regExp = /\\{\\{(.*)\\}\\}/;\n\n        if (regExp.test(node.nodeValue)) {\n          this.watcher.addSub(RegExp.$1.trim(), {\n            node: node\n          }); // First mount\n\n          this.watcher.update(RegExp.$1.trim());\n        }\n      } else if (node.nodeType === 1) {}\n    }\n  }, {\n    key: \"compile\",\n    value: function compile() {\n      var flag = document.createDocumentFragment(),\n          child;\n\n      while (child = this.node.firstChild) {\n        this.compiler(child);\n        flag.appendChild(child);\n      }\n\n      return flag;\n    }\n  }]);\n\n  return Compiler;\n}();\n\n\n;\n\n//# sourceURL=webpack:///../BYY/byy-p/_Compiler.js?");

/***/ }),

/***/ "../BYY/byy-p/_Watcher.js":
/*!********************************!*\
  !*** ../BYY/byy-p/_Watcher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Watcher; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  function Watcher(data) {\n    _classCallCheck(this, Watcher);\n\n    this.subs = {};\n    this.data = data;\n  }\n\n  _createClass(Watcher, [{\n    key: \"addSub\",\n    value: function addSub(name, nodeInfo) {\n      if (this.subs[name]) {\n        this.subs.push(nodeInfo);\n      } else {\n        this.subs[name] = [nodeInfo];\n      }\n    } // b-bind:placeholder === :placeholder\n    // b-on:click === @click\n    // b-model\n    // b-show\n    // b-for\n\n  }, {\n    key: \"update\",\n    value: function update(name) {\n      var _this = this;\n\n      var needUpdateList = this.subs[name];\n      needUpdateList.forEach(function (item) {\n        if (item.dirs) {\n          item.dirs.forEach(function (dir) {\n            if (dir.nodeName === 'b-model') {\n              item.node.value = _this.getVal(name);\n            } else if (dir.nodeName === 'b-show') {\n              item.node.style.visibility = _this.getVal(name);\n            }\n          });\n        } else {\n          item.node.nodeValue = _this.getVal(name);\n        }\n      });\n    }\n  }, {\n    key: \"getVal\",\n    value: function getVal(name) {\n      var value = this.data;\n      name.split('.').forEach(function (level) {\n        value = value[level];\n      });\n      return value;\n    }\n  }]);\n\n  return Watcher;\n}();\n\n\n;\n\n//# sourceURL=webpack:///../BYY/byy-p/_Watcher.js?");

/***/ }),

/***/ "../BYY/byy-p/index.js":
/*!*****************************!*\
  !*** ../BYY/byy-p/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Byy; });\n/* harmony import */ var _Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Watcher */ \"../BYY/byy-p/_Watcher.js\");\n/* harmony import */ var _Compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Compiler */ \"../BYY/byy-p/_Compiler.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Byy =\n/*#__PURE__*/\nfunction () {\n  function Byy(opt) {\n    _classCallCheck(this, Byy);\n\n    this.$el = opt.el, this._data = opt.data;\n    this.data = null;\n    this.wm = new WeakMap();\n    this.watcher;\n    this.compiler;\n\n    this._init();\n  }\n\n  _createClass(Byy, [{\n    key: \"_proxyObserver\",\n    value: function _proxyObserver(data) {\n      var _this = this;\n\n      var h = {\n        get: function get(t, k) {\n          console.log('GETTER', t, k);\n\n          if (t[k]) {\n            if (_typeof(t[k]) === 'object') {\n              return _this._proxyObserver(t[k]);\n            } else {\n              return t[k];\n            }\n          } else {\n            throw new ReferenceError(\"Can't get property named \".concat(k));\n          }\n        },\n        set: function set(t, k, v) {\n          if (t[k] !== v) {\n            return Reflect.set(t, k, v);\n          }\n        }\n      };\n      return new Proxy(data, h);\n    }\n  }, {\n    key: \"_init\",\n    value: function _init() {\n      this.data = this._proxyObserver(this._data);\n      this.compiler = new _Compiler__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.data, document.querySelector(this.$el));\n      console.log(this.compiler);\n      document.querySelector(this.$el).appendChild(this.compiler.compile()); //console.log(22222, this.data.dependencies.server.port);\n    }\n  }]);\n\n  return Byy;\n}();\n\n\n\n//# sourceURL=webpack:///../BYY/byy-p/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.html\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var byy_p__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! byy-p */ \"../BYY/byy-p/index.js\");\n\n\nnew byy_p__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  el: '#app',\n  data: {\n    name: 'byy',\n    version: '1.0.0',\n    count: 0,\n    dependencies: {\n      webpack: ['webpack', 'webpack-cli'],\n      babel: ['babel-loader', 'babel-cli', 'babel-core', 'babel-preset-env'],\n      server: {\n        frame: 'express',\n        port: '8080',\n        page: 'index'\n      }\n    }\n  },\n  methods: {\n    add: function add() {\n      this.count++;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main.html":
/*!*******************!*\
  !*** ./main.html ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Extract byy html-loader...\n\n//# sourceURL=webpack:///./main.html?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js?");

/***/ })

/******/ });