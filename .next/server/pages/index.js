module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/context.tsx":
/*!********************************!*\
  !*** ./components/context.tsx ***!
  \********************************/
/*! exports provided: Context, ConfigProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigProvider\", function() { return ConfigProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Frisbee/components/context.tsx\";\n\n\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst ConfigProvider = ({\n  children\n}) => {\n  const {\n    0: authorAvatar,\n    1: setAuthorAvatar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/08/avatar-sigourney-weaver.jpg');\n  const {\n    0: authorName,\n    1: setAuthorName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('that cunt nancy pelosi');\n  const {\n    0: avatar,\n    1: setAvatar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('https://i.pinimg.com/564x/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg');\n  const {\n    0: messages,\n    1: setMessages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([`This is a long and thoughtful message, <br/>\n    i am a decieteful and wreckless whore`, 'i am buddha, i like da buddah']);\n  const appName = \"Frisbie\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: {\n      appName,\n      authorName,\n      setAuthorName,\n      authorAvatar,\n      setAuthorAvatar,\n      avatar,\n      setAvatar,\n      messages,\n      setMessages\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\nConfigProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQudHN4P2UxODIiXSwibmFtZXMiOlsiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwiYXV0aG9yQXZhdGFyIiwic2V0QXV0aG9yQXZhdGFyIiwidXNlU3RhdGUiLCJhdXRob3JOYW1lIiwic2V0QXV0aG9yTmFtZSIsImF2YXRhciIsInNldEF2YXRhciIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJhcHBOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBY08sTUFBTUEsT0FBTyxnQkFBR0MsMkRBQWEsQ0FBNkIsSUFBN0IsQ0FBN0I7QUFJQSxNQUFNQyxjQUF3QixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXlCO0FBQy9ELFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBUyx5R0FBVCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsc0RBQVEsQ0FBUyx3QkFBVCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDRyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkosc0RBQVEsQ0FBUyx5RUFBVCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQk4sc0RBQVEsQ0FBVyxDQUFFO0FBQ3ZELDBDQURxRCxFQUNULCtCQURTLENBQVgsQ0FBeEM7QUFFQSxRQUFNTyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxzQkFDRSxxRUFBQyxPQUFELENBQVMsUUFBVDtBQUNFLFNBQUssRUFBRTtBQUNMQSxhQURLO0FBRUxOLGdCQUZLO0FBR0xDLG1CQUhLO0FBSUxKLGtCQUpLO0FBS0xDLHFCQUxLO0FBTUxJLFlBTks7QUFPTEMsZUFQSztBQVFMQyxjQVJLO0FBU0xDO0FBVEssS0FEVDtBQUFBLGNBYUdUO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBeEJNO0FBeUJQRCxjQUFjLENBQUNZLFNBQWYsR0FBMkI7QUFDekJYLFVBQVEsRUFBRVksaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURBLENBQTNCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5pbnRlcmZhY2UgQXBwQ29udGV4dEludGVyZmFjZSB7XG4gIGFwcE5hbWU6IHN0cmluZyxcbiAgYXV0aG9yQXZhdGFyOiBzdHJpbmcsXG4gIHNldEF1dGhvckF2YXRhcjogKGFyZzogc3RyaW5nKSA9PiB2b2lkLFxuICBhdXRob3JOYW1lOiBzdHJpbmcsXG4gIHNldEF1dGhvck5hbWU6IChhcmc6IHN0cmluZykgPT4gdm9pZCxcbiAgYXZhdGFyOiBzdHJpbmcsXG4gIHNldEF2YXRhcjogKGFyZzogc3RyaW5nKSA9PiB2b2lkO1xuICBtZXNzYWdlczogW3N0cmluZ10sXG4gIHNldE1lc3NhZ2VzOiAoYXJnOltzdHJpbmddKSA9PiB2b2lkO1xufVxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFwcENvbnRleHRJbnRlcmZhY2UgfCBudWxsPihudWxsKTtcbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cbmV4cG9ydCBjb25zdCBDb25maWdQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbYXV0aG9yQXZhdGFyLCBzZXRBdXRob3JBdmF0YXJdID0gdXNlU3RhdGU8c3RyaW5nPignaHR0cHM6Ly9zdGF0aWMuaW5kZXBlbmRlbnQuY28udWsvczNmcy1wdWJsaWMvdGh1bWJuYWlscy9pbWFnZS8yMDIwLzA1LzAxLzA4L2F2YXRhci1zaWdvdXJuZXktd2VhdmVyLmpwZycpXG4gIGNvbnN0IFthdXRob3JOYW1lLCBzZXRBdXRob3JOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJ3RoYXQgY3VudCBuYW5jeSBwZWxvc2knKVxuICBjb25zdCBbYXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGU8c3RyaW5nPignaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC8wYS9kZC84Ny8wYWRkODc0ZTFlYTA2NzZjNDM2NWIyZGQ3ZGRkMzJlMy5qcGcnKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZTxbc3RyaW5nXT4oW2BUaGlzIGlzIGEgbG9uZyBhbmQgdGhvdWdodGZ1bCBtZXNzYWdlLCA8YnIvPlxuICAgIGkgYW0gYSBkZWNpZXRlZnVsIGFuZCB3cmVja2xlc3Mgd2hvcmVgLCAnaSBhbSBidWRkaGEsIGkgbGlrZSBkYSBidWRkYWgnXSlcbiAgY29uc3QgYXBwTmFtZSA9IFwiRnJpc2JpZVwiXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIGF1dGhvck5hbWUsXG4gICAgICAgIHNldEF1dGhvck5hbWUsXG4gICAgICAgIGF1dGhvckF2YXRhcixcbiAgICAgICAgc2V0QXV0aG9yQXZhdGFyLFxuICAgICAgICBhdmF0YXIsXG4gICAgICAgIHNldEF2YXRhcixcbiAgICAgICAgbWVzc2FnZXMsXG4gICAgICAgIHNldE1lc3NhZ2VzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbkNvbmZpZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context.tsx\n");

/***/ }),

/***/ "./components/footer/Footer.module.css":
/*!*********************************************!*\
  !*** ./components/footer/Footer.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"footer\": \"Footer_footer__3zUfD\",\n\t\"container\": \"Footer_container__VwxEm\",\n\t\"name\": \"Footer_name__2DfYh\",\n\t\"avatar\": \"Footer_avatar__kh1dp\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIubW9kdWxlLmNzcz8xNGUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zelVmRFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlcl9jb250YWluZXJfX1Z3eEVtXCIsXG5cdFwibmFtZVwiOiBcIkZvb3Rlcl9uYW1lX18yRGZZaFwiLFxuXHRcImF2YXRhclwiOiBcIkZvb3Rlcl9hdmF0YXJfX2toMWRwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer/Footer.module.css\n");

/***/ }),

/***/ "./components/footer/footer.tsx":
/*!**************************************!*\
  !*** ./components/footer/footer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.css */ \"./components/footer/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./components/context.tsx\");\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Frisbee/components/footer/footer.tsx\";\n\n\n\n\nconst Header = () => {\n  const global = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        id: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,\n        src: global.authorAvatar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        id: _Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,\n        children: global.authorName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHN4P2RjMjAiXSwibmFtZXMiOlsiSGVhZGVyIiwiZ2xvYmFsIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzdHlsZXMiLCJmb290ZXIiLCJjb250YWluZXIiLCJhdmF0YXIiLCJhdXRob3JBdmF0YXIiLCJuYW1lIiwiYXV0aG9yTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFJQSxNQUFNQSxNQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyx3REFBVSxDQUFDQyxnREFBRCxDQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxNQUF2QjtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxTQUF4QjtBQUFBLDhCQUNFO0FBQUssVUFBRSxFQUFFRix5REFBTSxDQUFDRyxNQUFoQjtBQUF3QixXQUFHLEVBQUVOLE1BQU0sQ0FBQ087QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUcsVUFBRSxFQUFFSix5REFBTSxDQUFDSyxJQUFkO0FBQUEsa0JBQXFCUixNQUFNLENBQUNTO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FYRDs7QUFhZVYscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJ29zJztcblxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBnbG9iYWwgPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZyBpZD17c3R5bGVzLmF2YXRhcn0gc3JjPXtnbG9iYWwuYXV0aG9yQXZhdGFyfSAvPlxuICAgICAgICA8cCBpZD17c3R5bGVzLm5hbWV9PntnbG9iYWwuYXV0aG9yTmFtZX08L3A+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/footer/footer.tsx\n");

/***/ }),

/***/ "./components/header/Header.module.css":
/*!*********************************************!*\
  !*** ./components/header/Header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__cwxka\",\n\t\"container\": \"Header_container__17dkn\",\n\t\"title\": \"Header_title__cTbLG\",\n\t\"button\": \"Header_button__39rjy\",\n\t\"messages\": \"Header_messages__2-dEL\",\n\t\"avatar\": \"Header_avatar__iRgPr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIubW9kdWxlLmNzcz84ZGZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fY3d4a2FcIixcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX18xN2RrblwiLFxuXHRcInRpdGxlXCI6IFwiSGVhZGVyX3RpdGxlX19jVGJMR1wiLFxuXHRcImJ1dHRvblwiOiBcIkhlYWRlcl9idXR0b25fXzM5cmp5XCIsXG5cdFwibWVzc2FnZXNcIjogXCJIZWFkZXJfbWVzc2FnZXNfXzItZEVMXCIsXG5cdFwiYXZhdGFyXCI6IFwiSGVhZGVyX2F2YXRhcl9faVJnUHJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/Header.module.css\n");

/***/ }),

/***/ "./components/header/header.tsx":
/*!**************************************!*\
  !*** ./components/header/header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ \"./components/header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./components/context.tsx\");\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Frisbee/components/header/header.tsx\";\n\n\n\n\nconst Header = () => {\n  const global = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      id: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n      children: global.appName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        id: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n        children: \"See All Messages\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        id: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,\n        src: global.avatar\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4PzVlODYiXSwibmFtZXMiOlsiSGVhZGVyIiwiZ2xvYmFsIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsImFwcE5hbWUiLCJjb250YWluZXIiLCJidXR0b24iLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBR0EsTUFBTUEsTUFBZ0IsR0FBRyxNQUFNO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0Msd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsTUFBdkI7QUFBQSw0QkFDRTtBQUFNLFFBQUUsRUFBRUQseURBQU0sQ0FBQ0UsS0FBakI7QUFBQSxnQkFDR0wsTUFBTSxDQUFDTTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUgseURBQU0sQ0FBQ0ksU0FBeEI7QUFBQSw4QkFDRTtBQUFRLFVBQUUsRUFBRUoseURBQU0sQ0FBQ0ssTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLFVBQUUsRUFBRUwseURBQU0sQ0FBQ00sTUFBaEI7QUFBd0IsV0FBRyxFQUFFVCxNQUFNLENBQUNTO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FkRDs7QUFnQmVWLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuXG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGdsb2JhbCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8c3BhbiBpZD17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAge2dsb2JhbC5hcHBOYW1lfVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGJ1dHRvbiBpZD17c3R5bGVzLmJ1dHRvbn0+U2VlIEFsbCBNZXNzYWdlczwvYnV0dG9uPlxuICAgICAgICA8aW1nIGlkPXtzdHlsZXMuYXZhdGFyfSBzcmM9e2dsb2JhbC5hdmF0YXJ9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/header.tsx\n");

/***/ }),

/***/ "./components/message/message.module.css":
/*!***********************************************!*\
  !*** ./components/message/message.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"message\": \"message_message__1feGa\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5tb2R1bGUuY3NzPzFlZjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVzc2FnZVwiOiBcIm1lc3NhZ2VfbWVzc2FnZV9fMWZlR2FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/message/message.module.css\n");

/***/ }),

/***/ "./components/message/message.tsx":
/*!****************************************!*\
  !*** ./components/message/message.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _message_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.module.css */ \"./components/message/message.module.css\");\n/* harmony import */ var _message_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_message_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Frisbee/components/message/message.tsx\";\n\n\nconst Message = () => {\n  function cycle() {}\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _message_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.message,\n    children: [\"This is a long and thoughtful message, \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 46\n    }, undefined), \"i am a decieteful and wreckless whore\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50c3g/ZTEzMCJdLCJuYW1lcyI6WyJNZXNzYWdlIiwiY3ljbGUiLCJzdHlsZXMiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsV0FBU0MsS0FBVCxHQUFpQixDQUVoQjs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsT0FBdkI7QUFBQSx1RUFDeUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFNRCxDQVZEOztBQVdlSCxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9tZXNzYWdlLm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIGN5Y2xlKCkge1xuXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxuICAgICAgVGhpcyBpcyBhIGxvbmcgYW5kIHRob3VnaHRmdWwgbWVzc2FnZSwgPGJyLz5cbiAgICAgIGkgYW0gYSBkZWNpZXRlZnVsIGFuZCB3cmVja2xlc3Mgd2hvcmVcbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/message/message.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_message_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/message/message */ \"./components/message/message.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.tsx\");\n/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer/footer */ \"./components/footer/footer.tsx\");\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ \"./components/context.tsx\");\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Frisbee/pages/index.tsx\";\n\n\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_context__WEBPACK_IMPORTED_MODULE_6__[\"ConfigProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.home,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_message_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic3R5bGVzIiwiaG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxJQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDSSxxRUFBQyxrRUFBRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFSSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVRCxDQVhEOztBQWFlRixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyJ1xuXG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgICA8Q29uZmlnUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPE1lc3NhZ2UgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db25maWdQcm92aWRlcj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"home\": \"Home_home__17yb6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fMTd5YjZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });