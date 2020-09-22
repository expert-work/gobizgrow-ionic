function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-expense-categories-expense-categories-module-ngfactory"], {
  /***/
  "./src/app/common/expense-categories/expense-categories.module.ngfactory.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/common/expense-categories/expense-categories.module.ngfactory.js ***!
    \**********************************************************************************/

  /*! exports provided: ExpenseCategoriesPageModuleNgFactory */

  /***/
  function srcAppCommonExpenseCategoriesExpenseCategoriesModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseCategoriesPageModuleNgFactory", function () {
      return ExpenseCategoriesPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _expense_categories_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./expense-categories.module */
    "./src/app/common/expense-categories/expense-categories.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _expense_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expense-categories.page.ngfactory */
    "./src/app/common/expense-categories/expense-categories.page.ngfactory.js");
    /* harmony import */


    var _expense_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../expense-categories/new/new.page.ngfactory */
    "./src/app/expense-categories/new/new.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_shell_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/shell.module */
    "./src/app/shell/shell.module.ts");
    /* harmony import */


    var _shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shell/config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./expense-categories-routing.module */
    "./src/app/common/expense-categories/expense-categories-routing.module.ts");
    /* harmony import */


    var _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../expense-categories/new/new-routing.module */
    "./src/app/expense-categories/new/new-routing.module.ts");
    /* harmony import */


    var _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../expense-categories/new/new.module */
    "./src/app/expense-categories/new/new.module.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _expense_categories_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./expense-categories.page */
    "./src/app/common/expense-categories/expense-categories.page.ts");
    /* harmony import */


    var _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../expense-categories/new/new.page */
    "./src/app/expense-categories/new/new.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var ExpenseCategoriesPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_expense_categories_module__WEBPACK_IMPORTED_MODULE_1__["ExpenseCategoriesPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _expense_categories_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ExpenseCategoriesPageNgFactory"], _expense_categories_new_new_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NewPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_9__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_10__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_12__["ExpenseCategoriesPageRoutingModule"], _expense_categories_routing_module__WEBPACK_IMPORTED_MODULE_12__["ExpenseCategoriesPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_13__["NewPageRoutingModule"], _expense_categories_new_new_routing_module__WEBPACK_IMPORTED_MODULE_13__["NewPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_14__["NewPageModule"], _expense_categories_new_new_module__WEBPACK_IMPORTED_MODULE_14__["NewPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_9__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_9__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expense_categories_module__WEBPACK_IMPORTED_MODULE_1__["ExpenseCategoriesPageModule"], _expense_categories_module__WEBPACK_IMPORTED_MODULE_1__["ExpenseCategoriesPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          component: _expense_categories_page__WEBPACK_IMPORTED_MODULE_16__["ExpenseCategoriesPage"]
        }], [{
          path: "",
          component: _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_17__["NewPage"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/common/expense-categories/expense-categories.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/common/expense-categories/expense-categories.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ExpenseCategoriesPage */

  /***/
  function srcAppCommonExpenseCategoriesExpenseCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseCategoriesPage", function () {
      return ExpenseCategoriesPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../expense-categories/new/new.page */
    "./src/app/expense-categories/new/new.page.ts");

    var ExpenseCategoriesPage = /*#__PURE__*/function () {
      function ExpenseCategoriesPage(router, menu, authService, apisService, storageService, toastService, navParams, modalController) {
        _classCallCheck(this, ExpenseCategoriesPage);

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
        this.category = navParams.get('data');
        console.log('popup open start');
        console.log(this.category);
        console.log('popup open end');
        this.loading = true;
      }

      _createClass(ExpenseCategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userData$.subscribe(function (res) {
            _this.displayUserData = res;
            _this.q = '';

            if (_this.displayUserData.auth_token !== undefined) {
              _this.loadItems();
            }
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          setTimeout(function () {
            _this2.loadItems();

            _this2.numTimesLeft -= 1;
            event.target.complete();
          }, 500);
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          var _this3 = this;

          var form = new FormData();
          form.append('page', this.page.toString());
          form.append('q', this.q);
          form.append('auth_token', this.displayUserData.auth_token);
          this.apisService.expenseCategories(form).subscribe(function (result) {
            _this3.loading = false;

            if (result.data.total) {
              var _this3$items;

              _this3.page = _this3.page + 1;

              (_this3$items = _this3.items).push.apply(_this3$items, _toConsumableArray(result.data.data));

              _this3.items = _this3.apisService.sortArray(_this3.items);
            } else {}
          }, function (error) {
            if (error.status == 0) {
              _this3.toastService.presentToast('Connection failed');
            }

            if (error.status == 401) {
              _this3.toastService.presentToast('Authentcation failed');
            }
          });
        }
      }, {
        key: "searchBox",
        value: function searchBox(evt) {
          this.q = evt.srcElement.value;
          this.page = 1;
          this.items = [];
          this.loadItems();
        }
      }, {
        key: "newModal",
        value: function newModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _expense_categories_new_new_page__WEBPACK_IMPORTED_MODULE_7__["NewPage"],
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data.data) if (_this4.apisService.isDefined(data.data.id)) {
                        _this4.items.push(data.data);

                        _this4.items = _this4.apisService.sortArray(_this4.items);
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
        key: "selectCategory",
        value: function selectCategory(item) {
          item.expense_category_id = item.id; // if(item.id !=this.category.expense_category_id){
          //   item.expense_category_id=item.id;
          //   item.id=this.apisService.makeid(10);
          // }else{
          //   item.expense_category_id=item.id;
          //   item.id=this.category.id;
          // }

          this.category = item;
        }
      }, {
        key: "updateSelectedCategory",
        value: function updateSelectedCategory() {
          if (this.apisService.isDefined(this.category.name)) {
            this.modalController.dismiss(this.category);
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss([]);
        }
      }]);

      return ExpenseCategoriesPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-expense-categories-expense-categories-module-ngfactory-es5.js.map