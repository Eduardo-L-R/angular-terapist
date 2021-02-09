(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/activity-timeline/activity.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/activity-timeline/activity.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"d-flex\">\r\n            <h4 class=\"card-title\"><span class=\"lstick\"></span>Activity</h4>\r\n            <!-- <span class=\"badge badge-success\">9</span> -->\r\n            \r\n        </div>\r\n    </div>\r\n    <div class=\"activity-box\">\r\n        <div class=\"card-body\">\r\n            <!-- Activity item-->\r\n            <div class=\"activity-item\">\r\n                <div class=\"round m-r-20\"><img src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\" /></div>\r\n                <div class=\"m-t-10\">\r\n                    <h5 class=\"m-b-0 font-medium\">Mark Freeman <span class=\"text-muted font-14 m-l-10\">| &nbsp; 6:30 PM</span></h5>\r\n                    <h6 class=\"text-muted\">uploaded this file </h6>\r\n                    <table class=\"table vm b-0 m-b-0\">\r\n                        <tr>\r\n                            <td class=\"m-r-10 b-0\"><img src=\"assets/images/icon/zip.png\" alt=\"user\" /></td>\r\n                            <td class=\"b-0\">\r\n                                <h5 class=\"m-b-0 font-medium \">Homepage.zip</h5>\r\n                                <h6>54 MB</h6></td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <!-- Activity item-->\r\n            <!-- Activity item-->\r\n            <div class=\"activity-item\">\r\n                <div class=\"round m-r-20\"><img src=\"assets/images/users/3.jpg\" alt=\"user\" width=\"50\" /></div>\r\n                <div class=\"m-t-10\">\r\n                    <h5 class=\"m-b-5 font-medium\">Emma Smith <span class=\"text-muted font-14 m-l-10\">| &nbsp; 6:30 PM</span></h5>\r\n                    <h6 class=\"text-muted\">joined projectname, and invited <a href=\"javascript:void(0)\">@maxcage, @maxcage, @maxcage, @maxcage, @maxcage,+3</a></h6>\r\n                    <span class=\"image-list m-t-20\">\r\n                        <a href=\"javascript:void(0)\"><img src=\"assets/images/users/1.jpg\" class=\"img-circle\" alt=\"user\" width=\"50\"></a>\r\n                        <a href=\"javascript:void(0)\"><img src=\"assets/images/users/2.jpg\" class=\"img-circle\" alt=\"user\" width=\"50\"></a>\r\n                        <a href=\"javascript:void(0)\"><span class=\"round round-warning\">C</span></a>\r\n                    <a href=\"javascript:void(0)\"><span class=\"round round-danger\">D</span></a>\r\n                    <a href=\"javascript:void(0)\">+3</a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <!-- Activity item-->\r\n            <!-- Activity item-->\r\n            <div class=\"activity-item\">\r\n                <div class=\"round m-r-20\"><img src=\"assets/images/users/4.jpg\" alt=\"user\" width=\"50\" /></div>\r\n                <div class=\"m-t-10\">\r\n                    <h5 class=\"m-b-0 font-medium\">David R. Jones  <span class=\"text-muted font-14 m-l-10\">| &nbsp; 9:30 PM, July 13th</span></h5>\r\n                    <h6 class=\"text-muted\">uploaded this file </h6>\r\n                    <span>\r\n                        <a href=\"javascript:void(0)\" class=\"m-r-10\"><img src=\"assets/images/big/img1.jpg\" alt=\"user\" width=\"60\"></a>\r\n                        <a href=\"javascript:void(0)\" class=\"m-r-10\"><img src=\"assets/images/big/img2.jpg\" alt=\"user\" width=\"60\"></a>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <!-- Activity item-->\r\n            <!-- Activity item-->\r\n            <div class=\"activity-item\">\r\n                <div class=\"round m-r-20\"><img src=\"assets/images/users/6.jpg\" alt=\"user\" width=\"50\" /></div>\r\n                <div class=\"m-t-10\">\r\n                    <h5 class=\"m-b-5 font-medium\">David R. Jones <span class=\"text-muted font-14 m-l-10\">| &nbsp; 6:30 PM</span></h5>\r\n                    <h6 class=\"text-muted\">Commented on<a href=\"javascript:void(0)\">Test Project</a></h6>\r\n                    <p class=\"m-b-0\">It has survived not only five centuries, but also the leap into unchanged.</p>\r\n                </div>\r\n            </div>\r\n            <!-- Activity item-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/customer-support/cs.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/customer-support/cs.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Customer Support</h4>\r\n        <h6 class=\"card-subtitle\">24 new support ticket request generate</h6>\r\n    </div>\r\n    <div class=\"comment-widgets\">\r\n        <!-- Comment Row -->\r\n        <div class=\"d-flex flex-row comment-row\" *ngFor=\"let recentcomment of recentcomments\">\r\n            <div class=\"p-2\"><span class=\"round\"><img src=\"{{recentcomment.image}}\" alt=\"user\" width=\"50\"></span></div>\r\n            <div class=\"comment-text w-100\">\r\n                <h5>{{recentcomment.name}}</h5>\r\n                <p class=\"m-b-5\">{{recentcomment.comment}}</p>\r\n                <div class=\"comment-footer\">\r\n                    <span class=\"text-muted pull-right\">{{recentcomment.date}}</span>\r\n                    <span class=\"label {{recentcomment.labelcolor}}\">{{recentcomment.status}}</span>\r\n                    <span class=\"action-icons\">\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/earning-report/earning-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/earning-report/earning-report.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\"><span class=\"lstick\"></span>Earning Report</h4>\r\n                <h6 class=\"card-subtitle\">Emplyee earning report</h6> </div>\r\n            <div class=\"bg-light p-20\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"align-self-center\">\r\n                        <h3 class=\"m-b-0\">July 2017</h3><small>Total Earning</small></div>\r\n                    <div class=\"ml-auto align-self-center\">\r\n                        <h2 class=\"text-success\">$5470</h2></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-hover earning-box\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th colspan=\"2\">Name</th>\r\n                                <th>Priority</th>\r\n                                <th>Earnings</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td style=\"width:50px;\"><span class=\"round\"><img src=\"assets/images/users/8.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                                <td>\r\n                                    <h6>Sunil Joshi</h6><small class=\"text-muted\">Web Designer</small></td>\r\n                                <td><span class=\"label label-success\">Low</span></td>\r\n                                <td>$3.9K</td>\r\n                            </tr>\r\n                            <tr class=\"active\">\r\n                                <td><span class=\"round\"><img src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                                <td>\r\n                                    <h6>Andrew</h6><small class=\"text-muted\">Project Manager</small></td>\r\n                                <td><span class=\"label label-info\">Medium</span></td>\r\n                                <td>$23.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"round round-success\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                                <td>\r\n                                    <h6>Bhavesh patel</h6><small class=\"text-muted\">Developer</small></td>\r\n                                <td><span class=\"label label-primary\">High</span></td>\r\n                                <td>$12.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"round round-primary\"><img src=\"assets/images/users/4.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                                <td>\r\n                                    <h6>Nirav Joshi</h6><small class=\"text-muted\">Frontend Eng</small></td>\r\n                                <td><span class=\"label label-danger\">Low</span></td>\r\n                                <td>$10.9K</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td><span class=\"round round-warning\"><img src=\"assets/images/users/5.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                                <td>\r\n                                    <h6>Micheal Doe</h6><small class=\"text-muted\">Content Writer</small></td>\r\n                                <td><span class=\"label label-warning\">High</span></td>\r\n                                <td>$12.9K</td>\r\n                            </tr>\r\n                            \r\n                            <tr>\r\n                                <td><span class=\"round round-success\">M</span></td>\r\n                                <td>\r\n                                    <h6>Vishal Doe</h6><small class=\"text-muted\">Content Writer</small></td>\r\n                                <td><span class=\"label label-warning\">High</span></td>\r\n                                <td>$12.9K</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/feeds/feeds.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/feeds/feeds.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\"><span class=\"lstick\"></span>Feeds</h4>\r\n        <ul class=\"feeds\">\r\n            <li *ngFor=\"let feed of feeds\">\r\n                <div class=\"{{feed.bg}}\"><i class=\"{{feed.icon}}\"></i></div> {{feed.msg}} <span class=\"text-muted\">{{feed.time}}</span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card bg-info\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/income-w.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-white m-t-10 m-b-0\">Total Income</h6>\r\n                        <h2 class=\"m-t-0 text-white\">953,000</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card bg-success\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/expense-w.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-white m-t-10 m-b-0\">Total Expense</h6>\r\n                        <h2 class=\"m-t-0 text-white\">236,000</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card bg-primary\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/assets-w.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-white m-t-10 m-b-0\">Total Assets</h6>\r\n                        <h2 class=\"m-t-0 text-white\">987,563</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card bg-danger\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/staff-w.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-white m-t-10 m-b-0\">Total Staff</h6>\r\n                        <h2 class=\"m-t-0 text-white\">987,563</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/income.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Income</h6>\r\n                        <h2 class=\"m-t-0\">953,000</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/expense.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Expense</h6>\r\n                        <h2 class=\"m-t-0\">236,000</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/assets.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Assets</h6>\r\n                        <h2 class=\"m-t-0\">987,563</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"m-r-20 align-self-center\"><img src=\"assets/images/icon/staff.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Staff</h6>\r\n                        <h2 class=\"m-t-0\">987,563</h2></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/profile/profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/profile/profile.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body little-profile text-center\">\r\n        <div class=\"pro-img m-t-20\"><img src=\"assets/images/users/4.jpg\" alt=\"user\"></div>\r\n        <h3 class=\"m-b-0\">Mark J. Freeman</h3>\r\n        <h6 class=\"text-muted\">Web Designer</h6>\r\n        <ul class=\"list-inline soc-pro m-t-30\">\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook-square\"></i></a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-youtube-play\"></i></a></li>\r\n            <li><a href=\"javascript:void(0)\"><i class=\"fa fa-instagram\"></i></a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"text-center bg-light\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6  p-20 b-r\">\r\n                <h4 class=\"m-b-0 font-medium\">35000</h4><small>Followers</small></div>\r\n            <div class=\"col-lg-6 col-md-6  p-20\">\r\n                <h4 class=\"m-b-0 font-medium\">180</h4><small>Following</small></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body text-center\">\r\n        <a href=\"javascript:void(0)\" class=\"m-t-10 m-b-20 btn btn-success btn-md btn-rounded\">Follow me</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><span class=\"lstick\"></span><img src=\"assets/images/icon/income.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Income</h6>\r\n                        <h2 class=\"m-t-0\">953,000</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><span class=\"lstick\"></span><img src=\"assets/images/icon/expense.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Expense</h6>\r\n                        <h2 class=\"m-t-0\">236,000</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><span class=\"lstick\"></span><img src=\"assets/images/icon/assets.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Assets</h6>\r\n                        <h2 class=\"m-t-0\">987,563</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex no-block\">\r\n                    <div class=\"m-r-20 align-self-center\"><span class=\"lstick\"></span><img src=\"assets/images/icon/staff.png\" alt=\"Income\" /></div>\r\n                    <div class=\"align-self-center\">\r\n                        <h6 class=\"text-muted m-t-10 m-b-0\">Total Staff</h6>\r\n                        <h2 class=\"m-t-0\">987,563</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project/project.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/project/project.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\"><span class=\"lstick\"></span>Projects of the Month</h4>\r\n        <div class=\"table-responsive m-t-20\">\r\n            <table class=\"table vm no-th-brd pro-of-month\">\r\n                <thead>\r\n                    <tr>\r\n                        <th colspan=\"2\">Assigned</th>\r\n                        <th>Name</th>\r\n                        <th>Priority</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td style=\"width:50px;\"><span class=\"round\"><img src=\"assets/images/users/1.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Sunil Joshi</h6><small class=\"text-muted\">Web Designer</small></td>\r\n                        <td>Elite Admin</td>\r\n                        <td><span class=\"label label-success label-rounded\">Low</span></td>\r\n                    </tr>\r\n                    <tr class=\"active\">\r\n                        <td><span class=\"round\"><img src=\"assets/images/users/2.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Andrew</h6><small class=\"text-muted\">Project Manager</small></td>\r\n                        <td>Real Homes</td>\r\n                        <td><span class=\"label label-info label-rounded\">Medium</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"round round-success\"><img src=\"assets/images/users/3.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Bhavesh patel</h6><small class=\"text-muted\">Developer</small></td>\r\n                        <td>MedicalPro Theme</td>\r\n                        <td><span class=\"label label-primary label-rounded\">High</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"round round-primary\"><img src=\"assets/images/users/4.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Nirav Joshi</h6><small class=\"text-muted\">Frontend Eng</small></td>\r\n                        <td>Elite Admin</td>\r\n                        <td><span class=\"label label-danger label-rounded\">Low</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"round round-warning\"><img src=\"assets/images/users/5.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Micheal Doe</h6><small class=\"text-muted\">Content Writer</small></td>\r\n                        <td>Helping Hands</td>\r\n                        <td><span class=\"label label-success label-rounded\">High</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"round round-danger\"><img src=\"assets/images/users/6.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Johnathan</h6><small class=\"text-muted\">Graphic</small></td>\r\n                        <td>Digital Agency</td>\r\n                        <td><span class=\"label label-info label-rounded\">High</span></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><span class=\"round round-primary\"><img src=\"assets/images/users/4.jpg\" alt=\"user\" width=\"50\"></span></td>\r\n                        <td>\r\n                            <h6>Nirav Joshi</h6><small class=\"text-muted\">Frontend Eng</small></td>\r\n                        <td>Elite Admin</td>\r\n                        <td><span class=\"label label-danger label-rounded\">Low</span></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\"><span class=\"lstick\"></span>Recent Comments</h4>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Comment widgets -->\r\n    <!-- ============================================================== -->\r\n    <div class=\"comment-widgets\">\r\n        <!-- Comment Row -->\r\n        <div class=\"d-flex flex-row comment-row\" *ngFor=\"let recentcomment of recentcomments\">\r\n            <div class=\"p-2\"><span class=\"round\"><img src=\"{{recentcomment.image}}\" alt=\"user\" width=\"50\"></span></div>\r\n            <div class=\"comment-text w-100\">\r\n                <h5>{{recentcomment.name}}</h5>\r\n                <p class=\"m-b-5\">{{recentcomment.comment}}</p>\r\n                <div class=\"comment-footer\">\r\n                    <span class=\"text-muted pull-right\">{{recentcomment.date}}</span>\r\n                    <span class=\"label {{recentcomment.labelcolor}}\">{{recentcomment.status}}</span>\r\n                    <span class=\"action-icons\">\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-pencil-alt\"></i></a>\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-check\"></i></a>\r\n                        <a href=\"javascript:void(0)\"><i class=\"ti-heart\"></i></a>    \r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Recent Messages</h4>\r\n        <div class=\"message-box\">\r\n            <div class=\"message-widget message-scroll\">\r\n                <!-- Message -->\r\n                <a href=\"#\" *ngFor=\"let recentmessage of recentmessages\">\r\n                    <div class=\"user-img\"> <img src=\"{{recentmessage.image}}\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status {{recentmessage.status}} pull-right\"></span> </div>\r\n                    <div class=\"mail-contnet\">\r\n                        <h5>{{recentmessage.name}}</h5> <span class=\"mail-desc\">{{recentmessage.message}}</span> <span class=\"time\">{{recentmessage.time}}</span> \r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-info text-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"stats\">\r\n                        <h1 class=\"text-white\">3257+</h1>\r\n                        <h6 class=\"text-white\">Twitter Followers</h6>\r\n                        <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                    </div>\r\n                    <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-twitter display-5 op-3 text-dark\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-primary text-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"stats\">\r\n                        <h1 class=\"text-white\">6509+</h1>\r\n                        <h6 class=\"text-white\">Facebook Likes</h6>\r\n                        <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                    </div>\r\n                    <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-facebook display-5 op-3 text-dark\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <div class=\"card bg-success text-white\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"stats\">\r\n                        <h1 class=\"text-white\">9062+</h1>\r\n                        <h6 class=\"text-white\">Subscribe</h6>\r\n                        <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                    </div>\r\n                    <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-envelope display-5 op-3 text-dark\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/to-do/todo.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/to-do/todo.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h4 class=\"card-title\">To Do list</h4>\r\n        <!-- ============================================================== -->\r\n        <!-- To do list widgets -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"to-do-widget m-t-20\">\r\n            <ul class=\"list-task todo-list list-group m-b-0\" data-role=\"tasklist\">\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Schedule meeting with</span> \r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"assignedto\">\r\n                        <li>\r\n                            <img src=\"assets/images/users/1.jpg\" alt=\"user\" ngbTooltip=\"Steave\" data-placement=\"top\">\r\n                        </li>\r\n                        <li>\r\n                            <img src=\"assets/images/users/2.jpg\" alt=\"user\" ngbTooltip=\"Jessica\" data-placement=\"top\">\r\n                        </li>\r\n                        <li>\r\n                            <img src=\"assets/images/users/3.jpg\" alt=\"user\" ngbTooltip=\"Priyanka\" data-placement=\"top\">\r\n                        </li>\r\n                        <li>\r\n                            <img src=\"assets/images/users/4.jpg\" alt=\"user\" ngbTooltip=\"Selina\" data-placement=\"top\">\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Give Purchase report to</span>\r\n                            <span class=\"label label-light-danger\">Today</span> \r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"assignedto\">\r\n                        <li><img src=\"assets/images/users/3.jpg\" alt=\"user\" ngbTooltip=\"Priyanka\" data-placement=\"top\"></li>\r\n                        <li><img src=\"assets/images/users/4.jpg\" alt=\"user\" ngbTooltip=\"Selina\" data-placement=\"top\"></li>\r\n                    </ul>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Book flight for holiday</span> \r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Forward all tasks</span>\r\n                            <span class=\"label label-light-warning\">2 weeks</span> \r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Recieve shipment</span> \r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Send payment today</span> \r\n                        </label>\r\n                    </div>\r\n                    <div class=\"item-date\"> 26 jun 2017</div>\r\n                </li>\r\n                <li class=\"list-group-item\" data-role=\"task\">\r\n                    <div class=\"checkbox checkbox-info\">\r\n                        <label class=\"custom-control custom-checkbox\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\"> <span class=\"custom-control-indicator\"></span> \r\n                            <span class=\"custom-control-description\">Important tasks</span>\r\n                            <span class=\"label label-light-success\">2 weeks</span> \r\n                        </label>\r\n                    </div>\r\n                    <ul class=\"assignedto\">\r\n                        <li><img src=\"assets/images/users/1.jpg\" alt=\"user\" ngbTooltip=\"Assign to Steave\" data-placement=\"top\"></li>\r\n                        <li><img src=\"assets/images/users/2.jpg\" alt=\"user\" ngbTooltip=\"Assign to Jessica\" data-placement=\"top\"></li>\r\n                        <li><img src=\"assets/images/users/4.jpg\" alt=\"user\" ngbTooltip=\"Assign to Selina\" data-placement=\"top\"></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/total-earnings/te.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/total-earnings/te.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card earning-widget\">\r\n    <div class=\"card-body\">\r\n        <div class=\"card-title\">\r\n            <h4 class=\"card-title m-b-0\">Total Earning</h4>\r\n            <h2 class=\"m-t-0\">$586</h2>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body b-t\">\r\n        <table class=\"table v-middle no-border\">\r\n            <tbody>\r\n                <tr *ngFor=\"let totalearning of totalearnings\">\r\n                    <td style=\"width:40px\"><img src=\"{{totalearning.image}}\" width=\"50\" class=\"img-circle\" alt=\"logo\"></td>\r\n                    <td>{{totalearning.name}}</td>\r\n                    <td class=\"text-right\"><span class=\"label {{totalearning.labelcolor}}\">{{totalearning.amount}}</span></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/widget/widget.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard-components/widget/widget.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-lg-12\">\r\n    <div class=\"card bg-primary text-white\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"stats\">\r\n                    <h1 class=\"text-white\">6509+</h1>\r\n                    <h6 class=\"text-white\">Facebook Likes</h6>\r\n                    <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                </div>\r\n                <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-facebook display-5 op-3 text-dark\"></i></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-lg-12\">\r\n    <div class=\"card bg-success text-white\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"stats\">\r\n                    <h1 class=\"text-white\">9062+</h1>\r\n                    <h6 class=\"text-white\">Subscribe</h6>\r\n                    <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                </div>\r\n                <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-envelope display-5 op-3 text-dark\"></i></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-lg-12\">\r\n    <div class=\"card bg-info text-white\">\r\n        <div class=\"card-body\">\r\n            <div class=\"d-flex\">\r\n                <div class=\"stats\">\r\n                    <h1 class=\"text-white\">3257+</h1>\r\n                    <h6 class=\"text-white\">Twitter Followers</h6>\r\n                    <button class=\"btn btn-rounded btn-outline btn-light m-t-10 font-14\">Check list</button>\r\n                </div>\r\n                <div class=\"stats-icon text-right ml-auto\"><i class=\"fa fa-twitter display-5 op-3 text-dark\"></i></div>\r\n            </div>\r\n        </div>\r\n    </div>   \r\n</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard1/dashboard1.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard1/dashboard1.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Start Page Content -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-project-counter></app-project-counter>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- chart and stats -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <!-- chart component -->\r\n    <div class=\"col-lg-9 col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex flex-wrap m-b-30\">\r\n                    <div>\r\n                        <h4 class=\"card-title\"><span class=\"lstick\"></span>Monthly Earning</h4>\r\n                    </div>\r\n                    <div class=\"ml-auto\">\r\n                        <ul class=\"list-inline\">\r\n                            <li>\r\n                                <h6 class=\"text-muted text-success\"><i class=\"fa fa-circle font-10 m-r-10 \"></i>Sales</h6>\r\n                            </li>\r\n                            <li>\r\n                                <h6 class=\"text-muted  text-info\"><i class=\"fa fa-circle font-10 m-r-10\"></i>Earning (k)</h6>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div style=\"height:370px;\">\r\n                    <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"> </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- other chart component -->\r\n    <div class=\"col-lg-3 col-md-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\"><span class=\"lstick\"></span>Visit Separation</h4>\r\n                <div style=\"height: 220px\">\r\n                    <canvas baseChart height=\"100px\"  [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [options]=\"doughnutChartOptions\" [legend]=\"doughnutChartLegend\"   [chartType]=\"doughnutChartType\"  [colors]=\"[{backgroundColor: ['rgb(116, 90, 242)', 'rgb(30, 136, 229)', '#06d79c', 'rgb(236, 239, 241)']}]\">\r\n                    </canvas>\r\n                </div>\r\n                <table class=\"table vm font-14 m-b-0\">\r\n                    <tr>\r\n                        <td class=\"b-0\">Mobile</td>\r\n                        <td class=\"text-right font-medium b-0\">38.5%</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Tablet</td>\r\n                        <td class=\"text-right font-medium\">30.8%</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Desktop</td>\r\n                        <td class=\"text-right font-medium\">7.7%</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Other</td>\r\n                        <td class=\"text-right font-medium\">23.1%</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Report and Comments -->\r\n<!-- ============================================================== -->\r\n<!-- Row -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-earning-report></app-earning-report>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- You can find this in the dashboard-component -->\r\n        <app-recent-comment></app-recent-comment>\r\n    </div>\r\n</div>\r\n<!-- Row -->\r\n<!-- ============================================================== -->\r\n<!-- Carousel widgets --><!-- You can find this in the dashboard-component -->\r\n<!-- ============================================================== -->\r\n<app-social-slider></app-social-slider>\r\n<!-- ============================================================== -->\r\n<!-- Activity widgets --><!-- You can find this in the dashboard-component -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <!-- Column -->\r\n    <div class=\"col-lg-6 col-xlg-9\">\r\n       <app-activity-timeline></app-activity-timeline>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xlg-3\">\r\n        <app-profile-box></app-profile-box>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard2/dashboard2.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard2/dashboard2.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-income-counter></app-income-counter>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Subscribe -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <h4 class=\"card-title\"><span class=\"lstick\"></span>Website Visit</h4>\r\n                    <ul class=\"list-inline m-b-0 ml-auto\">\r\n                        <li>\r\n                            <h6 class=\"text-muted text-success\"><i class=\"fa fa-circle font-10 m-r-10 \"></i>Site A view</h6> </li>\r\n                        <li>\r\n                            <h6 class=\"text-muted text-info\"><i class=\"fa fa-circle font-10 m-r-10\"></i>Site B view</h6> </li>\r\n                    </ul>\r\n                </div>\r\n                <div style=\"height:400px;\">\r\n                    <canvas baseChart [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"> </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div>\r\n                        <h3 class=\"card-title m-b-5\"><span class=\"lstick\"></span>Sales Overview </h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div style=\"height:370px;\">\r\n                    <canvas baseChart [datasets]=\"lineChartData1\" [labels]=\"lineChartLabels1\" [options]=\"lineChartOptions1\" [colors]=\"lineChartColors1\" [legend]=\"lineChartLegend1\" [chartType]=\"lineChartType1\"> </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Sales overview chart -->\r\n<!-- ============================================================== -->\r\n\r\n\r\n<!-- ============================================================== -->\r\n<!-- Projects of the month -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <app-project></app-project>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Activity widget find scss into widget folder-->\r\n    <!-- ============================================================== -->\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <app-activity-timeline></app-activity-timeline>\r\n    </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Comment and chat -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n        <app-recent-comment></app-recent-comment>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <app-feeds></app-feeds>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard3/dashboard3.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboards/dashboard3/dashboard3.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pa></app-pa>\r\n<!-- ============================================================== -->\r\n<!-- Sales overview chart -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div>\r\n                        <h3 class=\"card-title m-b-5\"><span class=\"lstick\"></span>Sales Overview </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-t-40\" style=\"height:400px;\">\r\n                    <canvas baseChart [datasets]=\"lineChartData1\" [labels]=\"lineChartLabels1\" [options]=\"lineChartOptions1\" [colors]=\"lineChartColors1\" [legend]=\"lineChartLegend1\" [chartType]=\"lineChartType1\"> </canvas>\r\n                </div>\r\n                <div class=\"stats-bar\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">Total Sales</h6>\r\n                                <h3 class=\"m-b-0\">$10,345</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">This Month</h6>\r\n                                <h3 class=\"m-b-0\">$7,589</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">This Week</h6>\r\n                                <h3 class=\"m-b-0\">$1,476</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"d-flex\">\r\n                    <div>\r\n                        <h3 class=\"card-title m-b-5\"><span class=\"lstick\"></span>Sales Overview </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-t-40\" style=\"height:400px;\">\r\n                    <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"lineChartOptions1\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" [colors]=\"barChartColors\">\r\n                    </canvas>\r\n                </div>\r\n                <div class=\"stats-bar\">\r\n                    <div class=\"row text-center\">\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">Total Sales</h6>\r\n                                <h3 class=\"m-b-0\">$10,345</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">This Month</h6>\r\n                                <h3 class=\"m-b-0\">$7,589</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4\">\r\n                            <div class=\"p-20\">\r\n                                <h6 class=\"m-b-0\">This Week</h6>\r\n                                <h3 class=\"m-b-0\">$1,476</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Projects of the month -->\r\n<!-- ============================================================== -->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <app-project></app-project>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Activity widget find scss into widget folder-->\r\n    <!-- ============================================================== -->\r\n    <div class=\"col-lg-6 col-md-12\">\r\n        <app-activity-timeline></app-activity-timeline>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-timeline',
            template: __webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/activity-timeline/activity.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/customer-support/cs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSupportComponent", function() { return CustomerSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerSupportComponent = /** @class */ (function () {
    function CustomerSupportComponent() {
        this.recentcomments = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'James Anderson',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'label-light-info'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Michael Jorden',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Approved',
                labelcolor: 'label-light-success'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Johnathan Doeting',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Rejected',
                labelcolor: 'label-light-danger'
            }
        ];
    }
    CustomerSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cs',
            template: __webpack_require__(/*! raw-loader!./cs.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/customer-support/cs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CustomerSupportComponent);
    return CustomerSupportComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningComponent", function() { return EarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EarningComponent = /** @class */ (function () {
    function EarningComponent() {
    }
    EarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-earning-report',
            template: __webpack_require__(/*! raw-loader!./earning-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/earning-report/earning-report.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EarningComponent);
    return EarningComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/feeds/feeds.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsComponent", function() { return FeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedsComponent = /** @class */ (function () {
    function FeedsComponent() {
        this.feeds = [
            {
                bg: 'bg-light-info',
                icon: 'fa fa-bell-o',
                msg: 'You have 4 pending tasks.',
                time: 'Just Now'
            },
            {
                bg: 'bg-light-success',
                icon: 'ti-server',
                msg: 'New user registered.',
                time: '5 Hours ago'
            },
            {
                bg: 'bg-light-warning',
                icon: 'ti-shopping-cart',
                msg: 'Server #1 overloaded.',
                time: '2 Hours ago'
            },
            {
                bg: 'bg-light-danger',
                icon: 'ti-user',
                msg: 'New order received.',
                time: '31 May'
            },
            {
                bg: 'bg-light-inverse',
                icon: 'fa fa-bell-o',
                msg: 'New user registered.',
                time: '30 May'
            },
            {
                bg: 'bg-light-info',
                icon: 'fa fa-bell-o',
                msg: 'New Version just arrived.',
                time: 'Just Now'
            },
            {
                bg: 'bg-light-danger',
                icon: 'ti-user',
                msg: 'New user registered.',
                time: '30 May'
            },
            {
                bg: 'bg-light-inverse',
                icon: 'fa fa-bell-o',
                msg: 'New Version just arrived.',
                time: '27 May'
            },
            {
                bg: 'bg-light-primary',
                icon: 'ti-settings',
                msg: 'You have 4 pending tasks.',
                time: '27 May'
            }
        ];
    }
    FeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__(/*! raw-loader!./feeds.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/feeds/feeds.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IncomeCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeCounterComponent", function() { return IncomeCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeCounterComponent = /** @class */ (function () {
    function IncomeCounterComponent() {
    }
    IncomeCounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income-counter',
            template: __webpack_require__(/*! raw-loader!./income-counter.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/income-counter/income-counter.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], IncomeCounterComponent);
    return IncomeCounterComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageAnalyzerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAnalyzerComponent", function() { return PageAnalyzerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageAnalyzerComponent = /** @class */ (function () {
    function PageAnalyzerComponent() {
    }
    PageAnalyzerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pa',
            template: __webpack_require__(/*! raw-loader!./pa.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/page-analyzer/pa.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageAnalyzerComponent);
    return PageAnalyzerComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/profile/profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/profile/profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-box',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProjectCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCounterComponent", function() { return ProjectCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectCounterComponent = /** @class */ (function () {
    function ProjectCounterComponent() {
    }
    ProjectCounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-counter',
            template: __webpack_require__(/*! raw-loader!./project-counter.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project-counter/project-counter.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProjectCounterComponent);
    return ProjectCounterComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/project/project.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/project/project.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/project/project.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RecentcommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentcommentComponent", function() { return RecentcommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentcommentComponent = /** @class */ (function () {
    function RecentcommentComponent() {
        this.recentcomments = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'James Anderson',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'label-light-info'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Michael Jorden',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Approved',
                labelcolor: 'label-light-success'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Johnathan Doeting',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Rejected',
                labelcolor: 'label-light-danger'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'James Anderson',
                comment: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                date: 'April 14, 2016',
                status: 'Pending',
                labelcolor: 'label-light-info'
            }
        ];
    }
    RecentcommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-comment',
            template: __webpack_require__(/*! raw-loader!./recent-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RecentcommentComponent);
    return RecentcommentComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RecentmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentmessageComponent", function() { return RecentmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentmessageComponent = /** @class */ (function () {
    function RecentmessageComponent() {
        this.recentmessages = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'James Anderson',
                message: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:45 AM',
                status: 'online'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Jon Doe',
                message: 'Simply dummy text of the printing and typesetting industry.',
                time: '9:30 AM',
                status: 'busy'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Jane Doe',
                message: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:10 AM',
                status: 'away'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'Marriah Carry',
                message: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:08 AM',
                status: 'offline'
            },
            {
                image: 'assets/images/users/6.jpg',
                name: 'Steave Rogers',
                message: 'Simply dummy text of the printing and typesetting industry.',
                time: '9:02 AM',
                status: 'online'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'Jared White',
                message: 
                // tslint:disable-next-line:max-line-length
                'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.',
                time: '9:00 AM',
                status: 'away'
            }
        ];
    }
    RecentmessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-message',
            template: __webpack_require__(/*! raw-loader!./recent-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/recent-message/recent-message.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RecentmessageComponent);
    return RecentmessageComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SocialSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSliderComponent", function() { return SocialSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialSliderComponent = /** @class */ (function () {
    function SocialSliderComponent() {
    }
    SocialSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-slider',
            template: __webpack_require__(/*! raw-loader!./social-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/social-slider/social-slider.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SocialSliderComponent);
    return SocialSliderComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/to-do/todo.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/to-do/todo.component.ts ***!
  \*************************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-do',
            template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/to-do/todo.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/total-earnings/te.component.ts ***!
  \********************************************************************************/
/*! exports provided: TotalEarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalEarningComponent", function() { return TotalEarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TotalEarningComponent = /** @class */ (function () {
    function TotalEarningComponent() {
        this.totalearnings = [
            {
                image: 'assets/images/users/1.jpg',
                name: 'Andrew Simon',
                labelcolor: 'label-light-info',
                amount: '$2600'
            },
            {
                image: 'assets/images/users/2.jpg',
                name: 'Daniel Kristeen',
                labelcolor: 'label-light-success',
                amount: '$2300'
            },
            {
                image: 'assets/images/users/3.jpg',
                name: 'Dany John',
                labelcolor: 'label-light-primary',
                amount: '$1200'
            },
            {
                image: 'assets/images/users/4.jpg',
                name: 'Chris gyle',
                labelcolor: 'label-light-warning',
                amount: '$4400'
            },
            {
                image: 'assets/images/users/5.jpg',
                name: 'Jane Doe',
                labelcolor: 'label-light-danger',
                amount: '$2500'
            },
            {
                image: 'assets/images/users/6.jpg',
                name: 'Jon doe',
                labelcolor: 'label-light-megna',
                amount: '$3300'
            }
        ];
    }
    TotalEarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-te',
            template: __webpack_require__(/*! raw-loader!./te.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/total-earnings/te.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TotalEarningComponent);
    return TotalEarningComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard-components/widget/widget.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboards/dashboard-components/widget/widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetComponent = /** @class */ (function () {
    function WidgetComponent() {
    }
    WidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(/*! raw-loader!./widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard-components/widget/widget.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard.module.ts":
/*!************************************************!*\
  !*** ./src/app/dashboards/dashboard.module.ts ***!
  \************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ "./src/app/dashboards/dashboard3/dashboard3.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboards/dashboard.routing.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-components/income-counter/income-counter.component */ "./src/app/dashboards/dashboard-components/income-counter/income-counter.component.ts");
/* harmony import */ var _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-components/project-counter/project-counter.component */ "./src/app/dashboards/dashboard-components/project-counter/project-counter.component.ts");
/* harmony import */ var _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-components/project/project.component */ "./src/app/dashboards/dashboard-components/project/project.component.ts");
/* harmony import */ var _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-components/recent-comment/recent-comment.component */ "./src/app/dashboards/dashboard-components/recent-comment/recent-comment.component.ts");
/* harmony import */ var _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard-components/recent-message/recent-message.component */ "./src/app/dashboards/dashboard-components/recent-message/recent-message.component.ts");
/* harmony import */ var _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard-components/social-slider/social-slider.component */ "./src/app/dashboards/dashboard-components/social-slider/social-slider.component.ts");
/* harmony import */ var _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-components/to-do/todo.component */ "./src/app/dashboards/dashboard-components/to-do/todo.component.ts");
/* harmony import */ var _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-components/profile/profile.component */ "./src/app/dashboards/dashboard-components/profile/profile.component.ts");
/* harmony import */ var _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard-components/page-analyzer/pa.component */ "./src/app/dashboards/dashboard-components/page-analyzer/pa.component.ts");
/* harmony import */ var _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard-components/widget/widget.component */ "./src/app/dashboards/dashboard-components/widget/widget.component.ts");
/* harmony import */ var _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard-components/customer-support/cs.component */ "./src/app/dashboards/dashboard-components/customer-support/cs.component.ts");
/* harmony import */ var _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard-components/total-earnings/te.component */ "./src/app/dashboards/dashboard-components/total-earnings/te.component.ts");
/* harmony import */ var _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard-components/feeds/feeds.component */ "./src/app/dashboards/dashboard-components/feeds/feeds.component.ts");
/* harmony import */ var _dashboard_components_earning_report_earning_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard-components/earning-report/earning-report.component */ "./src/app/dashboards/dashboard-components/earning-report/earning-report.component.ts");
/* harmony import */ var _dashboard_components_activity_timeline_activity_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard-components/activity-timeline/activity.component */ "./src/app/dashboards/dashboard-components/activity-timeline/activity.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_10__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutes"])],
            declarations: [
                _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_5__["Dashboard1Component"],
                _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard2Component"],
                _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_7__["Dashboard3Component"],
                _dashboard_components_income_counter_income_counter_component__WEBPACK_IMPORTED_MODULE_11__["IncomeCounterComponent"],
                _dashboard_components_project_counter_project_counter_component__WEBPACK_IMPORTED_MODULE_12__["ProjectCounterComponent"],
                _dashboard_components_project_project_component__WEBPACK_IMPORTED_MODULE_13__["ProjectComponent"],
                _dashboard_components_recent_comment_recent_comment_component__WEBPACK_IMPORTED_MODULE_14__["RecentcommentComponent"],
                _dashboard_components_recent_message_recent_message_component__WEBPACK_IMPORTED_MODULE_15__["RecentmessageComponent"],
                _dashboard_components_social_slider_social_slider_component__WEBPACK_IMPORTED_MODULE_16__["SocialSliderComponent"],
                _dashboard_components_to_do_todo_component__WEBPACK_IMPORTED_MODULE_17__["TodoComponent"],
                _dashboard_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
                _dashboard_components_page_analyzer_pa_component__WEBPACK_IMPORTED_MODULE_19__["PageAnalyzerComponent"],
                _dashboard_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_20__["WidgetComponent"],
                _dashboard_components_customer_support_cs_component__WEBPACK_IMPORTED_MODULE_21__["CustomerSupportComponent"],
                _dashboard_components_total_earnings_te_component__WEBPACK_IMPORTED_MODULE_22__["TotalEarningComponent"],
                _dashboard_components_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_23__["FeedsComponent"],
                _dashboard_components_earning_report_earning_report_component__WEBPACK_IMPORTED_MODULE_24__["EarningComponent"],
                _dashboard_components_activity_timeline_activity_component__WEBPACK_IMPORTED_MODULE_25__["ActivityComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboard.routing.ts ***!
  \*************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboards/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboards/dashboard2/dashboard2.component.ts");
/* harmony import */ var _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard3/dashboard3.component */ "./src/app/dashboards/dashboard3/dashboard3.component.ts");



var DashboardRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard1Component"],
                data: {
                    title: 'Modern Dashboard',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Modern Dashboard' }]
                }
            },
            {
                path: 'dashboard2',
                component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Component"],
                data: {
                    title: 'Classic Dashboard',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Classic Dashboard' }]
                }
            },
            {
                path: 'dashboard3',
                component: _dashboard3_dashboard3_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard3Component"],
                data: {
                    title: 'Analytical Dashboard',
                    urls: [{ title: 'Dashboard', url: '/dashboard' }, { title: 'Analytical Dashboard' }]
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ">>> .ct-series-c .ct-slice-donut {\r\n\tstroke: rgb(236, 239, 241);\r\n}\r\n>>> .ct-series-d .ct-slice-donut {\r\n\tstroke: rgb(116, 90, 242);\r\n}\r\n>>> .ct-series-b .ct-slice-donut {\r\n\tstroke: rgb(38, 198, 218);\r\n}\r\n>>> .ct-series-a .ct-slice-donut {\r\n\tstroke: rgb(30, 136, 229);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQxL2Rhc2hib2FyZDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMS9kYXNoYm9hcmQxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI+Pj4gLmN0LXNlcmllcy1jIC5jdC1zbGljZS1kb251dCB7XHJcblx0c3Ryb2tlOiByZ2IoMjM2LCAyMzksIDI0MSk7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtZCAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDExNiwgOTAsIDI0Mik7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDM4LCAxOTgsIDIxOCk7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDMwLCAxMzYsIDIyOSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboards/dashboard1/dashboard1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard1/dashboard1.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var data = __webpack_require__(/*! ./data.json */ "./src/app/dashboards/dashboard1/data.json");
var Dashboard1Component = /** @class */ (function () {
    function Dashboard1Component() {
        // This is for the dashboar line chart
        // lineChart
        this.lineChartData = [
            { data: [0, 50, 30, 60, 180, 120, 180, 80], label: 'Sales ' },
            { data: [0, 100, 70, 100, 240, 180, 220, 140], label: 'Expense ' },
            { data: [0, 150, 110, 240, 200, 200, 300, 200], label: 'Earning ' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug'];
        this.lineChartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // dark grey
                backgroundColor: 'rgba(234,237,242,1)',
                borderColor: 'rgba(234,237,242,1)',
                pointBackgroundColor: 'rgba(234,237,242,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(234,237,242,1)'
            },
            {
                // grey
                backgroundColor: 'rgba(76,139,236,1)',
                borderColor: 'rgba(76,139,236,1)',
                pointBackgroundColor: 'rgba(76,139,236,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(76,139,236,1)'
            },
            {
                // grey
                backgroundColor: 'rgba(117,91,241,1)',
                borderColor: 'rgba(117,91,241,1)',
                pointBackgroundColor: 'rgba(117,91,241,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(117,91,241,1)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Doughnut
        this.doughnutChartLabels = ['Tablet', 'Desktop', 'Mobile', 'Other'];
        this.doughnutChartOptions = {
            borderWidth: 2,
            maintainAspectRatio: false
        };
        this.doughnutChartData = [150, 450, 200, 20];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLegend = false;
        this.subtitle = 'This is some text within a card block.';
    }
    Dashboard1Component.prototype.ngAfterViewInit = function () { };
    Dashboard1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard1.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__(/*! ./dashboard1.component.css */ "./src/app/dashboards/dashboard1/dashboard1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard1/data.json":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboard1/data.json ***!
  \*************************************************/
/*! exports provided: Pie, default */
/***/ (function(module) {

module.exports = {"Pie":{"series":[20,50,30,10]}};

/***/ }),

/***/ "./src/app/dashboards/dashboard2/dashboard2.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard2/dashboard2.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ">>> .ct-series-c .ct-slice-donut {\r\n\tstroke: rgb(236, 239, 241);\r\n}\r\n>>> .ct-series-d .ct-slice-donut {\r\n\tstroke: rgb(116, 90, 242);\r\n}\r\n>>> .ct-series-b .ct-slice-donut {\r\n\tstroke: rgb(38, 198, 218);\r\n}\r\n>>> .ct-series-a .ct-slice-donut {\r\n\tstroke: rgb(30, 136, 229);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQyL2Rhc2hib2FyZDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHMvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI+Pj4gLmN0LXNlcmllcy1jIC5jdC1zbGljZS1kb251dCB7XHJcblx0c3Ryb2tlOiByZ2IoMjM2LCAyMzksIDI0MSk7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtZCAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDExNiwgOTAsIDI0Mik7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDM4LCAxOTgsIDIxOCk7XHJcbn1cclxuPj4+IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogcmdiKDMwLCAxMzYsIDIyOSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboards/dashboard2/dashboard2.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard2/dashboard2.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var data = __webpack_require__(/*! ./data.json */ "./src/app/dashboards/dashboard2/data.json");
var Dashboard2Component = /** @class */ (function () {
    function Dashboard2Component() {
        // This is for the dashboar line chart
        // lineChart
        // tslint:disable-next-line:max-line-length
        this.lineChartData = [{ data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Site A' }, { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Site B' }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.lineChartOptions = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(120, 130, 140, 0.13)'
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(120, 130, 140, 0.13)'
                        }
                    }
                ]
            },
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(6,215,156,0.1)',
                borderColor: 'rgba(6,215,156,1)',
                pointBackgroundColor: 'rgba(6,215,156,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(6,215,156,0.5)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(57,139,247,0.2)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // lineChart
        this.lineChartData1 = [{ data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' }];
        this.lineChartLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions1 = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false,
            elements: { line: { tension: 0 } }
        };
        this.lineChartColors1 = [
            {
                // grey
                backgroundColor: 'rgba(6,215,156,0.0)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(57,139,247,0.0)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            }
        ];
        this.lineChartLegend1 = false;
        this.lineChartType1 = 'line';
        // Doughnut
        this.doughnutChartLabels = ['Tablet', 'Desktop', 'Mobile', 'Other'];
        this.doughnutChartOptions = {
            borderWidth: 2,
            maintainAspectRatio: false
        };
        this.doughnutChartData = [150, 450, 200, 20];
        this.doughnutChartType = 'doughnut';
        this.subtitle = 'This is some text within a card block.';
    }
    Dashboard2Component.prototype.ngAfterViewInit = function () { };
    Dashboard2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard2.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard2/dashboard2.component.html"),
            styles: [__webpack_require__(/*! ./dashboard2.component.css */ "./src/app/dashboards/dashboard2/dashboard2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Dashboard2Component);
    return Dashboard2Component;
}());



/***/ }),

/***/ "./src/app/dashboards/dashboard2/data.json":
/*!*************************************************!*\
  !*** ./src/app/dashboards/dashboard2/data.json ***!
  \*************************************************/
/*! exports provided: Pie, default */
/***/ (function(module) {

module.exports = {"Pie":{"series":[20,50,30,10]}};

/***/ }),

/***/ "./src/app/dashboards/dashboard3/dashboard3.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dashboards/dashboard3/dashboard3.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ">>> .ct-series-c .ct-slice-donut {\r\n\tstroke: #EF5350;\r\n}\r\n>>> .ct-series-b .ct-slice-donut {\r\n\tstroke: #26C6DA;\r\n}\r\n>>> .ct-series-a .ct-slice-donut {\r\n\tstroke: #1976D2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkcy9kYXNoYm9hcmQzL2Rhc2hib2FyZDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmRzL2Rhc2hib2FyZDMvZGFzaGJvYXJkMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiPj4+IC5jdC1zZXJpZXMtYyAuY3Qtc2xpY2UtZG9udXQge1xyXG5cdHN0cm9rZTogI0VGNTM1MDtcclxufVxyXG4+Pj4gLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XHJcblx0c3Ryb2tlOiAjMjZDNkRBO1xyXG59XHJcbj4+PiAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcclxuXHRzdHJva2U6ICMxOTc2RDI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboards/dashboard3/dashboard3.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboards/dashboard3/dashboard3.component.ts ***!
  \***************************************************************/
/*! exports provided: Dashboard3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard3Component", function() { return Dashboard3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Dashboard3Component = /** @class */ (function () {
    function Dashboard3Component() {
        // lineChart
        this.lineChartData1 = [
            { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
            { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
        ];
        this.lineChartLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions1 = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ],
                xAxes: [
                    {
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                ]
            },
            lineTension: 10,
            responsive: true,
            maintainAspectRatio: false,
            elements: { line: { tension: 0 } }
        };
        this.lineChartColors1 = [
            {
                // grey
                backgroundColor: 'rgba(6,215,156,0.1)',
                borderColor: 'rgba(6,215,156,1)',
                pointBackgroundColor: 'rgba(6,215,156,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(6,215,156,0.5)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(57,139,247,0.1)',
                borderColor: 'rgba(57,139,247,1)',
                pointBackgroundColor: 'rgba(57,139,247,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(57,139,247,0.5)'
            }
        ];
        this.lineChartLegend1 = false;
        this.lineChartType1 = 'line';
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            barThickness: 5
        };
        this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        // tslint:disable-next-line:max-line-length
        this.barChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' }, { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }];
        this.barChartColors = [{ backgroundColor: '#06d79c' }, { backgroundColor: '#398bf7' }];
    }
    Dashboard3Component.prototype.ngAfterViewInit = function () { };
    Dashboard3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard3.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboards/dashboard3/dashboard3.component.html"),
            styles: [__webpack_require__(/*! ./dashboard3.component.css */ "./src/app/dashboards/dashboard3/dashboard3.component.css")]
        })
    ], Dashboard3Component);
    return Dashboard3Component;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-dashboard-module-es5.js.map