function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-setting-setting-module-ngfactory"], {
  /***/
  "./src/app/settings/setting/setting-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/settings/setting/setting-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: SettingPageRoutingModule */

  /***/
  function srcAppSettingsSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
      return SettingPageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/settings/setting/setting.page.ts");

    var routes = [{
      path: '',
      component: _setting_page__WEBPACK_IMPORTED_MODULE_1__["SettingPage"]
    }];

    var SettingPageRoutingModule = function SettingPageRoutingModule() {
      _classCallCheck(this, SettingPageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/settings/setting/setting.module.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/settings/setting/setting.module.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: SettingPageModuleNgFactory */

  /***/
  function srcAppSettingsSettingSettingModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModuleNgFactory", function () {
      return SettingPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _setting_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./setting.module */
    "./src/app/settings/setting/setting.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _setting_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./setting.page.ngfactory */
    "./src/app/settings/setting/setting.page.ngfactory.js");
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
    /*! ../../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./setting-routing.module */
    "./src/app/settings/setting/setting-routing.module.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/settings/setting/setting.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var SettingPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_setting_module__WEBPACK_IMPORTED_MODULE_1__["SettingPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _setting_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["SettingPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingPageRoutingModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_12__["SettingPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _setting_module__WEBPACK_IMPORTED_MODULE_1__["SettingPageModule"], _setting_module__WEBPACK_IMPORTED_MODULE_1__["SettingPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          component: _setting_page__WEBPACK_IMPORTED_MODULE_13__["SettingPage"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/settings/setting/setting.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/settings/setting/setting.module.ts ***!
    \****************************************************/

  /*! exports provided: SettingPageModule */

  /***/
  function srcAppSettingsSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
      return SettingPageModule;
    });

    var SettingPageModule = function SettingPageModule() {
      _classCallCheck(this, SettingPageModule);
    };
    /***/

  },

  /***/
  "./src/app/settings/setting/setting.page.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/settings/setting/setting.page.ngfactory.js ***!
    \************************************************************/

  /*! exports provided: RenderType_SettingPage, View_SettingPage_0, View_SettingPage_Host_0, SettingPageNgFactory */

  /***/
  function srcAppSettingsSettingSettingPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_SettingPage", function () {
      return RenderType_SettingPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SettingPage_0", function () {
      return View_SettingPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_SettingPage_Host_0", function () {
      return View_SettingPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPageNgFactory", function () {
      return SettingPageNgFactory;
    });
    /* harmony import */


    var _setting_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./setting.page.scss.shim.ngstyle */
    "./src/app/settings/setting/setting.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _style_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../style/listing.ios.scss.shim.ngstyle */
    "./src/app/style/listing.ios.scss.shim.ngstyle.js");
    /* harmony import */


    var _style_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../style/listing.page.scss.shim.ngstyle */
    "./src/app/style/listing.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _style_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../style/listing.shell.scss.shim.ngstyle */
    "./src/app/style/listing.shell.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component.ngfactory */
    "./src/app/shell/text-shell/text-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _setting_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./setting.page */
    "./src/app/settings/setting/setting.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_SettingPage = [_setting_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _style_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _style_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"], _style_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];

    var RenderType_SettingPage = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SettingPage,
      data: {}
    });

    function View_SettingPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 10, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](2, 0, null, 0, 8, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](4, 0, null, 0, 3, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](6, 0, null, 0, 1, "ion-menu-button", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonMenuButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonMenuButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonMenuButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](8, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, 0, [" Setting "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](11, 0, null, null, 87, "ion-content", [["class", "deals-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](13, 0, null, 0, 85, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](14, 0, null, null, 16, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](15, 0, null, null, 15, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](16, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](17, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](19, 0, null, 0, 1, "ion-icon", [["class", "setting-menu-icon"], ["name", "person"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](20, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](21, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "9"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](23, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](24, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](25, 0, null, 0, 1, "span", [["style", "font-size: 14px; color: #989aa2;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" Setting your account and whateever "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](27, 0, null, 0, 3, "ion-col", [["size", "1"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](29, 0, null, 0, 1, "ion-icon", [["class", "setting-forword"], ["name", "chevron-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](30, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](31, 0, null, null, 16, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](32, 0, null, null, 15, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](34, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](36, 0, null, 0, 1, "ion-icon", [["class", "setting-menu-icon"], ["name", "business"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](38, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "9"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](40, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](41, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](42, 0, null, 0, 1, "span", [["style", "font-size: 14px; color: #989aa2;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, ["All services with setting in here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](44, 0, null, 0, 3, "ion-col", [["size", "1"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](46, 0, null, 0, 1, "ion-icon", [["class", "setting-forword"], ["name", "chevron-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](48, 0, null, null, 16, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](49, 0, null, null, 15, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](50, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](51, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](52, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](53, 0, null, 0, 1, "ion-icon", [["class", "setting-menu-icon"], ["name", "snow"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](54, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](55, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "9"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](57, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](58, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](59, 0, null, 0, 1, "span", [["style", "font-size: 14px; color: #989aa2;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" All services with setting in here "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](61, 0, null, 0, 3, "ion-col", [["size", "1"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](62, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](63, 0, null, 0, 1, "ion-icon", [["class", "setting-forword"], ["name", "chevron-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](64, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](65, 0, null, null, 16, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](66, 0, null, null, 15, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](68, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](69, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](70, 0, null, 0, 1, "ion-icon", [["class", "setting-menu-icon"], ["name", "card"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](71, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](72, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "9"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](73, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](74, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](75, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](76, 0, null, 0, 1, "span", [["style", "font-size: 14px; color: #989aa2;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" All services with setting in here "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](78, 0, null, 0, 3, "ion-col", [["size", "1"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](79, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](80, 0, null, 0, 1, "ion-icon", [["class", "setting-forword"], ["name", "chevron-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](81, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](82, 0, null, null, 16, "div", [["class", "listing-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](83, 0, null, null, 15, "ion-row", [["class", "middle-row"], ["style", "padding-top: 20px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](85, 0, null, 0, 3, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](86, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](87, 0, null, 0, 1, "ion-icon", [["class", "setting-menu-icon"], ["name", "server"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](88, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](89, 0, null, 0, 5, "ion-col", [["class", "info-col"], ["size", "9"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](90, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](91, 0, null, 0, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](92, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](93, 0, null, 0, 1, "span", [["style", "font-size: 14px; color: #989aa2;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵted"](-1, null, [" All services with setting in here "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](95, 0, null, 0, 3, "ion-col", [["size", "1"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](96, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](97, 0, null, 0, 1, "ion-icon", [["class", "setting-forword"], ["name", "chevron-forward"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](98, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "primary";

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = "2";

        _ck(_v, 18, 0, currVal_1);

        var currVal_2 = "person";

        _ck(_v, 20, 0, currVal_2);

        var currVal_3 = "9";

        _ck(_v, 22, 0, currVal_3);

        var currVal_5 = "Account";

        _ck(_v, 24, 0, currVal_5);

        var currVal_6 = "1";

        _ck(_v, 28, 0, currVal_6);

        var currVal_7 = "chevron-forward";

        _ck(_v, 30, 0, currVal_7);

        var currVal_8 = "2";

        _ck(_v, 35, 0, currVal_8);

        var currVal_9 = "business";

        _ck(_v, 37, 0, currVal_9);

        var currVal_10 = "9";

        _ck(_v, 39, 0, currVal_10);

        var currVal_12 = "Company Information";

        _ck(_v, 41, 0, currVal_12);

        var currVal_13 = "1";

        _ck(_v, 45, 0, currVal_13);

        var currVal_14 = "chevron-forward";

        _ck(_v, 47, 0, currVal_14);

        var currVal_15 = "2";

        _ck(_v, 52, 0, currVal_15);

        var currVal_16 = "snow";

        _ck(_v, 54, 0, currVal_16);

        var currVal_17 = "9";

        _ck(_v, 56, 0, currVal_17);

        var currVal_19 = "Integrations";

        _ck(_v, 58, 0, currVal_19);

        var currVal_20 = "1";

        _ck(_v, 62, 0, currVal_20);

        var currVal_21 = "chevron-forward";

        _ck(_v, 64, 0, currVal_21);

        var currVal_22 = "2";

        _ck(_v, 69, 0, currVal_22);

        var currVal_23 = "card";

        _ck(_v, 71, 0, currVal_23);

        var currVal_24 = "9";

        _ck(_v, 73, 0, currVal_24);

        var currVal_26 = "Payment Integrations";

        _ck(_v, 75, 0, currVal_26);

        var currVal_27 = "1";

        _ck(_v, 79, 0, currVal_27);

        var currVal_28 = "chevron-forward";

        _ck(_v, 81, 0, currVal_28);

        var currVal_29 = "2";

        _ck(_v, 86, 0, currVal_29);

        var currVal_30 = "server";

        _ck(_v, 88, 0, currVal_30);

        var currVal_31 = "9";

        _ck(_v, 90, 0, currVal_31);

        var currVal_33 = "Services";

        _ck(_v, 92, 0, currVal_33);

        var currVal_34 = "1";

        _ck(_v, 96, 0, currVal_34);

        var currVal_35 = "chevron-forward";

        _ck(_v, 98, 0, currVal_35);
      }, function (_ck, _v) {
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 24).textLoaded;

        _ck(_v, 23, 0, currVal_4);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 41).textLoaded;

        _ck(_v, 40, 0, currVal_11);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 58).textLoaded;

        _ck(_v, 57, 0, currVal_18);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 75).textLoaded;

        _ck(_v, 74, 0, currVal_25);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵnov"](_v, 92).textLoaded;

        _ck(_v, 91, 0, currVal_32);
      });
    }

    function View_SettingPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵeld"](0, 0, null, null, 1, "app-setting", [], null, null, null, View_SettingPage_0, RenderType_SettingPage)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵdid"](1, 114688, null, 0, _setting_page__WEBPACK_IMPORTED_MODULE_9__["SettingPage"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var SettingPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵccf"]("app-setting", _setting_page__WEBPACK_IMPORTED_MODULE_9__["SettingPage"], View_SettingPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/settings/setting/setting.page.scss.shim.ngstyle.js":
  /*!********************************************************************!*\
    !*** ./src/app/settings/setting/setting.page.scss.shim.ngstyle.js ***!
    \********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSettingsSettingSettingPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".setting-menu-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 16px;\n  border-radius: 5px;\n  color: white;\n  padding: 10px;\n  background: #378275;\n}\n\n.setting-forword[_ngcontent-%COMP%] {\n  font-size: 36px;\n  float: right;\n  color: #378275;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy1pb25pYy9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmcvc2V0dGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVHO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgLnNldHRpbmctbWVudS1pY29ue1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzM3ODI3NTtcbiAgIH1cblxuICAgLnNldHRpbmctZm9yd29yZHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMzc4Mjc1O1xuICAgfSIsIi5zZXR0aW5nLW1lbnUtaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMzc4Mjc1O1xufVxuXG4uc2V0dGluZy1mb3J3b3JkIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMzc4Mjc1O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/settings/setting/setting.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/settings/setting/setting.page.ts ***!
    \**************************************************/

  /*! exports provided: SettingPage */

  /***/
  function srcAppSettingsSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
      return SettingPage;
    });

    var SettingPage = /*#__PURE__*/function () {
      function SettingPage() {
        _classCallCheck(this, SettingPage);
      }

      _createClass(SettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=settings-setting-setting-module-ngfactory-es5.js.map