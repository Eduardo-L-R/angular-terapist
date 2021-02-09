(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <app-spinner></app-spinner>\r\n    <!-- <app-datepicker-basic></app-datepicker-basic> -->\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/blank/blank.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/blank/blank.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Only router without any element -->\r\n<!-- ============================================================== -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div id=\"main-wrapper\" [ngClass]=\"\r\n    {\r\n        'defaultdark': color == 'defaultdark',\r\n        'greendark': color == 'greendark',\r\n        'reddark': color == 'reddark',\r\n        'bluedark': color == 'bluedark',\r\n        'purpledark': color == 'purpledark',\r\n        'megnadark': color == 'megnadark',\r\n        'default': color == 'default',\r\n        'green': color == 'green',\r\n        'red': color == 'red',\r\n        'blue': color == 'blue',\r\n        'purple': color == 'purple',\r\n        'megna': color == 'megna',\r\n        'mini-sidebar': showMinisidebar,\r\n        'dark-theme': showDarktheme,\r\n        'rtl-theme': showRtl\r\n    }\r\n\">\r\n  <!-- ============================================================== -->\r\n  <!-- Topbar header - style you can find in pages.scss -->\r\n  <!-- ============================================================== -->\r\n  <header class=\"topbar\">\r\n    <nav class=\"d-flex top-navbar navbar-expand-md navbar-light\">\r\n      <!-- ============================================================== -->\r\n      <!-- Logo -->\r\n      <!-- ============================================================== -->\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"index.html\">\r\n          <!-- Logo icon --><b>\r\n            <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n            <!-- Dark Logo icon -->\r\n            <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n            <!-- Light Logo icon -->\r\n            <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\r\n          </b>\r\n          <!--End Logo icon -->\r\n          <!-- Logo text --><span>\r\n            <!-- dark Logo text -->\r\n            <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\r\n            <!-- Light Logo text -->\r\n            <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\r\n          </span>\r\n        </a>\r\n      </div>\r\n      <!-- ============================================================== -->\r\n      <!-- End Logo -->\r\n      <!-- ============================================================== -->\r\n      <div class=\"navbar-collapse\">\r\n        <app-navigation class=\"w-100\" (toggleSidebar)=\"toggleSidebar()\"></app-navigation>\r\n      </div>\r\n    </nav>\r\n  </header>\r\n  <!-- ============================================================== -->\r\n  <!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n  <!-- ============================================================== -->\r\n  <aside class=\"left-sidebar\">\r\n    <!-- Sidebar scroll-->\r\n    <div class=\"scroll-sidebar\" [perfectScrollbar]=\"config\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n    <!-- End Sidebar scroll-->\r\n  </aside>\r\n  <!-- ============================================================== -->\r\n  <!-- End Left Sidebar - style you can find in sidebar.scss  -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n  <div class=\"page-wrapper\">\r\n    <!-- ============================================================== -->\r\n    <!-- Container fluid  -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"container-fluid\">\r\n      <app-breadcrumb></app-breadcrumb>\r\n      <!-- ============================================================== -->\r\n      <!-- Start Page Content -->\r\n      <!-- ============================================================== -->\r\n      <router-outlet></router-outlet>\r\n      <!-- ============================================================== -->\r\n      <!-- End Start Page Content -->\r\n      <!-- ============================================================== -->\r\n      <!-- ============================================================== -->\r\n      <!-- Setting Right sidebar -->\r\n      <!-- ============================================================== -->\r\n      <button class=\"right-side-toggle btn-inverse btn btn-circle btn-lg hide\" (click)=\"showSettings = !showSettings\"><i\r\n          class=\"ti-settings text-white fa-spin\"></i></button>\r\n      <div class=\"right-sidebar\" [ngClass]=\"{'shw-rside': showSettings}\">\r\n        <div class=\"slimscrollright\">\r\n          <div class=\"rpanel-title\"> Settings <span><i class=\"ti-close right-side-toggle\"\r\n                (click)=\"showSettings = !showSettings\"></i></span> </div>\r\n          <div class=\"r-panel-body\" [perfectScrollbar]=\"config\">\r\n\r\n            <ul>\r\n              <li class=\"m-b-20 m-t-20\"><b>Light Sidebar / Colors</b></li>\r\n              <li>\r\n\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck1\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"default\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck1\">Default</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck2\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"green\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck2\">Green</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck3\" name=\"radio-stacked\" type=\"radio\" value=\"red\"\r\n                      [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck3\">Red</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck4\" name=\"radio-stacked\" type=\"radio\" value=\"blue\"\r\n                      [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck4\">Blue</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck5\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"purple\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck5\">Purple</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck6\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"megna\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck6\">Megna</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <hr>\r\n            <ul>\r\n              <li class=\"m-b-20\"><b>Dark Sidebar / Colors</b></li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck7\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"defaultdark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck7\">Default Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck8\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"greendark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck8\">Green Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck9\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"reddark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck9\">Red Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck10\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"bluedark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck10\">Blue Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck11\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"purpledark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck11\">Purple Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck12\" name=\"radio-stacked\" type=\"radio\"\r\n                      value=\"megnadark\" [(ngModel)]=\"color\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck12\">Megna Dark</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <hr>\r\n            <ul>\r\n              <li class=\"m-b-20 m-t-20\"><b>General Setting</b></li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input sidebartoggler\" id=\"customCheck13\" type=\"checkbox\"\r\n                      [(ngModel)]=\"showMinisidebar\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck13\">Mini Sidebar</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck14\" type=\"checkbox\" [(ngModel)]=\"showDarktheme\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck14\">Dark Theme</label>\r\n                  </div>\r\n\r\n                </div>\r\n              </li>\r\n              <li>\r\n                <div class=\"m-b-10\">\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\"customCheck145\" type=\"checkbox\" [(ngModel)]=\"showRtl\">\r\n                    <label class=\"custom-control-label\" for=\"customCheck145\">RTL Theme</label>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ============================================================== -->\r\n      <!-- End Right sidebar -->\r\n      <!-- ============================================================== -->\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Container fluid  -->\r\n    <!-- ============================================================== -->\r\n  </div>\r\n  <!-- ============================================================== -->\r\n  <!-- End Page wrapper  -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- footer -->\r\n  <!-- ============================================================== -->\r\n  <!-- <footer class=\"footer\">\r\n        © 2019 Admin Pro Angular by wrappixel.com\r\n    </footer> -->\r\n  <!-- ============================================================== -->\r\n  <!-- End footer -->\r\n  <!-- ============================================================== -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n<div class=\"row page-titles\">\r\n    <div class=\"col-md-5 align-self-center\">\r\n        <h4 class=\"text-themecolor m-b-0\">{{pageInfo?.title}}</h4>\r\n    </div>\r\n    <div class=\"col-md-7 align-self-center\">\r\n        <ol class=\"breadcrumb\">\r\n            <ng-template ngFor let-url [ngForOf]=\"pageInfo?.urls\" let-last=\"last\">\r\n                <li class=\"breadcrumb-item\" *ngIf=\"!last\" [routerLink]=\"url.url\">\r\n                    <a href='javascript:void(0)'>{{url.title}}</a>\r\n                </li>\r\n                <li class=\"breadcrumb-item active\" *ngIf=\"last\">{{url.title}}</li>\r\n            </ng-template>\r\n        </ol>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Bread crumb and right sidebar toggle -->\r\n<!-- ============================================================== -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header-navigation/navigation.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- toggle and nav items -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav mr-auto float-left\">\r\n  <li (click)=\"toggleSidebar.emit()\" class=\"nav-item m-l-10\"> <a\r\n      class=\"nav-link sidebartoggler text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n        class=\"ti-menu\"></i></a> </li>\r\n</ul>\r\n<!-- ============================================================== -->\r\n<!-- User profile and search -->\r\n<!-- ============================================================== -->\r\n<ul class=\"navbar-nav my-lg-0 float-right hide\">\r\n  <!-- ============================================================== -->\r\n  <!-- Search -->\r\n  <!-- ============================================================== -->\r\n  <li class=\"nav-item hidden-sm-down search-box\"> <a (click)=\"showSearch = !showSearch\"\r\n      class=\"nav-link hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n        class=\"ti-search\"></i></a>\r\n    <form class=\"app-search\" [ngClass]=\"{'show-search': showSearch}\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a (click)=\"showSearch = !showSearch\"\r\n        class=\"srh-btn\"><i class=\"ti-close\"></i></a>\r\n    </form>\r\n  </li>\r\n  <!-- ============================================================== -->\r\n  <!-- Comment -->\r\n  <!-- ============================================================== -->\r\n  <li class=\"nav-item dropdown\" ngbDropdown placement=\"bottom-right\">\r\n    <a ngbDropdownToggle class=\"nav-link text-muted text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"> <i\r\n        class=\"mdi mdi-message\"></i>\r\n      <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right mailbox \" ngbDropdownMenu>\r\n      <ul>\r\n        <li>\r\n          <div class=\"drop-title\">Notifications</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"message-center\" [perfectScrollbar]=\"config\">\r\n            <!-- Message -->\r\n            <a href=\"#\" *ngFor=\"let notification of notifications\">\r\n              <!-- <div class=\"round {{notification.round}}\"><i class=\"{{notification.icon}}\"></i></div> -->\r\n              <div class=\"mail-contnet m-l-10\">\r\n                <!-- <h5>{{notification.title}}</h5> <span class=\"mail-desc\">{{notification.subject}}</span> <span -->\r\n                <!-- class=\"time\">{{notification.time}}</span> -->\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>Check all notifications</strong> <i\r\n              class=\"fa fa-angle-right\"></i> </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </li>\r\n  <!-- ============================================================== -->\r\n  <!-- End Comment -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- Messages -->\r\n  <!-- ============================================================== -->\r\n  <li class=\"nav-item dropdown\" ngbDropdown placement=\"bottom-right\">\r\n    <a ngbDropdownToggle class=\"nav-link text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"> <i\r\n        class=\"mdi mdi-email\"></i>\r\n      <div class=\"notify\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right mailbox\" ngbDropdownMenu>\r\n      <ul>\r\n        <li>\r\n          <div class=\"drop-title\">You have 4 new messages</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"message-center\" [perfectScrollbar]=\"config\">\r\n            <a href=\"#\" *ngFor=\"let mymessage of mymessages\">\r\n              <!-- <div class=\"user-img\"> <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"img-circle\" width=\"40\"> -->\r\n              <!-- <span class=\"profile-status {{mymessage.status}} pull-right\"></span> -->\r\n              <!-- </div> -->\r\n              <div class=\"mail-contnet\">\r\n                <!-- <h5>{{mymessage.from}}</h5> -->\r\n                <!-- <span class=\"mail-desc\">{{mymessage.subject}}</span> -->\r\n                <!-- <span class=\"time\">{{mymessage.time}}</span> -->\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link text-center\" href=\"javascript:void(0);\"> <strong>See all e-Mails</strong> <i\r\n              class=\"fa fa-angle-right\"></i> </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </li>\r\n  <!-- ============================================================== -->\r\n  <!-- End Messages -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- Messages -->\r\n  <!-- ============================================================== -->\r\n  <li class=\"nav-item dropdown mega-dropdown\" placement=\"bottom-right\" ngbDropdown [autoClose]=\"false\"> <a\r\n      ngbDropdownToggle class=\"nav-link text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i\r\n        class=\"mdi mdi-view-grid\"></i></a>\r\n    <div class=\"dropdown-menu \" ngbDropdownMenu>\r\n      <ul class=\"mega-dropdown-menu row\">\r\n        <li class=\"col-lg-3 col-xlg-2 m-b-30\">\r\n          <h4 class=\"m-b-20\">CAROUSEL</h4>\r\n          <!-- CAROUSEL -->\r\n          <ngb-carousel>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/images/big/img1.jpg\" class=\"img-responsive\" alt=\"Random first slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3 class=\"text-white font-bold\">First slide label</h3>\r\n\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/images/big/img2.jpg\" class=\"img-responsive\" alt=\"Random second slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3 class=\"text-white font-bold\">Second slide label</h3>\r\n\r\n              </div>\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n              <img src=\"assets/images/big/img3.jpg\" class=\"img-responsive\" alt=\"Random third slide\">\r\n              <div class=\"carousel-caption\">\r\n                <h3 class=\"text-white font-bold\">Third slide label</h3>\r\n\r\n              </div>\r\n            </ng-template>\r\n          </ngb-carousel>\r\n          <!-- End CAROUSEL -->\r\n\r\n        </li>\r\n        <li class=\"col-lg-3 m-b-30\">\r\n          <h4 class=\"m-b-20\">ACCORDION</h4>\r\n          <!-- Accordian -->\r\n          <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" class=\"accordion nav-accordion\">\r\n            <ngb-panel title=\"Simple\">\r\n              <ng-template ngbPanelContent>\r\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n              </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel>\r\n              <ng-template ngbPanelTitle>\r\n                <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n              </ng-template>\r\n              <ng-template ngbPanelContent>\r\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n              </ng-template>\r\n            </ngb-panel>\r\n            <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n              <ng-template ngbPanelContent>\r\n                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\r\n              </ng-template>\r\n            </ngb-panel>\r\n          </ngb-accordion>\r\n        </li>\r\n\r\n\r\n        <li class=\"col-lg-3  m-b-30\">\r\n          <h4 class=\"m-b-20\">CONTACT US</h4>\r\n          <!-- Contact -->\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleInputname1\" placeholder=\"Enter Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Message\"></textarea>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n          </form>\r\n        </li>\r\n        <li class=\"col-lg-3 col-xlg-4 m-b-30\">\r\n          <h4 class=\"m-b-20\">List style</h4>\r\n          <!-- List style -->\r\n          <ul class=\"list-style-none\">\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> You can give link</a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Give link</a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Another Give link</a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Forth link</a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-check text-success\"></i> Another fifth link</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </li>\r\n  <!-- ============================================================== -->\r\n  <!-- End Messages -->\r\n  <!-- ============================================================== -->\r\n  <!-- ============================================================== -->\r\n  <!-- Profile -->\r\n  <!-- ============================================================== -->\r\n  <li class=\"nav-item dropdown\" ngbDropdown placement=\"bottom-right\">\r\n    <a ngbDropdownToggle class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"\r\n      data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"\r\n        class=\"profile-pic\" /></a>\r\n    <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\r\n      <ul class=\"dropdown-user\">\r\n        <li>\r\n          <div class=\"dw-user-box\">\r\n            <div class=\"u-img\"><img src=\"assets/images/users/1.jpg\" alt=\"user\"></div>\r\n            <div class=\"u-text\">\r\n              <h4>Steave Jobs</h4>\r\n              <p class=\"text-muted\">varun@gmail.com</p><a href=\"pages-profile.html\"\r\n                class=\"btn btn-rounded btn-danger btn-sm\">View Profile</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li><a href=\"#\"><i class=\"ti-user\"></i> My Profile</a></li>\r\n        <li><a href=\"#\"><i class=\"ti-wallet\"></i> My Balance</a></li>\r\n        <li><a href=\"#\"><i class=\"ti-email\"></i> Inbox</a></li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li><a href=\"#\"><i class=\"ti-settings\"></i> Account Setting</a></li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n        <li><a href=\"#\"><i class=\"fa fa-power-off\"></i> Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\r\n  <ul id=\"sidebarnav\">\r\n    <li class=\"user-profile hide\" [class.active]=\"showMenu === 'user'\">\r\n      <a class=\"has-arrow waves-effect waves-dark\" href=\"javascript:void(0)\" (click)=\"addExpandClass('user')\"\r\n        aria-expanded=\"false\"><img src=\"assets/images/users/profile.png\" alt=\"user\" /><span class=\"hide-menu\">Steave\r\n          Jobs </span></a>\r\n      <ul aria-expanded=\"false\" class=\"collapse\" [class.in]=\"showMenu === 'user'\">\r\n        <li><a href=\"javascript:void()\">My Profile </a></li>\r\n        <li><a href=\"javascript:void()\">My Balance</a></li>\r\n        <li><a href=\"javascript:void()\">Inbox</a></li>\r\n        <li><a href=\"javascript:void()\">Account Setting</a></li>\r\n        <li><a href=\"javascript:void()\">Logout</a></li>\r\n      </ul>\r\n    </li>\r\n    <!-- <li class=\"nav-devider\"></li> -->\r\n    <!-- First level menu -->\r\n    <li [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\"\r\n      [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\">\r\n      <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\r\n      <a [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\" [ngClass]=\"[sidebarnavItem.class]\"\r\n        *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\">\r\n        <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\r\n        <span class=\"hide-menu\">{{sidebarnavItem.title}}\r\n          <span *ngIf=\"sidebarnavItem.label != '' \"\r\n            [ngClass]=\"[sidebarnavItem.labelClass]\">{{sidebarnavItem.label}}</span>\r\n        </span>\r\n      </a>\r\n      <!-- Second level menu -->\r\n      <ul class=\"collapse\" *ngIf=\"sidebarnavItem.submenu.length > 0\"\r\n        [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\r\n        <li *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\"\r\n          [class.active]=\"showSubMenu === sidebarnavSubItem.title\"\r\n          [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\r\n          <a [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\"\r\n            [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\"\r\n            [ngClass]=\"[sidebarnavSubItem.class]\" *ngIf=\"!sidebarnavSubItem.extralink;\"\r\n            (click)=\"addActiveClass(sidebarnavSubItem.title)\">\r\n            <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\r\n            {{sidebarnavSubItem.title}}\r\n          </a>\r\n          <!-- Third level menu -->\r\n          <ul class=\"collapse\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\"\r\n            [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\r\n            <li *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\"\r\n              [ngClass]=\"[sidebarnavSubsubItem.class]\">\r\n              <a [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\"\r\n                [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\r\n                <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\r\n                {{sidebarnavSubsubItem.title}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");


var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            { path: '', redirectTo: '/apps/login', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function () { return Promise.all(/*! import() | dashboards-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("dashboards-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/dashboard.module */ "./src/app/dashboards/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); } },
            { path: 'starter', loadChildren: function () { return __webpack_require__.e(/*! import() | starter-starter-module */ "starter-starter-module").then(__webpack_require__.bind(null, /*! ./starter/starter.module */ "./src/app/starter/starter.module.ts")).then(function (m) { return m.StarterModule; }); } },
            { path: 'component', loadChildren: function () { return __webpack_require__.e(/*! import() | component-component-module */ "component-component-module").then(__webpack_require__.bind(null, /*! ./component/component.module */ "./src/app/component/component.module.ts")).then(function (m) { return m.ComponentsModule; }); } },
            { path: 'icons', loadChildren: function () { return __webpack_require__.e(/*! import() | icons-icons-module */ "icons-icons-module").then(__webpack_require__.bind(null, /*! ./icons/icons.module */ "./src/app/icons/icons.module.ts")).then(function (m) { return m.IconsModule; }); } },
            { path: 'forms', loadChildren: function () { return __webpack_require__.e(/*! import() | form-forms-module */ "form-forms-module").then(__webpack_require__.bind(null, /*! ./form/forms.module */ "./src/app/form/forms.module.ts")).then(function (m) { return m.FormModule; }); } },
            { path: 'tables', loadChildren: function () { return Promise.all(/*! import() | table-tables-module */[__webpack_require__.e("common"), __webpack_require__.e("table-tables-module")]).then(__webpack_require__.bind(null, /*! ./table/tables.module */ "./src/app/table/tables.module.ts")).then(function (m) { return m.TablesModule; }); } },
            { path: 'charts', loadChildren: function () { return Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboards-dashboard-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "./src/app/charts/charts.module.ts")).then(function (m) { return m.ChartModule; }); } },
            { path: 'widgets', loadChildren: function () { return __webpack_require__.e(/*! import() | widgets-widgets-module */ "widgets-widgets-module").then(__webpack_require__.bind(null, /*! ./widgets/widgets.module */ "./src/app/widgets/widgets.module.ts")).then(function (m) { return m.WidgetsModule; }); } },
            { path: 'extra-component', loadChildren: function () { return Promise.all(/*! import() | extra-component-extra-component-module */[__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("extra-component-extra-component-module")]).then(__webpack_require__.bind(null, /*! ./extra-component/extra-component.module */ "./src/app/extra-component/extra-component.module.ts")).then(function (m) { return m.ExtraComponentModule; }); } },
            { path: 'apps', loadChildren: function () { return Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~apps-apps-module~extra-component-extra-component-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "./src/app/apps/apps.module.ts")).then(function (m) { return m.AppsModule; }); } },
            { path: 'email', loadChildren: function () { return Promise.all(/*! import() | apps-email-mail-module */[__webpack_require__.e("common"), __webpack_require__.e("apps-email-mail-module")]).then(__webpack_require__.bind(null, /*! ./apps/email/mail.module */ "./src/app/apps/email/mail.module.ts")).then(function (m) { return m.MailModule; }); } },
            { path: 'sample-pages', loadChildren: function () { return __webpack_require__.e(/*! import() | sample-pages-sample-pages-module */ "sample-pages-sample-pages-module").then(__webpack_require__.bind(null, /*! ./sample-pages/sample-pages.module */ "./src/app/sample-pages/sample-pages.module.ts")).then(function (m) { return m.SamplePagesModule; }); } },
        ]
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__["BlankComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: function () { return __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts")).then(function (m) { return m.AuthenticationModule; }); }
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/authentication/404'
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_17__["SpinnerComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_7__["FullComponent"], _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_8__["BlankComponent"], _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"], _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot(),
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["Approutes"]),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            template: __webpack_require__(/*! raw-loader!./blank.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/blank/blank.component.html")
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsL0M6XFxVc2Vyc1xcem5pcGhlcnNcXERlc2t0b3BcXHNpbXVsYXRvcl9waHlzaW90aGVyYXBpc19yZWFjdFxcQW5ndWxhci1QaHlzaW90aGVyYXB5L3NyY1xcYXBwXFxsYXlvdXRzXFxmdWxsXFxmdWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJO0lBQ0ksMkJBQTJCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2Z1bGwvZnVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.color = 'green';
        this.showSettings = false;
        this.showMinisidebar = false;
        this.showDarktheme = false;
        this.showRtl = false;
        this.config = {};
    }
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/dashboard1']);
        }
        this.handleLayout();
    };
    FullComponent.prototype.onResize = function (event) {
        this.handleLayout();
    };
    FullComponent.prototype.toggleSidebar = function () {
        this.showMinisidebar = !this.showMinisidebar;
    };
    FullComponent.prototype.handleLayout = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 1500) {
            this.showMinisidebar = true;
        }
        else {
            this.showMinisidebar = false;
        }
    };
    FullComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullComponent.prototype, "onResize", null);
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/layouts/full/full.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(modalService) {
        this.modalService = modalService;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {};
        this.showSearch = false;
        // This is for Notifications
        this.notifications = [
            {
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Luanch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
    }
    NavigationComponent.prototype.ngAfterViewInit = function () { };
    NavigationComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "toggleSidebar", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    // {
    //   path: '',
    //   title: 'Personal',
    //   icon: '',
    //   class: 'nav-small-cap',
    //   label: '',
    //   labelClass: '',
    //   extralink: true,
    //   submenu: []
    // },
    // {
    //   path: '',
    //   title: 'Sample Pages',
    //   icon: 'mdi mdi-file',
    //   class: 'has-arrow',
    //   label: '',
    //   labelClass: '',
    //   extralink: false,
    //   submenu: [
    //     { path: '/starter', title: 'Starter Page', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/sample-pages/timeline', title: 'Timeline', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/sample-pages/profile', title: 'Profile', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/sample-pages/pricing', title: 'Pricing', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/sample-pages/invoice', title: 'Invoice', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     // tslint:disable-next-line:max-line-length
    //     { path: '/sample-pages/helperclasses', title: 'Helper Classes', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Dashboards',
    //   icon: 'mdi mdi-gauge',
    //   class: 'has-arrow',
    //   label: '3',
    //   labelClass: 'label label-rouded label-themecolor pull-right',
    //   extralink: false,
    //   submenu: [
    //     { path: '/dashboard/dashboard1', title: 'Modern', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    //     { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] }
    //   ]
    // },
    {
        path: '',
        title: 'Unlocks',
        icon: 'mdi mdi-lock-open-outline',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            { path: '/apps/login', title: 'Login', icon: 'mdi mdi-lock-open-outline', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
    {
        path: '',
        title: 'Locks',
        icon: 'mdi mdi-lock-outline',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            // { path: '/apps/login', title: 'Login', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/form-composer', title: 'Form-Composer', icon: 'mdi mdi-file-hidden', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/view-forms', title: 'View-Forms', icon: 'mdi mdi-format-list-bulleted', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/apps/display/1', title: 'Display default', icon: 'mdi mdi-file-document-box', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (sidebarnavItem) { return sidebarnavItem; });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zniphers\Desktop\simulator_physiotherapis_react\Angular-Physiotherapy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map