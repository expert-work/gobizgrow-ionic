function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoices-new-new-module-ngfactory"], {
  /***/
  "./src/app/invoices/new/new-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/invoices/new/new-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: NewPageRoutingModule */

  /***/
  function srcAppInvoicesNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
      return NewPageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new.page */
    "./src/app/invoices/new/new.page.ts");

    var routes = [{
      path: '',
      component: _new_page__WEBPACK_IMPORTED_MODULE_1__["NewPage"]
    }];

    var NewPageRoutingModule = function NewPageRoutingModule() {
      _classCallCheck(this, NewPageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/invoices/new/new.module.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/invoices/new/new.module.ngfactory.js ***!
    \******************************************************/

  /*! exports provided: NewPageModuleNgFactory */

  /***/
  function srcAppInvoicesNewNewModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPageModuleNgFactory", function () {
      return NewPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _new_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new.module */
    "./src/app/invoices/new/new.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _new_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./new.page.ngfactory */
    "./src/app/invoices/new/new.page.ngfactory.js");
    /* harmony import */


    var _common_customers_customers_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../common/customers/customers.page.ngfactory */
    "./src/app/common/customers/customers.page.ngfactory.js");
    /* harmony import */


    var _customers_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../customers/new/new.page.ngfactory */
    "./src/app/customers/new/new.page.ngfactory.js");
    /* harmony import */


    var _customers_vehicle_vehicle_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../customers/vehicle/vehicle.page.ngfactory */
    "./src/app/customers/vehicle/vehicle.page.ngfactory.js");
    /* harmony import */


    var _common_items_items_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../common/items/items.page.ngfactory */
    "./src/app/common/items/items.page.ngfactory.js");
    /* harmony import */


    var _items_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../items/new/new.page.ngfactory */
    "./src/app/items/new/new.page.ngfactory.js");
    /* harmony import */


    var _common_categories_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/categories/categories.page.ngfactory */
    "./src/app/common/categories/categories.page.ngfactory.js");
    /* harmony import */


    var _item_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../item-categories/new/new.page.ngfactory */
    "./src/app/item-categories/new/new.page.ngfactory.js");
    /* harmony import */


    var _common_taxes_taxes_page_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../common/taxes/taxes.page.ngfactory */
    "./src/app/common/taxes/taxes.page.ngfactory.js");
    /* harmony import */


    var _taxes_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../taxes/new/new.page.ngfactory */
    "./src/app/taxes/new/new.page.ngfactory.js");
    /* harmony import */


    var _common_upload_upload_page_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../common/upload/upload.page.ngfactory */
    "./src/app/common/upload/upload.page.ngfactory.js");
    /* harmony import */


    var _images_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../images/new/new.page.ngfactory */
    "./src/app/images/new/new.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _new_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./new-routing.module */
    "./src/app/invoices/new/new-routing.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _common_customers_customers_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../common/customers/customers-routing.module */
    "./src/app/common/customers/customers-routing.module.ts");
    /* harmony import */


    var _customers_new_new_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../customers/new/new-routing.module */
    "./src/app/customers/new/new-routing.module.ts");
    /* harmony import */


    var _customers_vehicle_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../customers/vehicle/vehicle-routing.module */
    "./src/app/customers/vehicle/vehicle-routing.module.ts");
    /* harmony import */


    var _customers_vehicle_vehicle_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../customers/vehicle/vehicle.module */
    "./src/app/customers/vehicle/vehicle.module.ts");
    /* harmony import */


    var _customers_new_new_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../../customers/new/new.module */
    "./src/app/customers/new/new.module.ts");
    /* harmony import */


    var _common_customers_customers_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../common/customers/customers.module */
    "./src/app/common/customers/customers.module.ts");
    /* harmony import */


    var _common_items_items_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ../../common/items/items-routing.module */
    "./src/app/common/items/items-routing.module.ts");
    /* harmony import */


    var _items_new_new_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../../items/new/new-routing.module */
    "./src/app/items/new/new-routing.module.ts");
    /* harmony import */


    var _common_categories_categories_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ../../common/categories/categories-routing.module */
    "./src/app/common/categories/categories-routing.module.ts");
    /* harmony import */


    var _item_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ../../item-categories/new/new-routing.module */
    "./src/app/item-categories/new/new-routing.module.ts");
    /* harmony import */


    var _item_categories_new_new_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ../../item-categories/new/new.module */
    "./src/app/item-categories/new/new.module.ts");
    /* harmony import */


    var _common_categories_categories_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ../../common/categories/categories.module */
    "./src/app/common/categories/categories.module.ts");
    /* harmony import */


    var _items_new_new_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../../items/new/new.module */
    "./src/app/items/new/new.module.ts");
    /* harmony import */


    var _common_items_items_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../../common/items/items.module */
    "./src/app/common/items/items.module.ts");
    /* harmony import */


    var _common_taxes_taxes_routing_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../../common/taxes/taxes-routing.module */
    "./src/app/common/taxes/taxes-routing.module.ts");
    /* harmony import */


    var _taxes_new_new_routing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../../taxes/new/new-routing.module */
    "./src/app/taxes/new/new-routing.module.ts");
    /* harmony import */


    var _taxes_new_new_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../../taxes/new/new.module */
    "./src/app/taxes/new/new.module.ts");
    /* harmony import */


    var _common_taxes_taxes_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ../../common/taxes/taxes.module */
    "./src/app/common/taxes/taxes.module.ts");
    /* harmony import */


    var _common_upload_upload_routing_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ../../common/upload/upload-routing.module */
    "./src/app/common/upload/upload-routing.module.ts");
    /* harmony import */


    var _images_new_new_routing_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ../../images/new/new-routing.module */
    "./src/app/images/new/new-routing.module.ts");
    /* harmony import */


    var _images_new_new_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ../../images/new/new.module */
    "./src/app/images/new/new.module.ts");
    /* harmony import */


    var _common_upload_upload_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ../../common/upload/upload.module */
    "./src/app/common/upload/upload.module.ts");
    /* harmony import */


    var _new_page__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./new.page */
    "./src/app/invoices/new/new.page.ts");
    /* harmony import */


    var _common_customers_customers_page__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ../../common/customers/customers.page */
    "./src/app/common/customers/customers.page.ts");
    /* harmony import */


    var _customers_new_new_page__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ../../customers/new/new.page */
    "./src/app/customers/new/new.page.ts");
    /* harmony import */


    var _customers_vehicle_vehicle_page__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ../../customers/vehicle/vehicle.page */
    "./src/app/customers/vehicle/vehicle.page.ts");
    /* harmony import */


    var _common_items_items_page__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ../../common/items/items.page */
    "./src/app/common/items/items.page.ts");
    /* harmony import */


    var _items_new_new_page__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ../../items/new/new.page */
    "./src/app/items/new/new.page.ts");
    /* harmony import */


    var _common_categories_categories_page__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ../../common/categories/categories.page */
    "./src/app/common/categories/categories.page.ts");
    /* harmony import */


    var _item_categories_new_new_page__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ../../item-categories/new/new.page */
    "./src/app/item-categories/new/new.page.ts");
    /* harmony import */


    var _common_taxes_taxes_page__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ../../common/taxes/taxes.page */
    "./src/app/common/taxes/taxes.page.ts");
    /* harmony import */


    var _taxes_new_new_page__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ../../taxes/new/new.page */
    "./src/app/taxes/new/new.page.ts");
    /* harmony import */


    var _common_upload_upload_page__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ../../common/upload/upload.page */
    "./src/app/common/upload/upload.page.ts");
    /* harmony import */


    var _images_new_new_page__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ../../images/new/new.page */
    "./src/app/images/new/new.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var NewPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_new_module__WEBPACK_IMPORTED_MODULE_1__["NewPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _new_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NewPageNgFactory"], _common_customers_customers_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CustomersPageNgFactory"], _customers_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_5__["NewPageNgFactory"], _customers_vehicle_vehicle_page_ngfactory__WEBPACK_IMPORTED_MODULE_6__["VehiclePageNgFactory"], _common_items_items_page_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ItemsPageNgFactory"], _items_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NewPageNgFactory"], _common_categories_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CategoriesPageNgFactory"], _item_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_10__["NewPageNgFactory"], _common_taxes_taxes_page_ngfactory__WEBPACK_IMPORTED_MODULE_11__["TaxesPageNgFactory"], _taxes_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_12__["NewPageNgFactory"], _common_upload_upload_page_ngfactory__WEBPACK_IMPORTED_MODULE_13__["UploadPageNgFactory"], _images_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_14__["NewPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_17__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_19__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_20__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_17__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _new_routing_module__WEBPACK_IMPORTED_MODULE_22__["NewPageRoutingModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_22__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_19__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_19__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_23__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_23__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_customers_customers_routing_module__WEBPACK_IMPORTED_MODULE_24__["CustomersPageRoutingModule"], _common_customers_customers_routing_module__WEBPACK_IMPORTED_MODULE_24__["CustomersPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _customers_new_new_routing_module__WEBPACK_IMPORTED_MODULE_25__["NewPageRoutingModule"], _customers_new_new_routing_module__WEBPACK_IMPORTED_MODULE_25__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _customers_vehicle_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_26__["VehiclePageRoutingModule"], _customers_vehicle_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_26__["VehiclePageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _customers_vehicle_vehicle_module__WEBPACK_IMPORTED_MODULE_27__["VehiclePageModule"], _customers_vehicle_vehicle_module__WEBPACK_IMPORTED_MODULE_27__["VehiclePageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _customers_new_new_module__WEBPACK_IMPORTED_MODULE_28__["NewPageModule"], _customers_new_new_module__WEBPACK_IMPORTED_MODULE_28__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_customers_customers_module__WEBPACK_IMPORTED_MODULE_29__["CustomersPageModule"], _common_customers_customers_module__WEBPACK_IMPORTED_MODULE_29__["CustomersPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_items_items_routing_module__WEBPACK_IMPORTED_MODULE_30__["ItemsPageRoutingModule"], _common_items_items_routing_module__WEBPACK_IMPORTED_MODULE_30__["ItemsPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _items_new_new_routing_module__WEBPACK_IMPORTED_MODULE_31__["NewPageRoutingModule"], _items_new_new_routing_module__WEBPACK_IMPORTED_MODULE_31__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_categories_categories_routing_module__WEBPACK_IMPORTED_MODULE_32__["CategoriesPageRoutingModule"], _common_categories_categories_routing_module__WEBPACK_IMPORTED_MODULE_32__["CategoriesPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _item_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_33__["NewPageRoutingModule"], _item_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_33__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _item_categories_new_new_module__WEBPACK_IMPORTED_MODULE_34__["NewPageModule"], _item_categories_new_new_module__WEBPACK_IMPORTED_MODULE_34__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_categories_categories_module__WEBPACK_IMPORTED_MODULE_35__["CategoriesPageModule"], _common_categories_categories_module__WEBPACK_IMPORTED_MODULE_35__["CategoriesPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _items_new_new_module__WEBPACK_IMPORTED_MODULE_36__["NewPageModule"], _items_new_new_module__WEBPACK_IMPORTED_MODULE_36__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_items_items_module__WEBPACK_IMPORTED_MODULE_37__["ItemsPageModule"], _common_items_items_module__WEBPACK_IMPORTED_MODULE_37__["ItemsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_taxes_taxes_routing_module__WEBPACK_IMPORTED_MODULE_38__["TaxesPageRoutingModule"], _common_taxes_taxes_routing_module__WEBPACK_IMPORTED_MODULE_38__["TaxesPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _taxes_new_new_routing_module__WEBPACK_IMPORTED_MODULE_39__["NewPageRoutingModule"], _taxes_new_new_routing_module__WEBPACK_IMPORTED_MODULE_39__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _taxes_new_new_module__WEBPACK_IMPORTED_MODULE_40__["NewPageModule"], _taxes_new_new_module__WEBPACK_IMPORTED_MODULE_40__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_taxes_taxes_module__WEBPACK_IMPORTED_MODULE_41__["TaxesPageModule"], _common_taxes_taxes_module__WEBPACK_IMPORTED_MODULE_41__["TaxesPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_upload_upload_routing_module__WEBPACK_IMPORTED_MODULE_42__["UploadPageRoutingModule"], _common_upload_upload_routing_module__WEBPACK_IMPORTED_MODULE_42__["UploadPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _images_new_new_routing_module__WEBPACK_IMPORTED_MODULE_43__["NewPageRoutingModule"], _images_new_new_routing_module__WEBPACK_IMPORTED_MODULE_43__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _images_new_new_module__WEBPACK_IMPORTED_MODULE_44__["NewPageModule"], _images_new_new_module__WEBPACK_IMPORTED_MODULE_44__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _common_upload_upload_module__WEBPACK_IMPORTED_MODULE_45__["UploadPageModule"], _common_upload_upload_module__WEBPACK_IMPORTED_MODULE_45__["UploadPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _new_module__WEBPACK_IMPORTED_MODULE_1__["NewPageModule"], _new_module__WEBPACK_IMPORTED_MODULE_1__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTES"], function () {
        return [[{
          path: "",
          component: _new_page__WEBPACK_IMPORTED_MODULE_46__["NewPage"]
        }], [{
          path: "",
          component: _common_customers_customers_page__WEBPACK_IMPORTED_MODULE_47__["CustomersPage"]
        }], [{
          path: "",
          component: _customers_new_new_page__WEBPACK_IMPORTED_MODULE_48__["NewPage"]
        }], [{
          path: "",
          component: _customers_vehicle_vehicle_page__WEBPACK_IMPORTED_MODULE_49__["VehiclePage"]
        }], [{
          path: "",
          component: _common_items_items_page__WEBPACK_IMPORTED_MODULE_50__["ItemsPage"]
        }], [{
          path: "",
          component: _items_new_new_page__WEBPACK_IMPORTED_MODULE_51__["NewPage"]
        }], [{
          path: "",
          component: _common_categories_categories_page__WEBPACK_IMPORTED_MODULE_52__["CategoriesPage"]
        }], [{
          path: "",
          component: _item_categories_new_new_page__WEBPACK_IMPORTED_MODULE_53__["NewPage"]
        }], [{
          path: "",
          component: _common_taxes_taxes_page__WEBPACK_IMPORTED_MODULE_54__["TaxesPage"]
        }], [{
          path: "",
          component: _taxes_new_new_page__WEBPACK_IMPORTED_MODULE_55__["NewPage"]
        }], [{
          path: "",
          component: _common_upload_upload_page__WEBPACK_IMPORTED_MODULE_56__["UploadPage"]
        }], [{
          path: "",
          component: _images_new_new_page__WEBPACK_IMPORTED_MODULE_57__["NewPage"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/invoices/new/new.module.ts":
  /*!********************************************!*\
    !*** ./src/app/invoices/new/new.module.ts ***!
    \********************************************/

  /*! exports provided: NewPageModule */

  /***/
  function srcAppInvoicesNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
      return NewPageModule;
    });

    var NewPageModule = function NewPageModule() {
      _classCallCheck(this, NewPageModule);
    };
    /***/

  },

  /***/
  "./src/app/invoices/new/new.page.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/invoices/new/new.page.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_NewPage, View_NewPage_0, View_NewPage_Host_0, NewPageNgFactory */

  /***/
  function srcAppInvoicesNewNewPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_NewPage", function () {
      return RenderType_NewPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NewPage_0", function () {
      return View_NewPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_NewPage_Host_0", function () {
      return View_NewPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPageNgFactory", function () {
      return NewPageNgFactory;
    });
    /* harmony import */


    var _new_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./new.page.scss.shim.ngstyle */
    "./src/app/invoices/new/new.page.scss.shim.ngstyle.js");
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _new_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./new.page */
    "./src/app/invoices/new/new.page.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_NewPage = [_new_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_NewPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_NewPage,
      data: {}
    });

    function View_NewPage_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-spinner", [["class", "loading"], ["color", "primary"], ["name", "crescent"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSpinner_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        name: [1, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "primary";
        var currVal_1 = "crescent";

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_NewPage_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ion-select-option", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSelectOption_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSelectOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, ["", "-", "-", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.id;

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.make;
        var currVal_2 = _v.context.$implicit.model;
        var currVal_3 = _v.context.$implicit.year;

        _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3);
      });
    }

    function View_NewPage_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-up"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayItemsBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-up";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-down"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayItemsBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-down";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 40, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 39, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "ion-icon", [["class", "img-remove-button-shell"], ["name", "close-outline"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeItem(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "    border-bottom: 1px dashed;\n                    display: flex;\n                    flex-direction: row;\n                    color: #378275;\n                    font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["style", "flex:5;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 28, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 26, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 8, "ion-col", [["class", "form-column"], ["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Quantity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Quantity"], ["type", "number"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateQuantityChange(_v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        type: [2, "type"],
        value: [3, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 8, "ion-col", [["class", "form-column"], ["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Price"], ["type", "number"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updatePriceChange(_v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        type: [2, "type"],
        value: [3, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 6, "ion-col", [["class", "form-column"], ["sizeLg", "12"], ["sizeMd", "12"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 3, "ion-textarea", [["placeholder", "Enter any notes here..."]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.updateDescriptionChange(_v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null)], function (_ck, _v) {
        var currVal_0 = "close-outline";

        _ck(_v, 4, 0, currVal_0);

        var currVal_3 = "6";
        var currVal_4 = "6";
        var currVal_5 = "6";

        _ck(_v, 17, 0, currVal_3, currVal_4, currVal_5);

        var currVal_6 = "off";
        var currVal_7 = "Quantity";
        var currVal_8 = "number";

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.quantity, "");

        _ck(_v, 23, 0, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_10 = "6";
        var currVal_11 = "6";
        var currVal_12 = "6";

        _ck(_v, 26, 0, currVal_10, currVal_11, currVal_12);

        var currVal_13 = "off";
        var currVal_14 = "Price";
        var currVal_15 = "number";

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.price, "");

        _ck(_v, 32, 0, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_17 = "12";
        var currVal_18 = "12";
        var currVal_19 = "12";

        _ck(_v, 35, 0, currVal_17, currVal_18, currVal_19);

        var currVal_20 = "Enter any notes here...";

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.notes, "");

        _ck(_v, 39, 0, currVal_20, currVal_21);
      }, function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.name;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.total));

        _ck(_v, 10, 0, currVal_2);
      });
    }

    function View_NewPage_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 27, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 23, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 21, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 0, 6, "ion-col", [["class", "form-column"], ["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "discount"], ["type", "number"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateDiscountChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        type: [2, "type"],
        value: [3, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NumericValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 12, "ion-col", [["class", "form-column"], ["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 10, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 9, "ion-select", [["placeholder", "Select One"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.changeDiscountType($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSelect_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 2, "ion-select-option", [["value", "Fixed"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSelectOption_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSelectOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Fixed"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 2, "ion-select-option", [["value", "Percentage"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSelectOption_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSelectOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Percentage"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "6";
        var currVal_1 = "6";
        var currVal_2 = "12";

        _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "6";
        var currVal_4 = "6";
        var currVal_5 = "12";

        _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5);

        var currVal_6 = "6";
        var currVal_7 = "6";
        var currVal_8 = "6";

        _ck(_v, 11, 0, currVal_6, currVal_7, currVal_8);

        var currVal_9 = "off";
        var currVal_10 = "discount";
        var currVal_11 = "number";
        var currVal_12 = _co.data.discount;

        _ck(_v, 15, 0, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_13 = "6";
        var currVal_14 = "6";
        var currVal_15 = "6";

        _ck(_v, 18, 0, currVal_13, currVal_14, currVal_15);

        var currVal_16 = "Select One";
        var currVal_17 = _co.data.discount_type;

        _ck(_v, 22, 0, currVal_16, currVal_17);

        var currVal_18 = "Fixed";

        _ck(_v, 25, 0, currVal_18);

        var currVal_19 = "Percentage";

        _ck(_v, 28, 0, currVal_19);
      }, null);
    }

    function View_NewPage_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 3, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "div", [["class", "form-tax-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", " (", "%)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 4, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "div", [["class", "form-tax-value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 1)], function (_ck, _v) {
        var currVal_0 = "6";
        var currVal_1 = "6";
        var currVal_2 = "6";

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

        var currVal_5 = "6";
        var currVal_6 = "6";
        var currVal_7 = "6";

        _ck(_v, 7, 0, currVal_5, currVal_6, currVal_7);
      }, function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.name;
        var currVal_4 = _v.context.$implicit.percent;

        _ck(_v, 5, 0, currVal_3, currVal_4);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.tax_amount));

        _ck(_v, 9, 0, currVal_8);
      });
    }

    function View_NewPage_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 12, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 6, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 4, "ion-button", [["class", "button button-clear button-positive"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openTaxesModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "ion-icon", [["name", "add"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Tax "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 3, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "6";
        var currVal_1 = "6";
        var currVal_2 = "12";

        _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "add";

        _ck(_v, 9, 0, currVal_3);

        var currVal_4 = "6";
        var currVal_5 = "6";
        var currVal_6 = "12";

        _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _co.data.taxes;

        _ck(_v, 14, 0, currVal_7);
      }, null);
    }

    function View_NewPage_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-up"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayPhotosBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-up";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-down"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayPhotosBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-down";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "ion-col", [["sizeLg", "4"], ["sizeMd", "4"], ["sizeXs", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "app-image-shell", [["animation", "spinner"], ["class", "category-cover"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 3, "ion-textarea", [["placeholder", "Enter any notes here..."]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateImageNoteChange("Before", _v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "ion-icon", [["class", "img-remove-button-shell"], ["name", "close-outline"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeImage("Before", _v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "4";
        var currVal_1 = "4";
        var currVal_2 = "4";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

        var currVal_6 = "cover";

        var currVal_7 = _co.imageUrl(_v.context.$implicit.image);

        _ck(_v, 4, 0, currVal_6, currVal_7);

        var currVal_9 = _ck(_v, 7, 0, 75, 49);

        _ck(_v, 6, 0, currVal_9);

        var currVal_10 = "Enter any notes here...";
        var currVal_11 = _v.context.$implicit.notes;

        _ck(_v, 10, 0, currVal_10, currVal_11);

        var currVal_12 = "close-outline";

        _ck(_v, 13, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).imageLoaded;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).backgroundImage;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).display;

        _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ratioPadding;

        _ck(_v, 5, 0, currVal_8);
      });
    }

    function View_NewPage_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "ion-col", [["sizeLg", "4"], ["sizeMd", "4"], ["sizeXs", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "app-image-shell", [["animation", "spinner"], ["class", "category-cover"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 3, "ion-textarea", [["placeholder", "Enter any notes here..."]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateImageNoteChange("After", _v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "ion-icon", [["class", "img-remove-button-shell"], ["name", "close-outline"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeImage("After", _v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "4";
        var currVal_1 = "4";
        var currVal_2 = "4";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

        var currVal_6 = "cover";

        var currVal_7 = _co.imageUrl(_v.context.$implicit.image);

        _ck(_v, 4, 0, currVal_6, currVal_7);

        var currVal_9 = _ck(_v, 7, 0, 75, 49);

        _ck(_v, 6, 0, currVal_9);

        var currVal_10 = "Enter any notes here...";
        var currVal_11 = _v.context.$implicit.notes;

        _ck(_v, 10, 0, currVal_10, currVal_11);

        var currVal_12 = "close-outline";

        _ck(_v, 13, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).imageLoaded;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).backgroundImage;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).display;

        _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ratioPadding;

        _ck(_v, 5, 0, currVal_8);
      });
    }

    function View_NewPage_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "ion-col", [["sizeLg", "4"], ["sizeMd", "4"], ["sizeXs", "4"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "app-image-shell", [["animation", "spinner"], ["class", "category-cover"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], {
        display: [0, "display"],
        src: [1, "src"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_9__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 3, "ion-textarea", [["placeholder", "Enter any notes here..."]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateImageNoteChange("Other", _v.context.$implicit, $event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 1, "ion-icon", [["class", "img-remove-button-shell"], ["name", "close-outline"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeImage("Other", _v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "4";
        var currVal_1 = "4";
        var currVal_2 = "4";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

        var currVal_6 = "cover";

        var currVal_7 = _co.imageUrl(_v.context.$implicit.image);

        _ck(_v, 4, 0, currVal_6, currVal_7);

        var currVal_9 = _ck(_v, 7, 0, 75, 49);

        _ck(_v, 6, 0, currVal_9);

        var currVal_10 = "Enter any notes here...";
        var currVal_11 = _v.context.$implicit.notes;

        _ck(_v, 10, 0, currVal_10, currVal_11);

        var currVal_12 = "close-outline";

        _ck(_v, 13, 0, currVal_12);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).imageLoaded;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).backgroundImage;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).display;

        _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ratioPadding;

        _ck(_v, 5, 0, currVal_8);
      });
    }

    function View_NewPage_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-up"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayCustomerNoteBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-up";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ion-icon", [["name", "chevron-down"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayCustomerNoteBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "chevron-down";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_NewPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        fileInput: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 15, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 13, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "ion-back-button", [["defaultHref", "home"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        defaultHref: [0, "defaultHref"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]], {
        defaultHref: [0, "defaultHref"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 3, "ion-button", [["class", "button button-clear button-positive"], ["slot", "end"], ["style", "color: white;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.saveForm("DRAFT") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "ion-icon", [["name", "share"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 17, "ion-card", [["style", "display: none;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 15, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 13, "ion-row", [["style", "padding: 15px;\n        color: #378175;\n        font-size: 16px; max-width: 600px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 3, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 1, "span", [["style", "border-bottom: 4px solid;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" DETAILS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 3, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" PHOTOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 0, 3, "ion-col", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["YOUR NOTES"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 237, "ion-content", [["class", "form-container"], ["style", "--background:#f7fbfb;--padding-top: 30px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 67, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 0, 65, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 63, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, 0, 8, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Invoice Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Invoice Name"], ["type", "text"]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateInvoiceNameChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        type: [2, "type"],
        value: [3, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 0, 10, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Invoice Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, 0, 6, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "ion-icon", [["name", "calendar-outline"], ["style", "    font-size: 40px; color: #378275;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "ion-datetime", [["display-timezone", "utc"], ["displayFormat", "MM/DD/YYYY"], ["placeholder", " Date From"], ["style", "width: 100%;"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.updateInvoiceDateChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        displayFormat: [0, "displayFormat"],
        placeholder: [1, "placeholder"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, 0, 10, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Due Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, 0, 6, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "ion-icon", [["name", "calendar-outline"], ["style", "   font-size: 40px; color: #378275;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 3, "ion-datetime", [["display-timezone", "utc"], ["displayFormat", "MM/DD/YYYY"], ["placeholder", " Date From"], ["style", "width: 100%;"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.updateDueDateChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonDatetime_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonDatetime"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        displayFormat: [0, "displayFormat"],
        placeholder: [1, "placeholder"],
        value: [2, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, 0, 8, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Invoice Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, 0, 4, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Invoice Number"], ["readonly", ""], ["type", "text"]], null, [[null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        readonly: [2, "readonly"],
        type: [3, "type"],
        value: [4, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, 0, 10, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, 0, 6, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 3, "ion-input", [["autocapitalize", "off"], ["placeholder", "Select Customer"], ["readonly", ""], ["type", "text"]], null, [[null, "click"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.openCustomerModal() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonInput_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonInput"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        autocapitalize: [0, "autocapitalize"],
        placeholder: [1, "placeholder"],
        readonly: [2, "readonly"],
        type: [3, "type"],
        value: [4, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 1, "ion-icon", [["name", "person"], ["style", "padding-top: 8px;\n              font-size: 24px;\n              color: #378275;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, 0, 10, "ion-col", [["class", "form-column"], ["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "12"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, 0, 1, "label", [["class", "form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Vehicle (optional)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, 0, 6, "div", [["class", "input-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 5, "ion-select", [["placeholder", "Select Vehicle"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105)._handleChangeEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.selectVehicle($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonSelect_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonSelect"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, 0, 27, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, 0, 11, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n    font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, 0, 2, "div", [["style", "flex:1 ;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "ion-icon", [["name", "add"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openItemsModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, 0, 1, "div", [["style", "flex:4;text-align: center; "]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayItemsBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](116, null, [" Add Item / Service (", ") "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, 0, 4, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, 0, 13, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](124, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, 0, 8, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n          font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, 0, 1, "div", [["style", "flex:1;color: #378275; font-weight: 500;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Total "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, 0, 2, "div", [["style", " flex:1;color: #378275; font-weight: 500;text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](134, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](135, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, 0, 13, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, 0, 9, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n  font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](141, null, [" Discount (", ")"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](142, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, 0, 4, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 3, "ion-toggle", [["color", "danger"], ["style", "padding: 5px;"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.isDiscountToggle() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToggle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](146, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        checked: [0, "checked"],
        color: [1, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](149, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, 0, 13, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](151, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, 0, 9, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n  font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](153, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, 0, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](155, null, [" Add/Remove Tax (", ") "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](156, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, 0, 4, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 3, "ion-toggle", [["color", "danger"], ["style", "padding: 5px;"]], null, [[null, "ionChange"], [null, "ionBlur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 161)._handleIonChange($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionChange" === en) {
          var pd_2 = _co.isTaxsToggle() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToggle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](160, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        checked: [0, "checked"],
        color: [1, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, 0, 8, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n  font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](167, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, 0, 1, "div", [["style", "flex:1;color: #3D9BFC; font-weight: 600;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Total "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, 0, 2, "div", [["style", " flex:1;color: #3D9BFC; font-weight: 600;text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](171, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](172, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, 0, 82, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](174, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, 0, 60, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"], ["style", "padding:0"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, 0, 58, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, 0, 8, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n                font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, 0, 1, "div", [["style", "flex:5;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayPhotosBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Photos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, 0, 4, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, 0, 47, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, 0, 14, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](192, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n                    font-size: 14px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](195, 0, null, 0, 1, "div", [["style", "flex:2 ;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Before Photos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, 0, 2, "div", [["style", "flex:.5; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 1, "ion-icon", [["name", "add"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openUploadModal("Before") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](199, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, 0, 5, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](201, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, 0, 3, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](203, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, 0, 14, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n                  font-size: 14px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, 0, 1, "div", [["style", "flex:2 ;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["After Photos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, 0, 2, "div", [["style", "flex:.5; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "ion-icon", [["name", "add"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openUploadModal("After") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](214, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, 0, 5, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](216, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, 0, 3, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](218, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](220, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](221, 0, null, 0, 14, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, 0, 6, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n                font-size: 14px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](224, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, 0, 1, "div", [["style", "flex:2 ;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Other Photos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, 0, 2, "div", [["style", "flex:.5; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 1, "ion-icon", [["name", "add"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openUploadModal("Other") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](229, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, 0, 5, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](231, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](232, 0, null, 0, 3, "ion-row", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](233, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_NewPage_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](235, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, 0, 19, "ion-col", [["sizeLg", "6"], ["sizeMd", "6"], ["sizeXs", "12"], ["style", "padding:0"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](237, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, 0, 17, "ion-card", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCard_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](239, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, 0, 8, "ion-card-header", [["class", "flex"], ["style", "display: flex;flex-direction: row;color: #378275;\n              font-size: 18px;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](241, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, 0, 1, "div", [["style", "flex:5;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.displayCustomerNoteBlockToggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Notes for Customer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, 0, 4, "div", [["style", "flex:1; text-align: right;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](246, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewPage_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](248, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, 0, 6, "ion-card-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCardContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCardContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](250, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](251, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, 0, 3, "ion-textarea", [["placeholder", "Enter any notes here..."]], null, [[null, "ionInput"], [null, "ionBlur"], [null, "ionChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ionBlur" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._handleBlurEvent($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("ionChange" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 255)._handleInputEvent($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("ionInput" === en) {
          var pd_2 = _co.updateNotesChange($event) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTextarea_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTextarea"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](254, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        placeholder: [0, "placeholder"],
        value: [1, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](255, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, 0, 17, "ion-row", [["style", "padding:5px"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](257, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, 0, 4, "ion-col", [["sizeLg", "3"], ["sizeMd", "3"], ["sizeXs", "3"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](259, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, 0, 2, "ion-button", [["color", "primary"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.saveForm("DRAFT") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](261, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, 0, 4, "ion-col", [["sizeLg", "7"], ["sizeMd", "7"], ["sizeXs", "7"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](264, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, 0, 2, "ion-button", [["color", "secondary"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.saveForm("SENT") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](266, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save & Send"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, 0, 5, "ion-col", [["sizeLg", "2"], ["sizeMd", "2"], ["sizeXs", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](269, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        sizeLg: [0, "sizeLg"],
        sizeMd: [1, "sizeMd"],
        sizeXs: [2, "sizeXs"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](270, 0, null, 0, 3, "ion-button", [["expand", "block"], ["style", " --background: #d8e7e2;;"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](271, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        expand: [0, "expand"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, 0, 1, "ion-icon", [["name", "ellipsis-vertical"], ["style", "color:#378275"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](273, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "primary";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = "home";

        _ck(_v, 9, 0, currVal_1);

        var currVal_2 = "home";

        _ck(_v, 10, 0, currVal_2);

        var currVal_4 = "share";

        _ck(_v, 17, 0, currVal_4);

        var currVal_5 = _co.loading;

        _ck(_v, 39, 0, currVal_5);

        var currVal_6 = "3";
        var currVal_7 = "3";
        var currVal_8 = "12";

        _ck(_v, 47, 0, currVal_6, currVal_7, currVal_8);

        var currVal_9 = "off";
        var currVal_10 = "Invoice Name";
        var currVal_11 = "text";
        var currVal_12 = _co.data.name;

        _ck(_v, 53, 0, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_13 = "3";
        var currVal_14 = "3";
        var currVal_15 = "6";

        _ck(_v, 56, 0, currVal_13, currVal_14, currVal_15);

        var currVal_16 = "calendar-outline";

        _ck(_v, 61, 0, currVal_16);

        var currVal_17 = "MM/DD/YYYY";
        var currVal_18 = " Date From";
        var currVal_19 = _co.data.invoice_date;

        _ck(_v, 64, 0, currVal_17, currVal_18, currVal_19);

        var currVal_20 = "3";
        var currVal_21 = "3";
        var currVal_22 = "6";

        _ck(_v, 67, 0, currVal_20, currVal_21, currVal_22);

        var currVal_23 = "calendar-outline";

        _ck(_v, 72, 0, currVal_23);

        var currVal_24 = "MM/DD/YYYY";
        var currVal_25 = " Date From";
        var currVal_26 = _co.data.due_date;

        _ck(_v, 75, 0, currVal_24, currVal_25, currVal_26);

        var currVal_27 = "3";
        var currVal_28 = "3";
        var currVal_29 = "12";

        _ck(_v, 78, 0, currVal_27, currVal_28, currVal_29);

        var currVal_30 = "off";
        var currVal_31 = "Invoice Number";
        var currVal_32 = "";
        var currVal_33 = "text";

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data.invoice_number, "");

        _ck(_v, 84, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);

        var currVal_35 = "3";
        var currVal_36 = "3";
        var currVal_37 = "12";

        _ck(_v, 87, 0, currVal_35, currVal_36, currVal_37);

        var currVal_38 = "off";
        var currVal_39 = "Select Customer";
        var currVal_40 = "";
        var currVal_41 = "text";

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.data.customer.name, "");

        _ck(_v, 93, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42);

        var currVal_43 = "person";

        _ck(_v, 96, 0, currVal_43);

        var currVal_44 = "3";
        var currVal_45 = "3";
        var currVal_46 = "12";

        _ck(_v, 98, 0, currVal_44, currVal_45, currVal_46);

        var currVal_47 = "Select Vehicle";
        var currVal_48 = _co.data.customer.selectedVehicle;

        _ck(_v, 104, 0, currVal_47, currVal_48);

        var currVal_49 = _co.data.customer.vehicles;

        _ck(_v, 107, 0, currVal_49);

        var currVal_50 = "add";

        _ck(_v, 114, 0, currVal_50);

        var currVal_52 = !_co.displayItemsBlock;

        _ck(_v, 119, 0, currVal_52);

        var currVal_53 = _co.displayItemsBlock;

        _ck(_v, 121, 0, currVal_53);

        var currVal_54 = _co.displayItemsBlock || _co.data.items.length ? "show" : "hide";

        _ck(_v, 123, 0, currVal_54);

        var currVal_55 = _co.data.items;

        _ck(_v, 126, 0, currVal_55);

        var currVal_58 = _co.data.discount_type == "Fixed" || _co.data.discount_type == "Percentage";
        var currVal_59 = "danger";

        _ck(_v, 146, 0, currVal_58, currVal_59);

        var currVal_60 = _co.isDiscount;

        _ck(_v, 149, 0, currVal_60);

        var currVal_62 = _co.data.taxes.length;
        var currVal_63 = "danger";

        _ck(_v, 160, 0, currVal_62, currVal_63);

        var currVal_64 = _co.isTaxs || _co.data.taxes.length;

        _ck(_v, 163, 0, currVal_64);

        var currVal_66 = "6";
        var currVal_67 = "6";
        var currVal_68 = "12";

        _ck(_v, 176, 0, currVal_66, currVal_67, currVal_68);

        var currVal_69 = !_co.displayPhotosBlock;

        _ck(_v, 185, 0, currVal_69);

        var currVal_70 = _co.displayPhotosBlock;

        _ck(_v, 187, 0, currVal_70);

        var currVal_71 = _co.displayPhotosBlock ? "show" : "hide";

        _ck(_v, 189, 0, currVal_71);

        var currVal_72 = "add";

        _ck(_v, 199, 0, currVal_72);

        var currVal_73 = _co.data.before_photos;

        _ck(_v, 205, 0, currVal_73);

        var currVal_74 = "add";

        _ck(_v, 214, 0, currVal_74);

        var currVal_75 = _co.data.after_photos;

        _ck(_v, 220, 0, currVal_75);

        var currVal_76 = "add";

        _ck(_v, 229, 0, currVal_76);

        var currVal_77 = _co.data.other_photos;

        _ck(_v, 235, 0, currVal_77);

        var currVal_78 = "6";
        var currVal_79 = "6";
        var currVal_80 = "12";

        _ck(_v, 237, 0, currVal_78, currVal_79, currVal_80);

        var currVal_81 = !_co.displayCustomerNoteBlock;

        _ck(_v, 246, 0, currVal_81);

        var currVal_82 = _co.displayCustomerNoteBlock;

        _ck(_v, 248, 0, currVal_82);

        var currVal_83 = _co.displayCustomerNoteBlock ? "show" : "hide";

        _ck(_v, 250, 0, currVal_83);

        var currVal_84 = "Enter any notes here...";
        var currVal_85 = _co.data.notes;

        _ck(_v, 254, 0, currVal_84, currVal_85);

        var currVal_86 = "3";
        var currVal_87 = "3";
        var currVal_88 = "3";

        _ck(_v, 259, 0, currVal_86, currVal_87, currVal_88);

        var currVal_89 = "primary";
        var currVal_90 = "block";

        _ck(_v, 261, 0, currVal_89, currVal_90);

        var currVal_91 = "7";
        var currVal_92 = "7";
        var currVal_93 = "7";

        _ck(_v, 264, 0, currVal_91, currVal_92, currVal_93);

        var currVal_94 = "secondary";
        var currVal_95 = "block";

        _ck(_v, 266, 0, currVal_94, currVal_95);

        var currVal_96 = "2";
        var currVal_97 = "2";
        var currVal_98 = "2";

        _ck(_v, 269, 0, currVal_96, currVal_97, currVal_98);

        var currVal_99 = "block";

        _ck(_v, 271, 0, currVal_99);

        var currVal_100 = "ellipsis-vertical";

        _ck(_v, 273, 0, currVal_100);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.data.invoice_number;

        _ck(_v, 13, 0, currVal_3);

        var currVal_51 = _co.data.items.length;

        _ck(_v, 116, 0, currVal_51);

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 134, 0, _ck(_v, 135, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.data.sub_total));

        _ck(_v, 134, 0, currVal_56);

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 141, 0, _ck(_v, 142, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.data.discount_val));

        _ck(_v, 141, 0, currVal_57);

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 155, 0, _ck(_v, 156, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.data.total_tax));

        _ck(_v, 155, 0, currVal_61);

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 171, 0, _ck(_v, 172, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.data.total));

        _ck(_v, 171, 0, currVal_65);
      });
    }

    function View_NewPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-new", [], null, null, null, View_NewPage_0, RenderType_NewPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _new_page__WEBPACK_IMPORTED_MODULE_10__["NewPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _services_apis_service__WEBPACK_IMPORTED_MODULE_11__["ApisService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var NewPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-new", _new_page__WEBPACK_IMPORTED_MODULE_10__["NewPage"], View_NewPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/invoices/new/new.page.scss.shim.ngstyle.js":
  /*!************************************************************!*\
    !*** ./src/app/invoices/new/new.page.scss.shim.ngstyle.js ***!
    \************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppInvoicesNewNewPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2VzL25ldy9uZXcucGFnZS5zY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/invoices/new/new.page.ts":
  /*!******************************************!*\
    !*** ./src/app/invoices/new/new.page.ts ***!
    \******************************************/

  /*! exports provided: NewPage */

  /***/
  function srcAppInvoicesNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPage", function () {
      return NewPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _common_customers_customers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../common/customers/customers.page */
    "./src/app/common/customers/customers.page.ts");
    /* harmony import */


    var _common_items_items_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/items/items.page */
    "./src/app/common/items/items.page.ts");
    /* harmony import */


    var _common_taxes_taxes_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/taxes/taxes.page */
    "./src/app/common/taxes/taxes.page.ts");
    /* harmony import */


    var _common_upload_upload_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../common/upload/upload.page */
    "./src/app/common/upload/upload.page.ts");

    var NewPage = /*#__PURE__*/function () {
      function NewPage(actionSheetController, apisService, toastService, authService, router, route, modalController, platform) {
        var _this = this;

        _classCallCheck(this, NewPage);

        this.actionSheetController = actionSheetController;
        this.apisService = apisService;
        this.toastService = toastService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.platform = platform;
        this.images = [];
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
          maximumImagesCount: 1,
          quality: 50
        };
        this.loading = true;
        this.displayItemsBlock = false;
        this.displayPhotosBlock = false;
        this.displayCustomerNoteBlock = true;
        this.isDiscount = false;
        this.isTaxs = false;
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.data = _this.router.getCurrentNavigation().extras.state.data;

            if (_this.data !== undefined) {
              _this.loading = false;
            }
          }
        });
      }

      _createClass(NewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authService.userData$.subscribe(function (res) {
            _this2.displayUserData = res;
          });

          if (this.data !== undefined) {
            this.loading = false;
            this.isDiscount = this.data.discount_type == 'Fixed' || this.data.discount_type == 'Percentage';
          } else {
            this.router.navigate(['app/invoices']);
          }
        } // //// Image Upload Start

      }, {
        key: "imageUrl",
        value: function imageUrl(img) {
          return this.apisService.getImageUrl(img);
        } //Image Upload End

      }, {
        key: "displayItemsBlockToggle",
        value: function displayItemsBlockToggle() {
          this.displayItemsBlock = !this.displayItemsBlock;
        }
      }, {
        key: "displayPhotosBlockToggle",
        value: function displayPhotosBlockToggle() {
          this.displayPhotosBlock = !this.displayPhotosBlock;
        }
      }, {
        key: "displayCustomerNoteBlockToggle",
        value: function displayCustomerNoteBlockToggle() {
          this.displayCustomerNoteBlock = !this.displayCustomerNoteBlock;
        }
      }, {
        key: "isTaxsToggle",
        value: function isTaxsToggle() {
          this.isTaxs = !this.isTaxs;

          if (!this.isTaxs) {
            this.data.taxes = [];
            this.data.total_tax = 0;
          }

          this.calculateInvoice();
        }
      }, {
        key: "isDiscountToggle",
        value: function isDiscountToggle() {
          this.isDiscount = !this.isDiscount;

          if (!this.isDiscount) {
            this.data.discount_type = "";
            this.data.discount = 0;
            this.data.discount_val = 0;
          } else {
            this.data.discount_type = "Fixed";
          }

          this.calculateInvoice();
        }
      }, {
        key: "openCustomerModal",
        value: function openCustomerModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _common_customers_customers_page__WEBPACK_IMPORTED_MODULE_7__["CustomersPage"],
                      componentProps: {
                        data: this.data.customer
                      },
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (_this3.apisService.isDefined(data.data.id)) {
                        console.log(data.data);
                        _this3.data.customer = data.data;
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openItemsModal",
        value: function openItemsModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _common_items_items_page__WEBPACK_IMPORTED_MODULE_8__["ItemsPage"],
                      componentProps: {
                        data: this.data.items
                      },
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (_this4.apisService.isDefined(data.data[0])) {
                        console.log(data.data);
                        _this4.data.items = data.data;
                        _this4.displayItemsBlock = true;

                        _this4.calculateInvoice();
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openTaxesModal",
        value: function openTaxesModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _common_taxes_taxes_page__WEBPACK_IMPORTED_MODULE_9__["TaxesPage"],
                      componentProps: {
                        data: this.data.taxes
                      },
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (_this5.apisService.isDefined(data.data[0])) {
                        _this5.data.taxes = data.data;

                        _this5.calculateInvoice();

                        _this5.isTaxs = true;
                      }
                    });
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openUploadModal",
        value: function openUploadModal(type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _common_upload_upload_page__WEBPACK_IMPORTED_MODULE_10__["UploadPage"],
                      componentProps: {
                        data: this.data.taxes
                      },
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (_this6.apisService.isDefined(data.data.id)) {
                        console.log(data.data);
                        var photo = data.data;
                        photo.notes = '';
                        photo.id = _this6.apisService.makeid(20);

                        if (type == 'Before') {
                          var photos = _this6.data.before_photos;
                          photos.push(photo);
                          _this6.data.before_photos = photos;
                        }

                        if (type == 'After') {
                          var _photos = _this6.data.after_photos;

                          _photos.push(photo);

                          _this6.data.after_photos = _photos;
                        }

                        if (type == 'Other') {
                          var _photos2 = _this6.data.other_photos;

                          _photos2.push(photo);

                          _this6.data.other_photos = _photos2;
                        }
                      }
                    });
                    _context4.next = 6;
                    return modal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "updateImageNoteChange",
        value: function updateImageNoteChange(type, item, event) {
          if (type == 'Before') {
            var tempArray = [];
            this.data.before_photos.map(function (i) {
              if (item.id == i.id) {
                i.notes = event.target.value;
              }

              tempArray.push(i);
            });
            this.data.before_photos = tempArray;
          }

          if (type == 'After') {
            var _tempArray = [];
            this.data.after_photos.map(function (i) {
              if (item.id == i.id) {
                i.notes = event.target.value;
              }

              _tempArray.push(i);
            });
            this.data.after_photos = _tempArray;
          }

          if (type == 'Other') {
            var _tempArray2 = [];
            this.data.other_photos.map(function (i) {
              if (item.id == i.id) {
                i.notes = event.target.value;
              }

              _tempArray2.push(i);
            });
            this.data.other_photos = _tempArray2;
          }
        }
      }, {
        key: "removeImage",
        value: function removeImage(type, item) {
          if (type == 'Before') {
            var tempArray = [];
            this.data.before_photos.map(function (i) {
              if (item.id != i.id) {
                tempArray.push(i);
              }
            });
            this.data.before_photos = tempArray;
          }

          if (type == 'After') {
            var _tempArray3 = [];
            this.data.after_photos.map(function (i) {
              if (item.id != i.id) {
                _tempArray3.push(i);
              }
            });
            this.data.after_photos = _tempArray3;
          }

          if (type == 'Other') {
            var _tempArray4 = [];
            this.data.other_photos.map(function (i) {
              if (item.id != i.id) {
                _tempArray4.push(i);
              }
            });
            this.data.other_photos = _tempArray4;
          }
        }
      }, {
        key: "updateNotesChange",
        value: function updateNotesChange(event) {
          this.data.notes = event.target.value;
          console.log(this.data);
        }
      }, {
        key: "updatePriceChange",
        value: function updatePriceChange(item, event) {
          var tempArray = [];
          this.data.items.map(function (i) {
            if (item.id == i.id) {
              i.price = event.target.value;
              i.total = i.quantity * event.target.value;
            }

            tempArray.push(i);
          });
          this.data.items = tempArray;
          this.calculateInvoice();
        }
      }, {
        key: "updateInvoiceNameChange",
        value: function updateInvoiceNameChange(event) {
          this.data.name = event.target.value;
        }
      }, {
        key: "updateDueDateChange",
        value: function updateDueDateChange(event) {
          this.data.due_date = event.target.value;
        }
      }, {
        key: "updateInvoiceDateChange",
        value: function updateInvoiceDateChange(event) {
          this.data.invoice_date = event.target.value;
        }
      }, {
        key: "updateQuantityChange",
        value: function updateQuantityChange(item, event) {
          var tempArray = [];
          this.data.items.map(function (i) {
            if (item.id == i.id) {
              i.quantity = event.target.value;
              i.total = i.price * event.target.value;
            }

            tempArray.push(i);
          });
          this.data.items = tempArray;
          this.calculateInvoice();
        }
      }, {
        key: "updateDescriptionChange",
        value: function updateDescriptionChange(item, event) {
          var tempArray = [];
          this.data.items.map(function (i) {
            if (item.id == i.id) {
              i.notes = event.target.value;
            }

            tempArray.push(i);
          });
          this.data.items = tempArray;
        }
      }, {
        key: "updateDiscountChange",
        value: function updateDiscountChange(event) {
          this.data.discount = event.target.value;
          this.calculateInvoice();
        }
      }, {
        key: "changeDiscountType",
        value: function changeDiscountType(event) {
          this.data.discount_type = event.target.value;
          this.calculateInvoice();
        }
      }, {
        key: "calculateInvoice",
        value: function calculateInvoice() {
          var sub_total;
          sub_total = 0;
          this.data.items.map(function (i) {
            sub_total = sub_total + parseFloat(i.total);
          });
          this.data.sub_total = sub_total;

          if (this.data.discount_type == 'Fixed') {
            this.data.discount_val = this.data.discount;
          }

          if (this.data.discount_type == 'Percentage') {
            this.data.discount_val = this.data.sub_total * this.data.discount / 100;
          }

          var totalAmount = this.data.sub_total - this.data.discount_val;
          var taxes = [];
          var totalTaxes = 0;
          this.data.taxes.map(function (tax) {
            var t;
            t = tax.percent * totalAmount / 100;
            totalTaxes = totalTaxes + parseFloat(t);
            tax.tax_amount = t;
            taxes.push(tax);
          });
          this.data.total_tax = totalTaxes;
          this.data.total = totalAmount + totalTaxes; // sub_total
        } //Fixed
        //Percentage
        //discount_type

      }, {
        key: "removeItem",
        value: function removeItem(item) {
          var tempArray = [];
          this.data.items.map(function (i) {
            if (item.id != i.id) {
              tempArray.push(i);
            }
          });
          this.data.items = tempArray;
          this.calculateInvoice();
        }
      }, {
        key: "selectVehicle",
        value: function selectVehicle($event) {
          this.data.customer.selectedVehicle = $event.target.value; // console.log(this.data.customer.selectedVehicle);
        }
      }, {
        key: "saveForm",
        value: function saveForm(type) {
          console.log('before'); //Invoice name validation

          if (this.data.name == '') {
            this.toastService.presentToast('Please Enter a Invoice Name');
            return false;
          } //Invoice invoice_date validation


          if (this.data.invoice_date == '') {
            this.toastService.presentToast('Please select a date ');
            return false;
          } //Invoice due_date validation


          if (this.data.due_date == '') {
            this.toastService.presentToast('Please select a due date ');
            return false;
          } //Invoice name validation


          if (!this.apisService.isDefined(this.data.customer.id) || this.data.customer.id == '') {
            this.toastService.presentToast('Please select a customer ');
            return false;
          } //Item name validation


          if (!this.data.items.length) {
            this.toastService.presentToast('Please select an Item/Services ');
            return false;
          } //Subtotal name validation


          if (this.data.sub_total < 1) {
            this.toastService.presentToast('Subtotal must be greater then zero ');
            return false;
          } //amount name validation


          if (this.data.total < 1) {
            this.toastService.presentToast('Total amount must be grater then zero');
            return false;
          }

          var form = new FormData();
          form.append('auth_token', this.displayUserData.auth_token);
          form.append('data', JSON.stringify(this.data));

          if (this.apisService.isDefined(this.data.auth_token)) {
            console.log('update call');
            this.saveUpdateForm(form);
          } else {
            console.log('Add new call');
            this.saveAddForm(form);
          }
        }
      }, {
        key: "saveUpdateForm",
        value: function saveUpdateForm(form) {
          var _this7 = this;

          this.apisService.invoiceUpdate(form).subscribe(function (result) {
            if (result.data) {
              var navigationExtras = {
                state: {
                  data: 'refresh'
                }
              };

              _this7.router.navigate(['app/invoices'], navigationExtras);
            }
          }, function (error) {
            if (error.status == 0) {
              _this7.toastService.presentToast('Connection failed');
            }

            if (error.status == 401) {
              _this7.toastService.presentToast('Authentcation failed');
            }
          });
        }
      }, {
        key: "saveAddForm",
        value: function saveAddForm(form) {
          var _this8 = this;

          this.apisService.invoiceAdd(form).subscribe(function (result) {
            if (result.data) {
              var navigationExtras = {
                state: {
                  data: 'refresh'
                }
              };

              _this8.router.navigate(['app/invoices'], navigationExtras);
            }
          }, function (error) {
            if (error.status == 0) {
              _this8.toastService.presentToast('Connection failed');
            }

            if (error.status == 401) {
              console.log(error);

              _this8.toastService.presentToast(error.error.data);
            }
          });
        }
      }]);

      return NewPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=invoices-new-new-module-ngfactory-es5.js.map