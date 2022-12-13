exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 1661:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "GenericPage_container__Zy3rB",
	"content": "GenericPage_content__UgHH_",
	"body": "GenericPage_body__9rzrg",
	"header": "GenericPage_header___s8ux",
	"arrow": "GenericPage_arrow__qwEW0",
	"backContainer": "GenericPage_backContainer__hS_Fh",
	"back": "GenericPage_back__s2A5M"
};


/***/ }),

/***/ 3034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Arrow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Arrow = ({ color  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "200",
        height: "32",
        viewBox: "0 0 340 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M339.707 8.70711C340.098 8.31658 340.098 7.68342 339.707 7.29289L333.343 0.928932C332.953 0.538408 332.319 0.538408 331.929 0.928932C331.538 1.31946 331.538 1.95262 331.929 2.34315L337.586 8L331.929 13.6569C331.538 14.0474 331.538 14.6805 331.929 15.0711C332.319 15.4616 332.953 15.4616 333.343 15.0711L339.707 8.70711ZM0 9L339 9V7L0 7L0 9Z",
            fill: color || "#5F5F5F"
        })
    });
};


/***/ }),

/***/ 5573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GenericPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1661);
/* harmony import */ var _GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anatoliygatt_use_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(739);
/* harmony import */ var _anatoliygatt_use_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_anatoliygatt_use_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3034);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);








function GenericPage({ title , headerText , body  }) {
    const preferredColorScheme = (0,_anatoliygatt_use_prefers_color_scheme__WEBPACK_IMPORTED_MODULE_3__.usePrefersColorScheme)();
    const content = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to(content.current, {
            duration: 1.8,
            opacity: 1,
            delay: 1,
            y: 0,
            ease: gsap__WEBPACK_IMPORTED_MODULE_5__.Power3.easeOut
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Web design company"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
                ref: content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().body),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
                                children: [
                                    " ",
                                    headerText
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: body
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().backContainer),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().back),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_GenericPage_module_scss__WEBPACK_IMPORTED_MODULE_7___default().arrow),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_assets_Arrow__WEBPACK_IMPORTED_MODULE_4__/* .Arrow */ .E, {
                                        color: `var(--color-${preferredColorScheme})`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Back to homepage"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;