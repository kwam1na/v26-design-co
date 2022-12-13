(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
;// CONCATENATED MODULE: ./components/Layout.jsx




// const TIMEOUT = 2000;
const TIMEOUT = 250;
const gsapDuration = TIMEOUT / 1000;
const Layout = ({ children  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.SwitchTransition, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.Transition, {
                timeout: TIMEOUT,
                onEnter: (node)=>{
                    external_gsap_.gsap.set(node, {
                        autoAlpha: 0
                    });
                    external_gsap_.gsap.to(node, {
                        autoAlpha: 1,
                        duration: gsapDuration * 3
                    });
                },
                onExit: (node)=>{
                    external_gsap_.gsap.to(node, {
                        autoAlpha: 0.4,
                        y: 56,
                        duration: 2.4
                    });
                },
                children: children
            }, router.pathname)
        })
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4849));
module.exports = __webpack_exports__;

})();