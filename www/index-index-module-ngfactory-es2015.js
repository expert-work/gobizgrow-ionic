(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module-ngfactory"],{

/***/ "./src/app/guards/index.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/index.guard.ts ***!
  \***************************************/
/*! exports provided: IndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexGuard", function() { return IndexGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





class IndexGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService.get('userData').then(result => {
                if (result) {
                    this.router.navigate(['app/dashboard']);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            }).catch(err => {
                resolve(false);
            });
        });
    }
}
IndexGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function IndexGuard_Factory() { return new IndexGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: IndexGuard, providedIn: "root" });


/***/ }),

/***/ "./src/app/index/index-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IndexPageRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageRoutingModule", function() { return IndexPageRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");
/* harmony import */ var _guards_index_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/index.guard */ "./src/app/guards/index.guard.ts");



const ɵ0 = () => __webpack_require__.e(/*! import() | walkthrough-walkthrough-module-ngfactory */ "walkthrough-walkthrough-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../walkthrough/walkthrough.module.ngfactory */ "./src/app/walkthrough/walkthrough.module.ngfactory.js")).then(m => m.WalkthroughPageModuleNgFactory), ɵ1 = () => Promise.all(/*! import() | getting-started-getting-started-module-ngfactory */[__webpack_require__.e("default~categories-categories-module-ngfactory~deals-details-deals-details-module-ngfactory~deals-li~c10fa55d"), __webpack_require__.e("getting-started-getting-started-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./../getting-started/getting-started.module.ngfactory */ "./src/app/getting-started/getting-started.module.ngfactory.js")).then(m => m.GettingStartedPageModuleNgFactory), ɵ2 = () => Promise.all(/*! import() | login-login-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./../login/login.module.ngfactory */ "./src/app/login/login.module.ngfactory.js")).then(m => m.LoginPageModuleNgFactory), ɵ3 = () => Promise.all(/*! import() | signup-signup-module-ngfactory */[__webpack_require__.e("default~signup-signup-module-ngfactory~signup-step-two-signup-step-two-module-ngfactory"), __webpack_require__.e("common"), __webpack_require__.e("signup-signup-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./../signup/signup.module.ngfactory */ "./src/app/signup/signup.module.ngfactory.js")).then(m => m.SignupPageModuleNgFactory), ɵ4 = () => __webpack_require__.e(/*! import() | forgot-password-forgot-password-module-ngfactory */ "forgot-password-forgot-password-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../forgot-password/forgot-password.module.ngfactory */ "./src/app/forgot-password/forgot-password.module.ngfactory.js")).then(m => m.ForgotPasswordPageModuleNgFactory);
const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_1__["IndexPage"],
        canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_2__["IndexGuard"]],
        children: [
            {
                path: '',
                loadChildren: ɵ0
            },
            {
                path: 'getting-started',
                loadChildren: ɵ1
            },
            {
                path: 'auth/login',
                loadChildren: ɵ2
            },
            {
                path: 'auth/signup',
                loadChildren: ɵ3
            },
            {
                path: 'auth/forgot-password',
                loadChildren: ɵ4
            }
            ///auth/forgot-password'
        ]
    }
];
class IndexPageRoutingModule {
}



/***/ }),

/***/ "./src/app/index/index.module.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/index/index.module.ngfactory.js ***!
  \*************************************************/
/*! exports provided: IndexPageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModuleNgFactory", function() { return IndexPageModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _index_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module */ "./src/app/index/index.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _index_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.page.ngfactory */ "./src/app/index/index.page.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/index/index-routing.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");
/* harmony import */ var _guards_index_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../guards/index.guard */ "./src/app/guards/index.guard.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 











var IndexPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_index_module__WEBPACK_IMPORTED_MODULE_1__["IndexPageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _index_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["IndexPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["IndexPageRoutingModule"], _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["IndexPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _index_module__WEBPACK_IMPORTED_MODULE_1__["IndexPageModule"], _index_module__WEBPACK_IMPORTED_MODULE_1__["IndexPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () { return [[{ path: "", component: _index_page__WEBPACK_IMPORTED_MODULE_9__["IndexPage"], canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_10__["IndexGuard"]], children: [{ path: "", loadChildren: _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"] }, { path: "getting-started", loadChildren: _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ1"] }, { path: "auth/login", loadChildren: _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ2"] }, { path: "auth/signup", loadChildren: _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ3"] }, { path: "auth/forgot-password", loadChildren: _index_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ4"] }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageModule", function() { return IndexPageModule; });
class IndexPageModule {
}


/***/ }),

/***/ "./src/app/index/index.page.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/index/index.page.ngfactory.js ***!
  \***********************************************/
/*! exports provided: RenderType_IndexPage, View_IndexPage_0, View_IndexPage_Host_0, IndexPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IndexPage", function() { return RenderType_IndexPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexPage_0", function() { return View_IndexPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IndexPage_Host_0", function() { return View_IndexPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageNgFactory", function() { return IndexPageNgFactory; });
/* harmony import */ var _index_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page.scss.shim.ngstyle */ "./src/app/index/index.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.page */ "./src/app/index/index.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 







var styles_IndexPage = [_index_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IndexPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IndexPage, data: {} });

function View_IndexPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, 0, 1, "ion-router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], [8, null], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [3, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
function View_IndexPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-index", [], null, null, null, View_IndexPage_0, RenderType_IndexPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IndexPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-index", _index_page__WEBPACK_IMPORTED_MODULE_6__["IndexPage"], View_IndexPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/index/index.page.scss.shim.ngstyle.js":
/*!*******************************************************!*\
  !*** ./src/app/index/index.page.scss.shim.ngstyle.js ***!
  \*******************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/index/index.page.ts":
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
class IndexPage {
    constructor() { }
    ngOnInit() {
    }
}


/***/ })

}]);
//# sourceMappingURL=index-index-module-ngfactory-es2015.js.map