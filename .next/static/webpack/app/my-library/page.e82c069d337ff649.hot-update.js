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

/***/ "(app-pages-browser)/./src/app/components/searchBook.js":
/*!******************************************!*\
  !*** ./src/app/components/searchBook.js ***!
  \******************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./src/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchBooks = (param)=>{\n    let { addToCollection } = param;\n    _s();\n    const [isbn, setIsbn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookInfo, setBookInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleChange = (e)=>{\n        setIsbn(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/isbn/search\", {\n                isbn\n            });\n            setBookInfo(response.data);\n            setError(null);\n        } catch (error) {\n            console.error(\"Error fetching book:\", error);\n            setError(\"Book not found. Please check the ISBN and try again.\");\n            setBookInfo(null);\n        }\n    };\n    const addBook = async (formData)=>{\n        console.log(\"Adding book to collection:\", collection, formData);\n        try {\n            const response = await fetch(\"http://localhost:8080/\".concat(collection), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const newBook = await response.json();\n            if (collection === \"books\") {\n                setReadBooks([\n                    ...readBooks,\n                    newBook\n                ]);\n            } else if (collection === \"currently-reading\") {\n                setCurrentlyReading([\n                    ...currentlyReading,\n                    newBook\n                ]);\n            } else if (collection === \"want-to-read\") {\n                setWantToReadBooks([\n                    ...wantToReadBooks,\n                    newBook\n                ]);\n            }\n        } catch (error) {\n            console.error(\"Error adding book:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-books\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Enter ISBN:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: isbn,\n                                onChange: handleChange,\n                                placeholder: \"Enter ISBN\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, undefined),\n            bookInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"book-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: bookInfo.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Author: \",\n                            bookInfo.authors\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"add-to-collections\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addBook(\"read\"),\n                                children: \"Add to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addBook(\"currently-reading\"),\n                                children: \"Add to Currently Reading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"want-to-read\"),\n                                children: \"Add to Want to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBooks, \"PAhTrvxrbwSIK86xPKEk2zApqrI=\");\n_c = SearchBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBooks);\nvar _c;\n$RefreshReg$(_c, \"SearchBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJOLFFBQVFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixJQUFJLENBQUUscUNBQW9DO2dCQUFFYjtZQUFLO1lBRTlFRyxZQUFZUyxTQUFTRSxJQUFJO1lBQ3pCVCxTQUFTO1FBQ1gsRUFBRSxPQUFPRCxPQUFPO1lBQ2RXLFFBQVFYLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxTQUFTO1lBQ1RGLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTWEsVUFBVSxPQUFPQztRQUNyQkYsUUFBUUcsR0FBRyxDQUFDLDhCQUE4QkMsWUFBWUY7UUFDdEQsSUFBSTtZQUNGLE1BQU1MLFdBQVcsTUFBTVEsTUFBTSx5QkFBb0MsT0FBWEQsYUFBYztnQkFDbEVFLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtZQUN2QjtZQUVBLE1BQU1TLFVBQVUsTUFBTWQsU0FBU2UsSUFBSTtZQUVuQyxJQUFJUixlQUFlLFNBQVM7Z0JBQzFCUyxhQUFhO3VCQUFJQztvQkFBV0g7aUJBQVE7WUFDdEMsT0FBTyxJQUFJUCxlQUFlLHFCQUFxQjtnQkFDN0NXLG9CQUFvQjt1QkFBSUM7b0JBQWtCTDtpQkFBUTtZQUNwRCxPQUFPLElBQUlQLGVBQWUsZ0JBQWdCO2dCQUN4Q2EsbUJBQW1CO3VCQUFJQztvQkFBaUJQO2lCQUFRO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPdEIsT0FBTztZQUNkVyxRQUFRWCxLQUFLLENBQUMsc0JBQXNCQTtRQUN0QztJQUNGO0lBRUEscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtDLFVBQVUzQjs7a0NBQ2QsOERBQUM0Qjs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNML0IsT0FBT1Q7Z0NBQ1B5QyxVQUFVbkM7Z0NBQ1ZvQyxhQUFZO2dDQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFFdkJwQyx1QkFBUyw4REFBQ3lDOzBCQUFHekM7Ozs7OztZQUNiRiwwQkFDQyw4REFBQ2dDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1c7a0NBQUk1QyxTQUFTNkMsS0FBSzs7Ozs7O2tDQUNuQiw4REFBQ0Y7OzRCQUFFOzRCQUFTM0MsU0FBUzhDLE9BQU87Ozs7Ozs7a0NBQzVCLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFPSyxTQUFTLElBQU1qQyxRQUFROzBDQUFTOzs7Ozs7MENBR3hDLDhEQUFDNEI7Z0NBQU9LLFNBQVMsSUFBTWpDLFFBQVE7MENBQXNCOzs7Ozs7MENBR3JELDhEQUFDNEI7Z0NBQU9LLFNBQVMsSUFBTUMsc0JBQXNCOzBDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFFO0dBcEZNcEQ7S0FBQUE7QUFzRk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaEJvb2suanM/ZmFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJvb2tzID0gKHsgYWRkVG9Db2xsZWN0aW9uIH0pID0+IHtcclxuICBjb25zdCBbaXNibiwgc2V0SXNibl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYm9va0luZm8sIHNldEJvb2tJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRJc2JuKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2lzYm4vc2VhcmNoYCwgeyBpc2JuIH0pO1xyXG5cclxuICAgICAgc2V0Qm9va0luZm8ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGJvb2s6XCIsIGVycm9yKTtcclxuICAgICAgc2V0RXJyb3IoXCJCb29rIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHRoZSBJU0JOIGFuZCB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICBzZXRCb29rSW5mbyhudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRCb29rID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBib29rIHRvIGNvbGxlY3Rpb246XCIsIGNvbGxlY3Rpb24sIGZvcm1EYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8ke2NvbGxlY3Rpb259YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmV3Qm9vayA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGlmIChjb2xsZWN0aW9uID09PSBcImJvb2tzXCIpIHtcclxuICAgICAgICBzZXRSZWFkQm9va3MoWy4uLnJlYWRCb29rcywgbmV3Qm9va10pO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb24gPT09IFwiY3VycmVudGx5LXJlYWRpbmdcIikge1xyXG4gICAgICAgIHNldEN1cnJlbnRseVJlYWRpbmcoWy4uLmN1cnJlbnRseVJlYWRpbmcsIG5ld0Jvb2tdKTtcclxuICAgICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uID09PSBcIndhbnQtdG8tcmVhZFwiKSB7XHJcbiAgICAgICAgc2V0V2FudFRvUmVhZEJvb2tzKFsuLi53YW50VG9SZWFkQm9va3MsIG5ld0Jvb2tdKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBib29rOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJvb2tzXCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgIEVudGVyIElTQk46XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17aXNibn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBJU0JOXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgIHtib29rSW5mbyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rLWluZm9cIj5cclxuICAgICAgICAgIDxoMz57Ym9va0luZm8udGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwPkF1dGhvcjoge2Jvb2tJbmZvLmF1dGhvcnN9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdG8tY29sbGVjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRCb29rKFwicmVhZFwiKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIFJlYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQm9vayhcImN1cnJlbnRseS1yZWFkaW5nXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ3VycmVudGx5IFJlYWRpbmdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9Db2xsZWN0aW9uKFwid2FudC10by1yZWFkXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gV2FudCB0byBSZWFkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm9va3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTZWFyY2hCb29rcyIsImFkZFRvQ29sbGVjdGlvbiIsImlzYm4iLCJzZXRJc2JuIiwiYm9va0luZm8iLCJzZXRCb29rSW5mbyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwiYWRkQm9vayIsImZvcm1EYXRhIiwibG9nIiwiY29sbGVjdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3Qm9vayIsImpzb24iLCJzZXRSZWFkQm9va3MiLCJyZWFkQm9va3MiLCJzZXRDdXJyZW50bHlSZWFkaW5nIiwiY3VycmVudGx5UmVhZGluZyIsInNldFdhbnRUb1JlYWRCb29rcyIsIndhbnRUb1JlYWRCb29rcyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCIsImgzIiwidGl0bGUiLCJhdXRob3JzIiwib25DbGljayIsImhhbmRsZUFkZFRvQ29sbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/searchBook.js\n"));

/***/ })

});