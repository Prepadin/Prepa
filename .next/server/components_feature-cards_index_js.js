/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_feature-cards_index_js";
exports.ids = ["components_feature-cards_index_js"];
exports.modules = {

/***/ "./components/feature-cards/feature-cards.module.scss":
/*!************************************************************!*\
  !*** ./components/feature-cards/feature-cards.module.scss ***!
  \************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"features\": \"feature-cards_features__UDkpX\",\n\t\"card\": \"feature-cards_card__V_G5r\",\n\t\"current\": \"feature-cards_current__nJY7r\",\n\t\"title\": \"feature-cards_title__doisU\",\n\t\"sticky\": \"feature-cards_sticky__GQpJH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZHMvZmVhdHVyZS1jYXJkcy5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkcy9mZWF0dXJlLWNhcmRzLm1vZHVsZS5zY3NzPzdkMWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmVhdHVyZXNcIjogXCJmZWF0dXJlLWNhcmRzX2ZlYXR1cmVzX19VRGtwWFwiLFxuXHRcImNhcmRcIjogXCJmZWF0dXJlLWNhcmRzX2NhcmRfX1ZfRzVyXCIsXG5cdFwiY3VycmVudFwiOiBcImZlYXR1cmUtY2FyZHNfY3VycmVudF9fbkpZN3JcIixcblx0XCJ0aXRsZVwiOiBcImZlYXR1cmUtY2FyZHNfdGl0bGVfX2RvaXNVXCIsXG5cdFwic3RpY2t5XCI6IFwiZmVhdHVyZS1jYXJkc19zdGlja3lfX0dRcEpIXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/feature-cards/feature-cards.module.scss\n");

/***/ }),

/***/ "./components/feature-cards/index.js":
/*!*******************************************!*\
  !*** ./components/feature-cards/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeatureCards: () => (/* binding */ FeatureCards)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @studio-freight/hamo */ \"@studio-freight/hamo\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/card */ \"./components/card/index.js\");\n/* harmony import */ var hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks/use-scroll */ \"./hooks/use-scroll.js\");\n/* harmony import */ var lib_maths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/maths */ \"./lib/maths.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2/node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _barrel_optimize_names_useWindowSize_react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=useWindowSize!=!react-use */ \"__barrel_optimize__?names=useWindowSize!=!./node_modules/.pnpm/react-use@17.5.0_react-dom@18.3.1_react@18.3.1/node_modules/react-use/esm/index.js\");\n/* harmony import */ var _feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature-cards.module.scss */ \"./components/feature-cards/feature-cards.module.scss\");\n/* harmony import */ var _feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__]);\n([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nconst AppearTitle = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/*! import() */ \"components_appear-title_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/appear-title */ \"./components/appear-title/index.js\")).then((mod)=>mod.AppearTitle), {\n    loadableGenerated: {\n        modules: [\n            \"components\\\\feature-cards\\\\index.js -> \" + \"components/appear-title\"\n        ]\n    },\n    ssr: false\n});\n\nconst cards = [\n    {\n        text: \"Run scroll in the main thread\"\n    },\n    {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Lightweight \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, undefined),\n                \" (under 3kb)\"\n            ]\n        }, void 0, true)\n    },\n    {\n        text: \"Made for 2022+\"\n    },\n    {\n        text: \"Bring your own animation library\"\n    },\n    {\n        text: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"CONTROL THE SCROLL EASING DURATION\"\n        }, void 0, false)\n    },\n    {\n        text: \"Use any element as scroller\"\n    },\n    {\n        text: \"Enjoy horizontal + vertical support\"\n    },\n    {\n        text: \"Feel free to use “position: sticky” again\"\n    },\n    {\n        text: \"touch support\"\n    }\n];\nconst FeatureCards = ()=>{\n    const element = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)();\n    const [setRef, rect] = (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__.useRect)();\n    const { height: windowHeight } = (0,_barrel_optimize_names_useWindowSize_react_use__WEBPACK_IMPORTED_MODULE_9__.useWindowSize)();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();\n    (0,hooks_use_scroll__WEBPACK_IMPORTED_MODULE_4__.useScroll)(({ scroll })=>{\n        const start = rect.top - windowHeight * 2;\n        const end = rect.top + rect.height - windowHeight;\n        const progress = (0,lib_maths__WEBPACK_IMPORTED_MODULE_5__.clamp)(0, (0,lib_maths__WEBPACK_IMPORTED_MODULE_5__.mapRange)(start, end, scroll, 0, 1), 1);\n        element.current.style.setProperty(\"--progress\", (0,lib_maths__WEBPACK_IMPORTED_MODULE_5__.clamp)(0, (0,lib_maths__WEBPACK_IMPORTED_MODULE_5__.mapRange)(rect.top, end, scroll, 0, 1), 1));\n        const step = Math.floor(progress * 10);\n        setCurrent(step);\n    }, [\n        rect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: (node)=>{\n            setRef(node);\n        },\n        className: (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default().features),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(\"layout-block-inner\", (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sticky)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    className: (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"h3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppearTitle, {\n                            children: [\n                                \"Lenis brings\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"grey\",\n                                    children: \"the heat\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: element,\n                    children: cards.map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SingleCard, {\n                            index: index,\n                            text: card.text,\n                            number: index + 1,\n                            current: index <= current - 1\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\nconst SingleCard = ({ text, number, index, current })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default().card), current && (_feature_cards_module_scss__WEBPACK_IMPORTED_MODULE_8___default().current)),\n        style: {\n            \"--i\": index\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n            background: \"rgba(239, 239, 239, 0.8)\",\n            number: number,\n            text: text\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n            lineNumber: 101,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Nextgres-main\\\\Nextgres-main\\\\components\\\\feature-cards\\\\index.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUE7Ozs7Ozs7Ozs7O0FBR3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkcy9pbmRleC5qcz9hNGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlY3QgfSBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvaGFtbydcbmltcG9ydCBjbiBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnY29tcG9uZW50cy9jYXJkJ1xuaW1wb3J0IHsgdXNlU2Nyb2xsIH0gZnJvbSAnaG9va3MvdXNlLXNjcm9sbCdcbmltcG9ydCB7IGNsYW1wLCBtYXBSYW5nZSB9IGZyb20gJ2xpYi9tYXRocydcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tICdyZWFjdC11c2UnXG5cbmNvbnN0IEFwcGVhclRpdGxlID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KCdjb21wb25lbnRzL2FwcGVhci10aXRsZScpLnRoZW4oKG1vZCkgPT4gbW9kLkFwcGVhclRpdGxlKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuaW1wb3J0IHMgZnJvbSAnLi9mZWF0dXJlLWNhcmRzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBjYXJkcyA9IFtcbiAgeyB0ZXh0OiAnUnVuIHNjcm9sbCBpbiB0aGUgbWFpbiB0aHJlYWQnIH0sXG5cbiAge1xuICAgIHRleHQ6IChcbiAgICAgIDw+XG4gICAgICAgIExpZ2h0d2VpZ2h0IDxiciAvPiAodW5kZXIgM2tiKVxuICAgICAgPC8+XG4gICAgKSxcbiAgfSxcbiAgeyB0ZXh0OiAnTWFkZSBmb3IgMjAyMisnIH0sXG4gIHsgdGV4dDogJ0JyaW5nIHlvdXIgb3duIGFuaW1hdGlvbiBsaWJyYXJ5JyB9LFxuICB7XG4gICAgdGV4dDogPD5DT05UUk9MIFRIRSBTQ1JPTEwgRUFTSU5HIERVUkFUSU9OPC8+LFxuICB9LFxuICB7IHRleHQ6ICdVc2UgYW55IGVsZW1lbnQgYXMgc2Nyb2xsZXInIH0sXG4gIHsgdGV4dDogJ0Vuam95IGhvcml6b250YWwgKyB2ZXJ0aWNhbCBzdXBwb3J0JyB9LFxuICB7IHRleHQ6ICdGZWVsIGZyZWUgdG8gdXNlIOKAnHBvc2l0aW9uOiBzdGlja3nigJ0gYWdhaW4nIH0sXG4gIHtcbiAgICB0ZXh0OiAndG91Y2ggc3VwcG9ydCcsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBGZWF0dXJlQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VSZWYoKVxuICBjb25zdCBbc2V0UmVmLCByZWN0XSA9IHVzZVJlY3QoKVxuICBjb25zdCB7IGhlaWdodDogd2luZG93SGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKClcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlU2Nyb2xsKFxuICAgICh7IHNjcm9sbCB9KSA9PiB7XG4gICAgICBjb25zdCBzdGFydCA9IHJlY3QudG9wIC0gd2luZG93SGVpZ2h0ICogMlxuICAgICAgY29uc3QgZW5kID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAtIHdpbmRvd0hlaWdodFxuXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGNsYW1wKDAsIG1hcFJhbmdlKHN0YXJ0LCBlbmQsIHNjcm9sbCwgMCwgMSksIDEpXG5cbiAgICAgIGVsZW1lbnQuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tcHJvZ3Jlc3MnLFxuICAgICAgICBjbGFtcCgwLCBtYXBSYW5nZShyZWN0LnRvcCwgZW5kLCBzY3JvbGwsIDAsIDEpLCAxKVxuICAgICAgKVxuICAgICAgY29uc3Qgc3RlcCA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgKiAxMClcbiAgICAgIHNldEN1cnJlbnQoc3RlcClcbiAgICB9LFxuICAgIFtyZWN0XVxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9eyhub2RlKSA9PiB7XG4gICAgICAgIHNldFJlZihub2RlKVxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT17cy5mZWF0dXJlc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2xheW91dC1ibG9jay1pbm5lcicsIHMuc3RpY2t5KX0+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3MudGl0bGV9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImgzXCI+XG4gICAgICAgICAgICA8QXBwZWFyVGl0bGU+XG4gICAgICAgICAgICAgIExlbmlzIGJyaW5nc1xuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVwiPnRoZSBoZWF0PC9zcGFuPlxuICAgICAgICAgICAgPC9BcHBlYXJUaXRsZT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxkaXYgcmVmPXtlbGVtZW50fT5cbiAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNpbmdsZUNhcmRcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICB0ZXh0PXtjYXJkLnRleHR9XG4gICAgICAgICAgICAgIG51bWJlcj17aW5kZXggKyAxfVxuICAgICAgICAgICAgICBjdXJyZW50PXtpbmRleCA8PSBjdXJyZW50IC0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgU2luZ2xlQ2FyZCA9ICh7IHRleHQsIG51bWJlciwgaW5kZXgsIGN1cnJlbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbihzLmNhcmQsIGN1cnJlbnQgJiYgcy5jdXJyZW50KX0gc3R5bGU9e3sgJy0taSc6IGluZGV4IH19PlxuICAgICAgPENhcmQgYmFja2dyb3VuZD1cInJnYmEoMjM5LCAyMzksIDIzOSwgMC44KVwiIG51bWJlcj17bnVtYmVyfSB0ZXh0PXt0ZXh0fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVjdCIsImNuIiwiQ2FyZCIsInVzZVNjcm9sbCIsImNsYW1wIiwibWFwUmFuZ2UiLCJkeW5hbWljIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VXaW5kb3dTaXplIiwiQXBwZWFyVGl0bGUiLCJ0aGVuIiwibW9kIiwic3NyIiwicyIsImNhcmRzIiwidGV4dCIsImJyIiwiRmVhdHVyZUNhcmRzIiwiZWxlbWVudCIsInNldFJlZiIsInJlY3QiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInNjcm9sbCIsInN0YXJ0IiwidG9wIiwiZW5kIiwicHJvZ3Jlc3MiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwic3RlcCIsIk1hdGgiLCJmbG9vciIsImRpdiIsInJlZiIsIm5vZGUiLCJjbGFzc05hbWUiLCJmZWF0dXJlcyIsInN0aWNreSIsImFzaWRlIiwidGl0bGUiLCJwIiwic3BhbiIsIm1hcCIsImNhcmQiLCJpbmRleCIsIlNpbmdsZUNhcmQiLCJudW1iZXIiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/feature-cards/index.js\n");

/***/ })

};
;