/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_stats_index_js"],{

/***/ "./components/stats/index.js":
/*!***********************************!*\
  !*** ./components/stats/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Stats: function() { return /* binding */ Stats; }\n/* harmony export */ });\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/hamo */ \"./node_modules/.pnpm/@studio-freight+hamo@0.6.33_react-dom@18.3.1_react@18.3.1/node_modules/@studio-freight/hamo/dist/hamo.modern.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats.js */ \"./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js\");\n/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nconst Stats = ()=>{\n    _s();\n    const stats = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (stats_js__WEBPACK_IMPORTED_MODULE_1___default())(), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom\n        ;\n        document.body.appendChild(stats.dom);\n        return ()=>{\n            stats.dom.remove();\n        };\n    }, [\n        stats\n    ]);\n    (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_2__.useFrame)(()=>{\n        stats.begin();\n    }, -Infinity);\n    (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_2__.useFrame)(()=>{\n        stats.end();\n    }, Infinity);\n    return null;\n};\n_s(Stats, \"5qVJs75Hq42iGd7WBEYmE0L/uVc=\", false, function() {\n    return [\n        _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_2__.useFrame,\n        _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Stats;\nvar _c;\n$RefreshReg$(_c, \"Stats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0YXRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDTDtBQUNiO0FBRXRCLE1BQU1JLFFBQVE7O0lBQ25CLE1BQU1DLFFBQVFILDhDQUFPQSxDQUFDLElBQU0sSUFBSUMsaURBQU1BLElBQUksRUFBRTtJQUU1Q0YsZ0RBQVNBLENBQUM7UUFDUkksTUFBTUMsU0FBUyxDQUFDLEdBQUcsbUNBQW1DOztRQUN0REMsU0FBU0MsSUFBSSxDQUFDQyxXQUFXLENBQUNKLE1BQU1LLEdBQUc7UUFFbkMsT0FBTztZQUNMTCxNQUFNSyxHQUFHLENBQUNDLE1BQU07UUFDbEI7SUFDRixHQUFHO1FBQUNOO0tBQU07SUFFVkwsOERBQVFBLENBQUM7UUFDUEssTUFBTU8sS0FBSztJQUNiLEdBQUcsQ0FBQ0M7SUFFSmIsOERBQVFBLENBQUM7UUFDUEssTUFBTVMsR0FBRztJQUNYLEdBQUdEO0lBRUgsT0FBTztBQUNULEVBQUM7R0FyQllUOztRQVlYSiwwREFBUUE7UUFJUkEsMERBQVFBOzs7S0FoQkdJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3RhdHMvaW5kZXguanM/OGQ4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gJ0BzdHVkaW8tZnJlaWdodC9oYW1vJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgX1N0YXRzIGZyb20gJ3N0YXRzLmpzJ1xuXG5leHBvcnQgY29uc3QgU3RhdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRzID0gdXNlTWVtbygoKSA9PiBuZXcgX1N0YXRzKCksIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhdHMuc2hvd1BhbmVsKDApIC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3RhdHMuZG9tLnJlbW92ZSgpXG4gICAgfVxuICB9LCBbc3RhdHNdKVxuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBzdGF0cy5iZWdpbigpXG4gIH0sIC1JbmZpbml0eSlcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgc3RhdHMuZW5kKClcbiAgfSwgSW5maW5pdHkpXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGcmFtZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJfU3RhdHMiLCJTdGF0cyIsInN0YXRzIiwic2hvd1BhbmVsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb20iLCJyZW1vdmUiLCJiZWdpbiIsIkluZmluaXR5IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/stats/index.js\n"));

/***/ }),

/***/ "./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vc3RhdHMuanNAMC4xNy4wL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9idWlsZC9zdGF0cy5taW4uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxlQUFlLEtBQXNELG9CQUFvQixDQUE0RCxDQUFDLGtCQUFrQixpQkFBaUIsY0FBYyxxQkFBcUIsU0FBUyxjQUFjLFlBQVksb0JBQW9CLHFEQUFxRCxJQUFJLHdDQUF3QyxnQ0FBZ0MsTUFBTSxPQUFPLGVBQWUsWUFBWSxlQUFlLHVDQUF1QztBQUNsZix5QkFBeUIsS0FBSyxtSEFBbUgsc0ZBQXNGLEtBQUssT0FBTywwREFBMEQsNEJBQTRCLGdCQUFnQixJQUFJLGdDQUFnQyxrQkFBa0IsbURBQW1ELHlCQUF5QjtBQUMzZCxtQ0FBbUMsU0FBUyxtQkFBbUIsYUFBYSwwQkFBMEIsd0JBQXdCLHdKQUF3SixVQUFVLFdBQVcsNEJBQTRCLGFBQWEseUJBQXlCLG1EQUFtRCxxQkFBcUIsY0FBYyxvQkFBb0IsY0FBYztBQUNyZSxvQkFBb0IsY0FBYyxpQkFBaUIsb0JBQW9CLE9BQU8sMkJBQTJCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0Isb0JBQW9CLGNBQWMsa0RBQWtELHFDQUFxQyx3QkFBd0IsY0FBYyxpQkFBaUIsc0NBQXNDLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0YXRzLmpzQDAuMTcuMC9ub2RlX21vZHVsZXMvc3RhdHMuanMvYnVpbGQvc3RhdHMubWluLmpzP2U1Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3RhdHMuanMgLSBodHRwOi8vZ2l0aHViLmNvbS9tcmRvb2Ivc3RhdHMuanNcbihmdW5jdGlvbihmLGUpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOmYuU3RhdHM9ZSgpfSkodGhpcyxmdW5jdGlvbigpe3ZhciBmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtjLmFwcGVuZENoaWxkKGEuZG9tKTtyZXR1cm4gYX1mdW5jdGlvbiB1KGEpe2Zvcih2YXIgZD0wO2Q8Yy5jaGlsZHJlbi5sZW5ndGg7ZCsrKWMuY2hpbGRyZW5bZF0uc3R5bGUuZGlzcGxheT1kPT09YT9cImJsb2NrXCI6XCJub25lXCI7bD1hfXZhciBsPTAsYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Muc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwXCI7Yy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihhKXthLnByZXZlbnREZWZhdWx0KCk7XG51KCsrbCVjLmNoaWxkcmVuLmxlbmd0aCl9LCExKTt2YXIgaz0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpLGc9ayxhPTAscj1lKG5ldyBmLlBhbmVsKFwiRlBTXCIsXCIjMGZmXCIsXCIjMDAyXCIpKSxoPWUobmV3IGYuUGFuZWwoXCJNU1wiLFwiIzBmMFwiLFwiIzAyMFwiKSk7aWYoc2VsZi5wZXJmb3JtYW5jZSYmc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkpdmFyIHQ9ZShuZXcgZi5QYW5lbChcIk1CXCIsXCIjZjA4XCIsXCIjMjAxXCIpKTt1KDApO3JldHVybntSRVZJU0lPTjoxNixkb206YyxhZGRQYW5lbDplLHNob3dQYW5lbDp1LGJlZ2luOmZ1bmN0aW9uKCl7az0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpfSxlbmQ6ZnVuY3Rpb24oKXthKys7dmFyIGM9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKTtoLnVwZGF0ZShjLWssMjAwKTtpZihjPmcrMUUzJiYoci51cGRhdGUoMUUzKmEvKGMtZyksMTAwKSxnPWMsYT0wLHQpKXt2YXIgZD1wZXJmb3JtYW5jZS5tZW1vcnk7dC51cGRhdGUoZC51c2VkSlNIZWFwU2l6ZS9cbjEwNDg1NzYsZC5qc0hlYXBTaXplTGltaXQvMTA0ODU3Nil9cmV0dXJuIGN9LHVwZGF0ZTpmdW5jdGlvbigpe2s9dGhpcy5lbmQoKX0sZG9tRWxlbWVudDpjLHNldE1vZGU6dX19O2YuUGFuZWw9ZnVuY3Rpb24oZSxmLGwpe3ZhciBjPUluZmluaXR5LGs9MCxnPU1hdGgucm91bmQsYT1nKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSxyPTgwKmEsaD00OCphLHQ9MyphLHY9MiphLGQ9MyphLG09MTUqYSxuPTc0KmEscD0zMCphLHE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtxLndpZHRoPXI7cS5oZWlnaHQ9aDtxLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDo4MHB4O2hlaWdodDo0OHB4XCI7dmFyIGI9cS5nZXRDb250ZXh0KFwiMmRcIik7Yi5mb250PVwiYm9sZCBcIis5KmErXCJweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZlwiO2IudGV4dEJhc2VsaW5lPVwidG9wXCI7Yi5maWxsU3R5bGU9bDtiLmZpbGxSZWN0KDAsMCxyLGgpO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChlLHQsdik7XG5iLmZpbGxSZWN0KGQsbSxuLHApO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0uOTtiLmZpbGxSZWN0KGQsbSxuLHApO3JldHVybntkb206cSx1cGRhdGU6ZnVuY3Rpb24oaCx3KXtjPU1hdGgubWluKGMsaCk7az1NYXRoLm1heChrLGgpO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0xO2IuZmlsbFJlY3QoMCwwLHIsbSk7Yi5maWxsU3R5bGU9ZjtiLmZpbGxUZXh0KGcoaCkrXCIgXCIrZStcIiAoXCIrZyhjKStcIi1cIitnKGspK1wiKVwiLHQsdik7Yi5kcmF3SW1hZ2UocSxkK2EsbSxuLWEscCxkLG0sbi1hLHApO2IuZmlsbFJlY3QoZCtuLWEsbSxhLHApO2IuZmlsbFN0eWxlPWw7Yi5nbG9iYWxBbHBoYT0uOTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxnKCgxLWgvdykqcCkpfX19O3JldHVybiBmfSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/stats.js@0.17.0/node_modules/stats.js/build/stats.min.js\n"));

/***/ })

}]);