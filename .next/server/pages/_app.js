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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigProvider\", function() { return ConfigProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/blake/Documents/GitHub/Frisbee/components/context.tsx\";\n\n\n\n\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst ConfigProvider = ({\n  children\n}) => {\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: '',\n    first: '',\n    last: '',\n    avatar: ''\n  });\n  const {\n    0: currentMessage,\n    1: setCurrentMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: messages,\n    1: setMessages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: draft,\n    1: setDraft\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: '',\n    message: ''\n  });\n\n  const getUserData = async () => {\n    //needs to happen server side\n    try {\n      const resp = await axios__WEBPACK_IMPORTED_MODULE_4___default()({\n        url: `${window.location.origin}/api/getUserData`,\n        method: 'get'\n      });\n      await setUserData(resp.data);\n      getMessages(resp.data.username);\n    } catch {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/login');\n    }\n  };\n\n  const getMessages = async username => {\n    const mess = await axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      url: `${window.location.origin}/api/getMessages`,\n      method: 'post',\n      data: {\n        username: username\n      }\n    });\n    setMessages(mess.data);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](() => {\n    getUserData(); // console.log('messages', messages)\n    // console.log('user', userData)\n  }, []);\n  const appName = \"Postcard\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: {\n      appName,\n      currentMessage,\n      setCurrentMessage,\n      userData,\n      setUserData,\n      messages,\n      setMessages,\n      draft,\n      setDraft\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, undefined);\n};\nConfigProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n}; // ConfigProvider.getIntialProps = async (ctx: NextPageContext) => {\n//   const cookie = ctx.req?.headers.cookie;\n//   const resp = await axios({\n//     url: 'http://localhost:3000/api/getUserData',\n//     method: 'get',\n//     headers: {\n//       cookie: cookie!,\n//     },\n//   });\n//   console.log('kljflkasjdflasdfjh;jdsifhds;lfhds;fhsdf',resp);\n//   return {user: resp};\n//   // if (resp.status === 401 && !ctx.req) {\n//   //   Router.replace('/login');\n//   //   return;\n//   // }\n//   // if (resp.status === 401) {\n//   //   ctx.res.writeHead(302, {\n//   //     location: 'http://localhost.com/login'\n//   //   });\n//   //   ctx.res.end();\n//   //   return;\n//   // }\n//   // console.log('hello from get initial props',resp)\n//   // return {messages: resp}\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQudHN4P2UxODIiXSwibmFtZXMiOlsiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJmaXJzdCIsImxhc3QiLCJhdmF0YXIiLCJjdXJyZW50TWVzc2FnZSIsInNldEN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImRyYWZ0Iiwic2V0RHJhZnQiLCJtZXNzYWdlIiwiZ2V0VXNlckRhdGEiLCJyZXNwIiwiYXhpb3MiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm1ldGhvZCIsImRhdGEiLCJnZXRNZXNzYWdlcyIsIlJvdXRlciIsInJlcGxhY2UiLCJtZXNzIiwiUmVhY3QiLCJhcHBOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFzQ08sTUFBTUEsT0FBTyxnQkFBR0MsMkRBQWEsQ0FBNkIsSUFBN0IsQ0FBN0I7QUFJQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBeUI7QUFDckQsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFPO0FBQUNDLFlBQVEsRUFBRSxFQUFYO0FBQWVDLFNBQUssRUFBRSxFQUF0QjtBQUEwQkMsUUFBSSxFQUFFLEVBQWhDO0FBQW9DQyxVQUFNLEVBQUU7QUFBNUMsR0FBUCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDTixzREFBUSxDQUFTLENBQVQsQ0FBcEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJSLHNEQUFRLENBQVcsRUFBWCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDUyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlYsc0RBQVEsQ0FBUTtBQUFFQyxZQUFRLEVBQUMsRUFBWDtBQUFlVSxXQUFPLEVBQUM7QUFBdkIsR0FBUixDQUFsQzs7QUFFQSxRQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUFFO0FBQ2hDLFFBQUk7QUFDRixZQUFNQyxJQUFJLEdBQUcsTUFBTUMsNENBQUssQ0FBQztBQUN6QkMsV0FBRyxFQUFHLEdBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxrQkFETjtBQUV6QkMsY0FBTSxFQUFFO0FBRmlCLE9BQUQsQ0FBeEI7QUFJQSxZQUFNcEIsV0FBVyxDQUFDYyxJQUFJLENBQUNPLElBQU4sQ0FBakI7QUFDQUMsaUJBQVcsQ0FBQ1IsSUFBSSxDQUFDTyxJQUFMLENBQVVuQixRQUFYLENBQVg7QUFDRCxLQVBELENBUUEsTUFBTTtBQUNKcUIsd0RBQU0sQ0FBQ0MsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGLEdBWkQ7O0FBY0EsUUFBTUYsV0FBVyxHQUFHLE1BQU9wQixRQUFQLElBQTRCO0FBQzlDLFVBQU11QixJQUFJLEdBQUcsTUFBTVYsNENBQUssQ0FBQztBQUN2QkMsU0FBRyxFQUFHLEdBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxrQkFEUjtBQUV2QkMsWUFBTSxFQUFFLE1BRmU7QUFHdkJDLFVBQUksRUFBRTtBQUNKbkIsZ0JBQVEsRUFBRUE7QUFETjtBQUhpQixLQUFELENBQXhCO0FBT0FPLGVBQVcsQ0FBQ2dCLElBQUksQ0FBQ0osSUFBTixDQUFYO0FBQ0QsR0FURDs7QUFZQUssaURBQUEsQ0FBZ0IsTUFBTTtBQUNwQmIsZUFBVyxHQURTLENBRXBCO0FBQ0E7QUFDRCxHQUpELEVBSUcsRUFKSDtBQU1BLFFBQU1jLE9BQU8sR0FBRyxVQUFoQjtBQUVBLHNCQUNFLHFFQUFDLE9BQUQsQ0FBUyxRQUFUO0FBQ0EsU0FBSyxFQUFFO0FBQ0xBLGFBREs7QUFFTHJCLG9CQUZLO0FBR0xDLHVCQUhLO0FBSUxSLGNBSks7QUFLTEMsaUJBTEs7QUFNTFEsY0FOSztBQU9MQyxpQkFQSztBQVFMQyxXQVJLO0FBU0xDO0FBVEssS0FEUDtBQUFBLGNBYUdiO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUJELENBekRNO0FBMERQRCxjQUFjLENBQUMrQixTQUFmLEdBQTJCO0FBQ3pCOUIsVUFBUSxFQUFFK0IsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURBLENBQTNCLEMsQ0FJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGlnbm9yZVJlcXVlc3QgfSBmcm9tICcuLi9wYWdlcy9hcGkvaWdub3JlUmVxdWVzdCc7XG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ2NvbnNvbGUnO1xuXG5cbmludGVyZmFjZSBBcHBDb250ZXh0SW50ZXJmYWNlIHtcbiAgYXBwTmFtZTogc3RyaW5nLFxuICB1c2VyRGF0YTogVXNlcixcbiAgc2V0VXNlckRhdGE6IChhcmc6IFVzZXIpID0+IHZvaWQsXG4gIGN1cnJlbnRNZXNzYWdlOiBudW1iZXIsXG4gIHNldEN1cnJlbnRNZXNzYWdlOiAoYXJnOm51bWJlcikgPT4gdm9pZDtcbiAgbWVzc2FnZXM6IFNlbmRlcltdLFxuICBzZXRNZXNzYWdlczogKGFyZzogU2VuZGVyW10pID0+IHZvaWQ7XG4gIGRyYWZ0OiBEcmFmdCxcbiAgc2V0RHJhZnQ6IChhcmc6RHJhZnQpID0+IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlbmRlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGZpcnN0OiBzdHJpbmc7XG4gIGxhc3Q6IHN0cmluZztcbiAgYXZhdGFyOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGhvdG86IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICB0aW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGZpcnN0OiBzdHJpbmc7XG4gIGxhc3Q6IHN0cmluZztcbiAgYXZhdGFyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERyYWZ0IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXBwQ29udGV4dEludGVyZmFjZSB8IG51bGw+KG51bGwpO1xudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuZXhwb3J0IGNvbnN0IENvbmZpZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZTxVc2VyPih7dXNlcm5hbWU6ICcnLCBmaXJzdDogJycsIGxhc3Q6ICcnLCBhdmF0YXI6ICcnfSlcbiAgY29uc3QgW2N1cnJlbnRNZXNzYWdlLCBzZXRDdXJyZW50TWVzc2FnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPFNlbmRlcltdPihbXSk7XG4gIGNvbnN0IFtkcmFmdCwgc2V0RHJhZnRdID0gdXNlU3RhdGU8RHJhZnQ+KHsgdXNlcm5hbWU6JycsIG1lc3NhZ2U6JycgfSlcblxuICBjb25zdCBnZXRVc2VyRGF0YSA9IGFzeW5jICgpID0+IHsgLy9uZWVkcyB0byBoYXBwZW4gc2VydmVyIHNpZGVcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL2dldFVzZXJEYXRhYCxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHNldFVzZXJEYXRhKHJlc3AuZGF0YSk7XG4gICAgICBnZXRNZXNzYWdlcyhyZXNwLmRhdGEudXNlcm5hbWUpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1lc3MgPSBhd2FpdCBheGlvcyh7XG4gICAgICB1cmw6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaS9nZXRNZXNzYWdlc2AsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgICBzZXRNZXNzYWdlcyhtZXNzLmRhdGEpXG4gIH1cblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlckRhdGEoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbWVzc2FnZXMnLCBtZXNzYWdlcylcbiAgICAvLyBjb25zb2xlLmxvZygndXNlcicsIHVzZXJEYXRhKVxuICB9LCBbXSlcblxuICBjb25zdCBhcHBOYW1lID0gXCJQb3N0Y2FyZFwiO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICB2YWx1ZT17e1xuICAgICAgYXBwTmFtZSxcbiAgICAgIGN1cnJlbnRNZXNzYWdlLFxuICAgICAgc2V0Q3VycmVudE1lc3NhZ2UsXG4gICAgICB1c2VyRGF0YSxcbiAgICAgIHNldFVzZXJEYXRhLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZXRNZXNzYWdlcyxcbiAgICAgIGRyYWZ0LFxuICAgICAgc2V0RHJhZnQsXG4gICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbkNvbmZpZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG4vLyBDb25maWdQcm92aWRlci5nZXRJbnRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xuLy8gICBjb25zdCBjb29raWUgPSBjdHgucmVxPy5oZWFkZXJzLmNvb2tpZTtcblxuLy8gICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3Moe1xuLy8gICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0VXNlckRhdGEnLFxuLy8gICAgIG1ldGhvZDogJ2dldCcsXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgY29va2llOiBjb29raWUhLFxuLy8gICAgIH0sXG4vLyAgIH0pO1xuLy8gICBjb25zb2xlLmxvZygna2xqZmxrYXNqZGZsYXNkZmpoO2pkc2lmaGRzO2xmaGRzO2Zoc2RmJyxyZXNwKTtcbi8vICAgcmV0dXJuIHt1c2VyOiByZXNwfTtcbi8vICAgLy8gaWYgKHJlc3Auc3RhdHVzID09PSA0MDEgJiYgIWN0eC5yZXEpIHtcbi8vICAgLy8gICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4vLyAgIC8vICAgcmV0dXJuO1xuLy8gICAvLyB9XG4vLyAgIC8vIGlmIChyZXNwLnN0YXR1cyA9PT0gNDAxKSB7XG4vLyAgIC8vICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XG4vLyAgIC8vICAgICBsb2NhdGlvbjogJ2h0dHA6Ly9sb2NhbGhvc3QuY29tL2xvZ2luJ1xuLy8gICAvLyAgIH0pO1xuLy8gICAvLyAgIGN0eC5yZXMuZW5kKCk7XG4vLyAgIC8vICAgcmV0dXJuO1xuLy8gICAvLyB9XG4vLyAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIGdldCBpbml0aWFsIHByb3BzJyxyZXNwKVxuLy8gICAvLyByZXR1cm4ge21lc3NhZ2VzOiByZXNwfVxuLy8gfVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.tsx\");\n\nvar _jsxFileName = \"/Users/blake/Documents/GitHub/Frisbee/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"ConfigProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUF3QztBQUNwRCxzQkFDRSxxRUFBQyxrRUFBRDtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUWVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciwgQ29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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