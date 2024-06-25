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

/***/ "(app-pages-browser)/./src/app/components/MyLibrary.js":
/*!*****************************************!*\
  !*** ./src/app/components/MyLibrary.js ***!
  \*****************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./src/node_modules/axios/lib/axios.js\");\n/* harmony import */ var _AddBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBook */ \"(app-pages-browser)/./src/app/components/AddBook.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SearchBooks = (param)=>{\n    let { addToCollection } = param;\n    _s();\n    const [isbn, setIsbn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookInfo, setBookInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setIsbn(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8080/isbn/search\", {\n                isbn\n            });\n            setBookInfo(response.data);\n            setError(null);\n        } catch (error) {\n            console.error(\"Error fetching book:\", error);\n            setError(\"Book not found. Please check the ISBN and try again.\");\n            setBookInfo(null);\n        }\n    };\n    const handleAddToCollection = (collection)=>{\n        setCollection(collection);\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    const handleSubmitModal = (formData)=>{\n        addToCollection(formData, collection);\n        closeModal();\n        setBookInfo(null);\n        setIsbn(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-books\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Enter ISBN:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: isbn,\n                                onChange: handleChange,\n                                placeholder: \"Enter ISBN\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                lineNumber: 63,\n                columnNumber: 17\n            }, undefined),\n            bookInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"book-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: bookInfo.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Author: \",\n                            bookInfo.authors\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"add-to-collections\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"read\"),\n                                children: \"Add to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"currently-reading\"),\n                                children: \"Add to Currently Reading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"want-to-read\"),\n                                children: \"Add to Want to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddBook__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isOpen: isModalOpen,\n                onClose: closeModal,\n                onSubmit: handleSubmitModal,\n                collection: collection,\n                initialData: bookInfo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\MyLibrary.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBooks, \"kYXUP/S+Qm+u/3oekJwLmT5q/2c=\");\n_c = SearchBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBooks);\nvar _c;\n$RefreshReg$(_c, \"SearchBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NeUxpYnJhcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN3QztBQUNkO0FBQ1c7QUFFckMsTUFBTUksY0FBYztRQUFDLEVBQUVDLGVBQWUsRUFBRTs7SUFDdEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNZSxlQUFlLENBQUNDO1FBQ3BCVixRQUFRVSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNQyxlQUFlLE9BQU9IO1FBQzFCQSxFQUFFSSxjQUFjO1FBRWhCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUksQ0FBRSxxQ0FBb0M7Z0JBQUVqQjtZQUFLO1lBRTlFRyxZQUFZYSxTQUFTRSxJQUFJO1lBQ3pCYixTQUFTO1FBQ1gsRUFBRSxPQUFPRCxPQUFPO1lBQ2RlLFFBQVFmLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxTQUFTO1lBQ1RGLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTWlCLHdCQUF3QixDQUFDWjtRQUM3QkMsY0FBY0Q7UUFDZEQsZUFBZTtJQUNqQjtJQUVBLE1BQU1jLGFBQWE7UUFDakJkLGVBQWU7SUFDakI7SUFFQSxNQUFNZSxvQkFBb0IsQ0FBQ0M7UUFDekJ4QixnQkFBZ0J3QixVQUFVZjtRQUMxQmE7UUFDQWxCLFlBQVk7UUFDWkYsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtDLFVBQVViOztrQ0FDZCw4REFBQ2M7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTGpCLE9BQU9iO2dDQUNQK0IsVUFBVXJCO2dDQUNWc0IsYUFBWTtnQ0FDWkMsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQzt3QkFBT0osTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7O1lBRXZCMUIsdUJBQVMsOERBQUMrQjswQkFBRy9COzs7Ozs7WUFDYkYsMEJBQ0MsOERBQUNzQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNXO2tDQUFJbEMsU0FBU21DLEtBQUs7Ozs7OztrQ0FDbkIsOERBQUNGOzs0QkFBRTs0QkFBU2pDLFNBQVNvQyxPQUFPOzs7Ozs7O2tDQUM1Qiw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBT0ssU0FBUyxJQUFNbkIsc0JBQXNCOzBDQUFTOzs7Ozs7MENBR3RELDhEQUFDYztnQ0FBT0ssU0FBUyxJQUFNbkIsc0JBQXNCOzBDQUFzQjs7Ozs7OzBDQUduRSw4REFBQ2M7Z0NBQU9LLFNBQVMsSUFBTW5CLHNCQUFzQjswQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNcEUsOERBQUN2QixnREFBWUE7Z0JBQ1gyQyxRQUFRbEM7Z0JBQ1JtQyxTQUFTcEI7Z0JBQ1RNLFVBQVVMO2dCQUNWZCxZQUFZQTtnQkFDWmtDLGFBQWF4Qzs7Ozs7Ozs7Ozs7O0FBSXJCO0dBcEZNSjtLQUFBQTtBQXNGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTXlMaWJyYXJ5LmpzP2NlMzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBBZGRCb29rTW9kYWwgZnJvbSBcIi4vQWRkQm9va1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQm9va3MgPSAoeyBhZGRUb0NvbGxlY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc2JuLCBzZXRJc2JuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtib29rSW5mbywgc2V0Qm9va0luZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldElzYm4oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvaXNibi9zZWFyY2hgLCB7IGlzYm4gfSk7XHJcblxyXG4gICAgICBzZXRCb29rSW5mbyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYm9vazpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRFcnJvcihcIkJvb2sgbm90IGZvdW5kLiBQbGVhc2UgY2hlY2sgdGhlIElTQk4gYW5kIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIHNldEJvb2tJbmZvKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvQ29sbGVjdGlvbiA9IChjb2xsZWN0aW9uKSA9PiB7XHJcbiAgICBzZXRDb2xsZWN0aW9uKGNvbGxlY3Rpb24pO1xyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRNb2RhbCA9IChmb3JtRGF0YSkgPT4ge1xyXG4gICAgYWRkVG9Db2xsZWN0aW9uKGZvcm1EYXRhLCBjb2xsZWN0aW9uKTtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIHNldEJvb2tJbmZvKG51bGwpO1xyXG4gICAgc2V0SXNibihcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm9va3NcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRW50ZXIgSVNCTjpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpc2JufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIElTQk5cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cclxuICAgICAge2Jvb2tJbmZvICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2staW5mb1wiPlxyXG4gICAgICAgICAgPGgzPntib29rSW5mby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHA+QXV0aG9yOiB7Ym9va0luZm8uYXV0aG9yc308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1jb2xsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ29sbGVjdGlvbihcInJlYWRcIil9PlxyXG4gICAgICAgICAgICAgIEFkZCB0byBSZWFkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ29sbGVjdGlvbihcImN1cnJlbnRseS1yZWFkaW5nXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ3VycmVudGx5IFJlYWRpbmdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9Db2xsZWN0aW9uKFwid2FudC10by1yZWFkXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gV2FudCB0byBSZWFkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxBZGRCb29rTW9kYWxcclxuICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdE1vZGFsfVxyXG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XHJcbiAgICAgICAgaW5pdGlhbERhdGE9e2Jvb2tJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJvb2tzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQWRkQm9va01vZGFsIiwiU2VhcmNoQm9va3MiLCJhZGRUb0NvbGxlY3Rpb24iLCJpc2JuIiwic2V0SXNibiIsImJvb2tJbmZvIiwic2V0Qm9va0luZm8iLCJlcnJvciIsInNldEVycm9yIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImhhbmRsZUFkZFRvQ29sbGVjdGlvbiIsImNsb3NlTW9kYWwiLCJoYW5kbGVTdWJtaXRNb2RhbCIsImZvcm1EYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iLCJwIiwiaDMiLCJ0aXRsZSIsImF1dGhvcnMiLCJvbkNsaWNrIiwiaXNPcGVuIiwib25DbG9zZSIsImluaXRpYWxEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MyLibrary.js\n"));

/***/ })

});