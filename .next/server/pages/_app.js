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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigProvider\", function() { return ConfigProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/blake/Documents/GitHub/Frisbee/components/context.tsx\";\n\n\n\n\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst ConfigProvider = ({\n  children\n}) => {\n  const {\n    0: userData,\n    1: setUserData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: '',\n    first: '',\n    last: '',\n    avatar: ''\n  });\n  const {\n    0: currentMessage,\n    1: setCurrentMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: messages,\n    1: setMessages\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: draft,\n    1: setDraft\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: '',\n    message: ''\n  });\n\n  const getUserData = async () => {\n    //needs to happen server side\n    try {\n      const resp = await axios__WEBPACK_IMPORTED_MODULE_4___default()({\n        url: `${window.location.origin}/api/getUserData`,\n        method: 'get'\n      });\n      await setUserData(resp.data);\n      getMessages(resp.data.username);\n    } catch {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/login');\n    }\n  };\n\n  const getMessages = async username => {\n    const mess = await axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      url: `${window.location.origin}/api/getMessages`,\n      method: 'post',\n      data: {\n        username: username\n      }\n    });\n    setMessages(mess.data);\n  }; // fill message with default values for new user\n\n\n  react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"](() => {\n    getUserData();\n    console.log('messages', messages);\n    console.log('user', userData);\n  }, []);\n  const appName = \"Postcard\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: {\n      appName,\n      currentMessage,\n      setCurrentMessage,\n      userData,\n      setUserData,\n      messages,\n      setMessages,\n      draft,\n      setDraft\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, undefined);\n};\nConfigProvider.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n}; // ConfigProvider.getIntialProps = async (ctx: NextPageContext) => {\n//   const cookie = ctx.req?.headers.cookie;\n//   const resp = await axios({\n//     url: 'http://localhost:3000/api/getUserData',\n//     method: 'get',\n//     headers: {\n//       cookie: cookie!,\n//     },\n//   });\n//   console.log('kljflkasjdflasdfjh;jdsifhds;lfhds;fhsdf',resp);\n//   return {user: resp};\n//   // if (resp.status === 401 && !ctx.req) {\n//   //   Router.replace('/login');\n//   //   return;\n//   // }\n//   // if (resp.status === 401) {\n//   //   ctx.res.writeHead(302, {\n//   //     location: 'http://localhost.com/login'\n//   //   });\n//   //   ctx.res.end();\n//   //   return;\n//   // }\n//   // console.log('hello from get initial props',resp)\n//   // return {messages: resp}\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQudHN4P2UxODIiXSwibmFtZXMiOlsiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJmaXJzdCIsImxhc3QiLCJhdmF0YXIiLCJjdXJyZW50TWVzc2FnZSIsInNldEN1cnJlbnRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImRyYWZ0Iiwic2V0RHJhZnQiLCJtZXNzYWdlIiwiZ2V0VXNlckRhdGEiLCJyZXNwIiwiYXhpb3MiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm1ldGhvZCIsImRhdGEiLCJnZXRNZXNzYWdlcyIsIlJvdXRlciIsInJlcGxhY2UiLCJtZXNzIiwiUmVhY3QiLCJjb25zb2xlIiwibG9nIiwiYXBwTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbUNPLE1BQU1BLE9BQU8sZ0JBQUdDLDJEQUFhLENBQTZCLElBQTdCLENBQTdCO0FBSUEsTUFBTUMsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXlCO0FBQ3JELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBTztBQUFDQyxZQUFRLEVBQUUsRUFBWDtBQUFlQyxTQUFLLEVBQUUsRUFBdEI7QUFBMEJDLFFBQUksRUFBRSxFQUFoQztBQUFvQ0MsVUFBTSxFQUFFO0FBQTVDLEdBQVAsQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ04sc0RBQVEsQ0FBUyxDQUFULENBQXBEO0FBRUEsUUFBTTtBQUFBLE9BQUNPLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCUixzREFBUSxDQUFXLEVBQVgsQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ1MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JWLHNEQUFRLENBQVE7QUFBRUMsWUFBUSxFQUFDLEVBQVg7QUFBZVUsV0FBTyxFQUFDO0FBQXZCLEdBQVIsQ0FBbEM7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLFlBQVk7QUFBRTtBQUNoQyxRQUFJO0FBQ0YsWUFBTUMsSUFBSSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDekJDLFdBQUcsRUFBRyxHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sa0JBRE47QUFFekJDLGNBQU0sRUFBRTtBQUZpQixPQUFELENBQXhCO0FBSUEsWUFBTXBCLFdBQVcsQ0FBQ2MsSUFBSSxDQUFDTyxJQUFOLENBQWpCO0FBQ0FDLGlCQUFXLENBQUNSLElBQUksQ0FBQ08sSUFBTCxDQUFVbkIsUUFBWCxDQUFYO0FBQ0QsS0FQRCxDQVFBLE1BQU07QUFDSnFCLHdEQUFNLENBQUNDLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixHQVpEOztBQWNBLFFBQU1GLFdBQVcsR0FBRyxNQUFPcEIsUUFBUCxJQUE0QjtBQUM5QyxVQUFNdUIsSUFBSSxHQUFHLE1BQU1WLDRDQUFLLENBQUM7QUFDdkJDLFNBQUcsRUFBRyxHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sa0JBRFI7QUFFdkJDLFlBQU0sRUFBRSxNQUZlO0FBR3ZCQyxVQUFJLEVBQUU7QUFDSm5CLGdCQUFRLEVBQUVBO0FBRE47QUFIaUIsS0FBRCxDQUF4QjtBQU9BTyxlQUFXLENBQUNnQixJQUFJLENBQUNKLElBQU4sQ0FBWDtBQUNELEdBVEQsQ0F2QnFELENBaUNyRDs7O0FBR0FLLGlEQUFBLENBQWdCLE1BQU07QUFDcEJiLGVBQVc7QUFDWGMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QnBCLFFBQXhCO0FBQ0FtQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CN0IsUUFBcEI7QUFDRCxHQUpELEVBSUcsRUFKSDtBQU1BLFFBQU04QixPQUFPLEdBQUcsVUFBaEI7QUFFQSxzQkFDRSxxRUFBQyxPQUFELENBQVMsUUFBVDtBQUNBLFNBQUssRUFBRTtBQUNMQSxhQURLO0FBRUx2QixvQkFGSztBQUdMQyx1QkFISztBQUlMUixjQUpLO0FBS0xDLGlCQUxLO0FBTUxRLGNBTks7QUFPTEMsaUJBUEs7QUFRTEMsV0FSSztBQVNMQztBQVRLLEtBRFA7QUFBQSxjQWFHYjtBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxDQTdETTtBQThEUEQsY0FBYyxDQUFDaUMsU0FBZixHQUEyQjtBQUN6QmhDLFVBQVEsRUFBRWlDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQSxDQUEzQixDLENBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBpZ25vcmVSZXF1ZXN0IH0gZnJvbSAnLi4vcGFnZXMvYXBpL2lnbm9yZVJlcXVlc3QnO1xuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdjb25zb2xlJztcblxuXG5pbnRlcmZhY2UgQXBwQ29udGV4dEludGVyZmFjZSB7XG4gIGFwcE5hbWU6IHN0cmluZyxcbiAgdXNlckRhdGE6IFVzZXIsXG4gIHNldFVzZXJEYXRhOiAoYXJnOiBVc2VyKSA9PiB2b2lkLFxuICBjdXJyZW50TWVzc2FnZTogbnVtYmVyLFxuICBzZXRDdXJyZW50TWVzc2FnZTogKGFyZzpudW1iZXIpID0+IHZvaWQ7XG4gIG1lc3NhZ2VzOiBTZW5kZXJbXSxcbiAgc2V0TWVzc2FnZXM6IChhcmc6IFNlbmRlcltdKSA9PiB2b2lkO1xuICBkcmFmdDogRHJhZnQsXG4gIHNldERyYWZ0OiAoYXJnOkRyYWZ0KSA9PiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZW5kZXIge1xuICB1c2VybmFtZTogc3RyaW5nLFxuICBmaXJzdDogc3RyaW5nLFxuICBsYXN0OiBzdHJpbmcsXG4gIGF2YXRhcjogc3RyaW5nLFxuICB0ZXh0OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIHVzZXJuYW1lOiBzdHJpbmcsXG4gIGZpcnN0OiBzdHJpbmcsXG4gIGxhc3Q6IHN0cmluZyxcbiAgYXZhdGFyOiBzdHJpbmcsXG59XG5leHBvcnQgaW50ZXJmYWNlIERyYWZ0IHtcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgbWVzc2FnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBcHBDb250ZXh0SW50ZXJmYWNlIHwgbnVsbD4obnVsbCk7XG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXI+KHt1c2VybmFtZTogJycsIGZpcnN0OiAnJywgbGFzdDogJycsIGF2YXRhcjogJyd9KVxuXG4gIGNvbnN0IFtjdXJyZW50TWVzc2FnZSwgc2V0Q3VycmVudE1lc3NhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPFNlbmRlcltdPihbXSk7XG5cbiAgY29uc3QgW2RyYWZ0LCBzZXREcmFmdF0gPSB1c2VTdGF0ZTxEcmFmdD4oeyB1c2VybmFtZTonJywgbWVzc2FnZTonJyB9KVxuXG4gIGNvbnN0IGdldFVzZXJEYXRhID0gYXN5bmMgKCkgPT4geyAvL25lZWRzIHRvIGhhcHBlbiBzZXJ2ZXIgc2lkZVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3Moe1xuICAgICAgdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvZ2V0VXNlckRhdGFgLFxuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgc2V0VXNlckRhdGEocmVzcC5kYXRhKTtcbiAgICAgIGdldE1lc3NhZ2VzKHJlc3AuZGF0YS51c2VybmFtZSk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgIFJvdXRlci5yZXBsYWNlKCcvbG9naW4nKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbWVzcyA9IGF3YWl0IGF4aW9zKHtcbiAgICAgIHVybDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL2dldE1lc3NhZ2VzYCxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHNldE1lc3NhZ2VzKG1lc3MuZGF0YSlcbiAgfVxuICAvLyBmaWxsIG1lc3NhZ2Ugd2l0aCBkZWZhdWx0IHZhbHVlcyBmb3IgbmV3IHVzZXJcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlckRhdGEoKTtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZXMnLCBtZXNzYWdlcylcbiAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXJEYXRhKVxuICB9LCBbXSlcblxuICBjb25zdCBhcHBOYW1lID0gXCJQb3N0Y2FyZFwiO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICB2YWx1ZT17e1xuICAgICAgYXBwTmFtZSxcbiAgICAgIGN1cnJlbnRNZXNzYWdlLFxuICAgICAgc2V0Q3VycmVudE1lc3NhZ2UsXG4gICAgICB1c2VyRGF0YSxcbiAgICAgIHNldFVzZXJEYXRhLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZXRNZXNzYWdlcyxcbiAgICAgIGRyYWZ0LFxuICAgICAgc2V0RHJhZnQsXG4gICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbkNvbmZpZ1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG4vLyBDb25maWdQcm92aWRlci5nZXRJbnRpYWxQcm9wcyA9IGFzeW5jIChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xuLy8gICBjb25zdCBjb29raWUgPSBjdHgucmVxPy5oZWFkZXJzLmNvb2tpZTtcblxuLy8gICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3Moe1xuLy8gICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0VXNlckRhdGEnLFxuLy8gICAgIG1ldGhvZDogJ2dldCcsXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgY29va2llOiBjb29raWUhLFxuLy8gICAgIH0sXG4vLyAgIH0pO1xuLy8gICBjb25zb2xlLmxvZygna2xqZmxrYXNqZGZsYXNkZmpoO2pkc2lmaGRzO2xmaGRzO2Zoc2RmJyxyZXNwKTtcbi8vICAgcmV0dXJuIHt1c2VyOiByZXNwfTtcbi8vICAgLy8gaWYgKHJlc3Auc3RhdHVzID09PSA0MDEgJiYgIWN0eC5yZXEpIHtcbi8vICAgLy8gICBSb3V0ZXIucmVwbGFjZSgnL2xvZ2luJyk7XG4vLyAgIC8vICAgcmV0dXJuO1xuLy8gICAvLyB9XG4vLyAgIC8vIGlmIChyZXNwLnN0YXR1cyA9PT0gNDAxKSB7XG4vLyAgIC8vICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7XG4vLyAgIC8vICAgICBsb2NhdGlvbjogJ2h0dHA6Ly9sb2NhbGhvc3QuY29tL2xvZ2luJ1xuLy8gICAvLyAgIH0pO1xuLy8gICAvLyAgIGN0eC5yZXMuZW5kKCk7XG4vLyAgIC8vICAgcmV0dXJuO1xuLy8gICAvLyB9XG4vLyAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyBmcm9tIGdldCBpbml0aWFsIHByb3BzJyxyZXNwKVxuLy8gICAvLyByZXR1cm4ge21lc3NhZ2VzOiByZXNwfVxuLy8gfVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context.tsx\n");

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