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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddBookModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nvar _s = $RefreshSig$();\n\nconst fieldMappings = {\n    read: [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\",\n        \"rating\"\n    ],\n    \"currently-reading\": [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\",\n        \"progress\"\n    ],\n    \"want-to-read\": [\n        \"title\",\n        \"author\",\n        \"genre\",\n        \"pages\"\n    ]\n};\nfunction AddBookModal(param) {\n    let { isOpen, onClose, onSubmit, collection } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        author: \"\",\n        genre: \"\",\n        pages: \"\",\n        progress: \"\",\n        rating: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        onSubmit(formData);\n        onClose();\n    };\n    if (!isOpen || !fieldMappings[collection]) return null;\n    const fields = fieldMappings[collection];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-bold mb-4\",\n                    children: [\n                        \"Add to \",\n                        collection\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        fields.map((field)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: field[0].toUpperCase() + field.slice(1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: field === \"pages\" || field === \"rating\" || field === \"progress\" ? \"number\" : \"text\",\n                                        name: field,\n                                        value: formData[field],\n                                        onChange: handleChange,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, field, true, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-actions\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"cancel\",\n                                    onClick: onClose,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"submit\",\n                                    children: \"Add\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\AddBook.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(AddBookModal, \"CGvLG8fCTUFTbs7BRJc5xh1G0iw=\");\n_c = AddBookModal;\nvar _c;\n$RefreshReg$(_c, \"AddBookModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLGdCQUFnQjtJQUNwQkMsTUFBTTtRQUFDO1FBQVM7UUFBVTtRQUFTO1FBQVM7S0FBUztJQUNyRCxxQkFBcUI7UUFBQztRQUFTO1FBQVU7UUFBUztRQUFTO0tBQVc7SUFDdEUsZ0JBQWdCO1FBQUM7UUFBUztRQUFVO1FBQVM7S0FBUTtBQUN2RDtBQUVlLFNBQVNDLGFBQWEsS0FLcEM7UUFMb0MsRUFDbkNDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLFVBQVUsRUFDWCxHQUxvQzs7SUFNbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENYLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ1UsS0FBSyxFQUFFQztRQUFNO0lBQzNDO0lBRUEsTUFBTUUsZUFBZSxDQUFDSjtRQUNwQkEsRUFBRUssY0FBYztRQUNoQmhCLFNBQVNFO1FBQ1RIO0lBQ0Y7SUFFQSxJQUFJLENBQUNELFVBQVUsQ0FBQ0gsYUFBYSxDQUFDTSxXQUFXLEVBQUUsT0FBTztJQUVsRCxNQUFNZ0IsU0FBU3RCLGFBQWEsQ0FBQ00sV0FBVztJQUV4QyxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs7d0JBQXlCO3dCQUFRbEI7Ozs7Ozs7OEJBQy9DLDhEQUFDb0I7b0JBQUtyQixVQUFVZTs7d0JBQ2JFLE9BQU9LLEdBQUcsQ0FBQyxDQUFDQyxzQkFDWCw4REFBQ0w7O2tEQUNDLDhEQUFDTTtrREFBT0QsS0FBSyxDQUFDLEVBQUUsQ0FBQ0UsV0FBVyxLQUFLRixNQUFNRyxLQUFLLENBQUM7Ozs7OztrREFDN0MsOERBQUNDO3dDQUNDQyxNQUNFTCxVQUFVLFdBQ1ZBLFVBQVUsWUFDVkEsVUFBVSxhQUNOLFdBQ0E7d0NBRU5YLE1BQU1XO3dDQUNOVixPQUFPWCxRQUFRLENBQUNxQixNQUFNO3dDQUN0Qk0sVUFBVW5CO3dDQUNWb0IsUUFBUTs7Ozs7OzsrQkFiRlA7Ozs7O3NDQWlCWiw4REFBQ0w7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDWTtvQ0FBT0gsTUFBSztvQ0FBU1QsV0FBVTtvQ0FBU2EsU0FBU2pDOzhDQUFTOzs7Ozs7OENBRzNELDhEQUFDZ0M7b0NBQU9ILE1BQUs7b0NBQVNULFdBQVU7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXJEO0dBakV3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRCb29rLmpzPzE5ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGZpZWxkTWFwcGluZ3MgPSB7XHJcbiAgcmVhZDogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCIsIFwicmF0aW5nXCJdLFxyXG4gIFwiY3VycmVudGx5LXJlYWRpbmdcIjogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCIsIFwicHJvZ3Jlc3NcIl0sXHJcbiAgXCJ3YW50LXRvLXJlYWRcIjogW1widGl0bGVcIiwgXCJhdXRob3JcIiwgXCJnZW5yZVwiLCBcInBhZ2VzXCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQm9va01vZGFsKHtcclxuICBpc09wZW4sXHJcbiAgb25DbG9zZSxcclxuICBvblN1Ym1pdCxcclxuICBjb2xsZWN0aW9uLFxyXG59KSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGF1dGhvcjogXCJcIixcclxuICAgIGdlbnJlOiBcIlwiLFxyXG4gICAgcGFnZXM6IFwiXCIsXHJcbiAgICBwcm9ncmVzczogXCJcIixcclxuICAgIHJhdGluZzogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgb25DbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNPcGVuIHx8ICFmaWVsZE1hcHBpbmdzW2NvbGxlY3Rpb25dKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgZmllbGRzID0gZmllbGRNYXBwaW5nc1tjb2xsZWN0aW9uXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPkFkZCB0byB7Y29sbGVjdGlvbn08L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZH0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPntmaWVsZFswXS50b1VwcGVyQ2FzZSgpICsgZmllbGQuc2xpY2UoMSl9PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9e1xyXG4gICAgICAgICAgICAgICAgICBmaWVsZCA9PT0gXCJwYWdlc1wiIHx8XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkID09PSBcInJhdGluZ1wiIHx8XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkID09PSBcInByb2dyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YVtmaWVsZF19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2FuY2VsXCIgb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJmaWVsZE1hcHBpbmdzIiwicmVhZCIsIkFkZEJvb2tNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblN1Ym1pdCIsImNvbGxlY3Rpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidGl0bGUiLCJhdXRob3IiLCJnZW5yZSIsInBhZ2VzIiwicHJvZ3Jlc3MiLCJyYXRpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaWVsZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJtYXAiLCJmaWVsZCIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddBook.js\n"));

/***/ })

});