"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_stats_index_js";
exports.ids = ["components_stats_index_js"];
exports.modules = {

/***/ "./components/stats/index.js":
/*!***********************************!*\
  !*** ./components/stats/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Stats: () => (/* binding */ Stats)\n/* harmony export */ });\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/hamo */ \"@studio-freight/hamo\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stats.js */ \"stats.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_0__]);\n_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Stats = ()=>{\n    const stats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>new (stats_js__WEBPACK_IMPORTED_MODULE_2___default())(), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom\n        ;\n        document.body.appendChild(stats.dom);\n        return ()=>{\n            stats.dom.remove();\n        };\n    }, [\n        stats\n    ]);\n    (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_0__.useFrame)(()=>{\n        stats.begin();\n    }, -Infinity);\n    (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_0__.useFrame)(()=>{\n        stats.end();\n    }, Infinity);\n    return null;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YXRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUNMO0FBQ2I7QUFFdEIsTUFBTUksUUFBUTtJQUNuQixNQUFNQyxRQUFRSCw4Q0FBT0EsQ0FBQyxJQUFNLElBQUlDLGlEQUFNQSxJQUFJLEVBQUU7SUFFNUNGLGdEQUFTQSxDQUFDO1FBQ1JJLE1BQU1DLFNBQVMsQ0FBQyxHQUFHLG1DQUFtQzs7UUFDdERDLFNBQVNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixNQUFNSyxHQUFHO1FBRW5DLE9BQU87WUFDTEwsTUFBTUssR0FBRyxDQUFDQyxNQUFNO1FBQ2xCO0lBQ0YsR0FBRztRQUFDTjtLQUFNO0lBRVZMLDhEQUFRQSxDQUFDO1FBQ1BLLE1BQU1PLEtBQUs7SUFDYixHQUFHLENBQUNDO0lBRUpiLDhEQUFRQSxDQUFDO1FBQ1BLLE1BQU1TLEdBQUc7SUFDWCxHQUFHRDtJQUVILE9BQU87QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2NvbXBvbmVudHMvc3RhdHMvaW5kZXguanM/OGQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0BzdHVkaW8tZnJlaWdodC9oYW1vJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgX1N0YXRzIGZyb20gJ3N0YXRzLmpzJ1xuXG5leHBvcnQgY29uc3QgU3RhdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRzID0gdXNlTWVtbygoKSA9PiBuZXcgX1N0YXRzKCksIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdHMuc2hvd1BhbmVsKDApIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3RhdHMuZG9tLnJlbW92ZSgpXG4gICAgfVxuICB9LCBbc3RhdHNdKVxuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBzdGF0cy5iZWdpbigpXG4gIH0sIC1JbmZpbml0eSlcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgc3RhdHMuZW5kKClcbiAgfSwgSW5maW5pdHkpXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGcmFtZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJfU3RhdHMiLCJTdGF0cyIsInN0YXRzIiwic2hvd1BhbmVsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb20iLCJyZW1vdmUiLCJiZWdpbiIsIkluZmluaXR5IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stats/index.js\n");

/***/ })

};
;