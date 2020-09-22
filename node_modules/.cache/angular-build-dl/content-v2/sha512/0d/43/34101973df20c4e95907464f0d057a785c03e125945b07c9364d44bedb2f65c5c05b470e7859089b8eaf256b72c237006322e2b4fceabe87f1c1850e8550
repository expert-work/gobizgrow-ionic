(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~common-expense-categories-expense-categories-module-ngfactory~expense-categories-list-list-m~99942a61"],{

/***/ "./src/app/expense-categories/new/new.page.ts":
/*!****************************************************!*\
  !*** ./src/app/expense-categories/new/new.page.ts ***!
  \****************************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");








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
            'name': [
                { type: 'required', message: 'Name is required.' },
            ]
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
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
        form.append('name', this.form.value.name);
        form.append('description', this.form.value.description);
        form.append('auth_token', this.displayUserData.auth_token);
        this.apisService.expenseCategoryAdd(form).subscribe((result) => {
            this.desabled = false;
            this.toastService.presentToast('Successfully added');
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
    close() {
        this.modalController.dismiss([]);
    }
}


/***/ }),

/***/ "./src/app/services/apis.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/apis.service.ts ***!
  \******************************************/
/*! exports provided: ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");











class ApisService {
    constructor(httpService, http, storageService, router) {
        this.httpService = httpService;
        this.http = http;
        this.storageService = storageService;
        this.router = router;
        // Image Upload Starts
        this.imageUploadUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'uploads';
    }
    getImages() {
        return this.http.get(`${this.imageUploadUrl}/image`);
    }
    uploadImage(blobData, name, ext, auth_token) {
        const formData = new FormData();
        formData.append('file', blobData, `myimage.${ext}`);
        formData.append('name', name);
        formData.append('auth_token', auth_token);
        return this.http.post(`${this.imageUploadUrl}`, formData);
    }
    uploadImageFile(file, auth_token) {
        const ext = file.name.split('.').pop();
        const formData = new FormData();
        formData.append('file', file, `myimage.${ext}`);
        formData.append('name', file.name);
        formData.append('auth_token', auth_token);
        return this.http.post(`${this.imageUploadUrl}`, formData);
    }
    deleteImage(id) {
        return this.http.delete(`${this.imageUploadUrl}/image/${id}`);
    }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    // Image Upload End
    getImageUrl(file) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileUrl + file;
    }
    getThumbImageUrl(file) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileUrl + 'thumb/' + file;
    }
    sortArray(myArray) {
        var result = myArray.reduce((unique, o) => {
            if (!unique.some(obj => obj.id === o.id)) {
                unique.push(o);
            }
            return unique;
        }, []);
        return result.sort(function (a, b) {
            return b.id - a.id;
        });
    }
    isDefined(x) {
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
    makeid(length) {
        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    signupComplete(postData) {
        return this.httpService.post('signup-complete', postData);
    }
    //Customers
    dashboard(postData) {
        return this.httpService.post('dashboard', postData);
    }
    customers(postData) {
        return this.httpService.post('customers/all', postData);
    }
    invoices(postData) {
        return this.httpService.post('invoices/all', postData);
    }
    nextInvoice(postData) {
        return this.httpService.post('invoices/next', postData);
    }
    nextEstimate(postData) {
        return this.httpService.post('estimates/next', postData);
    }
    nextJob(postData) {
        return this.httpService.post('jobs/next', postData);
    }
    items(postData) {
        return this.httpService.post('items/all', postData);
    }
    categories(postData) {
        return this.httpService.post('categories/all', postData);
    }
    payments(postData) {
        return this.httpService.post('payments/all', postData);
    }
    expenses(postData) {
        return this.httpService.post('expenses/all', postData);
    }
    jobs(postData) {
        return this.httpService.post('jobs/all', postData);
    }
    expenseCategories(postData) {
        return this.httpService.post('expenses-categories/all', postData);
    }
    taxes(postData) {
        return this.httpService.post('taxes/all', postData);
    }
    images(postData) {
        return this.httpService.post('images/all', postData);
    }
    deleteCustomers(postData) {
        return this.httpService.post('customers/delete', postData);
    }
    customerAdd(postData) {
        return this.httpService.post('customers/add', postData);
    }
    customerEdit(auth_token, postData) {
        return this.httpService.post('customers/edit/' + auth_token, postData);
    }
    categoryAdd(postData) {
        return this.httpService.post('categories/add', postData);
    }
    categoryUpdate(postData) {
        return this.httpService.post('categories/edit', postData);
    }
    itemAdd(postData) {
        return this.httpService.post('items/add', postData);
    }
    itemUpdate(postData) {
        return this.httpService.post('items/edit', postData);
    }
    taxAdd(postData) {
        return this.httpService.post('tax/add', postData);
    }
    taxUpdate(postData) {
        return this.httpService.post('tax/edit', postData);
    }
    invoiceAdd(postData) {
        return this.httpService.post('invoices/add', postData);
    }
    invoiceUpdate(postData) {
        return this.httpService.post('invoices/edit', postData);
    }
    estimateAdd(postData) {
        return this.httpService.post('estimates/add', postData);
    }
    estimateUpdate(postData) {
        return this.httpService.post('estimates/edit', postData);
    }
    jobAdd(postData) {
        return this.httpService.post('jobs/add', postData);
    }
    jobUpdate(postData) {
        return this.httpService.post('jobs/edit', postData);
    }
    expensesAdd(postData) {
        return this.httpService.post('expenses/add', postData);
    }
    expensesUpdate(postData) {
        return this.httpService.post('expenses/edit', postData);
    }
    //Invoices
    //Items
    //Payments
    //Expenses
    //Items Categories
    //Expenses Categories
    //Taxes
    //Payment Merhods
    expenseCategoryUpdate(postData) {
        return this.httpService.post('expenses-categories/edit', postData);
    }
    expenseCategoryAdd(postData) {
        return this.httpService.post('expenses-categories/add', postData);
    }
    // get Industries industries
    industries(postData) {
        return this.httpService.post('industries', postData);
    }
    // get All Estimates
    estimates(postData) {
        return this.httpService.post('estimates/all', postData);
    }
}
ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ factory: function ApisService_Factory() { return new ApisService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); }, token: ApisService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(infoMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: infoMessage,
                duration: 3000
            });
            toast.present();
        });
    }
}
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function ToastService_Factory() { return new ToastService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"])); }, token: ToastService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default~common-expense-categories-expense-categories-module-ngfactory~expense-categories-list-list-m~99942a61-es2015.js.map