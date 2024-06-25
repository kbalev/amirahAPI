"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/my-library/page",{

/***/ "(app-pages-browser)/./src/app/components/AddBook.js":
/*!***************************************!*\
  !*** ./src/app/components/AddBook.js ***!
  \***************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddBookModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _API_my_library_schemas_currentlyReadingSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../API/my-library/schemas/currentlyReadingSchema */ \"(app-pages-browser)/./API/my-library/schemas/currentlyReadingSchema.ts\");\n/* harmony import */ var _API_my_library_schemas_readSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../API/my-library/schemas/readSchema */ \"(app-pages-browser)/./API/my-library/schemas/readSchema.ts\");\n/* harmony import */ var _API_my_library_schemas_wantToReadSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../API/my-library/schemas/wantToReadSchema */ \"(app-pages-browser)/./API/my-library/schemas/wantToReadSchema.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst schemas = {\n    books: booksSchema,\n    \"currently-reading\": _API_my_library_schemas_currentlyReadingSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    read: _API_my_library_schemas_readSchema__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"want-to-read\": _API_my_library_schemas_wantToReadSchema__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n};\nfunction AddBookModal(param) {\n    let { isOpen, onClose, onSubmit, collection } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        author: \"\",\n        genre: \"\",\n        pages: \"\",\n        progress: \"\",\n        rating: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit(formData);\n        onClose();\n    };\n    // Ensure collection is defined and valid\n    if (!isOpen || !schemas[collection]) return null;\n    const schemaKeys = Object.keys(schemas[collection]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-4 rounded shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: [\n                            \"Add to \",\n                            collection\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            schemaKeys.map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: key[0].toUpperCase() + key.slice(1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: key === \"pages\" || key === \"rating\" || key === \"progress\" ? \"number\" : \"text\",\n                                            name: key,\n                                            value: formData[key],\n                                            onChange: handleChange,\n                                            className: \"w-full p-2 border rounded\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, key, true, {\n                                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: onClose,\n                                        className: \"bg-gray-500 text-white py-1 px-4 rounded mr-2\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"bg-blue-500 text-white py-1 px-4 rounded\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(AddBookModal, \"CGvLG8fCTUFTbs7BRJc5xh1G0iw=\");\n_c = AddBookModal;\nvar _c;\n$RefreshReg$(_c, \"AddBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQzJEO0FBQ3hCO0FBQ1k7QUFFaEYsTUFBTUksVUFBVTtJQUNkQyxPQUFPQztJQUNQLHFCQUFxQkwsc0ZBQXNCQTtJQUMzQ00sTUFBTUwsMEVBQVVBO0lBQ2hCLGdCQUFnQkMsZ0ZBQWdCQTtBQUNsQztBQUVlLFNBQVNLLGFBQWEsS0FBeUM7UUFBekMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFLEdBQXpDOztJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUM7UUFDdkNlLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxRQUFRO0lBQ1Y7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1gsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDVSxLQUFLLEVBQUVDO1FBQU07SUFDM0M7SUFFQSxNQUFNRSxlQUFlLENBQUNKO1FBQ3BCQSxFQUFFSyxjQUFjO1FBQ2hCaEIsU0FBU0U7UUFDVEg7SUFDRjtJQUVBLHlDQUF5QztJQUN6QyxJQUFJLENBQUNELFVBQVUsQ0FBQ0wsT0FBTyxDQUFDUSxXQUFXLEVBQUUsT0FBTztJQUU1QyxNQUFNZ0IsYUFBYUMsT0FBT0MsSUFBSSxDQUFDMUIsT0FBTyxDQUFDUSxXQUFXO0lBRWxELHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTs7NEJBQXlCOzRCQUFRcEI7Ozs7Ozs7a0NBQy9DLDhEQUFDc0I7d0JBQUt2QixVQUFVZTs7NEJBQ2JFLFdBQVdPLEdBQUcsQ0FBQyxDQUFDQyxvQkFDZiw4REFBQ0w7b0NBQWNDLFdBQVU7O3NEQUN2Qiw4REFBQ0s7NENBQU1MLFdBQVU7c0RBQTZCSSxHQUFHLENBQUMsRUFBRSxDQUFDRSxXQUFXLEtBQUtGLElBQUlHLEtBQUssQ0FBQzs7Ozs7O3NEQUMvRSw4REFBQ0M7NENBQ0NDLE1BQU1MLFFBQVEsV0FBV0EsUUFBUSxZQUFZQSxRQUFRLGFBQWEsV0FBVzs0Q0FDN0ViLE1BQU1hOzRDQUNOWixPQUFPWCxRQUFRLENBQUN1QixJQUFJOzRDQUNwQk0sVUFBVXJCOzRDQUNWVyxXQUFVOzRDQUNWVyxRQUFROzs7Ozs7O21DQVJGUDs7Ozs7MENBWVosOERBQUNMO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7d0NBQ0NILE1BQUs7d0NBQ0xJLFNBQVNuQzt3Q0FDVHNCLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ1k7d0NBQ0NILE1BQUs7d0NBQ0xULFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQWpFd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkQm9vay5qcz8xOWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjdXJyZW50bHlSZWFkaW5nU2NoZW1hIGZyb20gXCIuLi8uLi8uLi9BUEkvbXktbGlicmFyeS9zY2hlbWFzL2N1cnJlbnRseVJlYWRpbmdTY2hlbWFcIjtcclxuaW1wb3J0IHJlYWRTY2hlbWEgZnJvbSBcIi4uLy4uLy4uL0FQSS9teS1saWJyYXJ5L3NjaGVtYXMvcmVhZFNjaGVtYVwiO1xyXG5pbXBvcnQgd2FudFRvUmVhZFNjaGVtYSBmcm9tIFwiLi4vLi4vLi4vQVBJL215LWxpYnJhcnkvc2NoZW1hcy93YW50VG9SZWFkU2NoZW1hXCI7XHJcblxyXG5jb25zdCBzY2hlbWFzID0ge1xyXG4gIGJvb2tzOiBib29rc1NjaGVtYSxcclxuICBcImN1cnJlbnRseS1yZWFkaW5nXCI6IGN1cnJlbnRseVJlYWRpbmdTY2hlbWEsXHJcbiAgcmVhZDogcmVhZFNjaGVtYSxcclxuICBcIndhbnQtdG8tcmVhZFwiOiB3YW50VG9SZWFkU2NoZW1hLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQm9va01vZGFsKHsgaXNPcGVuLCBvbkNsb3NlLCBvblN1Ym1pdCwgY29sbGVjdGlvbiB9KSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIGdlbnJlOiBcIlwiLFxyXG4gICAgcGFnZXM6IFwiXCIsXHJcbiAgICBwcm9ncmVzczogXCJcIixcclxuICAgIHJhdGluZzogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgb25DbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSBjb2xsZWN0aW9uIGlzIGRlZmluZWQgYW5kIHZhbGlkXHJcbiAgaWYgKCFpc09wZW4gfHwgIXNjaGVtYXNbY29sbGVjdGlvbl0pIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBzY2hlbWFLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hc1tjb2xsZWN0aW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+QWRkIHRvIHtjb2xsZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAge3NjaGVtYUtleXMubWFwKChrZXkpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPntrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2tleSA9PT0gXCJwYWdlc1wiIHx8IGtleSA9PT0gXCJyYXRpbmdcIiB8fCBrZXkgPT09IFwicHJvZ3Jlc3NcIiA/IFwibnVtYmVyXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17a2V5fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGFba2V5XX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHB5LTEgcHgtNCByb3VuZGVkIG1yLTJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweS0xIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjdXJyZW50bHlSZWFkaW5nU2NoZW1hIiwicmVhZFNjaGVtYSIsIndhbnRUb1JlYWRTY2hlbWEiLCJzY2hlbWFzIiwiYm9va3MiLCJib29rc1NjaGVtYSIsInJlYWQiLCJBZGRCb29rTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwib25TdWJtaXQiLCJjb2xsZWN0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInRpdGxlIiwiYXV0aG9yIiwiZ2VucmUiLCJwYWdlcyIsInByb2dyZXNzIiwicmF0aW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2NoZW1hS2V5cyIsIk9iamVjdCIsImtleXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJtYXAiLCJrZXkiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddBook.js\n"));

/***/ })

});