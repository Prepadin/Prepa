/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/real-viewport/index.js":
/*!*******************************************!*\
  !*** ./components/real-viewport/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RealViewport: () => (/* binding */ RealViewport)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RealViewport = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/\n        function onWindowResize() {\n            document.documentElement.style.setProperty(\"--vh\", window.innerHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--dvh\", window.innerHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--svh\", document.documentElement.clientHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--lvh\", \"1vh\");\n        }\n        window.addEventListener(\"resize\", onWindowResize, false);\n        onWindowResize();\n        return ()=>{\n            window.removeEventListener(\"resize\", onWindowResize, false);\n        };\n    }, []);\n    return null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlYWwtdmlld3BvcnQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLGVBQWU7SUFDMUJELGdEQUFTQSxDQUFDO1FBQ1IsK0RBQStEO1FBQy9ELFNBQVNFO1lBQ1BDLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQ3hDLFFBQ0FDLE9BQU9DLFdBQVcsR0FBRyxPQUFPO1lBRzlCTCxTQUFTQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUN4QyxTQUNBQyxPQUFPQyxXQUFXLEdBQUcsT0FBTztZQUc5QkwsU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FDeEMsU0FDQUgsU0FBU0MsZUFBZSxDQUFDSyxZQUFZLEdBQUcsT0FBTztZQUdqRE4sU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxTQUFTO1FBQ3REO1FBRUFDLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVSLGdCQUFnQjtRQUNsREE7UUFFQSxPQUFPO1lBQ0xLLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVULGdCQUFnQjtRQUN2RDtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU87QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2NvbXBvbmVudHMvcmVhbC12aWV3cG9ydC9pbmRleC5qcz8yODkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgUmVhbFZpZXdwb3J0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS12aCcsXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDEgKyAncHgnXG4gICAgICApXG5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tZHZoJyxcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICogMC4wMSArICdweCdcbiAgICAgIClcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1zdmgnLFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICogMC4wMSArICdweCdcbiAgICAgIClcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWx2aCcsICcxdmgnKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgb25XaW5kb3dSZXNpemUoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gbnVsbFxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlYWxWaWV3cG9ydCIsIm9uV2luZG93UmVzaXplIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/real-viewport/index.js\n");

/***/ }),

/***/ "./hooks/use-scroll.js":
/*!*****************************!*\
  !*** ./hooks/use-scroll.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScroll: () => (/* binding */ useScroll)\n/* harmony export */ });\n/* harmony import */ var lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/store */ \"./lib/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_store__WEBPACK_IMPORTED_MODULE_0__]);\nlib_store__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction useScroll(callback, deps = []) {\n    const lenis = (0,lib_store__WEBPACK_IMPORTED_MODULE_0__.useStore)(({ lenis })=>lenis);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!lenis) return;\n        lenis.on(\"scroll\", callback);\n        lenis.emit();\n        return ()=>{\n            lenis.off(\"scroll\", callback);\n        };\n    }, [\n        lenis,\n        callback,\n        [\n            ...deps\n        ]\n    ]);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2Utc2Nyb2xsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDSDtBQUUxQixTQUFTRSxVQUFVQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUMzQyxNQUFNQyxRQUFRTCxtREFBUUEsQ0FBQyxDQUFDLEVBQUVLLEtBQUssRUFBRSxHQUFLQTtJQUV0Q0osZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNJLE9BQU87UUFDWkEsTUFBTUMsRUFBRSxDQUFDLFVBQVVIO1FBQ25CRSxNQUFNRSxJQUFJO1FBRVYsT0FBTztZQUNMRixNQUFNRyxHQUFHLENBQUMsVUFBVUw7UUFDdEI7SUFDRixHQUFHO1FBQUNFO1FBQU9GO1FBQVU7ZUFBSUM7U0FBSztLQUFDO0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2hvb2tzL3VzZS1zY3JvbGwuanM/YWY3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2xpYi9zdG9yZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsKGNhbGxiYWNrLCBkZXBzID0gW10pIHtcbiAgY29uc3QgbGVuaXMgPSB1c2VTdG9yZSgoeyBsZW5pcyB9KSA9PiBsZW5pcylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGVuaXMpIHJldHVyblxuICAgIGxlbmlzLm9uKCdzY3JvbGwnLCBjYWxsYmFjaylcbiAgICBsZW5pcy5lbWl0KClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZW5pcy5vZmYoJ3Njcm9sbCcsIGNhbGxiYWNrKVxuICAgIH1cbiAgfSwgW2xlbmlzLCBjYWxsYmFjaywgWy4uLmRlcHNdXSlcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsInVzZUVmZmVjdCIsInVzZVNjcm9sbCIsImNhbGxiYWNrIiwiZGVwcyIsImxlbmlzIiwib24iLCJlbWl0Iiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-scroll.js\n");

/***/ }),

/***/ "./lib/analytics.js":
/*!**************************!*\
  !*** ./lib/analytics.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GA_ID: () => (/* binding */ GA_ID),\n/* harmony export */   GTM_ID: () => (/* binding */ GTM_ID),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || \"G-XXZ273XT00\";\nconst GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || \"\";\nconst pageview = (url)=>{\n    window.dataLayer.push({\n        event: \"pageview\",\n        page: url\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5hbHl0aWNzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLFNBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0MsaUNBQWlDLElBQUksZUFBYztBQUMxRCxNQUFNQyxRQUFRSCxRQUFRQyxHQUFHLENBQUNHLDRCQUE0QixJQUFJLEdBQUU7QUFFNUQsTUFBTUMsV0FBVyxDQUFDQztJQUN2QkMsT0FBT0MsU0FBUyxDQUFDQyxJQUFJLENBQUM7UUFDcEJDLE9BQU87UUFDUEMsTUFBTUw7SUFDUjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbGliL2FuYWx5dGljcy5qcz80Y2RiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHVE1fSUQgPVxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfVEFHX01BTkFHRVJfSUQgfHwgJ0ctWFhaMjczWFQwMCdcbmV4cG9ydCBjb25zdCBHQV9JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MgfHwgJydcblxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xuICB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuICAgIGV2ZW50OiAncGFnZXZpZXcnLFxuICAgIHBhZ2U6IHVybCxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJHVE1fSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX1RBR19NQU5BR0VSX0lEIiwiR0FfSUQiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJkYXRhTGF5ZXIiLCJwdXNoIiwiZXZlbnQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/analytics.js\n");

/***/ }),

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({\n        headerData: undefined,\n        setHeaderData: (headerData)=>set({\n                headerData\n            }),\n        footerData: undefined,\n        setFooterData: (footerData)=>set({\n                footerData\n            }),\n        navIsOpen: false,\n        setNavIsOpen: (toggle)=>set({\n                navIsOpen: toggle,\n                overflow: !toggle\n            }),\n        lenis: undefined,\n        setLenis: (lenis)=>set({\n                lenis\n            }),\n        overflow: true,\n        setOverflow: (overflow)=>set({\n                overflow\n            }),\n        triggerTransition: \"\",\n        setTriggerTransition: (triggerTransition)=>set({\n                triggerTransition\n            }),\n        thresholds: {},\n        addThreshold: ({ id, value })=>{\n            let thresholds = {\n                ...get().thresholds\n            };\n            thresholds[id] = value;\n            set({\n                thresholds\n            });\n        },\n        // removeThreshold: (threshold) => {\n        //   set({ threshold })\n        // },\n        introOut: false,\n        setIntroOut: (introOut)=>set({\n                introOut\n            })\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsV0FBV0QsK0NBQU1BLENBQUMsQ0FBQ0UsS0FBS0MsTUFBUztRQUM1Q0MsWUFBWUM7UUFDWkMsZUFBZSxDQUFDRixhQUFlRixJQUFJO2dCQUFFRTtZQUFXO1FBQ2hERyxZQUFZRjtRQUNaRyxlQUFlLENBQUNELGFBQWVMLElBQUk7Z0JBQUVLO1lBQVc7UUFDaERFLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxTQUFXVCxJQUFJO2dCQUFFTyxXQUFXRTtnQkFBUUMsVUFBVSxDQUFDRDtZQUFPO1FBQ3JFRSxPQUFPUjtRQUNQUyxVQUFVLENBQUNELFFBQVVYLElBQUk7Z0JBQUVXO1lBQU07UUFDakNELFVBQVU7UUFDVkcsYUFBYSxDQUFDSCxXQUFhVixJQUFJO2dCQUFFVTtZQUFTO1FBQzFDSSxtQkFBbUI7UUFDbkJDLHNCQUFzQixDQUFDRCxvQkFBc0JkLElBQUk7Z0JBQUVjO1lBQWtCO1FBQ3JFRSxZQUFZLENBQUM7UUFDYkMsY0FBYyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFO1lBQzFCLElBQUlILGFBQWE7Z0JBQUUsR0FBR2YsTUFBTWUsVUFBVTtZQUFDO1lBQ3ZDQSxVQUFVLENBQUNFLEdBQUcsR0FBR0M7WUFFakJuQixJQUFJO2dCQUFFZ0I7WUFBVztRQUNuQjtRQUNBLG9DQUFvQztRQUNwQyx1QkFBdUI7UUFDdkIsS0FBSztRQUNMSSxVQUFVO1FBQ1ZDLGFBQWEsQ0FBQ0QsV0FBYXBCLElBQUk7Z0JBQUVvQjtZQUFTO0lBQzVDLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbGliL3N0b3JlLmpzPzA0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKChzZXQsIGdldCkgPT4gKHtcbiAgaGVhZGVyRGF0YTogdW5kZWZpbmVkLFxuICBzZXRIZWFkZXJEYXRhOiAoaGVhZGVyRGF0YSkgPT4gc2V0KHsgaGVhZGVyRGF0YSB9KSxcbiAgZm9vdGVyRGF0YTogdW5kZWZpbmVkLFxuICBzZXRGb290ZXJEYXRhOiAoZm9vdGVyRGF0YSkgPT4gc2V0KHsgZm9vdGVyRGF0YSB9KSxcbiAgbmF2SXNPcGVuOiBmYWxzZSxcbiAgc2V0TmF2SXNPcGVuOiAodG9nZ2xlKSA9PiBzZXQoeyBuYXZJc09wZW46IHRvZ2dsZSwgb3ZlcmZsb3c6ICF0b2dnbGUgfSksXG4gIGxlbmlzOiB1bmRlZmluZWQsXG4gIHNldExlbmlzOiAobGVuaXMpID0+IHNldCh7IGxlbmlzIH0pLFxuICBvdmVyZmxvdzogdHJ1ZSxcbiAgc2V0T3ZlcmZsb3c6IChvdmVyZmxvdykgPT4gc2V0KHsgb3ZlcmZsb3cgfSksXG4gIHRyaWdnZXJUcmFuc2l0aW9uOiAnJyxcbiAgc2V0VHJpZ2dlclRyYW5zaXRpb246ICh0cmlnZ2VyVHJhbnNpdGlvbikgPT4gc2V0KHsgdHJpZ2dlclRyYW5zaXRpb24gfSksXG4gIHRocmVzaG9sZHM6IHt9LFxuICBhZGRUaHJlc2hvbGQ6ICh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHRocmVzaG9sZHMgPSB7IC4uLmdldCgpLnRocmVzaG9sZHMgfVxuICAgIHRocmVzaG9sZHNbaWRdID0gdmFsdWVcblxuICAgIHNldCh7IHRocmVzaG9sZHMgfSlcbiAgfSxcbiAgLy8gcmVtb3ZlVGhyZXNob2xkOiAodGhyZXNob2xkKSA9PiB7XG4gIC8vICAgc2V0KHsgdGhyZXNob2xkIH0pXG4gIC8vIH0sXG4gIGludHJvT3V0OiBmYWxzZSxcbiAgc2V0SW50cm9PdXQ6IChpbnRyb091dCkgPT4gc2V0KHsgaW50cm9PdXQgfSksXG59KSlcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VTdG9yZSIsInNldCIsImdldCIsImhlYWRlckRhdGEiLCJ1bmRlZmluZWQiLCJzZXRIZWFkZXJEYXRhIiwiZm9vdGVyRGF0YSIsInNldEZvb3RlckRhdGEiLCJuYXZJc09wZW4iLCJzZXROYXZJc09wZW4iLCJ0b2dnbGUiLCJvdmVyZmxvdyIsImxlbmlzIiwic2V0TGVuaXMiLCJzZXRPdmVyZmxvdyIsInRyaWdnZXJUcmFuc2l0aW9uIiwic2V0VHJpZ2dlclRyYW5zaXRpb24iLCJ0aHJlc2hvbGRzIiwiYWRkVGhyZXNob2xkIiwiaWQiLCJ2YWx1ZSIsImludHJvT3V0Iiwic2V0SW50cm9PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @studio-freight/hamo */ \"@studio-freight/hamo\");\n/* harmony import */ var _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/tempus */ \"@studio-freight/tempus\");\n/* harmony import */ var components_real_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/real-viewport */ \"./components/real-viewport/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"gsap/dist/ScrollTrigger\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/use-scroll */ \"./hooks/use-scroll.js\");\n/* harmony import */ var lib_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/analytics */ \"./lib/analytics.js\");\n/* harmony import */ var lib_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/store */ \"./lib/store.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2/node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/script */ \"./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2/node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styles_global_scss__WEBPACK_IMPORTED_MODULE_12__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__, lib_store__WEBPACK_IMPORTED_MODULE_8__]);\n([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__, lib_store__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nif (false) {}\nconst Stats = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/*! import() */ \"components_stats_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/stats */ \"./components/stats/index.js\")).then(({ Stats })=>Stats), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"components/stats\"\n        ]\n    },\n    ssr: false\n});\nconst GridDebugger = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>__webpack_require__.e(/*! import() */ \"components_grid-debugger_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/grid-debugger */ \"./components/grid-debugger/index.js\")).then(({ GridDebugger })=>GridDebugger), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"components/grid-debugger\"\n        ]\n    },\n    ssr: false\n});\nconst Leva = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(()=>Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! leva */ \"leva\", 23)).then(({ Leva })=>Leva), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"leva\"\n        ]\n    },\n    ssr: false\n});\nfunction MyApp({ Component, pageProps }) {\n    const debug = (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__.useDebug)();\n    const lenis = (0,lib_store__WEBPACK_IMPORTED_MODULE_8__.useStore)(({ lenis })=>lenis);\n    (0,hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__.useScroll)(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.update);\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        if (lenis) {\n            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.refresh();\n            lenis?.start();\n        }\n    }, [\n        lenis\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(()=>{\n        window.history.scrollRestoration = \"manual\";\n    }, []);\n    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.defaults({\n        markers: \"development\" === \"development\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Leva, {\n                hidden: !debug\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            debug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridDebugger, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\pages\\\\_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stats, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\pages\\\\_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n             false && /*#__PURE__*/ 0,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_real_viewport__WEBPACK_IMPORTED_MODULE_3__.RealViewport, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\pages\\\\_app.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\pages\\\\_app.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSDtBQUNXO0FBQzVCO0FBQzRCO0FBQ1g7QUFDTjtBQUNGO0FBQ0Y7QUFDRjtBQUNDO0FBQ047QUFFM0IsSUFBSSxLQUFrQixFQUFhLEVBVWxDO0FBRUQsTUFBTXFCLFFBQVFiLG1EQUFPQSxDQUNuQixJQUFNLDZLQUFPLENBQW9CYyxJQUFJLENBQUMsQ0FBQyxFQUFFRCxLQUFLLEVBQUUsR0FBS0E7Ozs7OztJQUNuREUsS0FBSzs7QUFHVCxNQUFNQyxlQUFlaEIsbURBQU9BLENBQzFCLElBQ0UscU1BQU8sQ0FBNEJjLElBQUksQ0FBQyxDQUFDLEVBQUVFLFlBQVksRUFBRSxHQUFLQTs7Ozs7O0lBQzlERCxLQUFLOztBQUdULE1BQU1FLE9BQU9qQixtREFBT0EsQ0FBQyxJQUFNLDhHQUFPLENBQVFjLElBQUksQ0FBQyxDQUFDLEVBQUVHLElBQUksRUFBRSxHQUFLQTs7Ozs7O0lBQzNERixLQUFLOztBQUdQLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTUMsUUFBUTdCLDhEQUFRQTtJQUN0QixNQUFNOEIsUUFBUXZCLG1EQUFRQSxDQUFDLENBQUMsRUFBRXVCLEtBQUssRUFBRSxHQUFLQTtJQUV0Q3pCLDJEQUFTQSxDQUFDRCxrRUFBYUEsQ0FBQzJCLE1BQU07SUFFOUJyQixpREFBU0EsQ0FBQztRQUNSLElBQUlvQixPQUFPO1lBQ1QxQixrRUFBYUEsQ0FBQzRCLE9BQU87WUFDckJGLE9BQU9HO1FBQ1Q7SUFDRixHQUFHO1FBQUNIO0tBQU07SUFFVnBCLGlEQUFTQSxDQUFDO1FBQ1J3QixPQUFPQyxPQUFPLENBQUNDLGlCQUFpQixHQUFHO0lBQ3JDLEdBQUcsRUFBRTtJQUVMaEMsa0VBQWFBLENBQUNRLFFBQVEsQ0FBQztRQUFFQyxTQUFTQyxrQkFBeUI7SUFBYztJQUV6RSxxQkFDRTs7MEJBQ0UsOERBQUNXO2dCQUFLWSxRQUFRLENBQUNSOzs7Ozs7WUFDZEEsdUJBQ0M7O2tDQUNFLDhEQUFDTDs7Ozs7a0NBQ0QsOERBQUNIOzs7Ozs7O1lBakVYLE1Bc0VnQyxrQkFDeEI7MEJBbUJGLDhEQUFDbkIsa0VBQVlBOzs7OzswQkFDYiw4REFBQ3lCO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURlYnVnIH0gZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2hhbW8nXG5pbXBvcnQgeyByYWYgfSBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvdGVtcHVzJ1xuaW1wb3J0IHsgUmVhbFZpZXdwb3J0IH0gZnJvbSAnY29tcG9uZW50cy9yZWFsLXZpZXdwb3J0J1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXInXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdob29rcy91c2Utc2Nyb2xsJ1xuaW1wb3J0IHsgR1RNX0lEIH0gZnJvbSAnbGliL2FuYWx5dGljcydcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnbGliL3N0b3JlJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdzdHlsZXMvZ2xvYmFsLnNjc3MnXG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMoeyBtYXJrZXJzOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KVxuXG4gIC8vIG1lcmdlIHJhZnNcbiAgZ3NhcC50aWNrZXIubGFnU21vb3RoaW5nKDApXG4gIGdzYXAudGlja2VyLnJlbW92ZShnc2FwLnVwZGF0ZVJvb3QpXG4gIHJhZi5hZGQoKHRpbWUpID0+IHtcbiAgICBnc2FwLnVwZGF0ZVJvb3QodGltZSAvIDEwMDApXG4gIH0sIDApXG59XG5cbmNvbnN0IFN0YXRzID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdjb21wb25lbnRzL3N0YXRzJykudGhlbigoeyBTdGF0cyB9KSA9PiBTdGF0cyksXG4gIHsgc3NyOiBmYWxzZSB9XG4pXG5cbmNvbnN0IEdyaWREZWJ1Z2dlciA9IGR5bmFtaWMoXG4gICgpID0+XG4gICAgaW1wb3J0KCdjb21wb25lbnRzL2dyaWQtZGVidWdnZXInKS50aGVuKCh7IEdyaWREZWJ1Z2dlciB9KSA9PiBHcmlkRGVidWdnZXIpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBMZXZhID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2xldmEnKS50aGVuKCh7IExldmEgfSkgPT4gTGV2YSksIHtcbiAgc3NyOiBmYWxzZSxcbn0pXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBkZWJ1ZyA9IHVzZURlYnVnKClcbiAgY29uc3QgbGVuaXMgPSB1c2VTdG9yZSgoeyBsZW5pcyB9KSA9PiBsZW5pcylcblxuICB1c2VTY3JvbGwoU2Nyb2xsVHJpZ2dlci51cGRhdGUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGVuaXMpIHtcbiAgICAgIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpXG4gICAgICBsZW5pcz8uc3RhcnQoKVxuICAgIH1cbiAgfSwgW2xlbmlzXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgfSwgW10pXG5cbiAgU2Nyb2xsVHJpZ2dlci5kZWZhdWx0cyh7IG1hcmtlcnM6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExldmEgaGlkZGVuPXshZGVidWd9IC8+XG4gICAgICB7ZGVidWcgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxHcmlkRGVidWdnZXIgLz5cbiAgICAgICAgICA8U3RhdHMgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7LyogR29vZ2xlIFRhZyBNYW5hZ2VyIC0gR2xvYmFsIGJhc2UgY29kZSAqL31cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNjcmlwdFxuICAgICAgICAgICAgYXN5bmNcbiAgICAgICAgICAgIHN0cmF0ZWd5PVwid29ya2VyXCJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtHVE1fSUR9YH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTY3JpcHRcbiAgICAgICAgICAgIGlkPVwiZ3RtLWJhc2VcIlxuICAgICAgICAgICAgc3RyYXRlZ3k9XCJ3b3JrZXJcIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7R1RNX0lEfScpO2AsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgPFJlYWxWaWV3cG9ydCAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRGVidWciLCJyYWYiLCJSZWFsVmlld3BvcnQiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInVzZVNjcm9sbCIsIkdUTV9JRCIsInVzZVN0b3JlIiwiZHluYW1pYyIsIlNjcmlwdCIsInVzZUVmZmVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiZGVmYXVsdHMiLCJtYXJrZXJzIiwicHJvY2VzcyIsInRpY2tlciIsImxhZ1Ntb290aGluZyIsInJlbW92ZSIsInVwZGF0ZVJvb3QiLCJhZGQiLCJ0aW1lIiwiU3RhdHMiLCJ0aGVuIiwic3NyIiwiR3JpZERlYnVnZ2VyIiwiTGV2YSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGVidWciLCJsZW5pcyIsInVwZGF0ZSIsInJlZnJlc2giLCJzdGFydCIsIndpbmRvdyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsImhpZGRlbiIsImFzeW5jIiwic3RyYXRlZ3kiLCJzcmMiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ "leva":
/*!***********************!*\
  !*** external "leva" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("leva");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stats.js":
/*!***************************!*\
  !*** external "stats.js" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("stats.js");

/***/ }),

/***/ "@studio-freight/hamo":
/*!***************************************!*\
  !*** external "@studio-freight/hamo" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/hamo");;

/***/ }),

/***/ "@studio-freight/tempus":
/*!*****************************************!*\
  !*** external "@studio-freight/tempus" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/tempus");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2","vendor-chunks/@swc+helpers@0.5.5"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();