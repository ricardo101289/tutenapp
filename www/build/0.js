webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, loadingController, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loadingController = loadingController;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('token_user') !== null && localStorage.getItem('token_user') !== undefined) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["b" /* HomePage */]);
        }
    };
    LoginPage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.email && this.password) {
            this.presentLoading();
            this.api.login(this.email, this.password).then(function (res) {
                var response = res;
                localStorage.setItem('token_user', response.sessionTokenBck);
                localStorage.setItem('email', _this.email);
                _this.loader.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["b" /* HomePage */]);
            }).catch(function (err) {
                _this.showAlert("Usuario o contraseña incorrectos");
                _this.loader.dismiss();
            });
        }
        else {
            this.showAlert('Completa todos los campos.');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/test/Documents/tutenChile/tutenapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n  Ionic pages and navigation.\n-->\n<!-- Themes  register-flat-->\n<ion-content>\n    <ion-grid no-padding>\n      <!-- logo -->\n      <ion-row header align-items-start align-items-stretch>\n        <ion-col col-10 offset-1 col-md-6 offset-md-3>\n          <!-- <img logo src="{{data.logo}}" /> -->\n        </ion-col>\n  \n      <!-- Section form>-->\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n      <form padding>\n        <ion-row align-items-start>\n          <ion-col col-12>\n            <h1><strong>Login API </strong> (via Swagger)</h1>\n          </ion-col>\n        </ion-row>\n        <!-- Input-field -->\n        <ion-row>\n          <ion-col col-12>\n            <div input-field>\n              <!-- Input-field-text -->\n              <ion-item no-padding>\n                <ion-input type="text" placeholder = "Enter email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n   -->            </ion-item>\n              <!-- Input-field-password -->\n              <ion-item no-padding>\n                <ion-input type="password" placeholder = "Password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n              </ion-item>\n            </div>\n            <!-- Login button -->\n            <ion-col col-12 no-padding>\n              <button no-margin ion-button full text-uppercase (click)="login()">Iniciar sesión</button>\n            </ion-col>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/Users/test/Documents/tutenChile/tutenapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map