(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module-ngfactory"],{

/***/ "./src/app/tabs/styles/tabs.page.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/tabs/styles/tabs.page.scss.shim.ngstyle.js ***!
  \************************************************************/
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
var styles = ["ion-tab-button[_ngcontent-%COMP%] {\n  --color: var(--ion-color-medium-shade);\n  --color-selected: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy9zcmMvYXBwL3RhYnMvc3R5bGVzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3N0eWxlcy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc3R5bGVzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4gIiwiaW9uLXRhYi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/tabs/tabs.module.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/tabs/tabs.module.ngfactory.js ***!
  \***********************************************/
/*! exports provided: TabsPageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModuleNgFactory", function() { return TabsPageModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tabs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.module */ "./src/app/tabs/tabs.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _tabs_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page.ngfactory */ "./src/app/tabs/tabs.page.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resolvers/userData.resolver */ "./src/app/resolvers/userData.resolver.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var TabsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsPageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _tabs_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["TabsPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["TabsPageRoutingModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["TabsPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsPageModule"], _tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () { return [[{ path: "", component: _tabs_page__WEBPACK_IMPORTED_MODULE_10__["TabsPage"], canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_11__["HomeGuard"]], resolve: { userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_12__["UserDataResolver"] }, children: [{ path: "customers", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ0"] }, { path: "items", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ1"] }, { path: "estimates", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ2"] }, { path: "invoices", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ3"] }, { path: "payments", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ4"] }, { path: "expenses", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ5"] }, { path: "reports", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ6"] }, { "path": "settings", loadChildren: _tabs_router_module__WEBPACK_IMPORTED_MODULE_9__["ɵ7"] }] }, { path: "", redirectTo: "app/categories", pathMatch: "full" }]]; }, [])]); });



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
class TabsPageModule {
}


/***/ }),

/***/ "./src/app/tabs/tabs.page.ngfactory.js":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs.page.ngfactory.js ***!
  \*********************************************/
/*! exports provided: RenderType_TabsPage, View_TabsPage_0, View_TabsPage_Host_0, TabsPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TabsPage", function() { return RenderType_TabsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TabsPage_0", function() { return View_TabsPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TabsPage_Host_0", function() { return View_TabsPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageNgFactory", function() { return TabsPageNgFactory; });
/* harmony import */ var _styles_tabs_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/tabs.page.scss.shim.ngstyle */ "./src/app/tabs/styles/tabs.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_TabsPage = [_styles_tabs_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TabsPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TabsPage, data: {} });

function View_TabsPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 32, "ion-tabs", [], null, [[null, "ionTabButtonClick"]], function (_v, en, $event) { var ad = true; if (("ionTabButtonClick" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).select($event.detail.tab) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabs_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 1, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tabBar: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 1, 29, "ion-tab-bar", [["slot", "bottom"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabBar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, [[1, 4]], 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 6, "ion-tab-button", [["tab", "dashboard"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { tab: [0, "tab"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "ion-icon", [["name", "home"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "ion-label", [["class", "tab-title"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 6, "ion-tab-button", [["tab", "invoices"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { tab: [0, "tab"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "ion-icon", [["name", "document"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 2, "ion-label", [["class", "tab-title"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Invoices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 6, "ion-tab-button", [["tab", "estimates"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { tab: [0, "tab"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "ion-icon", [["name", "document-text"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 2, "ion-label", [["class", "tab-title"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Estimates"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 6, "ion-tab-button", [["tab", "settings"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { tab: [0, "tab"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 1, "ion-icon", [["name", "settings"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 2, "ion-label", [["class", "tab-title"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Settings"]))], function (_ck, _v) { var currVal_0 = "dashboard"; _ck(_v, 6, 0, currVal_0); var currVal_1 = "home"; _ck(_v, 8, 0, currVal_1); var currVal_2 = "invoices"; _ck(_v, 13, 0, currVal_2); var currVal_3 = "document"; _ck(_v, 15, 0, currVal_3); var currVal_4 = "estimates"; _ck(_v, 20, 0, currVal_4); var currVal_5 = "document-text"; _ck(_v, 22, 0, currVal_5); var currVal_6 = "settings"; _ck(_v, 27, 0, currVal_6); var currVal_7 = "settings"; _ck(_v, 29, 0, currVal_7); }, null); }
function View_TabsPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tabs", [], null, null, null, View_TabsPage_0, RenderType_TabsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]], null, null)], null, null); }
var TabsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tabs", _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"], View_TabsPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

class TabsPage {
    constructor(menu) {
        this.menu = menu;
    }
    ionViewWillEnter() {
        this.menu.enable(true);
    }
}


/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ7", function() { return ɵ7; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resolvers/userData.resolver */ "./src/app/resolvers/userData.resolver.ts");


//import { DashboardPage } from '../dashboard/dashboard.page';


const ɵ0 = () => Promise.all(/*! import() | customers-list-list-module-ngfactory */[__webpack_require__.e("default~customers-edit-edit-module-ngfactory~customers-list-list-module-ngfactory"), __webpack_require__.e("default~customers-list-list-module-ngfactory~customers-vehicle-vehicle-module-ngfactory"), __webpack_require__.e("customers-list-list-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./../customers/list/list.module.ngfactory */ "./src/app/customers/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ1 = () => __webpack_require__.e(/*! import() | items-list-list-module-ngfactory */ "items-list-list-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../items/list/list.module.ngfactory */ "./src/app/items/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ2 = () => __webpack_require__.e(/*! import() | estimates-list-list-module-ngfactory */ "estimates-list-list-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../estimates/list/list.module.ngfactory */ "./src/app/estimates/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ3 = () => __webpack_require__.e(/*! import() | invoices-list-list-module-ngfactory */ "invoices-list-list-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../invoices/list/list.module.ngfactory */ "./src/app/invoices/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ4 = () => __webpack_require__.e(/*! import() | payments-list-list-module-ngfactory */ "payments-list-list-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../payments/list/list.module.ngfactory */ "./src/app/payments/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ5 = () => __webpack_require__.e(/*! import() | expenses-list-list-module-ngfactory */ "expenses-list-list-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../expenses/list/list.module.ngfactory */ "./src/app/expenses/list/list.module.ngfactory.js")).then(m => m.ListPageModuleNgFactory), ɵ6 = () => __webpack_require__.e(/*! import() | reports-reports-reports-module-ngfactory */ "reports-reports-reports-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../reports/reports/reports.module.ngfactory */ "./src/app/reports/reports/reports.module.ngfactory.js")).then(m => m.ReportsPageModuleNgFactory), ɵ7 = () => __webpack_require__.e(/*! import() | settings-setting-setting-module-ngfactory */ "settings-setting-setting-module-ngfactory").then(__webpack_require__.bind(null, /*! ./../settings/setting/setting.module.ngfactory */ "./src/app/settings/setting/setting.module.ngfactory.js")).then(m => m.SettingPageModuleNgFactory);
const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__["TabsPage"],
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]],
        resolve: {
            userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
        },
        children: [
            // {
            //   path:'dashboard',
            //   loadChildren: () =>
            //      import('../dashboard/dashboard.module').then(
            //        m => m.DashboardPageModule
            //      )
            // },
            {
                path: 'customers',
                loadChildren: ɵ0
            },
            {
                path: 'items',
                loadChildren: ɵ1
            },
            {
                path: 'estimates',
                loadChildren: ɵ2
            },
            {
                path: 'invoices',
                loadChildren: ɵ3
            },
            {
                path: 'payments',
                loadChildren: ɵ4
            },
            {
                path: 'expenses',
                loadChildren: ɵ5
            },
            {
                path: 'reports',
                loadChildren: ɵ6
            },
            {
                'path': 'settings',
                loadChildren: ɵ7
            }
        ]
    },
    // /app/ redirect
    {
        path: '',
        redirectTo: 'app/categories',
        pathMatch: 'full'
    }
];
class TabsPageRoutingModule {
}



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-ngfactory-es2015.js.map