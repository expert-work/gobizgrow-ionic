function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-profit-loss-profit-loss-module-ngfactory"], {
  /***/
  "./src/app/reports/profit-loss/profit-loss-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfitLossPageRoutingModule */

  /***/
  function srcAppReportsProfitLossProfitLossRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitLossPageRoutingModule", function () {
      return ProfitLossPageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profit_loss_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profit-loss.page */
    "./src/app/reports/profit-loss/profit-loss.page.ts");

    var routes = [{
      path: '',
      component: _profit_loss_page__WEBPACK_IMPORTED_MODULE_1__["ProfitLossPage"]
    }];

    var ProfitLossPageRoutingModule = function ProfitLossPageRoutingModule() {
      _classCallCheck(this, ProfitLossPageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/reports/profit-loss/profit-loss.module.ngfactory.js":
  /*!*********************************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss.module.ngfactory.js ***!
    \*********************************************************************/

  /*! exports provided: ProfitLossPageModuleNgFactory */

  /***/
  function srcAppReportsProfitLossProfitLossModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitLossPageModuleNgFactory", function () {
      return ProfitLossPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profit_loss_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profit-loss.module */
    "./src/app/reports/profit-loss/profit-loss.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _profit_loss_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profit-loss.page.ngfactory */
    "./src/app/reports/profit-loss/profit-loss.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profit_loss_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profit-loss-routing.module */
    "./src/app/reports/profit-loss/profit-loss-routing.module.ts");
    /* harmony import */


    var _profit_loss_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profit-loss.page */
    "./src/app/reports/profit-loss/profit-loss.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ProfitLossPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_profit_loss_module__WEBPACK_IMPORTED_MODULE_1__["ProfitLossPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _profit_loss_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ProfitLossPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _profit_loss_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfitLossPageRoutingModule"], _profit_loss_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfitLossPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _profit_loss_module__WEBPACK_IMPORTED_MODULE_1__["ProfitLossPageModule"], _profit_loss_module__WEBPACK_IMPORTED_MODULE_1__["ProfitLossPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: "",
          component: _profit_loss_page__WEBPACK_IMPORTED_MODULE_9__["ProfitLossPage"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/reports/profit-loss/profit-loss.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProfitLossPageModule */

  /***/
  function srcAppReportsProfitLossProfitLossModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitLossPageModule", function () {
      return ProfitLossPageModule;
    });

    var ProfitLossPageModule = function ProfitLossPageModule() {
      _classCallCheck(this, ProfitLossPageModule);
    };
    /***/

  },

  /***/
  "./src/app/reports/profit-loss/profit-loss.page.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss.page.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: RenderType_ProfitLossPage, View_ProfitLossPage_0, View_ProfitLossPage_Host_0, ProfitLossPageNgFactory */

  /***/
  function srcAppReportsProfitLossProfitLossPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ProfitLossPage", function () {
      return RenderType_ProfitLossPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfitLossPage_0", function () {
      return View_ProfitLossPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ProfitLossPage_Host_0", function () {
      return View_ProfitLossPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitLossPageNgFactory", function () {
      return ProfitLossPageNgFactory;
    });
    /* harmony import */


    var _profit_loss_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./profit-loss.page.scss.shim.ngstyle */
    "./src/app/reports/profit-loss/profit-loss.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _profit_loss_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profit-loss.page */
    "./src/app/reports/profit-loss/profit-loss.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ProfitLossPage = [_profit_loss_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ProfitLossPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProfitLossPage,
      data: {}
    });

    function View_ProfitLossPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "ion-back-button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Profit & Loss Report"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 18, "div", [["class", "search-filter-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 17, "ion-toolbar", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 4, "div", [["slot", "start"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "ion-datetime", [["display-timezone", "utc"], ["displayFormat", "MM/DD/YYYY"], ["placeholder", " Date From"], ["value", "12/12/2020"]], null, [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        displayFormat: [0, "displayFormat"],
        placeholder: [1, "placeholder"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "ion-datetime", [["display-timezone", "utc"], ["displayFormat", "MM/DD/YYYY"], ["placeholder", "Date To"], ["value", "12/12/2020"]], null, [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        displayFormat: [0, "displayFormat"],
        placeholder: [1, "placeholder"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 5, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 3, "ion-buttons", [["class", "primary"], ["style", "color: #378174;\n      font-size: 38px;\n      float: right;\n      margin-right: 15px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 1, "ion-icon", [["name", "arrow-forward-circle"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "iframe", [["frameborder", "0"], ["height", "100%"], ["src", "https://app.gobizgrow.com/pdf/reports/taxes?company_id=14&range=07/01/2020%20/%2007/31/2020"], ["width", "100%"]], null, null, null, null, null))], function (_ck, _v) {
        var currVal_0 = "primary";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "MM/DD/YYYY";
        var currVal_2 = " Date From";
        var currVal_3 = "12/12/2020";

        _ck(_v, 18, 0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = "MM/DD/YYYY";
        var currVal_5 = "Date To";
        var currVal_6 = "12/12/2020";

        _ck(_v, 23, 0, currVal_4, currVal_5, currVal_6);

        var currVal_7 = "arrow-forward-circle";

        _ck(_v, 30, 0, currVal_7);
      }, null);
    }

    function View_ProfitLossPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profit-loss", [], null, null, null, View_ProfitLossPage_0, RenderType_ProfitLossPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profit_loss_page__WEBPACK_IMPORTED_MODULE_5__["ProfitLossPage"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ProfitLossPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profit-loss", _profit_loss_page__WEBPACK_IMPORTED_MODULE_5__["ProfitLossPage"], View_ProfitLossPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/reports/profit-loss/profit-loss.page.scss.shim.ngstyle.js":
  /*!***************************************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss.page.scss.shim.ngstyle.js ***!
    \***************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppReportsProfitLossProfitLossPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcHJvZml0LWxvc3MvcHJvZml0LWxvc3MucGFnZS5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/reports/profit-loss/profit-loss.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/reports/profit-loss/profit-loss.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProfitLossPage */

  /***/
  function srcAppReportsProfitLossProfitLossPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfitLossPage", function () {
      return ProfitLossPage;
    });

    var ProfitLossPage = /*#__PURE__*/function () {
      function ProfitLossPage() {
        _classCallCheck(this, ProfitLossPage);
      }

      _createClass(ProfitLossPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfitLossPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=reports-profit-loss-profit-loss-module-ngfactory-es5.js.map