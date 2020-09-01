function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deals-listing-deals-listing-module-ngfactory"], {
  /***/
  "./node_modules/dayjs/plugin/relativeTime.js":
  /*!***************************************************!*\
    !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesDayjsPluginRelativeTimeJs(module, exports, __webpack_require__) {
    !function (r, t) {
      true ? module.exports = t() : undefined;
    }(this, function () {
      "use strict";

      return function (r, t, e) {
        r = r || {};
        var n = t.prototype,
            o = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        e.en.relativeTime = o;

        var d = function d(t, n, _d, i) {
          for (var u, a, s, f = _d.$locale().relativeTime || o, l = r.thresholds || [{
            l: "s",
            r: 44,
            d: "second"
          }, {
            l: "m",
            r: 89
          }, {
            l: "mm",
            r: 44,
            d: "minute"
          }, {
            l: "h",
            r: 89
          }, {
            l: "hh",
            r: 21,
            d: "hour"
          }, {
            l: "d",
            r: 35
          }, {
            l: "dd",
            r: 25,
            d: "day"
          }, {
            l: "M",
            r: 45
          }, {
            l: "MM",
            r: 10,
            d: "month"
          }, {
            l: "y",
            r: 17
          }, {
            l: "yy",
            d: "year"
          }], h = l.length, m = 0; m < h; m += 1) {
            var c = l[m];
            c.d && (u = i ? e(t).diff(_d, c.d, !0) : _d.diff(t, c.d, !0));
            var y = (r.rounding || Math.round)(Math.abs(u));

            if (s = u > 0, y <= c.r || !c.r) {
              y <= 1 && m > 0 && (c = l[m - 1]);
              var p = f[c.l];
              a = "string" == typeof p ? p.replace("%d", y) : p(y, n, c.l, s);
              break;
            }
          }

          return n ? a : (s ? f.future : f.past).replace("%s", a);
        };

        n.to = function (r, t) {
          return d(r, t, this, !0);
        }, n.from = function (r, t) {
          return d(r, t, this);
        };

        var i = function i(r) {
          return r.$u ? e.utc() : e();
        };

        n.toNow = function (r) {
          return this.to(i(this), r);
        }, n.fromNow = function (r) {
          return this.from(i(this), r);
        };
      };
    });
    /***/
  },

  /***/
  "./src/app/deals/listing/deals-listing.module.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.module.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: DealsListingPageModuleNgFactory */

  /***/
  function srcAppDealsListingDealsListingModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageModuleNgFactory", function () {
      return DealsListingPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./deals-listing.module */
    "./src/app/deals/listing/deals-listing.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _deals_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./deals-listing.page.ngfactory */
    "./src/app/deals/listing/deals-listing.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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


    var _deals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");
    /* harmony import */


    var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./deals-listing.resolver */
    "./src/app/deals/listing/deals-listing.resolver.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var angular_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-pipes */
    "./node_modules/angular-pipes/fesm2015/angular-pipes.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var DealsListingPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _deals_listing_page_ngfactory__WEBPACK_IMPORTED_MODULE_3__["DealsListingPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AngularDelegate"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ɵ0"](p0_0)];
      }, [_shell_config_app_shell_config__WEBPACK_IMPORTED_MODULE_9__["AppShellConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"], _deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["DealsListingResolver"], _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_11__["DealsListingResolver"], [_deals_service__WEBPACK_IMPORTED_MODULE_10__["DealsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_8__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], angular_pipes__WEBPACK_IMPORTED_MODULE_14__["NgFloorPipeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["DealsListingPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () {
        return [[{
          path: "",
          component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_16__["DealsListingPage"],
          resolve: {
            data: _deals_listing_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DealsListingPageModule, ɵ0 */

  /***/
  function srcAppDealsListingDealsListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageModule", function () {
      return DealsListingPageModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /* harmony import */


    var _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./deals-listing.resolver */
    "./src/app/deals/listing/deals-listing.resolver.ts");

    var ɵ0 = _deals_listing_resolver__WEBPACK_IMPORTED_MODULE_2__["DealsListingResolver"];
    var routes = [{
      path: '',
      component: _deals_listing_page__WEBPACK_IMPORTED_MODULE_1__["DealsListingPage"],
      resolve: {
        data: ɵ0
      }
    }];

    var DealsListingPageModule = function DealsListingPageModule() {
      _classCallCheck(this, DealsListingPageModule);
    };
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.page.ngfactory.js":
  /*!***************************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.page.ngfactory.js ***!
    \***************************************************************/

  /*! exports provided: RenderType_DealsListingPage, View_DealsListingPage_0, View_DealsListingPage_Host_0, DealsListingPageNgFactory */

  /***/
  function srcAppDealsListingDealsListingPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DealsListingPage", function () {
      return RenderType_DealsListingPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DealsListingPage_0", function () {
      return View_DealsListingPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DealsListingPage_Host_0", function () {
      return View_DealsListingPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPageNgFactory", function () {
      return DealsListingPageNgFactory;
    });
    /* harmony import */


    var _styles_deals_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/deals-listing.page.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_deals_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/deals-listing.shell.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js");
    /* harmony import */


    var _styles_deals_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./styles/deals-listing.ios.scss.shim.ngstyle */
    "./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ionic/angular/ionic-angular.ngfactory */
    "./node_modules/@ionic/angular/ionic-angular.ngfactory.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component.ngfactory */
    "./src/app/shell/text-shell/text-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shell/text-shell/text-shell.component */
    "./src/app/shell/text-shell/text-shell.component.ts");
    /* harmony import */


    var _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/countdown-timer/countdown-timer.component.ngfactory */
    "./src/app/components/countdown-timer/countdown-timer.component.ngfactory.js");
    /* harmony import */


    var _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/countdown-timer/countdown-timer.component */
    "./src/app/components/countdown-timer/countdown-timer.component.ts");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component.ngfactory */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ngfactory.js");
    /* harmony import */


    var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shell/aspect-ratio/aspect-ratio.component */
    "./src/app/shell/aspect-ratio/aspect-ratio.component.ts");
    /* harmony import */


    var _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component.ngfactory */
    "./src/app/shell/image-shell/image-shell.component.ngfactory.js");
    /* harmony import */


    var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shell/image-shell/image-shell.component */
    "./src/app/shell/image-shell/image-shell.component.ts");
    /* harmony import */


    var _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../pipes/time-difference.pipe */
    "./src/app/pipes/time-difference.pipe.ts");
    /* harmony import */


    var _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../pipes/time-ago.pipe */
    "./src/app/pipes/time-ago.pipe.ts");
    /* harmony import */


    var _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./deals-listing.page */
    "./src/app/deals/listing/deals-listing.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DealsListingPage = [_styles_deals_listing_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_deals_listing_shell_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_deals_listing_ios_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];

    var RenderType_DealsListingPage = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DealsListingPage,
      data: {}
    });

    function View_DealsListingPage_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 10, "ion-col", [["class", "call-to-action-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 8, "ion-button", [["class", "claim-button"], ["color", "claim"], ["expand", "block"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).onClick() !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 6).onClick($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](5, 2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, 0, 1, "span", [["class", "button-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["CLAIM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, 0, 1, "ion-icon", [["name", "arrow-forward"], ["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        name: [0, "name"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "claim";
        var currVal_1 = "block";

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_2 = _ck(_v, 5, 0, "/app/categories/deals/", _v.parent.context.$implicit.slug);

        _ck(_v, 4, 0, currVal_2);

        _ck(_v, 6, 0);

        var currVal_3 = "arrow-forward";

        _ck(_v, 10, 0, currVal_3);
      }, null);
    }

    function View_DealsListingPage_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "ion-col", [["class", "call-to-action-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, 0, 1, "span", [["class", "expired-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["EXPIRED"]))], null, null);
    }

    function View_DealsListingPage_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 3, "span", [["class", "item-time-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 2, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](4, 1)], function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit.expirationDate));

        _ck(_v, 3, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).textLoaded;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_DealsListingPage_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 4, "ion-row", [["class", "countdown-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, 0, 2, "app-countdown-timer", [["class", "item-countdown"], ["fill", "inner-time"]], null, null, null, _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CountdownTimerComponent_0"], _components_countdown_timer_countdown_timer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CountdownTimerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 245760, null, 0, _components_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_11__["CountdownTimerComponent"], [], {
        end: [0, "end"],
        units: [1, "units"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](5, {
        from: 0,
        to: 1
      })], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.expirationDate;

        var currVal_1 = _ck(_v, 5, 0, "hour", "second");

        _ck(_v, 4, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_DealsListingPage_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 73, "div", [["class", "listing-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](2, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](4, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](5, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](6, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](7, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](8, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](9, {
        "ended": 0,
        "imminent-end": 1,
        "ends-soon": 2,
        "distant-end": 3
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, null, 14, "ion-row", [["class", "top-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](11, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](12, 0, null, 0, 6, "ion-col", [["class", "logo-col"], ["size", "6"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 4, "app-aspect-ratio", [], [[4, "padding", null]], null, null, _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_AspectRatioComponent_0"], _shell_aspect_ratio_aspect_ratio_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_AspectRatioComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 49152, null, 0, _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_13__["AspectRatioComponent"], [], {
        ratio: [0, "ratio"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](16, {
        w: 0,
        h: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](17, 0, null, 0, 1, "app-image-shell", [["animation", "spinner"], ["class", "deal-logo"]], [[2, "img-loaded", null], [4, "backgroundImage", null], [1, "display", 0]], null, null, _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_ImageShellComponent_0"], _shell_image_shell_image_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_ImageShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](18, 49152, null, 0, _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_15__["ImageShellComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]], {
        src: [0, "src"],
        alt: [1, "alt"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 2, null, View_DealsListingPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](21, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 2, null, View_DealsListingPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](24, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](25, 0, null, null, 19, "ion-row", [["class", "middle-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](26, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](27, 0, null, 0, 11, "ion-col", [["class", "info-col"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](28, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](29, 0, null, 0, 6, "h4", [["class", "item-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](30, 0, null, null, 5, "a", [["class", "name-anchor"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 31).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](31, 737280, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](32, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](33, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](34, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](35, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](36, 0, null, 0, 2, "p", [["class", "item-description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](37, 0, null, null, 1, "app-text-shell", [["animation", "bouncing"], ["lines", "3"]], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](38, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](39, 0, null, 0, 5, "ion-col", [["size", "2"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](40, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](41, 0, null, 0, 3, "ion-button", [["class", "bookmark-button"], ["color", "claim"], ["expand", "block"], ["fill", "clear"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](42, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"],
        expand: [1, "expand"],
        fill: [2, "fill"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](43, 0, null, 0, 1, "ion-icon", [["name", "pricetag"], ["slot", "icon-only"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonIcon_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](44, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        name: [0, "name"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](45, 0, null, null, 28, "ion-row", [["class", "bottom-row"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonRow_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](46, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](47, 0, null, 0, 9, "ion-col", [["class", "code-wrapper"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](48, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](49, 0, null, 0, 1, "span", [["class", "code-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Use this code:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](51, 0, null, 0, 5, "span", [["class", "item-code"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](53, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](54, {
        "expired": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](55, 0, null, null, 1, "app-text-shell", [], [[2, "text-loaded", null]], null, null, _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_TextShellComponent_0"], _shell_text_shell_text_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_TextShellComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](56, 49152, null, 0, _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], [], {
        data: [0, "data"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](57, 0, null, 0, 16, "ion-col", [["class", "time-left-wrapper"], ["size", "5"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonCol_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonCol"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](58, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](59, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](60, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpod"](61, {
        "countdown-active": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](62, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        size: [0, "size"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](63, 0, null, 0, 2, "span", [["class", "expiration-cta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](64, null, ["DEAL ", ":"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](65, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 3, null, View_DealsListingPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](67, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](68, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](69, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 3, null, View_DealsListingPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](71, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](72, 1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](73, 1)], function (_ck, _v) {
        var currVal_0 = "listing-item";

        var currVal_1 = _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 2 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 1, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) >= 10);

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = "6";

        _ck(_v, 13, 0, currVal_2);

        var currVal_4 = _ck(_v, 16, 0, 128, 32);

        _ck(_v, 15, 0, currVal_4);

        var currVal_8 = _v.context.$implicit.logo;
        var currVal_9 = "deals logo";

        _ck(_v, 18, 0, currVal_8, currVal_9);

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 20, 0, _ck(_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0;

        _ck(_v, 20, 0, currVal_10);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 23, 0, _ck(_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0;

        _ck(_v, 23, 0, currVal_11);

        _ck(_v, 31, 0);

        var currVal_14 = _ck(_v, 33, 0, "/app/categories/deals/", _v.context.$implicit.slug);

        _ck(_v, 32, 0, currVal_14);

        var currVal_16 = _v.context.$implicit.name;

        _ck(_v, 35, 0, currVal_16);

        var currVal_18 = _v.context.$implicit.description;

        _ck(_v, 38, 0, currVal_18);

        var currVal_19 = "2";

        _ck(_v, 40, 0, currVal_19);

        var currVal_20 = "claim";
        var currVal_21 = "block";
        var currVal_22 = "clear";

        _ck(_v, 42, 0, currVal_20, currVal_21, currVal_22);

        var currVal_23 = "pricetag";

        _ck(_v, 44, 0, currVal_23);

        var currVal_24 = "item-code";

        var currVal_25 = _ck(_v, 54, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 52, 1, _ck(_v, 53, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0);

        _ck(_v, 52, 0, currVal_24, currVal_25);

        var currVal_27 = _v.context.$implicit.code;

        _ck(_v, 56, 0, currVal_27);

        var currVal_28 = "time-left-wrapper";

        var currVal_29 = _ck(_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 58, 1, _ck(_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 58, 1, _ck(_v, 60, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2);

        _ck(_v, 58, 0, currVal_28, currVal_29);

        var currVal_30 = "5";

        _ck(_v, 62, 0, currVal_30);

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 67, 0, _ck(_v, 68, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0 || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 67, 0, _ck(_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 2;

        _ck(_v, 67, 0, currVal_32);

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 71, 0, _ck(_v, 72, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) > 0 && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 71, 0, _ck(_v, 73, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) <= 2;

        _ck(_v, 71, 0, currVal_33);
      }, function (_ck, _v) {
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).ratioPadding;

        _ck(_v, 14, 0, currVal_3);

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).imageLoaded;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).backgroundImage;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 18).display;

        _ck(_v, 17, 0, currVal_5, currVal_6, currVal_7);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).target;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 32).href;

        _ck(_v, 30, 0, currVal_12, currVal_13);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 35).textLoaded;

        _ck(_v, 34, 0, currVal_15);

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 38).textLoaded;

        _ck(_v, 37, 0, currVal_17);

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 56).textLoaded;

        _ck(_v, 55, 0, currVal_26);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 64, 0, _ck(_v, 65, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.expirationDate)) < 0 ? "EXPIRED" : "EXPIRES IN";

        _ck(_v, 64, 0, currVal_31);
      });
    }

    function View_DealsListingPage_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_DealsListingPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.listing.items;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_DealsListingPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _pipes_time_difference_pipe__WEBPACK_IMPORTED_MODULE_16__["TimeDifferencePipe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _pipes_time_ago_pipe__WEBPACK_IMPORTED_MODULE_17__["TimeAgoPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, 0, 4, "ion-buttons", [["slot", "start"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, 0, 2, "ion-back-button", [["defaultHref", "app/categories"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 10).onClick($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonBackButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonBackButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], {
        defaultHref: [0, "defaultHref"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 16384, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], [[2, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Config"]], {
        defaultHref: [0, "defaultHref"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["Deals Listing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, null, 3, "ion-content", [["class", "deals-listing-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 1, null, View_DealsListingPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "primary";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = "app/categories";

        _ck(_v, 9, 0, currVal_1);

        var currVal_2 = "app/categories";

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _co.listing == null ? null : _co.listing.items;

        _ck(_v, 17, 0, currVal_3);
      }, null);
    }

    function View_DealsListingPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-deals-listing", [], [[2, "is-shell", null]], null, null, View_DealsListingPage_0, RenderType_DealsListingPage)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__["DealsListingPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).isShell;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var DealsListingPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-deals-listing", _deals_listing_page__WEBPACK_IMPORTED_MODULE_18__["DealsListingPage"], View_DealsListingPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.page.ts ***!
    \*****************************************************/

  /*! exports provided: DealsListingPage */

  /***/
  function srcAppDealsListingDealsListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingPage", function () {
      return DealsListingPage;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/resolver-helper */
    "./src/app/utils/resolver-helper.ts");
    /* harmony import */


    var _deals_listing_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./deals-listing.model */
    "./src/app/deals/listing/deals-listing.model.ts");

    var DealsListingPage = /*#__PURE__*/function () {
      function DealsListingPage(route) {
        _classCallCheck(this, DealsListingPage);

        this.route = route;
      }

      _createClass(DealsListingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // On init, the route subscription is the active subscription
          this.subscriptions = this.route.data.subscribe(function (resolvedRouteData) {
            // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
            _this.subscriptions = _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_1__["ResolverHelper"].extractData(resolvedRouteData.data, _deals_listing_model__WEBPACK_IMPORTED_MODULE_2__["DealsListingModel"]).subscribe(function (state) {
              _this.listing = state;
            }, function (error) {});
          }, function (error) {});
        } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
        // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscriptions.unsubscribe();
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.listing && this.listing.isShell ? true : false;
        }
      }]);

      return DealsListingPage;
    }();
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.resolver.ts":
  /*!*********************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.resolver.ts ***!
    \*********************************************************/

  /*! exports provided: DealsListingResolver */

  /***/
  function srcAppDealsListingDealsListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingResolver", function () {
      return DealsListingResolver;
    });
    /* harmony import */


    var _deals_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../deals.service */
    "./src/app/deals/deals.service.ts");

    var DealsListingResolver = /*#__PURE__*/function () {
      function DealsListingResolver(dealsService) {
        _classCallCheck(this, DealsListingResolver);

        this.dealsService = dealsService;
      }

      _createClass(DealsListingResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.dealsService.getListingDataSource();
          var dataStore = this.dealsService.getListingStore(dataSource);
          return dataStore;
        }
      }]);

      return DealsListingResolver;
    }();
    /***/

  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.ios.scss.shim.ngstyle.js ***!
    \*****************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingIosScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = [".ios[_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  height: 2.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy9zcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiLCJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLmlvcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dCguaW9zKSB7XG4gIC8vIEN1c3RvbSBwbGF0Zm9ybSBzdHlsZXMgaGVyZVxuICAuY2xhaW0tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDIuMmVtO1xuICB9XG59XG4iLCI6aG9zdC1jb250ZXh0KC5pb3MpIC5jbGFpbS1idXR0b24ge1xuICBoZWlnaHQ6IDIuMmVtO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js":
  /*!******************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.page.scss.shim.ngstyle.js ***!
    \******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-countdown-fill-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.2);\n  --page-item-shadow-color: rgba(var(--ion-color-dark-rgb), .1);\n  --page-deal-code-height: 30px;\n  --page-countdown-gutter: 3px;\n  --page-expired-color: var(--ion-color-medium-tint);\n  --page-ends-soon-color: #FFAB6B;\n  --page-distant-end-color: #70DF70;\n  --page-deal-color: var(--ion-color-medium);\n  --page-deal-border-color: var(--ion-color-light-shade);\n  --page-color: #70DF70;\n  --ion-color-claim: #70DF70;\n  --ion-color-claim-rgb: 112,223,112;\n  --ion-color-claim-contrast: #FFFFFF;\n  --ion-color-claim-contrast-rgb: 255,255,255;\n  --ion-color-claim-shade: #63C463;\n  --ion-color-claim-tint: #7EE27E;\n}\n[_nghost-%COMP%]   .ion-color-claim[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-claim) !important;\n  --ion-color-base-rgb: var(--ion-color-claim-rgb) !important;\n  --ion-color-contrast: var(--ion-color-claim-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-claim-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-claim-shade) !important;\n  --ion-color-tint: var(--ion-color-claim-tint) !important;\n}\n.deals-listing-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.listing-item[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-lightest);\n  margin: var(--page-margin);\n  border-radius: var(--app-fair-radius);\n  box-shadow: 1px 1px 4px 1px var(--page-item-shadow-color);\n  border-bottom-style: solid;\n  border-bottom-width: calc((var(--page-margin) / 2) * 3);\n  border-bottom-color: var(--page-deal-border-color);\n}\n.listing-item.ended[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-expired-color);\n  --page-deal-border-color: var(--page-expired-color);\n  border-bottom-style: none;\n}\n.listing-item.imminent-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n}\n.listing-item.ends-soon[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-ends-soon-color);\n  --page-deal-border-color: var(--page-ends-soon-color);\n  border-bottom-style: none;\n}\n.listing-item.distant-end[_ngcontent-%COMP%] {\n  --page-deal-color: var(--page-distant-end-color);\n  --page-deal-border-color: var(--page-distant-end-color);\n  border-bottom-style: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  border-bottom: 2px dashed rgba(var(--ion-color-dark-rgb), 0.1);\n  padding: calc(var(--page-margin) / 2);\n  justify-content: space-between;\n  align-items: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .logo-col[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .expired-cta[_ngcontent-%COMP%] {\n  color: var(--page-expired-color);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --border-radius: var(--app-fair-radius);\n  margin: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   .button-cta[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 18px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.listing-item[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%]   .call-to-action-col[_ngcontent-%COMP%]   .claim-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: calc(var(--page-margin) / 2);\n  padding-bottom: var(--page-margin);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .info-col[_ngcontent-%COMP%] {\n  padding-right: calc(var(--page-margin) / 2);\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-dark-tint);\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   .name-anchor[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .item-description[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: var(--ion-color-medium-tint);\n  font-size: 14px;\n}\n.listing-item[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .bookmark-button[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n  --padding-end: 5px;\n  margin: 0px;\n  font-size: 16px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: 0px calc(var(--page-margin) / 2) calc(var(--page-margin) / 2);\n  justify-content: space-between;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%] {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .code-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code[_ngcontent-%COMP%] {\n  height: var(--page-deal-code-height);\n  text-transform: uppercase;\n  padding: calc(var(--page-margin) / 4) calc(var(--page-margin) / 2);\n  border: 2px solid var(--page-color);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1;\n  border-radius: calc(var(--page-deal-code-height) / 2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .code-wrapper[_ngcontent-%COMP%]   .item-code.expired[_ngcontent-%COMP%] {\n  border-color: var(--page-expired-color);\n  color: var(--page-expired-color);\n  opacity: 0.6;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]   .expiration-cta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  display: block;\n  text-transform: uppercase;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper[_ngcontent-%COMP%]:not(.countdown-active)   .item-time-left[_ngcontent-%COMP%] {\n  color: var(--page-deal-color);\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  text-align: end;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  right: 0px;\n}\n.listing-item[_ngcontent-%COMP%]   .bottom-row[_ngcontent-%COMP%]   .time-left-wrapper.countdown-active[_ngcontent-%COMP%]   .countdown-wrapper[_ngcontent-%COMP%]   app-countdown-timer.item-countdown[_ngcontent-%COMP%] {\n  --countdown-time-margin: 0px;\n  --countdown-time-padding: 0px;\n  --countdown-inner-time-margin: var(--page-countdown-gutter) var(--page-countdown-gutter) 0px;\n  --countdown-inner-time-padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  --countdown-fill-border: none;\n  --countdown-fill-border-radius: var(--app-narrow-radius);\n  --countdown-fill-background: var(--ion-color-lightest);\n  --countdown-fill-shadow: 0px 0px 5px 0px var(--page-countdown-fill-shadow-color);\n  --countdown-value-color: var(--ion-color-darkest);\n  --countdown-unit-color: var(--ion-color-medium-shade);\n  --countdown-time-flex-direction: column;\n  font-weight: 500;\n  font-size: 14px;\n  margin-right: calc(var(--page-countdown-gutter) * -1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy9zcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3RpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9kZWFscy9saXN0aW5nL3N0eWxlcy9kZWFscy1saXN0aW5nLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy9zcmMvdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLDJFQUFBO0VBQ0EsNkRBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBRUEsa0RBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsMENBQUE7RUFDQSxzREFBQTtFQUVBLHFCQUFBO0VBSUUsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDVko7QUNoQkU7RUFDRSxtREFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3RUFBQTtFQUNBLDBEQUFBO0VBQ0Esd0RBQUE7QURrQko7QURPQTtFQUNFLG9DQUFBO0FDSkY7QURPQTtFQXFCRSwyQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSx5REFBQTtFQUNBLDBCQUFBO0VBQ0EsdURBQUE7RUFDQSxrREFBQTtBQ3hCRjtBREZFO0VBQ0UsNENBQUE7RUFDQSxtREFBQTtFQUNBLHlCQUFBO0FDSUo7QURGRTtFQUNFLDhDQUFBO0VBQ0EsdURBQUE7QUNJSjtBREZFO0VBQ0UsOENBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0FDSUo7QURGRTtFQUNFLGdEQUFBO0VBQ0EsdURBQUE7RUFDQSx5QkFBQTtBQ0lKO0FET0U7RUFDRSw4QkFBQTtFQUVBLDhEQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTko7QURRSTtFQUNFLGtCQUFBO0FDTk47QURTSTtFQUNFLFlBQUE7QUNQTjtBRFNNO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1BSO0FEVU07RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBRUEsV0FBQTtBQ1RSO0FEV1E7RUFDRSxhQUFBO0FDVFY7QURZUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZWO0FEYVE7RUFDRSxlQUFBO0FDWFY7QURpQkU7RUFDRSw4QkFBQTtFQUVBLHFDQUFBO0VBQ0Esa0NBQUE7QUNoQko7QURrQkk7RUFDRSwyQ0FBQTtBQ2hCTjtBRG1CSTtFQUNFLFdBQUE7RUFDSCwyQ0FBQTtFQUNHLGlDQUFBO0VBQ0EsZUFBQTtBQ2pCTjtBRG1CTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2pCUjtBRHFCSTtFQUNFLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUNuQk47QURzQkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUNyQk47QUR5QkU7RUFDRSw4QkFBQTtFQUVBLHNFQUFBO0VBQ0EsOEJBQUE7QUN4Qko7QUQwQkk7RUFDRSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUN4Qk47QUQwQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN4QlI7QUQyQk07RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDekJSO0FEMkJRO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUN6QlY7QUQ4Qkk7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQzVCTjtBRDhCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQzVCUjtBRGdDUTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM5QlY7QURrQ007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNoQ1I7QURrQ1E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxVQUFBO0FDakNWO0FEbUNVO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRGQUFBO0VBQ0EseUZBQUE7RUFDQSw2QkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0RBQUE7RUFDQSxnRkFBQTtFQUNBLGlEQUFBO0VBQ0EscURBQUE7RUFDQSx1Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0FDbENaIiwiZmlsZSI6InNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWNvdW50ZG93bi1maWxsLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFya2VzdC1yZ2IpLCAwLjIpO1xuICAtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjEpO1xuICAtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodDogMzBweDtcbiAgLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXI6IDNweDtcblxuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuXG4gIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzcwREY3MDtcblxuICAvLyBBZGQgY3VzdG9tIGNvbG9ycyB0byB1c2Ugd2l0aCBbY29sb3JdIHByb3BlcnR5XG4gIEBpbmNsdWRlIGlvbi1jb2xvcignY2xhaW0nKSB7XG4gICAgLS1pb24tY29sb3ItY2xhaW06ICM3MERGNzA7XG4gICAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdDogI0ZGRkZGRjtcbiAgICAtLWlvbi1jb2xvci1jbGFpbS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAgIC0taW9uLWNvbG9yLWNsYWltLXRpbnQ6ICM3RUUyN0U7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZGVhbHMtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgJi5lbmRlZCB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cbiAgJi5pbW1pbmVudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gICAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgfVxuICAmLmVuZHMtc29vbiB7XG4gICAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICB9XG4gICYuZGlzdGFudC1lbmQge1xuICAgIC0tcGFnZS1kZWFsLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbiAgICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG5cbiAgLnRvcC1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvLWNvbCB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gICAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICAgIC5leHBpcmVkLWN0YSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICAgIH1cblxuICAgICAgLmNsYWltLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuXG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWN0YSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1pZGRsZS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5pdGVtLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmJvb2ttYXJrLWJ1dHRvbiB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcblxuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmJvdHRvbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmNvZGUtd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAuY29kZS1jdGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWNvZGUge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAmLmV4cGlyZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGltZS1sZWZ0LXdyYXBwZXIge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgIC5leHBpcmF0aW9uLWN0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCguY291bnRkb3duLWFjdGl2ZSkge1xuICAgICAgICAuaXRlbS10aW1lLWxlZnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWRlYWwtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmNvdW50ZG93bi1hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jb3VudGRvd24td3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBhYnNvbHV0ZSBzbyB0aGF0IHRoZSBwYXJlbnQgZG9lbid0IGNvdW50IHRoZSBoZWlnaHQgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgICAgYXBwLWNvdW50ZG93bi10aW1lci5pdGVtLWNvdW50ZG93biB7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi10aW1lLW1hcmdpbjogMHB4O1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1pbm5lci10aW1lLW1hcmdpbjogdmFyKC0tcGFnZS1jb3VudGRvd24tZ3V0dGVyKSB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIDBweDtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWlubmVyLXRpbWUtcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAtLWNvdW50ZG93bi1maWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdmFsdWUtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbiAgICAgICAgICAgIC0tY291bnRkb3duLXVuaXQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgKiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtY291bnRkb3duLWZpbGwtc2hhZG93LWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrZXN0LXJnYiksIDAuMik7XG4gIC0tcGFnZS1pdGVtLXNoYWRvdy1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAuMSk7XG4gIC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0OiAzMHB4O1xuICAtLXBhZ2UtY291bnRkb3duLWd1dHRlcjogM3B4O1xuICAtLXBhZ2UtZXhwaXJlZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgLS1wYWdlLWVuZHMtc29vbi1jb2xvcjogI0ZGQUI2QjtcbiAgLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yOiAjNzBERjcwO1xuICAtLXBhZ2UtZGVhbC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1wYWdlLWNvbG9yOiAjNzBERjcwO1xuICAtLWlvbi1jb2xvci1jbGFpbTogIzcwREY3MDtcbiAgLS1pb24tY29sb3ItY2xhaW0tcmdiOiAxMTIsMjIzLDExMjtcbiAgLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3Q6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWNsYWltLXNoYWRlOiAjNjNDNDYzO1xuICAtLWlvbi1jb2xvci1jbGFpbS10aW50OiAjN0VFMjdFO1xufVxuOmhvc3QgLmlvbi1jb2xvci1jbGFpbSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jbGFpbSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1yZ2IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItY2xhaW0tY29udHJhc3QpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWNsYWltLWNvbnRyYXN0LXJnYikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jbGFpbS1zaGFkZSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWNsYWltLXRpbnQpICFpbXBvcnRhbnQ7XG59XG5cbi5kZWFscy1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4IHZhcigtLXBhZ2UtaXRlbS1zaGFkb3ctY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgKiAzKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtLmVuZGVkIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIC0tcGFnZS1kZWFsLWJvcmRlci1jb2xvcjogdmFyKC0tcGFnZS1leHBpcmVkLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0uaW1taW5lbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWRpc3RhbnQtZW5kLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0uZW5kcy1zb29uIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZW5kcy1zb29uLWNvbG9yKTtcbiAgLS1wYWdlLWRlYWwtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYWdlLWVuZHMtc29vbi1jb2xvcik7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG59XG4ubGlzdGluZy1pdGVtLmRpc3RhbnQtZW5kIHtcbiAgLS1wYWdlLWRlYWwtY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICAtLXBhZ2UtZGVhbC1ib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZGlzdGFudC1lbmQtY29sb3IpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMSk7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmxvZ28tY29sIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5leHBpcmVkLWN0YSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAudG9wLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIC5jbGFpbS1idXR0b24gLmJ1dHRvbi1jdGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5saXN0aW5nLWl0ZW0gLnRvcC1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuY2xhaW0tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLmluZm8tY29sIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLm1pZGRsZS1yb3cgLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxpc3RpbmctaXRlbSAubWlkZGxlLXJvdyAuYm9va21hcmstYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciB7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC5jb2RlLXdyYXBwZXIgLmNvZGUtY3RhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAuY29kZS13cmFwcGVyIC5pdGVtLWNvZGUge1xuICBoZWlnaHQ6IHZhcigtLXBhZ2UtZGVhbC1jb2RlLWhlaWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1kZWFsLWNvZGUtaGVpZ2h0KSAvIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLmNvZGUtd3JhcHBlciAuaXRlbS1jb2RlLmV4cGlyZWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLXBhZ2UtZXhwaXJlZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWV4cGlyZWQtY29sb3IpO1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLmJvdHRvbS1yb3cgLnRpbWUtbGVmdC13cmFwcGVyIC5leHBpcmF0aW9uLWN0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXI6bm90KC5jb3VudGRvd24tYWN0aXZlKSAuaXRlbS10aW1lLWxlZnQge1xuICBjb2xvcjogdmFyKC0tcGFnZS1kZWFsLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmxpc3RpbmctaXRlbSAuYm90dG9tLXJvdyAudGltZS1sZWZ0LXdyYXBwZXIuY291bnRkb3duLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlci5jb3VudGRvd24tYWN0aXZlIC5jb3VudGRvd24td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5ib3R0b20tcm93IC50aW1lLWxlZnQtd3JhcHBlci5jb3VudGRvd24tYWN0aXZlIC5jb3VudGRvd24td3JhcHBlciBhcHAtY291bnRkb3duLXRpbWVyLml0ZW0tY291bnRkb3duIHtcbiAgLS1jb3VudGRvd24tdGltZS1tYXJnaW46IDBweDtcbiAgLS1jb3VudGRvd24tdGltZS1wYWRkaW5nOiAwcHg7XG4gIC0tY291bnRkb3duLWlubmVyLXRpbWUtbWFyZ2luOiB2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpIHZhcigtLXBhZ2UtY291bnRkb3duLWd1dHRlcikgMHB4O1xuICAtLWNvdW50ZG93bi1pbm5lci10aW1lLXBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1jb3VudGRvd24tZmlsbC1ib3JkZXI6IG5vbmU7XG4gIC0tY291bnRkb3duLWZpbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWNvdW50ZG93bi1maWxsLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tY291bnRkb3duLWZpbGwtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tcGFnZS1jb3VudGRvd24tZmlsbC1zaGFkb3ctY29sb3IpO1xuICAtLWNvdW50ZG93bi12YWx1ZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuICAtLWNvdW50ZG93bi11bml0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgLS1jb3VudGRvd24tdGltZS1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWNvdW50ZG93bi1ndXR0ZXIpICogLTEpO1xufSIsIkBtaXhpbiBpb24tY29sb3IoJGNvbG9yKSB7XG4gIEBjb250ZW50O1xuXG4gIC5pb24tY29sb3ItI3skY29sb3J9IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXJnYikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tY29udHJhc3QtcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LXNoYWRlKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tdGludCkgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/deals/listing/styles/deals-listing.shell.scss.shim.ngstyle.js ***!
    \*******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppDealsListingStylesDealsListingShellScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["[_nghost-%COMP%] {\n  --shell-color: #70DF70;\n  --shell-color-rgb: 112,223,112;\n}\n\napp-image-shell.deal-logo[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .30);\n  --image-shell-spinner-size: 18px;\n}\n\n.item-name[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-code[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 60px;\n}\n\n.item-time-left[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hpc2hrdW1hcm1pc2hyYS9EZXNrdG9wL2dvYml6Z3Jvdy9zcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNyYy9hcHAvZGVhbHMvbGlzdGluZy9zdHlsZXMvZGVhbHMtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtFQUNBLGdDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1JGOztBRFVFO0VBQ0UsY0FBQTtBQ1JKOztBRFlBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNURjs7QURXRTtFQUNFLGNBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2RlYWxzL2xpc3Rpbmcvc3R5bGVzL2RlYWxzLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMTEyLDIyMywxMTI7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGVhbC1sb2dvIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1zaXplOiAxOHB4O1xufVxuXG4uaXRlbS1uYW1lICBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuLml0ZW0tdGltZS1sZWZ0ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNjBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjNzBERjcwO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMTEyLDIyMywxMTI7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZWFsLWxvZ28ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLXNpemU6IDE4cHg7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xufVxuLml0ZW0tY29kZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXRpbWUtbGVmdCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG4uaXRlbS10aW1lLWxlZnQgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/pipes/time-ago.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/time-ago.pipe.ts ***!
    \****************************************/

  /*! exports provided: TimeAgoPipe */

  /***/
  function srcAppPipesTimeAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function () {
      return TimeAgoPipe;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs/plugin/relativeTime */
    "./node_modules/dayjs/plugin/relativeTime.js");
    /* harmony import */


    var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);

    var TimeAgoPipe = /*#__PURE__*/function () {
      function TimeAgoPipe() {
        _classCallCheck(this, TimeAgoPipe);
      }

      _createClass(TimeAgoPipe, [{
        key: "transform",
        value: function transform(value) {
          dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
          var timeAgo = '';

          if (value) {
            var withoutSuffix = dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day') < 0 ? false : true;
            timeAgo = dayjs__WEBPACK_IMPORTED_MODULE_0__().to(dayjs__WEBPACK_IMPORTED_MODULE_0__(value), withoutSuffix);
          }

          return timeAgo;
        }
      }]);

      return TimeAgoPipe;
    }();
    /***/

  }
}]);
//# sourceMappingURL=deals-listing-deals-listing-module-ngfactory-es5.js.map