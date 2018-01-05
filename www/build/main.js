webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, sessionService, afs) {
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.afs = afs;
        this.showSrc = false;
        this.s = 'https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg';
        this.display = true;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.user.email;
        this.profileCollection = this.afs.collection('profiles', function (ref) {
            return ref.where('email', '==', _this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                _this.id = data.id;
                _this.of = data.firstName;
                _this.oi = data.img;
                _this.ol = data.lastName;
                _this.oe = data.email;
                _this.oa = data.about;
                return data;
            });
        });
    };
    HomePage.prototype.co = function () {
        console.log(this.snapshot);
    };
    HomePage.prototype.tog = function () {
        this.showSrc = !this.showSrc;
    };
    HomePage.prototype.disp = function () {
        this.display = !this.display;
    };
    HomePage.prototype.sklej = function () {
        this.ob = {
            id: this.id,
            firstName: this.of,
            lastName: this.ol,
            email: this.oe,
            about: this.oa,
            img: this.oi,
        };
    };
    HomePage.prototype.updatePhoto = function () {
        var x = 'profiles/' + this.id;
        this.profileDoc = this.afs.doc(x);
        this.profileDoc.update({ img: this.phot });
        this.phot = '';
        this.tog();
    };
    HomePage.prototype.updateDesc = function () {
        var x = 'profiles/' + this.id;
        this.profileDoc = this.afs.doc(x);
        this.profileDoc.update({ about: this.desc });
        this.desc = '';
        this.disp();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Profil</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor="let p of profiles | async">\n\n        <ion-card>\n\n            <div></div>\n\n            <div>\n                <img [src]="p.img == null ? \'\' : p.img" (click)="tog()" alt="{{snapshot | async | json}}"/>\n            </div>\n\n            <div *ngIf="showSrc">\n                <ion-item>\n                    <ion-textarea type="number" placeholder="Wprowadź adres nowego zdjęcia"\n                                  [(ngModel)]="phot"></ion-textarea>\n                </ion-item>\n                <ion-item center text-center="">\n                    <button ion-button text-center color="dark" (click)="updatePhoto()">ZMIEŃ ZDJĘCIE</button>\n                </ion-item>\n            </div>\n\n            <ion-card-content>\n                <ion-card-title>\n                    <div left text-left>\n                        <ion-icon name="contact"></ion-icon>\n                        {{p.firstName}} {{p.lastName}}\n                    </div>\n                </ion-card-title>\n                <ion-card-title>\n                    <div left text-left>\n                        <ion-icon name="copy" (click)="disp()"></ion-icon>\n                        O mnie:\n                        <div style="font-size: 70%;">\n                            {{p.about}}\n                        </div>\n                    </div>\n                </ion-card-title>\n                <div *ngIf="!display">\n                    <ion-input type="text" placeholder="Nowy opis" [(ngModel)]="desc"></ion-input>\n                    <ion-item center text-center>\n                        <button ion-button text-center color="primary" (click)="updateDesc()">ZMIEŃ OPIS</button>\n                    </ion-item>\n                </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewpostPage = (function () {
    function NewpostPage(afs, sessionService, navCtrl) {
        this.afs = afs;
        this.sessionService = sessionService;
        this.navCtrl = navCtrl;
        this.p1 = {
            author: '',
            comments: {
                author: '',
                content: '',
                likes: 0
            },
            content: '',
            date: new Date(),
            likes: 0,
            dislikes: 0,
            img: '',
            email: ''
        };
        this.date = new Date(2012, 11, 1);
    }
    NewpostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.user.email;
        this.userImg = this.sessionService.user;
        this.p1.email = this.user;
        this.postsCollection = this.afs.collection('posts');
        this.posts = this.postsCollection.valueChanges();
        this.p1.author = this.sessionService.user;
        console.log('co');
        this.profileCollection = this.afs.collection('profiles', function (ref) {
            return ref.where('email', '==', _this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                console.log(data);
                _this.of = data.firstName;
                _this.ol = data.lastName;
                _this.userImg = data.img;
                return data;
            });
        });
    };
    NewpostPage.prototype.like = function (index) {
    };
    NewpostPage.prototype.dislike = function (index) {
        console.log(index);
    };
    NewpostPage.prototype.addPost = function () {
        var _this = this;
        console.log(this.p1);
        console.log('elo' + this.userImg);
        this.p1.author = this.of + ' ' + this.ol;
        this.p1.img = this.userImg;
        this.postsCollection.add(this.p1)
            .then(function (e) {
            console.log('dodane');
            _this.navCtrl.pop();
        })
            .catch(function (e) { return console.error(e); });
    };
    NewpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpost',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\newpost\newpost.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Nowy post\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-item>\n            <!--<ion-avatar item-start>-->\n                <!--<img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png">-->\n            <!--</ion-avatar>-->\n            <h2>{{of}} {{ol}}</h2>\n            <p>{{p1.date | date}}</p>\n        </ion-item>\n        <img *ngIf="showImage" src="">\n        <ion-item *ngIf="showInputUrl">\n            <ion-input type="number" placeholder="Number Input with no label"></ion-input>\n        </ion-item>\n\n        <ion-card-content>\n            <ion-item>\n                <ion-textarea placeholder="Treść posta ..." [(ngModel)]="p1.content"></ion-textarea>\n                {{snapshot | async | json}}\n            </ion-item>\n        </ion-card-content>\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small (click)="like(i)">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <!--<div>232</div>-->\n                </button>\n                <button ion-button icon-left clear small (click)="dislike(i)" title="{{snapshot | async | json}}">\n                    <ion-icon name="thumbs-down"></ion-icon>\n                    <!--<div>323</div>-->\n                </button>\n\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <div padding>\n        <button ion-button color="primary" block (click)="addPost()">DODAJ</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\newpost\newpost.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__providers_session_service_session_service__["a" /* SessionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */]])
    ], NewpostPage);
    return NewpostPage;
}());

//# sourceMappingURL=newpost.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sign_service_sign_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninPage = (function () {
    function SigninPage(navCtrl, sessionService, signService, alertCtrl, afs) {
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.signService = signService;
        this.alertCtrl = alertCtrl;
        this.afs = afs;
        this.user = {
            password: '',
            email: ''
        };
    }
    SigninPage.prototype.ngOnInit = function () {
        var _this = this;
        this.profileCollection = this.afs.collection('profiles', function (ref) {
            return ref.where('email', '==', _this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                _this.of = data.firstName;
                _this.ol = data.lastName;
                return data;
            });
        });
    };
    SigninPage.prototype.goToSignUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.signin = function () {
        var _this = this;
        this.signService.login(this.user)
            .then(function (e) {
            _this.sessionService.isLogged = true;
            _this.sessionService.user = e;
            _this.sessionService.con();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        })
            .catch(function (e) {
            _this.showAlert('Niepoprawne dane logowania');
            _this.user = { password: '', email: '' };
        });
    };
    SigninPage.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: '',
            buttons: ['OK']
        });
        alert.present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\signin\signin.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Logowanie</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>\n        Email\n      </ion-label>\n      <ion-input type="email"\n                 value=""\n                 [(ngModel)]="user.email">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Hasło\n      </ion-label>\n      <ion-input type="password"\n                 value=""\n                 [(ngModel)]="user.password">\n      </ion-input>\n    </ion-item>\n\n    <ion-item text-center\n              style="padding-top: 10%;">\n      <a (click)="goToSignUp()">\n        Nie masz konta? Kliknij aby założyć nowe\n      </a>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button\n            color="primary"\n            (click)="signin()"\n            block>\n      ZALOGUJ\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sign_service_sign_service__["a" /* SignServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignServiceProvider = (function () {
    function SignServiceProvider(sessionService, angularFireAuth) {
        this.sessionService = sessionService;
        this.angularFireAuth = angularFireAuth;
        console.log('Hello SignServiceProvider Provider');
    }
    SignServiceProvider.prototype.register = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    SignServiceProvider.prototype.login = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    SignServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_service_session_service__["a" /* SessionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], SignServiceProvider);
    return SignServiceProvider;
}());

//# sourceMappingURL=sign-service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sign_service_sign_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(navCtrl, sessionService, signService, alertCtrl, afs) {
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.signService = signService;
        this.alertCtrl = alertCtrl;
        this.afs = afs;
        this.user = {
            password: '',
            email: '',
        };
        this.profile = {
            firstName: '',
            lastName: '',
            email: '',
            img: 'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=1280',
            about: ''
        };
    }
    SignupPage.prototype.goToSignIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.ngOnInit = function () {
        this.profileCollection = this.afs.collection('profiles');
        this.profiles = this.profileCollection.valueChanges();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.profile.email = this.user.email;
        this.signService.register(this.user)
            .then(function (e) {
            _this.showAlert('Możesz się zalogować');
            _this.profileCollection.add(_this.profile);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
        })
            .catch(function (e) {
            _this.showAlert('Takie konto już istnieje');
            _this.user = { password: '', email: '' };
        });
    };
    SignupPage.prototype.showAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: '',
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Załóż konto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n      <ion-item>\n          <ion-label floating>\n              Imie\n          </ion-label>\n          <ion-input type="email"\n                     value=""\n                     [(ngModel)]="profile.firstName">\n          </ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>\n              Nazwisko\n          </ion-label>\n          <ion-input type="email"\n                     value=""\n                     [(ngModel)]="profile.lastName">\n          </ion-input>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Email\n      </ion-label>\n      <ion-input type="email"\n                 value=""\n                 [(ngModel)]="user.email">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>\n        Hasło\n      </ion-label>\n      <ion-input type="password"\n                 value=""\n                 [(ngModel)]="user.password">\n      </ion-input>\n    </ion-item>\n\n    <ion-item text-center>\n      <a (click)="goToSignIn()">Masz już konto? Kliknij aby się zalogować !</a>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button\n            color="primary"\n            (click)="signup()"\n            block>\n      UTWÓRZ KONTO\n    </button>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_session_service_session_service__["a" /* SessionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sign_service_sign_service__["a" /* SignServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpost_newpost__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_service_session_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, afs, sessionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afs = afs;
        this.sessionService = sessionService;
        this.showUser = false;
        this.superArray = [];
        this.superArray2 = [];
    }
    ListPage.prototype.searchUser = function () {
        var _this = this;
        this.profileCollection = this.afs.collection('profiles', function (ref) {
            return ref.where('email', '==', _this.myInput);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                _this.id = data.id;
                _this.of = data.firstName;
                _this.oi = data.img;
                _this.ol = data.lastName;
                _this.oe = data.email;
                _this.oa = data.about;
                return data;
            });
        });
        this.postsCollection = this.afs.collection('posts', function (ref) {
            return ref.where('email', '==', _this.myInput);
        });
        // this.posts = this.postsCollection.valueChanges();
        this.posts = this.postsCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                _this.superArray.push(a.payload.doc.id);
                _this.superArray2.push(a.payload);
                data.id = a.payload.doc.id;
                return data;
            });
        });
        this.showUser = true;
    };
    ListPage.prototype.like = function (post, index) {
        var id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        var x = post;
        x.likes = x.likes + 1;
        this.postDoc.update(x);
    };
    ListPage.prototype.dislike = function (post, index) {
        var id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        post.dislikes = post.dislikes - 1;
        this.postDoc.update(post);
    };
    ListPage.prototype.newPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newpost_newpost__["a" /* NewpostPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-searchbar\n        [(ngModel)]="myInput">\n    </ion-searchbar>\n\n    <div padding>\n        <button ion-button\n                color="primary"\n                (click)="searchUser()"\n                block\n                title="{{snapshot | async | json}}">\n            SZUKAJ\n        </button>\n    </div>\n\n    <ion-card *ngIf="showUser">\n        <div *ngFor="let p of profiles | async ; let i = index">\n            <div>\n                <img [src]="p.img == null ? \'\' : p.img" alt="{{snapshot | async | json}}"/>\n            </div>\n            <ion-card-content>\n                <ion-card-title>\n                    <div left text-left>\n                        <ion-icon name="contact"></ion-icon>\n                        {{p.firstName}} {{p.lastName}}\n                    </div>\n                </ion-card-title>\n                <ion-card-title>\n                    <div left text-left>\n                        <ion-icon name="copy"></ion-icon>\n                        O mnie:\n                        <div style="font-size: 70%;">\n                            {{p.about}}\n                        </div>\n                    </div>\n                </ion-card-title>\n            </ion-card-content>\n        </div>\n\n    </ion-card>\n\n    <ion-list>\n        <ion-card *ngFor="let post of posts | async ; let i = index" title="{{posts | async | json}}">\n            <ion-item>\n                <ion-avatar item-start>\n                    <img [src]="post.img">\n                </ion-avatar>\n                <h2>{{post.author}}</h2>\n                <p>{{post.date | date }}</p>\n            </ion-item>\n\n            <ion-card-content>\n                <p>{{post.content}}</p>\n            </ion-card-content>\n\n            <ion-row>\n                <ion-col>\n                    <button ion-button icon-left clear small (click)="like(post, i)">\n                        <ion-icon name="thumbs-up"></ion-icon>\n                        <div>{{post.likes}}</div>\n                    </button>\n                    <button ion-button icon-left clear small (click)="dislike(post, i)">\n                        <ion-icon name="thumbs-down"></ion-icon>\n                        <div>{{post.dislikes}}</div>\n                    </button>\n\n                </ion-col>\n                <!--<ion-col>-->\n                <!--<button ion-button icon-left clear small>-->\n                <!--<ion-icon name="text"></ion-icon>-->\n                <!--<div>{{post.comments.length}}</div>-->\n                <!--</button>-->\n                <!--</ion-col>-->\n            </ion-row>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__providers_session_service_session_service__["a" /* SessionServiceProvider */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newpost_newpost__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_service_session_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostsPage = (function () {
    function PostsPage(afs, navCtrl, sessionService) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.sessionService = sessionService;
        this.superArray = [];
        this.superArray2 = [];
    }
    PostsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sessionService.user.email;
        this.profileCollection = this.afs.collection('profiles', function (ref) {
            return ref.where('email', '==', _this.user);
        });
        this.profiles = this.profileCollection.valueChanges();
        this.snapshot = this.profileCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                console.log(data);
                _this.of = data.firstName;
                _this.ol = data.lastName;
                return data;
            });
        });
        this.user1 = this.of + ' ' + this.ol;
        console.log('szukam dla: ' + this.user1);
        this.user2 = JSON.stringify(this.user1);
        console.log(this.user2);
        this.postsCollection = this.afs.collection('posts', function (ref) {
            return ref.where('email', '==', _this.sessionService.user.email);
        });
        // this.posts = this.postsCollection.valueChanges();
        this.posts = this.postsCollection.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                _this.superArray.push(a.payload.doc.id);
                _this.superArray2.push(a.payload);
                data.id = a.payload.doc.id;
                return data;
            });
        });
    };
    PostsPage.prototype.like = function (post, index) {
        var id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        var x = post;
        x.likes = x.likes + 1;
        this.postDoc.update(x);
    };
    PostsPage.prototype.dislike = function (post, index) {
        var id = this.superArray[index];
        this.postDoc = this.afs.doc('posts/' + id);
        post.dislikes = post.dislikes - 1;
        this.postDoc.update(post);
    };
    PostsPage.prototype.newPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newpost_newpost__["a" /* NewpostPage */]);
    };
    PostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-posts',template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\pages\posts\posts.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Posty</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div padding>\n        <button ion-button\n                color="primary"\n                (click)="newPost()"\n                block\n                title="{{snapshot | async | json}}">NOWY POST\n\n        </button>\n    </div>\n\n    <ion-list>\n        <ion-card *ngFor="let post of posts | async ; let i = index" title="{{posts | async | json}}">\n            <ion-item>\n                <ion-avatar item-start>\n                    <img [src]="post.img">\n                </ion-avatar>\n                <h2>{{post.author}}</h2>\n                <p>{{post.date | date }}</p>\n            </ion-item>\n            <!--<div *ngIf="post.img != \'\'">-->\n                <!--<img [src]="post.img">-->\n            <!--</div>-->\n\n            <ion-card-content>\n                <p>{{post.content}}</p>\n            </ion-card-content>\n\n            <ion-row>\n                <ion-col>\n                    <button ion-button icon-left clear small (click)="like(post, i)">\n                        <ion-icon name="thumbs-up"></ion-icon>\n                        <div>{{post.likes}}</div>\n                    </button>\n                    <button ion-button icon-left clear small (click)="dislike(post, i)">\n                        <ion-icon name="thumbs-down"></ion-icon>\n                        <div>{{post.dislikes}}</div>\n                    </button>\n\n                </ion-col>\n                <!--<ion-col>-->\n                <!--<button ion-button icon-left clear small>-->\n                <!--<ion-icon name="text"></ion-icon>-->\n                <!--<div>{{post.comments.length}}</div>-->\n                <!--</button>-->\n                <!--</ion-col>-->\n            </ion-row>\n\n        </ion-card>\n\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\pages\posts\posts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_session_service_session_service__["a" /* SessionServiceProvider */]])
    ], PostsPage);
    return PostsPage;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_sign_service_sign_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_firebase_config__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_posts_posts__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_newpost_newpost__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_newpost_newpost__["a" /* NewpostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_12__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_posts_posts__["a" /* PostsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_newpost_newpost__["a" /* NewpostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_session_service_session_service__["a" /* SessionServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_sign_service_sign_service__["a" /* SignServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionServiceProvider = (function () {
    function SessionServiceProvider() {
        this.isLogged = false;
        console.log('Hello SessionServiceProvider Provider');
    }
    SessionServiceProvider.prototype.con = function () {
        console.log(this.user.uid);
    };
    SessionServiceProvider.prototype.clear = function () {
        this.isLogged = false;
        this.user = {};
    };
    SessionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionServiceProvider);
    return SessionServiceProvider;
}());

//# sourceMappingURL=session-service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_session_service_session_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_posts_posts__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, sessionService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.sessionService = sessionService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.initPages();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.ngDoCheck = function () {
        this.initPages();
    };
    MyApp.prototype.initPages = function () {
        if (this.sessionService.isLogged) {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Szukaj znajomych', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
                { title: 'Posty', component: __WEBPACK_IMPORTED_MODULE_9__pages_posts_posts__["a" /* PostsPage */] }
            ];
        }
        else {
            this.pages = [
                { title: 'Logowanie', component: __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */] },
                { title: 'Nowe konto', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */] }
            ];
        }
    };
    MyApp.prototype.logOut = function () {
        this.sessionService.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
        this.splashScreen.hide();
    };
    MyApp.prototype.checkUser = function () {
        return this.sessionService.isLogged;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\dev\angular\ionic\projektapka\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n        <div padding *ngIf="checkUser()">\n            <button ion-button\n                    color="primary"\n                    (click)="logOut()"\n                    block>\n                WYLOGUJ\n            </button>\n        </div>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\dev\angular\ionic\projektapka\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_session_service_session_service__["a" /* SessionServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAdynF-vRpiNCH7ecMiOWb4s6Zf7LxVd1s",
    authDomain: "projektinterfejsy-16dfe.firebaseapp.com",
    databaseURL: "https://projektinterfejsy-16dfe.firebaseio.com",
    projectId: "projektinterfejsy-16dfe",
    storageBucket: "projektinterfejsy-16dfe.appspot.com",
    messagingSenderId: "841996887325"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map