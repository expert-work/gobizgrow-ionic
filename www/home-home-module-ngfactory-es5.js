function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module-ngfactory"], {
  /***/
  "./src/app/guards/home.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/home.guard.ts ***!
    \**************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcAppGuardsHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeGuard = /*#__PURE__*/function () {
      function HomeGuard(storageService, router) {
        _classCallCheck(this, HomeGuard);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storageService.get('userData').then(function (result) {
              if (result) {
                if (result.company_id === null && result.name === null) {
                  _this.router.navigate(['complete']);
                }

                resolve(true);
              } else {
                _this.router.navigate(['']);

                resolve(false);
              }
            })["catch"](function (err) {
              resolve(false);
            });
          });
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function HomeGuard_Factory() {
        return new HomeGuard(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      },
      token: HomeGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15 */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
      return ɵ4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ5", function () {
      return ɵ5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ6", function () {
      return ɵ6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ7", function () {
      return ɵ7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ8", function () {
      return ɵ8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ9", function () {
      return ɵ9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ10", function () {
      return ɵ10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ11", function () {
      return ɵ11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ12", function () {
      return ɵ12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ13", function () {
      return ɵ13;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ14", function () {
      return ɵ14;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ15", function () {
      return ɵ15;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /* harmony import */


    var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../resolvers/userData.resolver */
    "./src/app/resolvers/userData.resolver.ts");

    var ɵ0 = function ɵ0() {
      return __webpack_require__.e(
      /*! import() | tabs-tabs-module-ngfactory */
      "tabs-tabs-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../tabs/tabs.module.ngfactory */
      "./src/app/tabs/tabs.module.ngfactory.js")).then(function (m) {
        return m.TabsPageModuleNgFactory;
      });
    },
        ɵ1 = function ɵ1() {
      return __webpack_require__.e(
      /*! import() | dashboard-dashboard-module-ngfactory */
      "dashboard-dashboard-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../dashboard/dashboard.module.ngfactory */
      "./src/app/dashboard/dashboard.module.ngfactory.js")).then(function (m) {
        return m.DashboardPageModuleNgFactory;
      });
    },
        ɵ2 = function ɵ2() {
      return Promise.all(
      /*! import() | item-categories-list-list-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~item-categories-list-li~290278aa"), __webpack_require__.e("item-categories-list-list-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../item-categories/list/list.module.ngfactory */
      "./src/app/item-categories/list/list.module.ngfactory.js")).then(function (m) {
        return m.ListPageModuleNgFactory;
      });
    },
        ɵ3 = function ɵ3() {
      return __webpack_require__.e(
      /*! import() | dashboard-dashboard-module-ngfactory */
      "dashboard-dashboard-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../dashboard/dashboard.module.ngfactory */
      "./src/app/dashboard/dashboard.module.ngfactory.js")).then(function (m) {
        return m.DashboardPageModuleNgFactory;
      });
    },
        ɵ4 = function ɵ4() {
      return Promise.all(
      /*! import() | taxes-list-list-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~59d7d46a"), __webpack_require__.e("taxes-list-list-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../taxes/list/list.module.ngfactory */
      "./src/app/taxes/list/list.module.ngfactory.js")).then(function (m) {
        return m.ListPageModuleNgFactory;
      });
    },
        ɵ5 = function ɵ5() {
      return Promise.all(
      /*! import() | expense-categories-list-list-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~expense-categories-list-list-module-ngfactory~expenses-list-list-module-ngfactory"), __webpack_require__.e("expense-categories-list-list-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../expense-categories/list/list.module.ngfactory */
      "./src/app/expense-categories/list/list.module.ngfactory.js")).then(function (m) {
        return m.ListPageModuleNgFactory;
      });
    },
        ɵ6 = function ɵ6() {
      return __webpack_require__.e(
      /*! import() | dashboard-dashboard-module-ngfactory */
      "dashboard-dashboard-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../dashboard/dashboard.module.ngfactory */
      "./src/app/dashboard/dashboard.module.ngfactory.js")).then(function (m) {
        return m.DashboardPageModuleNgFactory;
      });
    },
        ɵ7 = function ɵ7() {
      return __webpack_require__.e(
      /*! import() | reports-sales-sales-module-ngfactory */
      "reports-sales-sales-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../reports/sales/sales.module.ngfactory */
      "./src/app/reports/sales/sales.module.ngfactory.js")).then(function (m) {
        return m.SalesPageModuleNgFactory;
      });
    },
        ɵ8 = function ɵ8() {
      return __webpack_require__.e(
      /*! import() | reports-profit-loss-profit-loss-module-ngfactory */
      "reports-profit-loss-profit-loss-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../reports/profit-loss/profit-loss.module.ngfactory */
      "./src/app/reports/profit-loss/profit-loss.module.ngfactory.js")).then(function (m) {
        return m.ProfitLossPageModuleNgFactory;
      });
    },
        ɵ9 = function ɵ9() {
      return __webpack_require__.e(
      /*! import() | reports-expenses-expenses-module-ngfactory */
      "reports-expenses-expenses-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../reports/expenses/expenses.module.ngfactory */
      "./src/app/reports/expenses/expenses.module.ngfactory.js")).then(function (m) {
        return m.ExpensesPageModuleNgFactory;
      });
    },
        ɵ10 = function ɵ10() {
      return __webpack_require__.e(
      /*! import() | reports-taxes-taxes-module-ngfactory */
      "reports-taxes-taxes-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../reports/taxes/taxes.module.ngfactory */
      "./src/app/reports/taxes/taxes.module.ngfactory.js")).then(function (m) {
        return m.TaxesPageModuleNgFactory;
      });
    },
        ɵ11 = function ɵ11() {
      return Promise.all(
      /*! import() | invoices-new-new-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~item-categories-list-li~290278aa"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~getting-started-getting-started-module-ngfactory~invoices~d592d4f3"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-new-new-module-ngfactory~invoices-new-new-mod~a88ef645"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~items-list-list-module-~df28b05a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~2b2d7ec6"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~59d7d46a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngfactory"), __webpack_require__.e("invoices-new-new-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../invoices/new/new.module.ngfactory */
      "./src/app/invoices/new/new.module.ngfactory.js")).then(function (m) {
        return m.NewPageModuleNgFactory;
      });
    },
        ɵ12 = function ɵ12() {
      return Promise.all(
      /*! import() | estimates-new-new-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~item-categories-list-li~290278aa"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~getting-started-getting-started-module-ngfactory~invoices~d592d4f3"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-new-new-module-ngfactory~invoices-new-new-mod~a88ef645"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~items-list-list-module-~df28b05a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~2b2d7ec6"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~59d7d46a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngfactory"), __webpack_require__.e("estimates-new-new-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../estimates/new/new.module.ngfactory */
      "./src/app/estimates/new/new.module.ngfactory.js")).then(function (m) {
        return m.NewPageModuleNgFactory;
      });
    },
        ɵ13 = function ɵ13() {
      return Promise.all(
      /*! import() | jobs-new-new-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~f86bc2cb"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~item-categories-list-li~290278aa"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~getting-started-getting-started-module-ngfactory~invoices~d592d4f3"), __webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-new-new-module-ngfactory~invoices-new-new-mod~a88ef645"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~items-list-list-module-~df28b05a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~2b2d7ec6"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~59d7d46a"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngfactory"), __webpack_require__.e("jobs-new-new-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../jobs/new/new.module.ngfactory */
      "./src/app/jobs/new/new.module.ngfactory.js")).then(function (m) {
        return m.NewPageModuleNgFactory;
      });
    },
        ɵ14 = function ɵ14() {
      return __webpack_require__.e(
      /*! import() | settings-account-information-account-information-module-ngfactory */
      "settings-account-information-account-information-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./../settings/account-information/account-information.module.ngfactory */
      "./src/app/settings/account-information/account-information.module.ngfactory.js")).then(function (m) {
        return m.AccountInformationPageModuleNgFactory;
      });
    },
        ɵ15 = function ɵ15() {
      return Promise.all(
      /*! import() | settings-company-information-company-information-module-ngfactory */
      [__webpack_require__.e("default~customers-list-list-module-ngfactory~estimates-list-list-module-ngfactory~estimates-new-new-~e0c4d554"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~getting-started-getting-started-module-ngfactory~invoices~d592d4f3"), __webpack_require__.e("default~estimates-new-new-module-ngfactory~invoices-new-new-module-ngfactory~jobs-new-new-module-ngf~2b2d7ec6"), __webpack_require__.e("settings-company-information-company-information-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./../settings/company-information/company-information.module.ngfactory */
      "./src/app/settings/company-information/company-information.module.ngfactory.js")).then(function (m) {
        return m.CompanyInformationPageModuleNgFactory;
      });
    };

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_1__["HomePage"],
      canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]],
      resolve: {
        userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_3__["UserDataResolver"]
      },
      children: [{
        path: 'app',
        loadChildren: ɵ0
      }, {
        path: 'app/dashboard',
        loadChildren: ɵ1
      }, {
        path: 'app/categories',
        loadChildren: ɵ2
      }, {
        path: 'app/expenses-categories',
        loadChildren: ɵ3
      }, {
        path: 'app/taxes',
        loadChildren: ɵ4
      }, {
        path: 'app/expense-categories',
        loadChildren: ɵ5
      }, {
        path: 'home',
        loadChildren: ɵ6
      }, {
        path: 'reports/sales',
        loadChildren: ɵ7
      }, {
        path: 'reports/profit-loss',
        loadChildren: ɵ8
      }, {
        path: 'reports/expenses',
        loadChildren: ɵ9
      }, {
        path: 'reports/taxes',
        loadChildren: ɵ10
      }, {
        path: 'app/invoices/do',
        loadChildren: ɵ11
      }, {
        path: 'app/estimates/do',
        loadChildren: ɵ12
      }, {
        path: 'app/jobs/do',
        loadChildren: ɵ13
      }, {
        path: 'settings/account-information',
        loadChildren: ɵ14
      }, {
        path: 'settings/company-information',
        loadChildren: ɵ15
      }]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/home/home.module.ngfactory.js":
  /*!***********************************************!*\
    !*** ./src/app/home/home.module.ngfactory.js ***!
    \***********************************************/

  /*! exports provided: HomePageModuleNgFactory */

  /***/
  function srcAppHomeHomeModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModuleNgFactory", function () {
      return HomePageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _home_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page.ngfactory */
    "./src/app/home/home.page.ngfactory.js");
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /* harmony import */


    var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../resolvers/userData.resolver */
    "./src/app/resolvers/userData.resolver.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var HomePageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_home_module__WEBPACK_IMPORTED_MODULE_1__["HomePageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _home_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["HomePageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _home_module__WEBPACK_IMPORTED_MODULE_1__["HomePageModule"], _home_module__WEBPACK_IMPORTED_MODULE_1__["HomePageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_7__["ROUTES"], function () {
        return [[{
          path: "",
          component: _home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"],
          canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_10__["HomeGuard"]],
          resolve: {
            userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_11__["UserDataResolver"]
          },
          children: [{
            path: "app",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"]
          }, {
            path: "app/dashboard",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ1"]
          }, {
            path: "app/categories",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ2"]
          }, {
            path: "app/expenses-categories",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ3"]
          }, {
            path: "app/taxes",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ4"]
          }, {
            path: "app/expense-categories",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ5"]
          }, {
            path: "home",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ6"]
          }, {
            path: "reports/sales",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ7"]
          }, {
            path: "reports/profit-loss",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ8"]
          }, {
            path: "reports/expenses",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ9"]
          }, {
            path: "reports/taxes",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ10"]
          }, {
            path: "app/invoices/do",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ11"]
          }, {
            path: "app/estimates/do",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ12"]
          }, {
            path: "app/jobs/do",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ13"]
          }, {
            path: "settings/account-information",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ14"]
          }, {
            path: "settings/company-information",
            loadChildren: _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["ɵ15"]
          }]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };
    /***/

  },

  /***/
  "./src/app/home/home.page.ngfactory.js":
  /*!*********************************************!*\
    !*** ./src/app/home/home.page.ngfactory.js ***!
    \*********************************************/

  /*! exports provided: RenderType_HomePage, View_HomePage_0, View_HomePage_Host_0, HomePageNgFactory */

  /***/
  function srcAppHomeHomePageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HomePage", function () {
      return RenderType_HomePage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomePage_0", function () {
      return View_HomePage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomePage_Host_0", function () {
      return View_HomePage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageNgFactory", function () {
      return HomePageNgFactory;
    });
    /* harmony import */


    var _home_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.page.scss.shim.ngstyle */
    "./src/app/home/home.page.scss.shim.ngstyle.js");
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


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_HomePage = [_home_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HomePage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HomePage,
      data: {}
    });

    function View_HomePage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ion-content", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, 0, 1, "ion-router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], [8, null], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], [3, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]]], null, null)], function (_ck, _v) {
        _ck(_v, 3, 0);
      }, null);
    }

    function View_HomePage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomePage_0, RenderType_HomePage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HomePageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], View_HomePage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/home/home.page.scss.shim.ngstyle.js":
  /*!*****************************************************!*\
    !*** ./src/app/home/home.page.scss.shim.ngstyle.js ***!
    \*****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppHomeHomePageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-ngfactory-es5.js.map