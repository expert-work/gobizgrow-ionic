(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-list-list-module-ngfactory"],{

/***/ "./src/app/expenses/list/list-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/expenses/list/list-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.page */ "./src/app/expenses/list/list.page.ts");


const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_1__["ListPage"]
    }
];
class ListPageRoutingModule {
}


/***/ }),

/***/ "./src/app/expenses/list/list.module.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/expenses/list/list.module.ngfactory.js ***!
  \********************************************************/
/*! exports provided: ListPageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModuleNgFactory", function() { return ListPageModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.module */ "./src/app/expenses/list/list.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page.ngfactory */ "./src/app/expenses/list/list.page.ngfactory.js");
/* harmony import */ var _new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new/new.page.ngfactory */ "./src/app/expenses/new/new.page.ngfactory.js");
/* harmony import */ var _common_expense_categories_expense_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/expense-categories/expense-categories.page.ngfactory */ "./src/app/common/expense-categories/expense-categories.page.ngfactory.js");
/* harmony import */ var _expense_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../expense-categories/new/new.page.ngfactory */ "./src/app/expense-categories/new/new.page.ngfactory.js");
/* harmony import */ var _edit_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit/edit.page.ngfactory */ "./src/app/expenses/edit/edit.page.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shell/config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/expenses/list/list-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _new_new_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../new/new-routing.module */ "./src/app/expenses/new/new-routing.module.ts");
/* harmony import */ var _common_expense_categories_expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/expense-categories/expense-categories-routing.module */ "./src/app/common/expense-categories/expense-categories-routing.module.ts");
/* harmony import */ var _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../expense-categories/new/new-routing.module */ "./src/app/expense-categories/new/new-routing.module.ts");
/* harmony import */ var _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../expense-categories/new/new.module */ "./src/app/expense-categories/new/new.module.ts");
/* harmony import */ var _common_expense_categories_expense_categories_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/expense-categories/expense-categories.module */ "./src/app/common/expense-categories/expense-categories.module.ts");
/* harmony import */ var _new_new_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../new/new.module */ "./src/app/expenses/new/new.module.ts");
/* harmony import */ var _edit_edit_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../edit/edit-routing.module */ "./src/app/expenses/edit/edit-routing.module.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../edit/edit.module */ "./src/app/expenses/edit/edit.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list.page */ "./src/app/expenses/list/list.page.ts");
/* harmony import */ var _new_new_page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../new/new.page */ "./src/app/expenses/new/new.page.ts");
/* harmony import */ var _common_expense_categories_expense_categories_page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/expense-categories/expense-categories.page */ "./src/app/common/expense-categories/expense-categories.page.ts");
/* harmony import */ var _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../expense-categories/new/new.page */ "./src/app/expense-categories/new/new.page.ts");
/* harmony import */ var _edit_edit_page__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../edit/edit.page */ "./src/app/expenses/edit/edit.page.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 






























var ListPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_list_module__WEBPACK_IMPORTED_MODULE_1__["ListPageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _list_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ListPageNgFactory"], _new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NewPageNgFactory"], _common_expense_categories_expense_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ExpenseCategoriesPageNgFactory"], _expense_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__["NewPageNgFactory"], _edit_edit_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__["EditPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) { return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_12__["ɵ0"](p0_0)]; }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_13__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _list_routing_module__WEBPACK_IMPORTED_MODULE_15__["ListPageRoutingModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_15__["ListPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_12__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_12__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _new_new_routing_module__WEBPACK_IMPORTED_MODULE_17__["NewPageRoutingModule"], _new_new_routing_module__WEBPACK_IMPORTED_MODULE_17__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_expense_categories_expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_18__["ExpenseCategoriesPageRoutingModule"], _common_expense_categories_expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_18__["ExpenseCategoriesPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_19__["NewPageRoutingModule"], _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_19__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_20__["NewPageModule"], _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_20__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_expense_categories_expense_categories_module__WEBPACK_IMPORTED_MODULE_21__["ExpenseCategoriesPageModule"], _common_expense_categories_expense_categories_module__WEBPACK_IMPORTED_MODULE_21__["ExpenseCategoriesPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _new_new_module__WEBPACK_IMPORTED_MODULE_22__["NewPageModule"], _new_new_module__WEBPACK_IMPORTED_MODULE_22__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _edit_edit_routing_module__WEBPACK_IMPORTED_MODULE_23__["EditPageRoutingModule"], _edit_edit_routing_module__WEBPACK_IMPORTED_MODULE_23__["EditPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _edit_edit_module__WEBPACK_IMPORTED_MODULE_24__["EditPageModule"], _edit_edit_module__WEBPACK_IMPORTED_MODULE_24__["EditPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _list_module__WEBPACK_IMPORTED_MODULE_1__["ListPageModule"], _list_module__WEBPACK_IMPORTED_MODULE_1__["ListPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () { return [[{ path: "", component: _list_page__WEBPACK_IMPORTED_MODULE_25__["ListPage"] }], [{ path: "", component: _new_new_page__WEBPACK_IMPORTED_MODULE_26__["NewPage"] }], [{ path: "", component: _common_expense_categories_expense_categories_page__WEBPACK_IMPORTED_MODULE_27__["ExpenseCategoriesPage"] }], [{ path: "", component: _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_28__["NewPage"] }], [{ path: "", component: _edit_edit_page__WEBPACK_IMPORTED_MODULE_29__["EditPage"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/expenses/list/list.module.ts":
/*!**********************************************!*\
  !*** ./src/app/expenses/list/list.module.ts ***!
  \**********************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
class ListPageModule {
}


/***/ }),

/***/ "./src/app/expenses/list/list.page.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/expenses/list/list.page.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_ListPage, View_ListPage_0, View_ListPage_Host_0, ListPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ListPage", function() { return RenderType_ListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListPage_0", function() { return View_ListPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ListPage_Host_0", function() { return View_ListPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageNgFactory", function() { return ListPageNgFactory; });
/* harmony import */ var _list_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.page.scss.shim.ngstyle */ "./src/app/expenses/list/list.page.scss.shim.ngstyle.js");
/* harmony import */ var _style_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style/listing.ios.scss.shim.ngstyle */ "./src/app/style/listing.ios.scss.shim.ngstyle.js");
/* harmony import */ var _style_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/listing.page.scss.shim.ngstyle */ "./src/app/style/listing.page.scss.shim.ngstyle.js");
/* harmony import */ var _style_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/listing.shell.scss.shim.ngstyle */ "./src/app/style/listing.shell.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component.ngfactory */ "./src/app/shell/text-shell/text-shell.component.ngfactory.js");
/* harmony import */ var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/text-shell/text-shell.component */ "./src/app/shell/text-shell/text-shell.component.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list.page */ "./src/app/expenses/list/list.page.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

















var styles_ListPage = [_list_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _style_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _style_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"], _style_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];
var RenderType_ListPage = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵcrt"]({ encapsulation: 0, styles: styles_ListPage, data: {} });

function View_ListPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "ion-spinner", [["class", "loading"], ["color", "primary"], ["name", "crescent"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonSpinner_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"], name: [1, "name"] }, null)], function (_ck, _v) { var currVal_0 = "primary"; var currVal_1 = "crescent"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ListPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 28, "div", [["class", "listing-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 26, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, 0, 10, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, 0, 8, "ion-buttons", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](8, 0, null, 0, 6, "ion-checkbox", [["name", "list_name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "ngModelChange"], [null, "change"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 9)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openMenu() !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = ((_v.context.$implicit.isSelected = $event) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_co.isAllSelected() !== false);
        ad = (pd_4 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCheckbox_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](9, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](11, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](15, 0, null, 0, 3, "ion-col", [["class", "info-col"], ["size", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](17, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](18, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], [], { data: [0, "data"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](19, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](21, 0, null, 0, 3, "p", [["class", "item-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](22, 0, null, null, 2, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](23, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], [], { data: [0, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](25, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](27, 0, null, 0, 1, "ion-icon", [["class", "list-item-option"], ["name", "options"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openOptionMenu(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "listing-item"; var currVal_1 = _co.ended; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "2"; _ck(_v, 5, 0, currVal_2); var currVal_10 = "list_name"; var currVal_11 = _v.context.$implicit.isSelected; _ck(_v, 11, 0, currVal_10, currVal_11); var currVal_12 = "list_name"; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); _ck(_v, 14, 0, currVal_12, currVal_13); var currVal_14 = "4"; _ck(_v, 16, 0, currVal_14); var currVal_16 = _v.context.$implicit.category.name; _ck(_v, 18, 0, currVal_16); var currVal_17 = "4"; _ck(_v, 20, 0, currVal_17); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.amount)); _ck(_v, 23, 0, currVal_19); var currVal_20 = "2"; _ck(_v, 26, 0, currVal_20); var currVal_21 = "options"; _ck(_v, 28, 0, currVal_21); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 13).ngClassPending; _ck(_v, 8, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 18).textLoaded; _ck(_v, 17, 0, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 23).textLoaded; _ck(_v, 22, 0, currVal_18); }); }
function View_ListPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_ListPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.items; _ck(_v, 2, 0, currVal_0); }, null); }
function View_ListPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_CURRENCY_CODE"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](1, 0, null, null, 14, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](3, 0, null, 0, 12, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](5, 0, null, 0, 3, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](7, 0, null, 0, 1, "ion-menu-button", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonMenuButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonMenuButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](8, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonMenuButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Expenses "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](12, 0, null, 0, 3, "ion-buttons", [["class", "button button-clear button-positive"], ["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](14, 0, null, 0, 1, "ion-icon", [["class", "add-new"], ["name", "add"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.newModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](16, 0, null, null, 13, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](18, 0, null, 0, 11, "ion-toolbar", [["style", "    padding-top: 15px; padding-bottom: 10px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](20, 0, null, 0, 5, "ion-buttons", [["slot", "start"], ["style", "padding-left: 15px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](22, 0, null, 0, 3, "ion-checkbox", [["color", "secondary"]], null, [[null, "click"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 25)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 25)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openMenu() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCheckbox_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](24, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](25, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](26, 0, null, 0, 3, "ion-searchbar", [["style", "    min-width: 200px !important;"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("ionInput" === en)) {
        var pd_2 = (_co.searchBox($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonSearchbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonSearchbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSearchbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](29, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](30, 0, null, null, 9, "ion-content", [["class", "deals-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_ListPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_ListPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](36, 0, null, 0, 3, "ion-infinite-scroll", [["threshold", "100px"]], null, [[null, "ionInfinite"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionInfinite" === en)) {
        var pd_0 = (_co.loadData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonInfiniteScroll_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonInfiniteScroll"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { disabled: [0, "disabled"], threshold: [1, "threshold"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](38, 0, null, 0, 1, "ion-infinite-scroll-content", [["loadingSpinner", "bubbles"], ["loadingText", "Loading more data..."]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonInfiniteScrollContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonInfiniteScrollContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScrollContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { loadingSpinner: [0, "loadingSpinner"], loadingText: [1, "loadingText"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "add"; _ck(_v, 15, 0, currVal_1); var currVal_2 = "secondary"; _ck(_v, 24, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.q, ""); _ck(_v, 28, 0, currVal_3); var currVal_4 = _co.loading; _ck(_v, 33, 0, currVal_4); var currVal_5 = !_co.loading; _ck(_v, 35, 0, currVal_5); var currVal_6 = (_co.numTimesLeft <= 0); var currVal_7 = "100px"; _ck(_v, 37, 0, currVal_6, currVal_7); var currVal_8 = "bubbles"; var currVal_9 = "Loading more data..."; _ck(_v, 39, 0, currVal_8, currVal_9); }, null); }
function View_ListPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "app-list", [], null, null, null, View_ListPage_0, RenderType_ListPage)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 114688, null, 0, _list_page__WEBPACK_IMPORTED_MODULE_11__["ListPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _services_apis_service__WEBPACK_IMPORTED_MODULE_12__["ApisService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_16__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ListPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵccf"]("app-list", _list_page__WEBPACK_IMPORTED_MODULE_11__["ListPage"], View_ListPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/expenses/list/list.page.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/expenses/list/list.page.scss.shim.ngstyle.js ***!
  \**************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/expenses/list/list.page.ts":
/*!********************************************!*\
  !*** ./src/app/expenses/list/list.page.ts ***!
  \********************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_edit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit/edit.page */ "./src/app/expenses/edit/edit.page.ts");
/* harmony import */ var _new_new_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../new/new.page */ "./src/app/expenses/new/new.page.ts");











class ListPage {
    constructor(actionSheetController, apisService, toastService, router, menu, authService, storageService, modalController) {
        this.actionSheetController = actionSheetController;
        this.apisService = apisService;
        this.toastService = toastService;
        this.router = router;
        this.menu = menu;
        this.authService = authService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.items = [];
        this.x = 0;
        this.page = 1;
        this.last_page = 0;
        this.numTimesLeft = 5;
        this.loading = true;
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
            this.q = '';
            if (this.displayUserData.auth_token !== undefined) {
                this.addMoreItems();
            }
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.addMoreItems();
            this.numTimesLeft -= 1;
            event.target.complete();
        }, 500);
    }
    newModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _new_new_page__WEBPACK_IMPORTED_MODULE_8__["NewPage"],
                backdropDismiss: false
            });
            modal.onDidDismiss().then(data => {
                if (data.data)
                    if (this.apisService.isDefined(data.data.id)) {
                        this.items.push(data.data);
                        this.items = this.apisService.sortArray(this.items);
                    }
            });
            return yield modal.present();
        });
    }
    updateModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                componentProps: { data: data },
                component: _edit_edit_page__WEBPACK_IMPORTED_MODULE_7__["EditPage"],
                backdropDismiss: false
            });
            modal.onDidDismiss().then(data => {
                if (data.data)
                    if (this.apisService.isDefined(data.data.id)) {
                        let tempArray = [];
                        this.items.map(function (item) {
                            if (item.id == data.data.id) {
                                tempArray.push(data.data);
                            }
                            else {
                                tempArray.push(item);
                            }
                        });
                        this.items = this.apisService.sortArray(tempArray);
                    }
            });
            return yield modal.present();
        });
    }
    //EditPage
    checkUncheckAll() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    isAllSelected() {
        this.masterSelected = this.items.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    }
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].isSelected)
                this.checkedList.push(this.items[i].id);
        }
        this.checkedList = JSON.stringify(this.checkedList);
        return this.checkedList;
    }
    addMoreItems() {
        let form = new FormData();
        form.append('page', this.page.toString());
        form.append('q', this.q);
        form.append('auth_token', this.displayUserData.auth_token);
        this.apisService.expenses(form).subscribe((result) => {
            this.loading = false;
            if (result.data.total) {
                this.page = this.page + 1;
                this.items.push(...result.data.data);
            }
            else {
            }
        }, (error) => {
            if (error.status == 0) {
                this.toastService.presentToast('Connection failed');
            }
            if (error.status == 401) {
                this.toastService.presentToast('Authentcation failed');
            }
        });
    }
    searchBox(evt) {
        this.q = evt.srcElement.value;
        this.page = 1;
        this.items = [];
        this.addMoreItems();
    }
    openMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Action',  
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openOptionMenu(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Action',  
                buttons: [
                    {
                        text: 'Update',
                        handler: () => {
                            console.log('Destructive clicked');
                            this.updateModal(item);
                        }
                    },
                    {
                        text: 'View',
                        handler: () => {
                            console.log('Destructive clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
}


/***/ }),

/***/ "./src/app/expenses/new/new-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/expenses/new/new-routing.module.ts ***!
  \****************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.page */ "./src/app/expenses/new/new.page.ts");


const routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_1__["NewPage"]
    }
];
class NewPageRoutingModule {
}


/***/ }),

/***/ "./src/app/expenses/new/new.module.ts":
/*!********************************************!*\
  !*** ./src/app/expenses/new/new.module.ts ***!
  \********************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
class NewPageModule {
}


/***/ }),

/***/ "./src/app/expenses/new/new.page.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/expenses/new/new.page.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_NewPage, View_NewPage_0, View_NewPage_Host_0, NewPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewPage", function() { return RenderType_NewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPage_0", function() { return View_NewPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPage_Host_0", function() { return View_NewPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageNgFactory", function() { return NewPageNgFactory; });
/* harmony import */ var _new_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.page.scss.shim.ngstyle */ "./src/app/expenses/new/new.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/expenses/new/new.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 












var styles_NewPage = [_new_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NewPage, data: {} });

function View_NewPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "information-circle-outline"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.message; _ck(_v, 4, 0, currVal_1); }); }
function View_NewPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.form.get("expense_date").hasError(_v.context.$implicit.type) && (_co.form.get("expense_date").dirty || _co.form.get("expense_date").touched)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewPage_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "information-circle-outline"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.message; _ck(_v, 4, 0, currVal_1); }); }
function View_NewPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.form.get("expense_category_name").hasError(_v.context.$implicit.type) && (_co.form.get("expense_category_name").dirty || _co.form.get("expense_category_name").touched)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewPage_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "information-circle-outline"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.message; _ck(_v, 4, 0, currVal_1); }); }
function View_NewPage_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.form.get("amount").hasError(_v.context.$implicit.type) && (_co.form.get("amount").dirty || _co.form.get("amount").touched)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 15, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 4, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 0, "span", [["color", "primary"], ["ion-text", ""], ["showWhen", "ios"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "ion-icon", [["name", "close"], ["showWhen", "android,windows"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Ad Expense"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "ion-button", [["class", "button button-clear button-positive"], ["slot", "end"], ["style", "color: white;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "ion-icon", [["name", "share"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 61, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 59, "div", [["class", "dispplay-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 58, "form", [["class", "forms"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.saveForm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 48, "ion-list", [["class", "inputs-list"], ["lines", "full"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { lines: [0, "lines"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 13, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 1, "ion-icon", [["name", "calendar-outline"], ["style", "    font-size: 40px; color: #378275;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 6, "ion-datetime", [["display-timezone", "utc"], ["displayFormat", "MM/DD/YYYY"], ["formControlName", "expense_date"], ["placeholder", "Expense Date"], ["style", "width: 100%;"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleChangeEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { displayFormat: [0, "displayFormat"], placeholder: [1, "placeholder"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, 0, 2, "div", [["class", "error-container"], ["style", "display:block;width: 100%;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 6, "ion-input", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "expense_category_name"], ["placeholder", "Expense Category"], ["readonly", "true"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openExpenseCategoriesModal() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], clearInput: [1, "clearInput"], placeholder: [2, "placeholder"], readonly: [3, "readonly"], type: [4, "type"], value: [5, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, 0, 6, "ion-input", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "amount"], ["placeholder", "Amount"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], clearInput: [1, "clearInput"], placeholder: [2, "placeholder"], type: [3, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, 0, 6, "ion-textarea", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "notes"], ["placeholder", " Notes.."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], placeholder: [1, "placeholder"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 0, "div", [["class", "padding20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "ion-button", [["class", "login-btn"], ["expand", "block"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { disabled: [0, "disabled"], expand: [1, "expand"], type: [2, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save Now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 0, "div", [["class", "padding20"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "close"; _ck(_v, 10, 0, currVal_1); var currVal_2 = (!_co.form.valid || _co.desabled); _ck(_v, 15, 0, currVal_2); var currVal_3 = "share"; _ck(_v, 17, 0, currVal_3); var currVal_11 = _co.form; _ck(_v, 23, 0, currVal_11); var currVal_12 = "full"; _ck(_v, 27, 0, currVal_12); var currVal_13 = "calendar-outline"; _ck(_v, 31, 0, currVal_13); var currVal_21 = "expense_date"; _ck(_v, 35, 0, currVal_21); var currVal_22 = "MM/DD/YYYY"; var currVal_23 = "Expense Date"; _ck(_v, 38, 0, currVal_22, currVal_23); var currVal_24 = _co.validation_messages.expense_date; _ck(_v, 41, 0, currVal_24); var currVal_32 = "expense_category_name"; _ck(_v, 47, 0, currVal_32); var currVal_33 = "off"; var currVal_34 = ""; var currVal_35 = "Expense Category"; var currVal_36 = "true"; var currVal_37 = "text"; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.expenses_category.name, ""); _ck(_v, 50, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = _co.validation_messages.expense_category_name; _ck(_v, 53, 0, currVal_39); var currVal_47 = "amount"; _ck(_v, 59, 0, currVal_47); var currVal_48 = "off"; var currVal_49 = ""; var currVal_50 = "Amount"; var currVal_51 = "number"; _ck(_v, 62, 0, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_52 = _co.validation_messages.amount; _ck(_v, 65, 0, currVal_52); var currVal_60 = "notes"; _ck(_v, 71, 0, currVal_60); var currVal_61 = "off"; var currVal_62 = " Notes.."; _ck(_v, 74, 0, currVal_61, currVal_62); var currVal_63 = (!_co.form.valid || _co.desabled); var currVal_64 = "block"; var currVal_65 = "submit"; _ck(_v, 77, 0, currVal_63, currVal_64, currVal_65); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 21, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending; _ck(_v, 32, 0, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).ngClassPending; _ck(_v, 44, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassUntouched; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassTouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPristine; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassDirty; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassValid; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassInvalid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 56, 0, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassPending; _ck(_v, 68, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); }); }
function View_NewPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-new", [], null, null, null, View_NewPage_0, RenderType_NewPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NewPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-new", _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], View_NewPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/expenses/new/new.page.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/expenses/new/new.page.scss.shim.ngstyle.js ***!
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL25ldy9uZXcucGFnZS5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/expenses/new/new.page.ts":
/*!******************************************!*\
  !*** ./src/app/expenses/new/new.page.ts ***!
  \******************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _common_expense_categories_expense_categories_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/expense-categories/expense-categories.page */ "./src/app/common/expense-categories/expense-categories.page.ts");










class NewPage {
    constructor(router, menu, authService, apisService, storageService, toastService, navParams, modalController) {
        this.router = router;
        this.menu = menu;
        this.authService = authService;
        this.apisService = apisService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.vehicles_json_data = [];
        this.validation_messages = {
            'expense_date': [
                { type: 'required', message: 'Date is required.' },
            ],
            'amount': [
                { type: 'required', message: 'amount is required.' },
            ],
            'expense_category_name': [
                { type: 'required', message: 'Category is required.' },
            ],
        };
        this.expenses_category = [];
        this.expenses_category.name = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            'expense_date': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'expense_category_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'notes': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
        });
    }
    saveForm() {
        console.log('do Log In');
        this.desabled = true;
        let form = new FormData();
        form.append('amount', this.form.value.amount);
        form.append('expense_date', this.form.value.expense_date);
        form.append('notes', this.form.value.notes);
        form.append('expense_category_id', this.expenses_category.expense_category_id);
        form.append('auth_token', this.displayUserData.auth_token);
        this.apisService.expensesAdd(form).subscribe((result) => {
            this.desabled = false;
            this.toastService.presentToast('Successfully added');
            console.log(result.data);
            this.modalController.dismiss(result.data);
        }, (error) => {
            this.desabled = false;
            if (error.status == 0) {
                this.toastService.presentToast('Connection failed');
            }
            if (error.status == 401) {
                this.toastService.presentToast('Authentcation failed');
            }
        });
    }
    openExpenseCategoriesModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = {
                id: this.apisService.makeid(10),
            };
            const modal = yield this.modalController.create({
                component: _common_expense_categories_expense_categories_page__WEBPACK_IMPORTED_MODULE_8__["ExpenseCategoriesPage"],
                componentProps: { data: data },
                backdropDismiss: false
            });
            modal.onDidDismiss().then(data => {
                if (this.apisService.isDefined(data.data.id)) {
                    this.expenses_category = (data.data);
                }
            });
            return yield modal.present();
        });
    }
    close() {
        this.modalController.dismiss([]);
    }
}


/***/ })

}]);
//# sourceMappingURL=expenses-list-list-module-ngfactory-es2015.js.map