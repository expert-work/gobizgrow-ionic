(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~items-list-list-module-~df28b05a"],{

/***/ "./src/app/common/categories/categories-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/common/categories/categories-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page */ "./src/app/common/categories/categories.page.ts");


const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_1__["CategoriesPage"]
    }
];
class CategoriesPageRoutingModule {
}


/***/ }),

/***/ "./src/app/common/categories/categories.module.ts":
/*!********************************************************!*\
  !*** ./src/app/common/categories/categories.module.ts ***!
  \********************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
class CategoriesPageModule {
}


/***/ }),

/***/ "./src/app/common/categories/categories.page.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/common/categories/categories.page.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_CategoriesPage, View_CategoriesPage_0, View_CategoriesPage_Host_0, CategoriesPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoriesPage", function() { return RenderType_CategoriesPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesPage_0", function() { return View_CategoriesPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesPage_Host_0", function() { return View_CategoriesPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageNgFactory", function() { return CategoriesPageNgFactory; });
/* harmony import */ var _categories_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page.scss.shim.ngstyle */ "./src/app/common/categories/categories.page.scss.shim.ngstyle.js");
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
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories.page */ "./src/app/common/categories/categories.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

















var styles_CategoriesPage = [_categories_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _style_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _style_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"], _style_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];
var RenderType_CategoriesPage = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵcrt"]({ encapsulation: 0, styles: styles_CategoriesPage, data: {} });

function View_CategoriesPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "ion-spinner", [["class", "loading"], ["color", "primary"], ["name", "crescent"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonSpinner_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"], name: [1, "name"] }, null)], function (_ck, _v) { var currVal_0 = "primary"; var currVal_1 = "crescent"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CategoriesPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 25, "div", [["class", "listing-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, null, 23, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, 0, 12, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, 0, 10, "ion-buttons", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](8, 0, null, 0, 8, "ion-buttons", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](10, 0, null, 0, 6, "ion-checkbox", [["name", "list_name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 11)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_v.context.$implicit.isSelected = $event) !== false);
        ad = (pd_2 && ad);
    } if (("change" === en)) {
        var pd_3 = (_co.isAllSelected() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCheckbox_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](11, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"], value: [1, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](17, 0, null, 0, 3, "ion-col", [["class", "info-col"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](19, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](20, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], [], { data: [0, "data"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](21, 0, null, 0, 4, "ion-col", [["class", "info-col"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { size: [0, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](23, 0, null, 0, 2, "p", [["class", "item-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](24, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](25, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_10__["TextShellComponent"], [], { data: [0, "data"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "listing-item"; var currVal_1 = _co.ended; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = "2"; _ck(_v, 5, 0, currVal_2); var currVal_10 = "list_name"; var currVal_11 = _v.context.$implicit.isSelected; _ck(_v, 13, 0, currVal_10, currVal_11); var currVal_12 = "list_name"; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _v.context.$implicit.id, ""); _ck(_v, 16, 0, currVal_12, currVal_13); var currVal_14 = "5"; _ck(_v, 18, 0, currVal_14); var currVal_16 = _v.context.$implicit.name; _ck(_v, 20, 0, currVal_16); var currVal_17 = "5"; _ck(_v, 22, 0, currVal_17); var currVal_19 = _v.context.$implicit.description; _ck(_v, 25, 0, currVal_19); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 15).ngClassPending; _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 20).textLoaded; _ck(_v, 19, 0, currVal_15); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 25).textLoaded; _ck(_v, 24, 0, currVal_18); }); }
function View_CategoriesPage_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, null, 1, null, View_CategoriesPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.items; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CategoriesPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 17, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, 0, 15, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, 0, 6, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, 0, 4, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](8, 0, null, 0, 0, "span", [["color", "primary"], ["ion-text", ""], ["showWhen", "ios"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](9, 0, null, 0, 1, "ion-icon", [["name", "close"], ["showWhen", "android,windows"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](14, 0, null, 0, 3, "ion-buttons", [["class", "button button-clear button-positive"], ["slot", "end"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.newModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](16, 0, null, 0, 1, "ion-icon", [["class", "add-new"], ["name", "add"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](18, 0, null, null, 16, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](20, 0, null, 0, 14, "ion-toolbar", [["style", "    padding-top: 15px; padding-bottom: 10px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](22, 0, null, 0, 8, "ion-buttons", [["slot", "start"], ["style", "padding-left: 15px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](24, 0, null, 0, 6, "ion-checkbox", [["color", "secondary"], ["name", "list_name"], ["value", "m1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 25)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 25)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.masterSelected = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ionChange" === en)) {
        var pd_3 = (_co.checkUncheckAll() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCheckbox_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](25, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { color: [0, "color"], name: [1, "name"], value: [2, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](31, 0, null, 0, 3, "ion-searchbar", [["style", "    min-width: 200px !important;"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 34)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 34)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("ionInput" === en)) {
        var pd_2 = (_co.searchBox($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonSearchbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonSearchbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSearchbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](34, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](35, 0, null, null, 9, "ion-content", [["class", "deals-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](36, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CategoriesPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵand"](16777216, null, 0, 1, null, View_CategoriesPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](40, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](41, 0, null, 0, 3, "ion-infinite-scroll", [["threshold", "100px"]], null, [[null, "ionInfinite"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionInfinite" === en)) {
        var pd_0 = (_co.loadData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonInfiniteScroll_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonInfiniteScroll"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { disabled: [0, "disabled"], threshold: [1, "threshold"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](43, 0, null, 0, 1, "ion-infinite-scroll-content", [["loadingSpinner", "bubbles"], ["loadingText", "Loading more data..."]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonInfiniteScrollContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonInfiniteScrollContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScrollContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { loadingSpinner: [0, "loadingSpinner"], loadingText: [1, "loadingText"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](45, 0, null, null, 10, "ion-footer", [["class", "ion-no-border"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonFooter_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFooter"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](47, 0, null, 0, 8, "ion-toolbar", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](49, 0, null, 0, 6, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](50, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](51, 0, null, 0, 4, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](53, 0, null, 0, 2, "ion-button", [["expand", "full"], ["fill", "outline"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.updateSelectedCategories() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], { expand: [0, "expand"], fill: [1, "fill"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, ["Update Selected Categories"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "close"; _ck(_v, 10, 0, currVal_1); var currVal_2 = "add"; _ck(_v, 17, 0, currVal_2); var currVal_10 = "list_name"; var currVal_11 = _co.masterSelected; _ck(_v, 27, 0, currVal_10, currVal_11); var currVal_12 = "secondary"; var currVal_13 = "list_name"; var currVal_14 = "m1"; _ck(_v, 30, 0, currVal_12, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵinlineInterpolate"](1, "", _co.q, ""); _ck(_v, 33, 0, currVal_15); var currVal_16 = _co.loading; _ck(_v, 38, 0, currVal_16); var currVal_17 = !_co.loading; _ck(_v, 40, 0, currVal_17); var currVal_18 = (_co.numTimesLeft <= 0); var currVal_19 = "100px"; _ck(_v, 42, 0, currVal_18, currVal_19); var currVal_20 = "bubbles"; var currVal_21 = "Loading more data..."; _ck(_v, 44, 0, currVal_20, currVal_21); var currVal_22 = "full"; var currVal_23 = "outline"; _ck(_v, 54, 0, currVal_22, currVal_23); }, function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassUntouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassTouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassPristine; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassDirty; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassValid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassInvalid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
function View_CategoriesPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "app-categories", [], null, null, null, View_CategoriesPage_0, RenderType_CategoriesPage)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 114688, null, 0, _categories_page__WEBPACK_IMPORTED_MODULE_11__["CategoriesPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_apis_service__WEBPACK_IMPORTED_MODULE_14__["ApisService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_16__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoriesPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵccf"]("app-categories", _categories_page__WEBPACK_IMPORTED_MODULE_11__["CategoriesPage"], View_CategoriesPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/common/categories/categories.page.scss.shim.ngstyle.js":
/*!************************************************************************!*\
  !*** ./src/app/common/categories/categories.page.scss.shim.ngstyle.js ***!
  \************************************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/common/categories/categories.page.ts":
/*!******************************************************!*\
  !*** ./src/app/common/categories/categories.page.ts ***!
  \******************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _item_categories_new_new_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../item-categories/new/new.page */ "./src/app/item-categories/new/new.page.ts");









class CategoriesPage {
    constructor(router, menu, authService, apisService, storageService, toastService, navParams, modalController) {
        this.router = router;
        this.menu = menu;
        this.authService = authService;
        this.apisService = apisService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.items = [];
        this.x = 0;
        this.page = 1;
        this.last_page = 0;
        this.numTimesLeft = 5;
        this.loading = true;
        this.categories = navParams.get('data');
    }
    ngOnInit() {
        this.authService.userData$.subscribe((res) => {
            this.displayUserData = res;
            this.q = '';
            if (this.displayUserData.auth_token !== undefined) {
                this.loadItems();
            }
        });
    }
    loadData(event) {
        setTimeout(() => {
            this.loadItems();
            this.numTimesLeft -= 1;
            event.target.complete();
        }, 500);
    }
    loadItems() {
        let form = new FormData();
        form.append('page', this.page.toString());
        form.append('q', this.q);
        form.append('auth_token', this.displayUserData.auth_token);
        this.apisService.categories(form).subscribe((result) => {
            this.loading = false;
            if (result.data.total) {
                this.page = this.page + 1;
                this.items.push(...result.data.data);
                this.items = this.apisService.sortArray(this.items);
                let self = this;
                let items = [];
                this.items.map(function (item) {
                    self.categories.map(function (category) {
                        if (item.id == category.category_id) {
                            item.isSelected = true;
                        }
                    });
                    items.push(item);
                });
                this.items = items;
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
        this.loadItems();
    }
    newModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _item_categories_new_new_page__WEBPACK_IMPORTED_MODULE_7__["NewPage"],
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
    updateSelectedCategories() {
        let categories = [];
        let self = this;
        this.items.map(function (item) {
            if (item.isSelected) {
                let isAlready = false;
                self.categories.map(function (category) {
                    if (item.id == category.category_id) {
                        isAlready = category;
                    }
                });
                if (!isAlready) {
                    categories.push({
                        id: self.apisService.makeid(10),
                        category_id: item.id,
                        name: item.name,
                        price: 0
                    });
                }
                else {
                    categories.push(isAlready);
                }
            }
        });
        this.modalController.dismiss(categories);
        //  price
    }
    close() { this.modalController.dismiss([]); }
}


/***/ }),

/***/ "./src/app/items/new/new-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/items/new/new-routing.module.ts ***!
  \*************************************************/
/*! exports provided: NewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function() { return NewPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.page */ "./src/app/items/new/new.page.ts");


const routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_1__["NewPage"]
    }
];
class NewPageRoutingModule {
}


/***/ }),

/***/ "./src/app/items/new/new.module.ts":
/*!*****************************************!*\
  !*** ./src/app/items/new/new.module.ts ***!
  \*****************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
class NewPageModule {
}


/***/ }),

/***/ "./src/app/items/new/new.page.ngfactory.js":
/*!*************************************************!*\
  !*** ./src/app/items/new/new.page.ngfactory.js ***!
  \*************************************************/
/*! exports provided: RenderType_NewPage, View_NewPage_0, View_NewPage_Host_0, NewPageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewPage", function() { return RenderType_NewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPage_0", function() { return View_NewPage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewPage_Host_0", function() { return View_NewPage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageNgFactory", function() { return NewPageNgFactory; });
/* harmony import */ var _new_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.page.scss.shim.ngstyle */ "./src/app/items/new/new.page.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/items/new/new.page.ts");
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
function View_NewPage_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.form.get("name").hasError(_v.context.$implicit.type) && (_co.form.get("name").dirty || _co.form.get("name").touched)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewPage_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ion-icon", [["name", "information-circle-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "information-circle-outline"; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.message; _ck(_v, 4, 0, currVal_1); }); }
function View_NewPage_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.form.get("price").hasError(_v.context.$implicit.type) && (_co.form.get("price").dirty || _co.form.get("price").touched)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_NewPage_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 10, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 6, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Price"], ["type", "number"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } if (("ionInput" === en)) {
        var pd_2 = (_co.itemCategoryPriceUpdate(_v.context.$implicit, $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], placeholder: [1, "placeholder"], type: [2, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "ion-icon", [["color", "danger"], ["name", "close"], ["style", "padding: 10px 0px;font-size: 18px;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteCategory(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"], name: [1, "name"] }, null)], function (_ck, _v) { var currVal_1 = "off"; var currVal_2 = "Price"; var currVal_3 = "number"; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = "danger"; var currVal_5 = "close"; _ck(_v, 12, 0, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_0); }); }
function View_NewPage_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "ion-card", [["style", "text-align: left;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.categories; _ck(_v, 5, 0, currVal_0); }, null); }
function View_NewPage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 15, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 4, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 0, "span", [["color", "primary"], ["ion-text", ""], ["showWhen", "ios"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "ion-icon", [["name", "close"], ["showWhen", "android,windows"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["New Item/Service"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "ion-button", [["class", "button button-clear button-positive"], ["slot", "end"], ["style", "color: white;"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveForm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "ion-icon", [["name", "share"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 54, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 52, "div", [["class", "dispplay-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 51, "form", [["class", "forms"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.saveForm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 34, "ion-list", [["class", "inputs-list"], ["lines", "full"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { lines: [0, "lines"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 6, "ion-input", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "name"], ["placeholder", "Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], clearInput: [1, "clearInput"], placeholder: [2, "placeholder"], type: [3, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 6, "ion-input", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "price"], ["placeholder", "Price"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._handleIonChange($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], clearInput: [1, "clearInput"], placeholder: [2, "placeholder"], type: [3, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 2, "div", [["class", "error-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, 0, 8, "ion-item", [["class", "input-item"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonItem_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, 0, 6, "ion-textarea", [["autocapitalize", "off"], ["clearInput", ""], ["formControlName", "description"], ["placeholder", "Description..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) { var ad = true; if (("ionBlur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._handleBlurEvent($event.target) !== false);
        ad = (pd_0 && ad);
    } if (("ionChange" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55)._handleInputEvent($event.target) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_p"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autocapitalize: [0, "autocapitalize"], placeholder: [1, "placeholder"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 4, "ion-button", [["class", "button button-clear button-positive"], ["slot", "end"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openCategoryModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, 0, 1, "ion-icon", [["name", "add"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { name: [0, "name"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Categories "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 0, "div", [["class", "padding20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 2, "ion-button", [["class", "login-btn"], ["expand", "block"], ["type", "submit"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { disabled: [0, "disabled"], expand: [1, "expand"], type: [2, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save Now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "div", [["class", "padding20"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "primary"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "close"; _ck(_v, 10, 0, currVal_1); var currVal_2 = (!_co.form.valid || _co.desabled); _ck(_v, 15, 0, currVal_2); var currVal_3 = "share"; _ck(_v, 17, 0, currVal_3); var currVal_11 = _co.form; _ck(_v, 23, 0, currVal_11); var currVal_12 = "full"; _ck(_v, 27, 0, currVal_12); var currVal_20 = "name"; _ck(_v, 33, 0, currVal_20); var currVal_21 = "off"; var currVal_22 = ""; var currVal_23 = "Name"; var currVal_24 = "text"; _ck(_v, 36, 0, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_25 = _co.validation_messages.name; _ck(_v, 39, 0, currVal_25); var currVal_33 = "price"; _ck(_v, 45, 0, currVal_33); var currVal_34 = "off"; var currVal_35 = ""; var currVal_36 = "Price"; var currVal_37 = "number"; _ck(_v, 48, 0, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_38 = _co.validation_messages.price; _ck(_v, 51, 0, currVal_38); var currVal_46 = "description"; _ck(_v, 57, 0, currVal_46); var currVal_47 = "off"; var currVal_48 = "Description..."; _ck(_v, 60, 0, currVal_47, currVal_48); var currVal_49 = _co.categories.length; _ck(_v, 62, 0, currVal_49); var currVal_50 = "add"; _ck(_v, 66, 0, currVal_50); var currVal_51 = (!_co.form.valid || _co.desabled); var currVal_52 = "block"; var currVal_53 = "submit"; _ck(_v, 70, 0, currVal_51, currVal_52, currVal_53); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; _ck(_v, 21, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending; _ck(_v, 30, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPending; _ck(_v, 42, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassUntouched; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassTouched; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPristine; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassDirty; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassValid; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassInvalid; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPending; _ck(_v, 54, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45); }); }
function View_NewPage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-new", [], null, null, null, View_NewPage_0, RenderType_NewPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services_apis_service__WEBPACK_IMPORTED_MODULE_9__["ApisService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NewPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-new", _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], View_NewPage_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/items/new/new.page.scss.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/items/new/new.page.scss.shim.ngstyle.js ***!
  \*********************************************************/
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
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL25ldy9uZXcucGFnZS5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/items/new/new.page.ts":
/*!***************************************!*\
  !*** ./src/app/items/new/new.page.ts ***!
  \***************************************/
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
/* harmony import */ var _common_categories_categories_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/categories/categories.page */ "./src/app/common/categories/categories.page.ts");










class NewPage {
    constructor(router, menu, authService, apisService, storageService, toastService, navParams, modalController) {
        this.router = router;
        this.menu = menu;
        this.authService = authService;
        this.apisService = apisService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.categories = [];
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' },
                { type: 'minlength', message: 'Password must be at least 2 characters long.' }
            ],
            'price': [
                { type: 'required', message: 'Price is required.' },
                { type: 'min', message: 'Price must be a valid number.' },
            ]
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
            ])),
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
        form.append('description', this.form.value.description);
        form.append('name', this.form.value.name);
        form.append('price', this.form.value.price);
        form.append('categories', JSON.stringify(this.categories));
        form.append('auth_token', this.displayUserData.auth_token);
        this.apisService.itemAdd(form).subscribe((result) => {
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
                console.log(error.error.data);
                this.toastService.presentToast(error.error.data);
            }
        });
    }
    itemCategoryPriceUpdate(category, event) {
        let tempArray = [];
        this.categories.map(function (item) {
            if (item.category_id == category.category_id) {
                item.price = event.target.value;
            }
            tempArray.push(item);
        });
        this.categories = tempArray;
    }
    openCategoryModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _common_categories_categories_page__WEBPACK_IMPORTED_MODULE_8__["CategoriesPage"],
                componentProps: { data: this.categories },
                backdropDismiss: false
            });
            modal.onDidDismiss().then(data => {
                if (this.apisService.isDefined(data.data[0])) {
                    this.categories = (data.data);
                    this.categories = this.apisService.sortArray(this.categories);
                }
            });
            return yield modal.present();
        });
    }
    deleteCategory(id) {
        let tempArray = [];
        this.categories.map(function (item) {
            if (item.id != id) {
                tempArray.push(item);
            }
        });
        this.categories = tempArray;
    }
    close() {
        this.modalController.dismiss([]);
    }
}


/***/ })

}]);
//# sourceMappingURL=default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~items-list-list-module-~df28b05a-es2015.js.map