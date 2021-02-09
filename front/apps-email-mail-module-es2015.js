(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apps-email-mail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-compose/mail-compose.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-compose/mail-compose.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body compose\">\r\n   \r\n    <form method=\"get\" action=\"#\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"To\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Cc / Bcc\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control\" placeholder=\"Message\" rows=\"10\"></textarea>\r\n        </div>\r\n        <div class=\"form-group pull-right\">\r\n            <a [routerLink]=\"['../mail-list/inbox']\" class=\"btn btn-secondary\">Cancel</a>\r\n            <button class=\"btn btn-main\" type=\"submit\">Send</button>            \r\n        </div>\r\n    </form>\r\n\r\n </div>\r\n \r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-detail/mail-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-detail/mail-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mail\">  \r\n    <div class=\"card-body\">\r\n        <h4 class=\"mb-3\">{{mail.subject}}</h4>\r\n        \r\n        <div class=\"d-flex mt-4 mb-4\">\r\n            <div class=\"round mr-2 flex-shrink-0\">\r\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"\">\r\n                <span class=\"font-bold\">{{mail.sender}}</span>\r\n                <span *ngIf=\"mail.senderMail\" class=\"email text-truncate d-block w-75\">&lt;{{mail.senderMail}}&gt;</span>\r\n                <span class=\"receiver\">to me</span>\r\n            </div>\r\n\r\n            <div class=\"ml-auto\">\r\n                <span class=\"mail-date\"> {{mail.date}} </span>\r\n                \r\n            </div>\r\n        </div>\r\n        <div [innerHTML]=\"mail.body\" class=\"mailbox-body\"></div>\r\n\r\n        <div class=\"mail-attachments\" *ngIf=\"mail.attachments.length > 0\">\r\n            <hr/>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">                    \r\n                    <p>\r\n                        <strong>{{mail.attachments.length}} attachments</strong> &nbsp;-&nbsp; \r\n                        <a href=\"#\">Download all attachments</a>&nbsp;&nbsp;&nbsp;\r\n                        <a href=\"#\">View all Images</a>\r\n                    </p>\r\n                    <section *ngFor=\"let attachment of mail.attachments; let i = index\" class=\"attachment\">\r\n                        <img src=\"{{attachment}}\" alt=\"\">\r\n                        <h5 class=\"title\">image-{{i + 1}}.jpg</h5>\r\n                        <p>\r\n                            457K  &nbsp;&nbsp;\r\n                            <a href=\"#\">View</a> &nbsp;&nbsp;\r\n                            <a href=\"#\">Download</a>\r\n                        </p>\r\n                    </section>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-list/mail-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail-list/mail-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mailbox-header-bar p-3 bg-white border-bottom align-items-center\">\r\n    <div class=\"custom-control custom-checkbox\">    \r\n        <input id=\"toggle-all\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"isAllSelected\" (click)=\"toggleAll()\">      \r\n        <label for=\"toggle-all\" class=\"custom-control-label\">Check all</label>\r\n    </div>\r\n    \r\n    <div class=\"ml-auto\">\r\n         <input class=\"form-control form-control-sm\" id=\"table-search-input\" [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search mail...\">\r\n    </div>\r\n</div>\r\n<div class=\"table-responsive\">\r\n    <table class=\"table table-hover no-wrap\">\r\n        <tbody>\r\n            <tr *ngFor=\"let mail of mails | async | MailSearch : searchText\" [ngClass]=\"{'unread': mail.unread, 'selected': mail.selected}\">\r\n                <td class=\"mail-checkbox pl-3\">\r\n                    <div class=\"custom-control custom-checkbox mycustomcheckbox\">\r\n                        <input id=\"checkbox{{mail.id}}\" class=\"custom-control-input\" type=\"checkbox\" [(ngModel)]=\"mail.selected\" (ngModelChange)=\"toggleOne()\">                      \r\n                        <label attr.for=\"checkbox{{mail.id}}\" class=\"custom-control-label\"></label>\r\n                    </div>\r\n                </td>\r\n                <td class=\"mail-star\" *ngIf=\"router.url != '/pages/mail/mail-list/trash'\">\r\n                    <i class=\"fa\" [ngClass]=\"{'fa-star': mail.starred, 'fa-star-o': !mail.starred}\" (click)=\"changeStarStatus(mail)\"></i>\r\n                </td>           \r\n                <td (click)=\"goToDetail(mail)\" class=\"sender\">{{ mail.sender }}</td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"subject\" [innerHTML]=\"mail.subject\"></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"attachment\"><i *ngIf=\"mail.attachment\" class=\"fa fa-paperclip\"></i></td>\r\n                <td (click)=\"goToDetail(mail)\" class=\"date\">{{mail.date}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apps/email/mail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-container pr-3 pl-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3 col-md-2 bg-info\">\r\n\r\n            <h3 class=\"mb-0 mt-3 text-white\"> Mailbox <a class=\"text-white float-right custom-control-button\" (click)=\"openClleft()\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </h3>\r\n        </div>\r\n        <div class=\"col-sm-9 col-md-10 bg-info\">\r\n            <div class=\"pb-3 pt-3 d-flex\">\r\n            <div class=\"b-btn mr-1\" [style.display]=\"(id || !type) ? 'inline-block' : 'none'\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Back to {{type}}\">               \r\n                <button (click)=\"getBack()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                    <i class=\"fa fa-arrow-left\"></i>\r\n                </button>\r\n            </div> \r\n            \r\n            <div class=\"b-btn mr-1\" *ngIf=\"id\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Delete\">               \r\n                <button (click)=\"trash()\" type=\"button\" class=\"btn btn-dark btn-sm\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n            </div> \r\n         \r\n            <div class=\"b-btn mr-1\" [style.display]=\"(router.url == '/email/mail-compose' || id) ? 'none' : 'inline-block'\" data-toggle=\"tooltip\" data-placement=\"top\" data-animation=\"false\" title=\"Refresh\">\r\n                <button type=\"button\" class=\"btn btn-dark btn-sm\"><span class=\"fa fa-refresh\"></span></button>\r\n            </div> \r\n\r\n            <div ngbDropdown class=\"btn-group\" [style.display]=\"(router.url == '/email/mail-compose') ? 'none' : 'block'\">                   \r\n                <button class=\"btn btn-warning btn-sm\" type=\"button\" ngbDropdownToggle aria-controls=\"dropdown-basic\">\r\n                    More\r\n                </button>\r\n                <div class=\"\" id=\"dropdown-basic\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsRead()\">Mark as read</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"setAsUnRead()\">Mark as unread</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"deleteCheckedMail()\">Delete</a>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"ml-auto\">\r\n                <span class=\"mr-1 text-white\"><b>1</b>–<b>50</b> of <b>50</b></span>\r\n                <div class=\"btn-group btn-group-sm\">\r\n                    <button type=\"button\" class=\"btn btn-dark\">\r\n                        <span class=\"fa fa-chevron-left\"></span>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-dark\">\r\n                        <span class=\"fa fa-chevron-right\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 bg-white  b-r\">\r\n            <div class=\"inbox-panel\" [ngClass]=\"status ? 'showlpanel' : ''\">\r\n              \r\n            <a [routerLink]=\"['mail-compose']\" class=\"btn btn-danger btn-sm btn-block mt-3\" role=\"button\">COMPOSE</a>\r\n            \r\n            <ul class=\"list-group mt-3 custom-group\">\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\"><a [routerLink]=\"['mail-list/inbox']\"> Inbox </a><span class=\"badge badge-info badge-pill\">3</span></li>\r\n                <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/starred']\">Starred</a></li>                \r\n                <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/sent']\">Sent Mail</a></li>\r\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\"><a [routerLink]=\"['mail-list/drafts']\">Drafts</a><span class=\"badge badge-info badge-pill\">2</span></li>           \r\n                <li class=\"list-group-item\"><a [routerLink]=\"['mail-list/trash']\">Trash</a></li>\r\n            </ul>\r\n            <hr/>\r\n            <ul class=\"list-group custom-group\">\r\n                <li class=\"list-group-item\"><span class=\"fa fa-circle text-danger mr-1\"></span><a href=\"#\">Notes</a></li>\r\n                <li class=\"list-group-item\"><span class=\"fa fa-circle text-warning mr-1\"></span><a href=\"#\">Personal</a></li>\r\n                <li class=\"list-group-item\"><span class=\"fa fa-circle text-info mr-1\"></span><a href=\"#\">Travel</a></li>                   \r\n                \r\n            </ul>\r\n            </div>          \r\n        </div>\r\n        <div class=\"col-md-10 bg-light-part\">\r\n            <div class=\"inbox-right-panel\">\r\n                <router-outlet></router-outlet>\r\n            </div>            \r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/switchMap.js ***!
  \*****************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/apps/email/app.state.ts":
/*!*****************************************!*\
  !*** ./src/app/apps/email/app.state.ts ***!
  \*****************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppState = class AppState {
    constructor() {
        this._data = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe((data) => this._onEvent(data));
    }
    notifyDataChanged(event, value) {
        const current = this._data[event];
        if (current !== value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    }
    subscribe(event, callback) {
        const subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    }
    _onEvent(data) {
        const subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach((callback) => {
            callback.call(null, data['data']);
        });
    }
};
AppState = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);



/***/ }),

/***/ "./src/app/apps/email/mail-compose/mail-compose.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/apps/email/mail-compose/mail-compose.component.ts ***!
  \*******************************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MailComposeComponent = class MailComposeComponent {
};
MailComposeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-compose',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __webpack_require__(/*! raw-loader!./mail-compose.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-compose/mail-compose.component.html")
    })
], MailComposeComponent);



/***/ }),

/***/ "./src/app/apps/email/mail-detail/mail-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/apps/email/mail-detail/mail-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDetailComponent", function() { return MailDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MailDetailComponent = class MailDetailComponent {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.replyMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.route.params.switchMap((params) => this.service.getMail(+params['id'])).subscribe((mail) => (this.mail = mail));
    }
    goToReply(mail) {
        this.replyMessage.emit(mail);
    }
    trash(id) {
        this.service.getMail(id).then(mail => {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['email/mail-list/inbox']);
    }
};
MailDetailComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MailDetailComponent.prototype, "replyMessage", void 0);
MailDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail-detail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __webpack_require__(/*! raw-loader!./mail-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-detail/mail-detail.component.html")
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], MailDetailComponent);



/***/ }),

/***/ "./src/app/apps/email/mail-list/mail-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/apps/email/mail-list/mail-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailListComponent", function() { return MailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.state */ "./src/app/apps/email/app.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MailListComponent = class MailListComponent {
    constructor(service, route, router, state) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.unSelectAll();
                this.searchText = '';
            }
        });
        this.state.subscribe('markAsRead', val => {
            this.markAllAsRead();
        });
        this.state.subscribe('markAsUnRead', val => {
            this.markAllAsUnRead();
        });
        this.state.subscribe('deleteChecked', val => {
            this.deleteAllCheckedMail();
        });
    }
    ngOnInit() {
        this.getMails();
    }
    getMails() {
        this.mails = this.route.params.switchMap((params) => {
            this.type = params['type'];
            switch (this.type) {
                case 'inbox':
                    return this.service.getInboxMails();
                case 'starred':
                    return this.service.getStarredMails();
                case 'sent':
                    return this.service.getSentMails();
                case 'drafts':
                    return this.service.getDraftMails();
                case 'trash':
                    return this.service.getTrashMails();
                default:
                    return this.service.getInboxMails();
            }
        });
    }
    toggleAll() {
        const toggleStatus = !this.isAllSelected;
        this.mails.subscribe(result => {
            result.forEach(mail => {
                mail.selected = toggleStatus;
            });
        });
    }
    toggleOne() {
        this.mails.subscribe(result => {
            this.isAllSelected = result.every(mail => {
                return mail.selected === true;
            });
        });
    }
    unSelectAll() {
        this.isAllSelected = false;
        if (this.mails) {
            this.mails.subscribe(result => {
                result.forEach(mail => {
                    mail.selected = false;
                });
            });
        }
    }
    markAllAsRead() {
        this.mails.subscribe(result => {
            result.forEach(mail => {
                // tslint:disable-next-line:curly
                if (mail.selected)
                    mail.unread = false;
            });
        });
    }
    markAllAsUnRead() {
        this.mails.subscribe(result => {
            result.forEach(mail => {
                // tslint:disable-next-line:curly
                if (mail.selected)
                    mail.unread = true;
            });
        });
    }
    deleteAllCheckedMail() {
        this.mails.subscribe(result => {
            result.forEach(mail => {
                if (mail.selected) {
                    mail.trash = true;
                    mail.sent = false;
                    mail.draft = false;
                    mail.starred = false;
                }
            });
        });
        this.getMails();
        this.isAllSelected = false;
    }
    goToDetail(mail) {
        mail.unread = false;
        this.router.navigate(['email/mail-list/' + this.type, mail.id]);
    }
    changeStarStatus(mail) {
        mail.starred = !mail.starred;
    }
};
MailListComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"] }
];
MailListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-inbox-list',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __webpack_require__(/*! raw-loader!./mail-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail-list/mail-list.component.html")
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"]])
], MailListComponent);



/***/ }),

/***/ "./src/app/apps/email/mail.component.scss":
/*!************************************************!*\
  !*** ./src/app/apps/email/mail.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-container {\n  overflow: hidden; }\n  .email-container .mycustomcheckbox .custom-control-label::after, .email-container .mycustomcheckbox .custom-control-label::before {\n    top: -12px; }\n  .email-container .unread {\n    font-weight: 600; }\n  .email-container .mail-star .fa-star {\n    color: #f9a913; }\n  .email-container .inbox-right-panel, .email-container .inbox-panel {\n    min-height: calc(100vh - 300px); }\n  .email-container .inbox-right-panel {\n    margin: 0 -15px; }\n  .email-container .inbox-right-panel .table tr {\n      cursor: pointer; }\n  .email-container .subject, .email-container .sender {\n    max-width: 350px;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .email-container .sender {\n    max-width: 150px; }\n  .email-container .custom-control-button {\n    display: none; }\n  .email-container .custom-group .list-group-item {\n    border: 0px;\n    padding: 0.75rem 0.25rem; }\n  .email-container .custom-group .list-group-item a {\n      color: #67757c; }\n  @media (max-width: 767px) {\n    .email-container .inbox-panel {\n      position: absolute;\n      width: 200px;\n      height: 100%;\n      background: white;\n      left: -202px;\n      z-index: 10;\n      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n      padding: 0 10px; }\n      .email-container .inbox-panel.showlpanel {\n        left: 0px; }\n    .email-container .custom-control-button {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwcy9lbWFpbC9DOlxcVXNlcnNcXHpuaXBoZXJzXFxEZXNrdG9wXFxzaW11bGF0b3JfcGh5c2lvdGhlcmFwaXNfcmVhY3RcXEFuZ3VsYXItUGh5c2lvdGhlcmFweS9zcmNcXGFwcFxcYXBwc1xcZW1haWxcXG1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxnQkFBZSxFQUFBO0VBRHZCO0lBR2lFLFVBQVMsRUFBQTtFQUgxRTtJQU1HLGdCQUFlLEVBQUE7RUFObEI7SUFTSSxjQUFhLEVBQUE7RUFUakI7SUFZSSwrQkFBK0IsRUFBQTtFQVpuQztJQWVJLGVBQWUsRUFBQTtFQWZuQjtNQWlCUSxlQUFjLEVBQUE7RUFqQnRCO0lBcUJJLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZix1QkFBc0IsRUFBQTtFQXZCMUI7SUEwQkksZ0JBQWUsRUFBQTtFQTFCbkI7SUE2QkksYUFBWSxFQUFBO0VBN0JoQjtJQWlDUSxXQUFVO0lBQ1Ysd0JBQXVCLEVBQUE7RUFsQy9CO01Bb0NnQixjQUFjLEVBQUE7RUFJMUI7SUF4Q0o7TUEwQ2dCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osV0FBVztNQUNYLHlDQUF3QztNQUN4QyxlQUFjLEVBQUE7TUFqRDlCO1FBbURvQixTQUFRLEVBQUE7SUFuRDVCO01Bd0RnQixjQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHBzL2VtYWlsL21haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1haWwtY29udGFpbmVye1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuLm15Y3VzdG9tY2hlY2tib3gge1xyXG4gICAgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciwgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmV7IHRvcDotMTJweDt9XHJcbn1cclxuLnVucmVhZHtcclxuICAgZm9udC13ZWlnaHQ6NjAwOyBcclxufVxyXG4ubWFpbC1zdGFyIC5mYS1zdGFye1xyXG4gICAgY29sb3I6I2Y5YTkxMztcclxufVxyXG4uaW5ib3gtcmlnaHQtcGFuZWwsIC5pbmJveC1wYW5lbCB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xyXG59XHJcbi5pbmJveC1yaWdodC1wYW5lbHtcclxuICAgIG1hcmdpbjogMCAtMTVweDtcclxuICAgIC50YWJsZSB0cntcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4uc3ViamVjdCwgLnNlbmRlcntcclxuICAgIG1heC13aWR0aDozNTBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbn1cclxuLnNlbmRlcntcclxuICAgIG1heC13aWR0aDoxNTBweDtcclxufVxyXG4uY3VzdG9tLWNvbnRyb2wtYnV0dG9ue1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5jdXN0b20tZ3JvdXB7XHJcbiAgICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgcGFkZGluZzowLjc1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2Nzc1N2M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLmluYm94LXBhbmVse1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjAycHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjAgMTBweDtcclxuICAgICAgICAgICAgICAgICYuc2hvd2xwYW5lbHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/apps/email/mail.component.ts":
/*!**********************************************!*\
  !*** ./src/app/apps/email/mail.component.ts ***!
  \**********************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail.service */ "./src/app/apps/email/mail.service.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let MailComponent = class MailComponent {
    constructor(service, route, router, state) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.state = state;
        this.markAsRead = false;
        this.markAsUnRead = false;
        this.deleteChecked = false;
        this.status = false;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.id = this.route.snapshot.firstChild.params['id'];
                this.type = this.route.snapshot.firstChild.params['type'];
                setTimeout(() => {
                    // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
                });
            }
        });
    }
    getBack() {
        if (this.type) {
            this.router.navigate(['email/mail-list/' + this.type]);
        }
        else {
            this.router.navigate(['email/mail-list/inbox']);
        }
    }
    trash() {
        // jQuery('[data-toggle="tooltip"]').tooltip('hide');
        this.service.getMail(this.id).then(mail => {
            mail.trash = true;
            mail.sent = false;
            mail.draft = false;
            mail.starred = false;
        });
        this.router.navigate(['email/mail-list/inbox']);
    }
    setAsRead() {
        this.markAsRead = !this.markAsRead;
        this.state.notifyDataChanged('markAsRead', this.markAsRead);
    }
    setAsUnRead() {
        this.markAsUnRead = !this.markAsUnRead;
        this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
    }
    deleteCheckedMail() {
        this.deleteChecked = !this.deleteChecked;
        this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
    }
    openClleft() {
        this.status = !this.status;
    }
};
MailComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"] }
];
MailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-mail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: __webpack_require__(/*! raw-loader!./mail.component.html */ "./node_modules/raw-loader/index.js!./src/app/apps/email/mail.component.html"),
        providers: [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]],
        styles: [__webpack_require__(/*! ./mail.component.scss */ "./src/app/apps/email/mail.component.scss")]
    }),
    __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_state__WEBPACK_IMPORTED_MODULE_3__["AppState"]])
], MailComponent);



/***/ }),

/***/ "./src/app/apps/email/mail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/apps/email/mail.module.ts ***!
  \*******************************************/
/*! exports provided: routes, MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/pipes.module */ "./src/app/apps/email/pipes/pipes.module.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ "./src/app/apps/email/app.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail.component */ "./src/app/apps/email/mail.component.ts");
/* harmony import */ var _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-compose/mail-compose.component */ "./src/app/apps/email/mail-compose/mail-compose.component.ts");
/* harmony import */ var _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mail-list/mail-list.component */ "./src/app/apps/email/mail-list/mail-list.component.ts");
/* harmony import */ var _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mail-detail/mail-detail.component */ "./src/app/apps/email/mail-detail/mail-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    {
        path: '',
        component: _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
        children: [
            { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
            { path: 'mail-list/:type', component: _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"] },
            { path: 'mail-compose', component: _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"] },
            { path: 'mail-list/:type/:id', component: _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"] }
        ]
    }
];
let MailModule = class MailModule {
};
MailModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"],
            _mail_compose_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"],
            _mail_list_mail_list_component__WEBPACK_IMPORTED_MODULE_9__["MailListComponent"],
            _mail_detail_mail_detail_component__WEBPACK_IMPORTED_MODULE_10__["MailDetailComponent"]
        ],
        providers: [_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]
    })
], MailModule);



/***/ }),

/***/ "./src/app/apps/email/mail.service.ts":
/*!********************************************!*\
  !*** ./src/app/apps/email/mail.service.ts ***!
  \********************************************/
/*! exports provided: Mail, MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class Mail {
    constructor(id, sender, senderMail, subject, date, body, attachment, attachments, unread, sent, starred, draft, trash, selected) {
        this.id = id;
        this.sender = sender;
        this.senderMail = senderMail;
        this.subject = subject;
        this.date = date;
        this.body = body;
        this.attachment = attachment;
        this.attachments = attachments;
        this.unread = unread;
        this.sent = sent;
        this.starred = starred;
        this.draft = draft;
        this.trash = trash;
        this.selected = selected;
    }
}
Mail.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Boolean },
    { type: Array },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean }
];
const Mails = [
    new Mail(1, 'Seth Wright', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '6:08 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], true, false, false, false, false, false),
    new Mail(2, 'Leo Jons', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '12:55 PM', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', true, ['assets/images/gallery/chair.png', 'assets/images/gallery/chair2.png'], true, false, true, false, false, false),
    new Mail(3, 'Aron Shaur', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '01.11.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(4, 'Emily Rhodes', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '21.07.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], true, false, false, false, false, false),
    new Mail(5, 'Draft', '', 'no subject', '2:14 PM', '', false, [], false, false, false, true, false, false),
    new Mail(6, 'Draft', '', 'Please confirm your account for furthur process', 'Jan 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum interdum ex, sed aliquet nisl maximus imperdiet.', false, [], false, false, false, true, false, false),
    new Mail(7, 'Kendra', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '27.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(8, 'Jimmy Fallon', 'info@wrappixel.com', 'consectetuer adipiscing elit.', '14.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, true, false, false, false),
    new Mail(9, 'Sam Tighe', 'info@wrappixel.com', 'Aenean commodo ligula eget dolor. Aenean massa.', '03.05.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(10, 'Saul', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '30.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, true, false, false, false, false),
    new Mail(11, 'Nathan James', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '24.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(12, 'Mia Green', 'info@wrappixel.com', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.', '11.04.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false),
    new Mail(13, 'Mario Gomez', 'info@wrappixel.com', 'Download the freebies from the site wrappixel.com all the admin template for free', '24.02.2018', '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>', false, [], false, false, false, false, false, false)
];
const mailsPromise = Promise.resolve(Mails);
let MailService = class MailService {
    getInboxMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === false && mail.draft === false && mail.trash === false));
    }
    getStarredMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.starred === true));
    }
    getSentMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.sent === true));
    }
    getDraftMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.draft === true));
    }
    getTrashMails() {
        return mailsPromise.then(mails => mails.filter(mail => mail.trash === true));
    }
    getMail(id) {
        return mailsPromise.then(mails => mails.find(mail => mail.id === +id));
    }
};
MailService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], MailService);



/***/ }),

/***/ "./src/app/apps/email/pipes/mail-search.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/apps/email/pipes/mail-search.pipe.ts ***!
  \******************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MailSearchPipe = class MailSearchPipe {
    transform(value, args) {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(mail => {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    }
};
MailSearchPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'MailSearch'
    })
], MailSearchPipe);



/***/ }),

/***/ "./src/app/apps/email/pipes/pipes.module.ts":
/*!**************************************************!*\
  !*** ./src/app/apps/email/pipes/pipes.module.ts ***!
  \**************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-search.pipe */ "./src/app/apps/email/pipes/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let PipesModule = class PipesModule {
};
PipesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        declarations: [
            _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
        ],
        exports: [
            _mail_search_pipe__WEBPACK_IMPORTED_MODULE_2__["MailSearchPipe"]
        ]
    })
], PipesModule);



/***/ })

}]);
//# sourceMappingURL=apps-email-mail-module-es2015.js.map