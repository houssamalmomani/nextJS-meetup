"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5,123 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10,123 Some City\",\n        description: \"This is a Second meetup!\"\n    },\n    {\n        id: \"m3\",\n        title: \"A third Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 15,123 Some City\",\n        description: \"This is a third meetup!\"\n    }\n];\nfunction HomePage() {\n    _s();\n    const [loadedMeetups, setLoadedMeetups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadedMeetups(DUMMY_MEETUPS);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: loadedMeetups\n    }, void 0, false, {\n        fileName: \"D:\\\\ReactJS\\\\nextJS-meetup\\\\pages\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBNEM7QUFDYztBQUUxRCxNQUFNRyxnQkFBZ0I7SUFDckI7UUFDQ0MsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQ0M7UUFDREMsU0FBUztRQUNUQyxhQUFhO0lBQ2Q7SUFDQTtRQUNDSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDQztRQUNEQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZDtJQUNBO1FBQ0NKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNDO1FBQ0RDLFNBQVM7UUFDVEMsYUFBYTtJQUNkO0NBQ0E7QUFDRCxTQUFTQyxXQUFXOztJQUNuQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZXLGlCQUFpQlI7SUFDbEIsR0FBRyxFQUFFO0lBQ0wscUJBQU8sOERBQUNELHNFQUFVQTtRQUFDVSxTQUFTRjs7Ozs7O0FBQzdCO0dBTlNEO0tBQUFBO0FBUVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnbTEnLFxyXG5cdFx0dGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsMTIzIFNvbWUgQ2l0eScsXHJcblx0XHRkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTInLFxyXG5cdFx0dGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG5cdFx0YWRkcmVzczogJ1NvbWUgYWRkcmVzcyAxMCwxMjMgU29tZSBDaXR5JyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIFNlY29uZCBtZWV0dXAhJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTMnLFxyXG5cdFx0dGl0bGU6ICdBIHRoaXJkIE1lZXR1cCcsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDE1LDEyMyBTb21lIENpdHknLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgdGhpcmQgbWVldHVwIScsXHJcblx0fSxcclxuXTtcclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcblx0Y29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG5cdH0sIFtdKTtcclxuXHRyZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});