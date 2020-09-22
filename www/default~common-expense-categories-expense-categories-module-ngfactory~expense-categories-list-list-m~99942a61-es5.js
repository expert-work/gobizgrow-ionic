function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~common-expense-categories-expense-categories-module-ngfactory~expense-categories-list-list-m~99942a61"], {
  /***/
  "./src/app/expense-categories/new/new.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/expense-categories/new/new.page.ts ***!
    \****************************************************/

  /*! exports provided: NewPage */

  /***/
  function srcAppExpenseCategoriesNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPage", function () {
      return NewPage;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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

    var NewPage = /*#__PURE__*/function () {
      function NewPage(router, menu, authService, apisService, storageService, toastService, navParams, modalController) {
        _classCallCheck(this, NewPage);

        this.router = router;
        this.menu = menu;
        this.authService = authService;
        this.apisService = apisService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.modalController = modalController;
        this.vehicles_json_data = [];
        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }]
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
          'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(NewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userData$.subscribe(function (res) {
            _this.displayUserData = res;
          });
        }
      }, {
        key: "saveForm",
        value: function saveForm() {
          var _this2 = this;

          console.log('do Log In');
          this.desabled = true;
          var form = new FormData();
          form.append('name', this.form.value.name);
          form.append('description', this.form.value.description);
          form.append('auth_token', this.displayUserData.auth_token);
          this.apisService.expenseCategoryAdd(form).subscribe(function (result) {
            _this2.desabled = false;

            _this2.toastService.presentToast('Successfully added');

            _this2.modalController.dismiss(result.data);
          }, function (error) {
            _this2.desabled = false;

            if (error.status == 0) {
              _this2.toastService.presentToast('Connection failed');
            }

            if (error.status == 401) {
              _this2.toastService.presentToast('Authentcation failed');
            }
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss([]);
        }
      }]);

      return NewPage;
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
        key: "nextJob",
        value: function nextJob(postData) {
          return this.httpService.post('jobs/next', postData);
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
        key: "jobs",
        value: function jobs(postData) {
          return this.httpService.post('jobs/all', postData);
        }
      }, {
        key: "expenseCategories",
        value: function expenseCategories(postData) {
          return this.httpService.post('expenses-categories/all', postData);
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
        key: "categoryUpdate",
        value: function categoryUpdate(postData) {
          return this.httpService.post('categories/edit', postData);
        }
      }, {
        key: "itemAdd",
        value: function itemAdd(postData) {
          return this.httpService.post('items/add', postData);
        }
      }, {
        key: "itemUpdate",
        value: function itemUpdate(postData) {
          return this.httpService.post('items/edit', postData);
        }
      }, {
        key: "taxAdd",
        value: function taxAdd(postData) {
          return this.httpService.post('tax/add', postData);
        }
      }, {
        key: "taxUpdate",
        value: function taxUpdate(postData) {
          return this.httpService.post('tax/edit', postData);
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
          return this.httpService.post('estimates/add', postData);
        }
      }, {
        key: "estimateUpdate",
        value: function estimateUpdate(postData) {
          return this.httpService.post('estimates/edit', postData);
        }
      }, {
        key: "jobAdd",
        value: function jobAdd(postData) {
          return this.httpService.post('jobs/add', postData);
        }
      }, {
        key: "jobUpdate",
        value: function jobUpdate(postData) {
          return this.httpService.post('jobs/edit', postData);
        }
      }, {
        key: "expensesAdd",
        value: function expensesAdd(postData) {
          return this.httpService.post('expenses/add', postData);
        }
      }, {
        key: "expensesUpdate",
        value: function expensesUpdate(postData) {
          return this.httpService.post('expenses/edit', postData);
        } //Invoices
        //Items
        //Payments
        //Expenses
        //Items Categories
        //Expenses Categories
        //Taxes
        //Payment Merhods

      }, {
        key: "expenseCategoryUpdate",
        value: function expenseCategoryUpdate(postData) {
          return this.httpService.post('expenses-categories/edit', postData);
        }
      }, {
        key: "expenseCategoryAdd",
        value: function expenseCategoryAdd(postData) {
          return this.httpService.post('expenses-categories/add', postData);
        } // get Industries industries

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
//# sourceMappingURL=default~common-expense-categories-expense-categories-module-ngfactory~expense-categories-list-list-m~99942a61-es5.js.map