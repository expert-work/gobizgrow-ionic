function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module-ngfactory"], {
  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../guards/home.guard */
    "./src/app/guards/home.guard.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_1__["DashboardPage"],
      canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ngfactory.js":
  /*!*********************************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ngfactory.js ***!
    \*********************************************************/

  /*! exports provided: DashboardPageModuleNgFactory */

  /***/
  function srcAppDashboardDashboardModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModuleNgFactory", function () {
      return DashboardPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _dashboard_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page.ngfactory */
    "./src/app/dashboard/dashboard.page.ngfactory.js");
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var DashboardPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _dashboard_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DashboardPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__["DashboardPageRoutingModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_12__["DashboardPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardPageModule"], _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          component: _dashboard_page__WEBPACK_IMPORTED_MODULE_13__["DashboardPage"],
          canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_14__["HomeGuard"]]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
    });

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.page.ngfactory.js":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ngfactory.js ***!
    \*******************************************************/

  /*! exports provided: RenderType_DashboardPage, View_DashboardPage_0, View_DashboardPage_Host_0, DashboardPageNgFactory */

  /***/
  function srcAppDashboardDashboardPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardPage", function () {
      return RenderType_DashboardPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardPage_0", function () {
      return View_DashboardPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardPage_Host_0", function () {
      return View_DashboardPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageNgFactory", function () {
      return DashboardPageNgFactory;
    });
    /* harmony import */


    var _dashboard_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard.page.scss.shim.ngstyle */
    "./src/app/dashboard/dashboard.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DashboardPage = [_dashboard_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_DashboardPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DashboardPage,
      data: {}
    });

    function View_DashboardPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "ion-header", [["no-border", ""]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "ion-toolbar", [["style", "--background: #f6f6f6;--border-width: 0;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 5, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 3, "ion-menu-button", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonMenuButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonMenuButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "ion-icon", [["name", "grid-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 111, "ion-content", [["style", "--background: #f6f6f6;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 109, "ion-grid", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonGrid_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonGrid"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "h3", [["style", "font-size: 30px;\n    font-weight: 400;\n    padding-left: 20px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 105, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](21, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "document"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Invoice"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, ["", " Invoices"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](34, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "people"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", " Customers"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](47, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "document-text"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Estimate"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](56, null, ["", " Estimation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](60, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "star"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Item"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, null, ["", " Items"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](73, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "card"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Payment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](82, null, ["", " Payments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](86, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "rocket"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Expense"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](95, null, ["", " Expenses"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](99, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "stats-chart"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Report"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, 0, 12, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"], ["style", "padding:20px"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](112, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, 0, 7, "div", [["class", "grid-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 2, "div", [["class", "grid-icon-div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "ion-icon", [["class", "grid-icon"], ["name", "settings"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "p", [["class", "grid-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Setting"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "p", [["class", "grid-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 43, "ion-footer", [["class", "ion-no-border"], ["style", "background: white;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFooter_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFooter"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, 0, 20, "ion-tabs", [["style", "display: unset;position: unset;"]], null, [[null, "ionTabButtonClick"]], function (_v, en, $event) {
        var ad = true;

        if ("ionTabButtonClick" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).select($event.detail.tab) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabs_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabs"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 49152, null, 1, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tabBar: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, 1, 17, "ion-tab-bar", [["style", "background:white;--border: 0;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabBar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabBar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 49152, [[1, 4]], 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabBar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, 0, 6, "ion-tab-button", [["class", "side-tab"], ["tab", "/app/dashboard"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        tab: [0, "tab"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, 0, 1, "ion-icon", [["name", "home-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, 0, 1, "ion-tab-button", [["class", "center-tab"], ["style", "    max-width: 80px;\n       width: 80px;\n       background: #ffffff;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, 0, 6, "ion-tab-button", [["class", "side-tab"], ["tab", "debts"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        tab: [0, "tab"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, 0, 1, "ion-icon", [["name", "cash-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, 0, 2, "ion-label", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonLabel_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonLabel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Debts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, 0, 20, "ion-fab", [["class", "center-add-button"], ["edge", "false"], ["horizontal", "center"], ["slot", "fixed"], ["style", "display: block!important;"], ["vertical", "bottom"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFab_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFab"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        edge: [0, "edge"],
        horizontal: [1, "horizontal"],
        vertical: [2, "vertical"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, 0, 3, "ion-fab-button", [["class", "custom-tab"], ["style", "margin-left: -11px;\n    font-size: 61px;\n    border-radius: 50% !important;\n    margin-top: -87px !important;\n    box-shadow: 0 0 0 11px #f6f6f6;\n    width: 80px;\n    height: 80px;"], ["type", "button"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        type: [0, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, 0, 1, "ion-icon", [["name", "add"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, 0, 14, "ion-fab-list", [["side", "top"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabList_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabList"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        side: [0, "side"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, 0, 4, "ion-fab-button", [["color", "dark"], ["type", "button"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, 0, 1, "ion-icon", [["name", "list-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](156, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [">"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, 0, 3, "ion-fab-button", [["color", "dark"], ["type", "button"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, 0, 1, "ion-icon", [["name", "pie-chart-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, 0, 3, "ion-fab-button", [["color", "dark"], ["type", "button"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonFabButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonFabButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, 0, 1, "ion-icon", [["name", "cash-outline"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "grid-outline";

        _ck(_v, 9, 0, currVal_0);

        var currVal_1 = "3";
        var currVal_2 = "3";
        var currVal_3 = "6";

        _ck(_v, 19, 0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _ck(_v, 21, 0, "/app/invoices");

        _ck(_v, 20, 0, currVal_4);

        _ck(_v, 22, 0);

        var currVal_5 = "document";

        _ck(_v, 26, 0, currVal_5);

        var currVal_7 = "3";
        var currVal_8 = "3";
        var currVal_9 = "6";

        _ck(_v, 32, 0, currVal_7, currVal_8, currVal_9);

        var currVal_10 = _ck(_v, 34, 0, "/app/customers");

        _ck(_v, 33, 0, currVal_10);

        _ck(_v, 35, 0);

        var currVal_11 = "people";

        _ck(_v, 39, 0, currVal_11);

        var currVal_13 = "3";
        var currVal_14 = "3";
        var currVal_15 = "6";

        _ck(_v, 45, 0, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _ck(_v, 47, 0, "/app/estimates");

        _ck(_v, 46, 0, currVal_16);

        _ck(_v, 48, 0);

        var currVal_17 = "document-text";

        _ck(_v, 52, 0, currVal_17);

        var currVal_19 = "3";
        var currVal_20 = "3";
        var currVal_21 = "6";

        _ck(_v, 58, 0, currVal_19, currVal_20, currVal_21);

        var currVal_22 = _ck(_v, 60, 0, "/app/items");

        _ck(_v, 59, 0, currVal_22);

        _ck(_v, 61, 0);

        var currVal_23 = "star";

        _ck(_v, 65, 0, currVal_23);

        var currVal_25 = "3";
        var currVal_26 = "3";
        var currVal_27 = "6";

        _ck(_v, 71, 0, currVal_25, currVal_26, currVal_27);

        var currVal_28 = _ck(_v, 73, 0, "/app/payments");

        _ck(_v, 72, 0, currVal_28);

        _ck(_v, 74, 0);

        var currVal_29 = "card";

        _ck(_v, 78, 0, currVal_29);

        var currVal_31 = "3";
        var currVal_32 = "3";
        var currVal_33 = "6";

        _ck(_v, 84, 0, currVal_31, currVal_32, currVal_33);

        var currVal_34 = _ck(_v, 86, 0, "/app/expenses");

        _ck(_v, 85, 0, currVal_34);

        _ck(_v, 87, 0);

        var currVal_35 = "rocket";

        _ck(_v, 91, 0, currVal_35);

        var currVal_37 = "3";
        var currVal_38 = "3";
        var currVal_39 = "6";

        _ck(_v, 97, 0, currVal_37, currVal_38, currVal_39);

        var currVal_40 = _ck(_v, 99, 0, "/app/reports");

        _ck(_v, 98, 0, currVal_40);

        _ck(_v, 100, 0);

        var currVal_41 = "stats-chart";

        _ck(_v, 104, 0, currVal_41);

        var currVal_42 = "3";
        var currVal_43 = "3";
        var currVal_44 = "6";

        _ck(_v, 110, 0, currVal_42, currVal_43, currVal_44);

        var currVal_45 = _ck(_v, 112, 0, "/app/settings");

        _ck(_v, 111, 0, currVal_45);

        _ck(_v, 113, 0);

        var currVal_46 = "settings";

        _ck(_v, 117, 0, currVal_46);

        var currVal_47 = "/app/dashboard";

        _ck(_v, 130, 0, currVal_47);

        var currVal_48 = "home-outline";

        _ck(_v, 132, 0, currVal_48);

        var currVal_49 = "debts";

        _ck(_v, 139, 0, currVal_49);

        var currVal_50 = "cash-outline";

        _ck(_v, 141, 0, currVal_50);

        var currVal_51 = "false";
        var currVal_52 = "center";
        var currVal_53 = "bottom";

        _ck(_v, 146, 0, currVal_51, currVal_52, currVal_53);

        var currVal_54 = "button";

        _ck(_v, 148, 0, currVal_54);

        var currVal_55 = "add";

        _ck(_v, 150, 0, currVal_55);

        var currVal_56 = "top";

        _ck(_v, 152, 0, currVal_56);

        var currVal_57 = "dark";
        var currVal_58 = "button";

        _ck(_v, 154, 0, currVal_57, currVal_58);

        var currVal_59 = "list-outline";

        _ck(_v, 156, 0, currVal_59);

        var currVal_60 = "dark";
        var currVal_61 = "button";

        _ck(_v, 159, 0, currVal_60, currVal_61);

        var currVal_62 = "pie-chart-outline";

        _ck(_v, 161, 0, currVal_62);

        var currVal_63 = "dark";
        var currVal_64 = "button";

        _ck(_v, 163, 0, currVal_63, currVal_64);

        var currVal_65 = "cash-outline";

        _ck(_v, 165, 0, currVal_65);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_6 = _co.Invoice;

        _ck(_v, 30, 0, currVal_6);

        var currVal_12 = _co.Customer;

        _ck(_v, 43, 0, currVal_12);

        var currVal_18 = _co.Estimate;

        _ck(_v, 56, 0, currVal_18);

        var currVal_24 = _co.Item;

        _ck(_v, 69, 0, currVal_24);

        var currVal_30 = _co.Payment;

        _ck(_v, 82, 0, currVal_30);

        var currVal_36 = _co.Expense;

        _ck(_v, 95, 0, currVal_36);
      });
    }

    function View_DashboardPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardPage_0, RenderType_DashboardPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DashboardPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], View_DashboardPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.page.scss.shim.ngstyle.js":
  /*!***************************************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss.shim.ngstyle.js ***!
    \***************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDashboardDashboardPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["@-webkit-keyframes blinker {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.blink[_ngcontent-%COMP%] {\n  animation: blinker 2s linear infinite;\n  background-color: red;\n  margin-right: 5px;\n  border-radius: 0;\n  text-align: center !important;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  PADDING: 10PX;\n  width: 100%;\n  -webkit-animation: blinker 2s linear infinite;\n  animation: blinker 2s linear infinite;\n}\n.header-md[_ngcontent-%COMP%]::after {\n  background-image: none !important;\n}\n.grid-div[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 10px;\n}\n.grid-icon-div[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 60px;\n  background: #dbefeb;\n  align-content: center;\n  align-items: center;\n  padding: 10px;\n}\nion-icon.grid-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #3c8b70;\n}\np.grid-description[_ngcontent-%COMP%] {\n  color: #929292;\n  margin-bottom: 0px;\n  margin-top: 1px;\n  font-weight: 400;\n  font-size: 14px;\n}\np.grid-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-top: 40px;\n}\n.side-tab[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.tabs-inner[_ngcontent-%COMP%] {\n  position: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy1pb25pYy9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQUssVUFBQTtFQ0VQO0VEREU7SUFBTSxVQUFBO0VDSVI7RURIRTtJQUFPLFVBQUE7RUNNVDtBQUNGO0FESkU7RUFFRyxxQ0FBQTtFQUNELHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQyxXQUFBO0VBQ0EsNkNBQUE7RUFDRCxxQ0FBQTtBQ0tKO0FEQUE7RUFDSSxpQ0FBQTtBQ0dKO0FEQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0dGO0FEREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSUY7QURGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDS0Y7QURIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNNRjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ09GO0FESEE7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNNRjtBREhBO0VBQ0UsMEJBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rZXIgeyAgXG4gICAgMCUgeyBvcGFjaXR5OiAxLjA7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMS4wOyB9XG4gIH1cbiAgXG4gIC5ibGluayB7XG4gXG4gICAgIGFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFBBRERJTkc6IDEwUFg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBcblxuICB9XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG4gXG4uZ3JpZC1kaXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ncmlkLWljb24tZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogI2RiZWZlYjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWljb24uZ3JpZC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzNjOGI3MDtcbn0gXG5wLmdyaWQtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzkyOTI5MjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnAuZ3JpZC1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5cbi5zaWRlLXRhYiB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4udGFicy1pbm5lciB7XG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xufSIsIkAtd2Via2l0LWtleWZyYW1lcyBibGlua2VyIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5ibGluayB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgUEFERElORzogMTBQWDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkLWRpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZ3JpZC1pY29uLWRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNkYmVmZWI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWljb24uZ3JpZC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzNjOGI3MDtcbn1cblxucC5ncmlkLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbnAuZ3JpZC1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uc2lkZS10YWIge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLnRhYnMtaW5uZXIge1xuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(actionSheetController, apisService, toastService, authService) {
        _classCallCheck(this, DashboardPage);

        this.actionSheetController = actionSheetController;
        this.apisService = apisService;
        this.toastService = toastService;
        this.authService = authService;
        this.Invoice = 0;
        this.Customer = 0;
        this.Estimate = 0;
        this.Item = 0;
        this.Payment = 0;
        this.Expense = 0;
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userData$.subscribe(function (res) {
            _this.displayUserData = res;

            if (_this.displayUserData.auth_token !== undefined) {
              _this.loadData();
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this2 = this;

          var form = new FormData();
          form.append('auth_token', this.displayUserData.auth_token);
          this.apisService.dashboard(form).subscribe(function (result) {
            if (result.data.Customer) {
              _this2.Invoice = result.data.Invoice;
              _this2.Customer = result.data.Customer;
              _this2.Estimate = result.data.Estimate;
              _this2.Item = result.data.Item;
              _this2.Payment = result.data.Payment;
              _this2.Expense = result.data.Expense;
            } else {}
          }, function (error) {
            if (error.status == 0) {
              _this2.toastService.presentToast('Connection failed');
            }

            if (error.status == 401) {
              _this2.toastService.presentToast('Authentcation failed');
            }
          });
        }
      }]);

      return DashboardPage;
    }();
    /***/

  },

  /***/
  "./src/app/services/apis.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/apis.service.ts ***!
    \******************************************/

  /*! exports provided: ApisService */

  /***/
  function srcAppServicesApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApisService = /*#__PURE__*/function () {
      function ApisService(httpService, http, storageService, router) {
        _classCallCheck(this, ApisService);

        this.httpService = httpService;
        this.http = http;
        this.storageService = storageService;
        this.router = router; // Image Upload Starts

        this.imageUploadUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'uploads';
      }

      _createClass(ApisService, [{
        key: "getImages",
        value: function getImages() {
          return this.http.get("".concat(this.imageUploadUrl, "/image"));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(blobData, name, ext, auth_token) {
          var formData = new FormData();
          formData.append('file', blobData, "myimage.".concat(ext));
          formData.append('name', name);
          formData.append('auth_token', auth_token);
          return this.http.post("".concat(this.imageUploadUrl), formData);
        }
      }, {
        key: "uploadImageFile",
        value: function uploadImageFile(file, auth_token) {
          var ext = file.name.split('.').pop();
          var formData = new FormData();
          formData.append('file', file, "myimage.".concat(ext));
          formData.append('name', file.name);
          formData.append('auth_token', auth_token);
          return this.http.post("".concat(this.imageUploadUrl), formData);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(id) {
          return this.http["delete"]("".concat(this.imageUploadUrl, "/image/").concat(id));
        }
      }, {
        key: "b64toBlob",
        value: function b64toBlob(b64Data) {
          var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
          var byteCharacters = atob(b64Data);
          var byteArrays = [];

          for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);

            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          var blob = new Blob(byteArrays, {
            type: contentType
          });
          return blob;
        } // Image Upload End

      }, {
        key: "getImageUrl",
        value: function getImageUrl(file) {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileUrl + file;
        }
      }, {
        key: "getThumbImageUrl",
        value: function getThumbImageUrl(file) {
          return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileUrl + 'thumb/' + file;
        }
      }, {
        key: "sortArray",
        value: function sortArray(myArray) {
          var result = myArray.reduce(function (unique, o) {
            if (!unique.some(function (obj) {
              return obj.id === o.id;
            })) {
              unique.push(o);
            }

            return unique;
          }, []);
          return result.sort(function (a, b) {
            return b.id - a.id;
          });
        }
      }, {
        key: "isDefined",
        value: function isDefined(x) {
          if (x == null) {
            return false;
          }

          if (x === null) {
            return false;
          }

          if (typeof x === 'undefined') {
            return false;
          }

          return true;
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }, {
        key: "signupComplete",
        value: function signupComplete(postData) {
          return this.httpService.post('signup-complete', postData);
        } //Customers

      }, {
        key: "dashboard",
        value: function dashboard(postData) {
          return this.httpService.post('dashboard', postData);
        }
      }, {
        key: "customers",
        value: function customers(postData) {
          return this.httpService.post('customers/all', postData);
        }
      }, {
        key: "invoices",
        value: function invoices(postData) {
          return this.httpService.post('invoices/all', postData);
        }
      }, {
        key: "nextInvoice",
        value: function nextInvoice(postData) {
          return this.httpService.post('invoices/next', postData);
        }
      }, {
        key: "nextEstimate",
        value: function nextEstimate(postData) {
          return this.httpService.post('estimates/next', postData);
        }
      }, {
        key: "items",
        value: function items(postData) {
          return this.httpService.post('items/all', postData);
        }
      }, {
        key: "categories",
        value: function categories(postData) {
          return this.httpService.post('categories/all', postData);
        }
      }, {
        key: "payments",
        value: function payments(postData) {
          return this.httpService.post('payments/all', postData);
        }
      }, {
        key: "expenses",
        value: function expenses(postData) {
          return this.httpService.post('expenses/all', postData);
        }
      }, {
        key: "taxes",
        value: function taxes(postData) {
          return this.httpService.post('taxes/all', postData);
        }
      }, {
        key: "images",
        value: function images(postData) {
          return this.httpService.post('images/all', postData);
        }
      }, {
        key: "deleteCustomers",
        value: function deleteCustomers(postData) {
          return this.httpService.post('customers/delete', postData);
        }
      }, {
        key: "customerAdd",
        value: function customerAdd(postData) {
          return this.httpService.post('customers/add', postData);
        }
      }, {
        key: "customerEdit",
        value: function customerEdit(auth_token, postData) {
          return this.httpService.post('customers/edit/' + auth_token, postData);
        }
      }, {
        key: "categoryAdd",
        value: function categoryAdd(postData) {
          return this.httpService.post('categories/add', postData);
        }
      }, {
        key: "itemAdd",
        value: function itemAdd(postData) {
          return this.httpService.post('items/add', postData);
        }
      }, {
        key: "taxAdd",
        value: function taxAdd(postData) {
          return this.httpService.post('tax/add', postData);
        }
      }, {
        key: "invoiceAdd",
        value: function invoiceAdd(postData) {
          return this.httpService.post('invoices/add', postData);
        }
      }, {
        key: "invoiceUpdate",
        value: function invoiceUpdate(postData) {
          return this.httpService.post('invoices/edit', postData);
        }
      }, {
        key: "estimateAdd",
        value: function estimateAdd(postData) {
          return this.httpService.post('invoices/add', postData);
        }
      }, {
        key: "estimateUpdate",
        value: function estimateUpdate(postData) {
          return this.httpService.post('invoices/edit', postData);
        } //Invoices
        //Items
        //Payments
        //Expenses
        //Items Categories
        //Expenses Categories
        //Taxes
        //Payment Merhods
        // get Industries industries

      }, {
        key: "industries",
        value: function industries(postData) {
          return this.httpService.post('industries', postData);
        } // get All Estimates

      }, {
        key: "estimates",
        value: function estimates(postData) {
          return this.httpService.post('estimates/all', postData);
        }
      }]);

      return ApisService;
    }();

    ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      factory: function ApisService_Factory() {
        return new ApisService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      },
      token: ApisService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastController) {
        _classCallCheck(this, ToastService);

        this.toastController = toastController;
      }

      _createClass(ToastService, [{
        key: "presentToast",
        value: function presentToast(infoMessage) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: infoMessage,
                      duration: 3000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function ToastService_Factory() {
        return new ToastService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]));
      },
      token: ToastService,
      providedIn: "root"
    });
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-ngfactory-es5.js.map