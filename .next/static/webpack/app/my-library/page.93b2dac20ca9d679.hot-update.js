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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddBookModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nvar _s = $RefreshSig$();\n\n// Define the field mappings for each collection type\nconst fieldMappings = {\n    read: [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\",\n        \"rating\"\n    ],\n    \"currently-reading\": [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\",\n        \"progress\"\n    ],\n    \"want-to-read\": [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\"\n    ]\n};\nfunction AddBookModal(param) {\n    let { isOpen, onClose, onSubmit, collection } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        author: \"\",\n        genre: \"\",\n        pages: \"\",\n        progress: \"\",\n        rating: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit(formData);\n        onClose();\n    };\n    if (!isOpen || !fieldMappings[collection]) return null;\n    const fields = fieldMappings[collection];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-4 rounded shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: [\n                            \"Add to \",\n                            collection\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            fields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: field[0].toUpperCase() + field.slice(1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: field === \"pages\" || field === \"rating\" || field === \"progress\" ? \"number\" : \"text\",\n                                            name: field,\n                                            value: formData[field],\n                                            onChange: handleChange,\n                                            className: \"w-full p-2 border rounded\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, field, true, {\n                                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: onClose,\n                                        className: \"bg-gray-500 text-white py-1 px-4 rounded mr-2\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"bg-blue-500 text-white py-1 px-4 rounded\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(AddBookModal, \"CGvLG8fCTUFTbs7BRJc5xh1G0iw=\");\n_c = AddBookModal;\nvar _c;\n$RefreshReg$(_c, \"AddBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBRWpDLHFEQUFxRDtBQUNyRCxNQUFNQyxnQkFBZ0I7SUFDcEJDLE1BQU07UUFBQztRQUFTO1FBQVU7UUFBUztRQUFTO0tBQVM7SUFDckQscUJBQXFCO1FBQUM7UUFBUztRQUFVO1FBQVM7UUFBUztLQUFXO0lBQ3RFLGdCQUFnQjtRQUFDO1FBQVM7UUFBVTtRQUFTO0tBQVE7QUFDdkQ7QUFFZSxTQUFTQyxhQUFhLEtBQXlDO1FBQXpDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxHQUF6Qzs7SUFDbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENYLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ1UsS0FBSyxFQUFFQztRQUFNO0lBQzNDO0lBRUEsTUFBTUUsZUFBZSxDQUFDSjtRQUNwQkEsRUFBRUssY0FBYztRQUNoQmhCLFNBQVNFO1FBQ1RIO0lBQ0Y7SUFFQSxJQUFJLENBQUNELFVBQVUsQ0FBQ0gsYUFBYSxDQUFDTSxXQUFXLEVBQUUsT0FBTztJQUVsRCxNQUFNZ0IsU0FBU3RCLGFBQWEsQ0FBQ00sV0FBVztJQUV4QyxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzRCQUF5Qjs0QkFBUWxCOzs7Ozs7O2tDQUMvQyw4REFBQ29CO3dCQUFLckIsVUFBVWU7OzRCQUNiRSxPQUFPSyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNMO29DQUFnQkMsV0FBVTs7c0RBQ3pCLDhEQUFDSzs0Q0FBTUwsV0FBVTtzREFBNkJJLEtBQUssQ0FBQyxFQUFFLENBQUNFLFdBQVcsS0FBS0YsTUFBTUcsS0FBSyxDQUFDOzs7Ozs7c0RBQ25GLDhEQUFDQzs0Q0FDQ0MsTUFBTUwsVUFBVSxXQUFXQSxVQUFVLFlBQVlBLFVBQVUsYUFBYSxXQUFXOzRDQUNuRlgsTUFBTVc7NENBQ05WLE9BQU9YLFFBQVEsQ0FBQ3FCLE1BQU07NENBQ3RCTSxVQUFVbkI7NENBQ1ZTLFdBQVU7NENBQ1ZXLFFBQVE7Ozs7Ozs7bUNBUkZQOzs7OzswQ0FZWiw4REFBQ0w7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FDQ0gsTUFBSzt3Q0FDTEksU0FBU2pDO3dDQUNUb0IsV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDWTt3Q0FDQ0gsTUFBSzt3Q0FDTFQsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBaEV3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRCb29rLmpzPzE5ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIERlZmluZSB0aGUgZmllbGQgbWFwcGluZ3MgZm9yIGVhY2ggY29sbGVjdGlvbiB0eXBlXHJcbmNvbnN0IGZpZWxkTWFwcGluZ3MgPSB7XHJcbiAgcmVhZDogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCIsIFwicmF0aW5nXCJdLFxyXG4gIFwiY3VycmVudGx5LXJlYWRpbmdcIjogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCIsIFwicHJvZ3Jlc3NcIl0sXHJcbiAgXCJ3YW50LXRvLXJlYWRcIjogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQm9va01vZGFsKHsgaXNPcGVuLCBvbkNsb3NlLCBvblN1Ym1pdCwgY29sbGVjdGlvbiB9KSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIGdlbnJlOiBcIlwiLFxyXG4gICAgcGFnZXM6IFwiXCIsXHJcbiAgICBwcm9ncmVzczogXCJcIixcclxuICAgIHJhdGluZzogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgb25DbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNPcGVuIHx8ICFmaWVsZE1hcHBpbmdzW2NvbGxlY3Rpb25dKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGRzID0gZmllbGRNYXBwaW5nc1tjb2xsZWN0aW9uXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5BZGQgdG8ge2NvbGxlY3Rpb259PC9oMj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGR9IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2ZpZWxkWzBdLnRvVXBwZXJDYXNlKCkgKyBmaWVsZC5zbGljZSgxKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9e2ZpZWxkID09PSBcInBhZ2VzXCIgfHwgZmllbGQgPT09IFwicmF0aW5nXCIgfHwgZmllbGQgPT09IFwicHJvZ3Jlc3NcIiA/IFwibnVtYmVyXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgbmFtZT17ZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YVtmaWVsZF19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgdGV4dC13aGl0ZSBweS0xIHB4LTQgcm91bmRlZCBtci0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMSBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImZpZWxkTWFwcGluZ3MiLCJyZWFkIiwiQWRkQm9va01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsIm9uU3VibWl0IiwiY29sbGVjdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0aXRsZSIsImF1dGhvciIsImdlbnJlIiwicGFnZXMiLCJwcm9ncmVzcyIsInJhdGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpZWxkcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm1hcCIsImZpZWxkIiwibGFiZWwiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddBook.js\n"));

/***/ })

});