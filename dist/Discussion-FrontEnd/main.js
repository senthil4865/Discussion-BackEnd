(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./discussion/discussion.module": [
		"./src/app/discussion/discussion.module.ts",
		"discussion-discussion-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "user",
        loadChildren: "./user/user.module#UserModule"
    },
    {
        path: "discussion",
        loadChildren: "./discussion/discussion.module#DiscussionModule"
    },
    { path: "", redirectTo: "user/login", pathMatch: "full" },
    { path: "serverError", component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"] },
    { path: "*", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = "Discussion-FrontEnd";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__["ServerErrorComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                    timeOut: 7000,
                    positionClass: "toast-top-right",
                    preventDuplicates: true
                })
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = "https://ancient-anchorage-64162.herokuapp.com/api/v1";
        this.userFriends = [];
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem("userInfo", JSON.stringify(data));
        }; //end of setlocalstorage Function
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem("userInfo"));
        }; //end getlocalstorage function
    }
    AppService.prototype.signUp = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("firstName", data.firstName)
            .set("lastName", data.lastName)
            .set("mobileNumber", data.mobileNumber)
            .set("email", data.email)
            .set("password", data.password)
            .set("countryName", data.countryName);
        return this._http.post(this.baseUrl + "/users/signup", params);
    }; //end signUp
    AppService.prototype.signIn = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("email", data.email)
            .set("password", data.password);
        return this._http.post(this.baseUrl + "/users/login", params);
    }; //end signIn
    AppService.prototype.getCountryNames = function () {
        return this._http.get("./../assets/countryNames.json");
    }; //end getCountryNames
    AppService.prototype.getCountryNumbers = function () {
        return this._http.get("./../assets/countryPhoneCodes.json");
    }; //end getCountryNumbers
    AppService.prototype.verifyEmail = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("userId", userId);
        return this._http.put(this.baseUrl + "/users/verifyEmail", params);
    }; //end verifyEmail
    AppService.prototype.logout = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("authToken", authToken);
        return this._http.post(this.baseUrl + "/users/" + userId + "/logout", params);
    };
    AppService.prototype.addComment = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("id", data.id)
            .set("commentedBy", data.commentedBy)
            .set("comment", data.comment);
        return this._http.post(this.baseUrl + "/discussion/addComment", params);
    };
    AppService.prototype.addDiscussion = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("ownerTopic", data.ownerTopic)
            .set("discussionName", data.discussionName)
            .set("discussionDescription", data.discussionDescription)
            .set("discussionCreatedBy", data.discussionCreatedBy)
            .set("discussionModifiedBy", data.discussionModifiedBy);
        return this._http.post(this.baseUrl + "/discussion/addDiscussion", params);
    };
    AppService.prototype.addSubDiscussion = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("ownerDiscussion", data.ownerDiscussion)
            .set("subDiscussionName", data.subDiscussionName)
            .set("subDiscussionCreatedBy", data.subdiscussionCreatedBy)
            .set("subDiscussionModifiedBy", data.subdiscussionModifiedBy);
        return this._http.post(this.baseUrl + "/discussion/" + data.ownerDiscussion + "/addSubDiscussion", params);
    };
    AppService.prototype.getAllDiscussions = function (pageSize, pageIndex, id) {
        return this._http.get(this.baseUrl + "/discussion/" + id + "/getAllDiscussions?pageSize=" + pageSize + "&pageIndex=" + pageIndex + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.getAllUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    };
    AppService.prototype.getAllDiscussionsByTopicId = function (dataforSubDiscussionDelete) {
        return this._http.get(this.baseUrl + "/discussion/" + dataforSubDiscussionDelete.TopicId + "/getTopicById?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.sendFriendRequest = function (friendRequest) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("senderId", friendRequest.senderId)
            .set("senderName", friendRequest.senderName)
            .set("receiverId", friendRequest.receiverId)
            .set("receiverName", friendRequest.receiverName)
            .set("authToken", friendRequest.authToken);
        return this._http.post(this.baseUrl + "/friends/send/friend/request", params);
    };
    AppService.prototype.rejectFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('senderId', data.senderId)
            .set('senderName', data.senderName)
            .set('receiverId', data.receiverId)
            .set('receiverName', data.receiverName)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/friends/reject/friend/request", params);
    };
    AppService.prototype.getRequestsReceived = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/friends/view/friend/request/received/" + userId + "?authToken=" + authToken);
    };
    AppService.prototype.getRequestsSent = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/friends/view/friend/request/sent/" + userId + "?authToken=" + authToken);
    };
    AppService.prototype.cancelRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("senderId", data.senderId)
            .set("senderName", data.senderName)
            .set("receiverId", data.receiverId)
            .set("receiverName", data.receiverName)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/friends/cancel/friend/request", params);
    };
    AppService.prototype.acceptRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("senderId", data.senderId)
            .set("senderName", data.senderName)
            .set("receiverId", data.receiverId)
            .set("receiverName", data.receiverName)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/friends/accept/friend/request", params);
    };
    AppService.prototype.getUserDetails = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/users/" + userId + "/details?authToken=" + authToken);
    };
    AppService.prototype.unFriendRequest = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("senderId", data.senderId)
            .set("senderName", data.senderName)
            .set("receiverId", data.receiverId)
            .set("receiverName", data.receiverName)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/friends/unfriend/user", params);
    };
    AppService.prototype.getAllFriendsTopic = function (userId) {
        return this._http.get(this.baseUrl + "/topics/" + userId + "?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.changeCompleteState = function (checkedState, discussionId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("discussionId", discussionId)
            .set("checkedState", checkedState);
        return this._http.post(this.baseUrl + "/discussion/changeCompleteState", params);
    };
    //changeCompleteStateSubDiscussion
    AppService.prototype.changeCompleteStateSubDiscussion = function (checkedState, subDiscussionId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("subDiscussionId", subDiscussionId)
            .set("checkedState", checkedState);
        return this._http.post(this.baseUrl + "/discussion/changeCompleteStateSubDiscussion", params);
    };
    AppService.prototype.getUserNotification = function (id) {
        return this._http.get(this.baseUrl + "/notification/" + id + "/notification?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.saveUserNotification = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("senderName", data.senderName)
            .set("senderId", data.senderId)
            .set("receiverName", data.receiverName)
            .set("receiverId", data.receiverId)
            .set("redirectId", data.redirectId)
            .set("message", data.message)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/notification/saveNotification", params);
    };
    AppService.prototype.getDiscussionDetail = function (id) {
        return this._http.get(this.baseUrl + "/discussion/" + id + "/discussionDetails?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.addTopic = function (topic) {
        console.log(topic, 'client');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("authToken", topic.authToken)
            .set("topicName", topic.topicName)
            .set("topicCreatedBy", topic.topicCreatedBy)
            .set("topicModifiedBy", topic.topicModifiedBy);
        return this._http.post(this.baseUrl + "/topics/addTopic", params);
    };
    AppService.prototype.getAllTopic = function () {
        return this._http.get(this.baseUrl + "/topics/getAll?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("authToken"));
    };
    AppService.prototype.updateTopic = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("authToken", data.authToken)
            .set("TopicName", data.TopicName)
            .set("TopicModifiedBy", data.TopicModifiedBy);
        return this._http.post(this.baseUrl + "/topics/" + data.TopicId + "/updateTopic", params);
    };
    AppService.prototype.updateDiscussion = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("authToken", data.authToken)
            .set("DiscussionName", data.DiscussionName)
            .set("DiscussionModifiedBy", data.DiscussionModifiedBy);
        return this._http.post(this.baseUrl + "/discussion/" + data.discussionId + "/updateDiscussion", params);
    };
    AppService.prototype.updatesubDiscussion = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("authToken", data.authToken)
            .set("subDiscussionName", data.subDiscussionName)
            .set("subDiscussionModifiedBy", data.subDiscussionModifiedBy);
        return this._http.post(this.baseUrl + "/discussion/" + data.subDiscussionId + "/updatesubDiscussion", params);
    };
    AppService.prototype.deleteTopic = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/topics/" + data.TopicId + "/deleteTopic", params);
    };
    //For recursive delete of discussion and sub discussion
    AppService.prototype.deleteAllSubDiscussionsById = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/discussion/" + data.id + "/deleteSubDiscussion", params);
    };
    AppService.prototype.deleteAllDiscussionsById = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/discussion/" + data.discussionId + "/deleteDiscussion", params);
    };
    //For deleting single sub discussion
    AppService.prototype.deletesubDiscussion = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/discussion/" + data.subDiscussionId + "/deletesubDiscussion", params);
    };
    //For deleting Undo
    AppService.prototype.deleteUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("undoId", data.undoId)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/undo/deleteUndo", params);
    };
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("email", data.email);
        return this._http.post(this.baseUrl + "/users/resetPassword", params);
    };
    AppService.prototype.updatePassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("validationToken", data.validationToken)
            .set("password", data.password);
        return this._http.put(this.baseUrl + "/users/updatePassword", params);
    }; //end updatePassword
    AppService.prototype.getUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("topicId", data.topicId)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/undo/deleteUndo", params);
    };
    AppService.prototype.addUndoDetails = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("topicId", data.topicId)
            .set("action", data.action)
            .set("discussionId", data.discussionId)
            .set("subDiscussionId", data.subDiscussionId)
            .set("authToken", data.authToken);
        return this._http.post(this.baseUrl + "/undo/addUndo", params);
    };
    AppService.prototype.updateDiscussionTaskForUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("_id", data._id)
            .set("ownerTopic", data.ownerTopic)
            .set("discussionCreatedBy", data.discussionCreatedBy)
            .set("discussionModifiedBy", data.discussionModifiedBy)
            .set("completed", data.completed)
            .set("discussionModifiedDate", data.discussionModifiedDate)
            .set("discussionCreatedDate", data.discussionCreatedDate)
            .set("discussionDescription", data.discussionDescription)
            .set("discussionName", data.discussionName)
            .set("discussionId", data.discussionId);
        return this._http.post(this.baseUrl + "/undo/updateDiscussionUndo", params);
    };
    AppService.prototype.updatesubDiscussionTaskForUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("_id", data._id)
            .set("ownerDiscussion", data.ownerDiscussion)
            .set("subDiscussionCreatedBy", data.subDiscussionCreatedBy)
            .set("subDiscussionModifiedBy", data.subDiscussionModifiedBy)
            .set("completed", data.completed)
            .set("subDiscussionModifiedDate", data.subDiscussionModifiedDate)
            .set("subDiscussionCreatedDate", data.subDiscussionCreatedDate)
            .set("subDiscussionDescription", data.subDiscussionDescription)
            .set("subDiscussionName", data.subDiscussionName)
            .set("subDiscussionId", data.subDiscussionId);
        return this._http.post(this.baseUrl + "/undo/updatesubDiscussionUndo", params);
    };
    AppService.prototype.addDiscussionTaskForUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("_id", data._id)
            .set("ownerTopic", data.ownerTopic)
            .set("discussionCreatedBy", data.discussionCreatedBy)
            .set("discussionModifiedBy", data.discussionModifiedBy)
            .set("subdiscussion", data.subdiscussion)
            .set("completed", data.completed)
            .set("discussionModifiedDate", data.discussionModifiedDate)
            .set("discussionCreatedDate", data.discussionCreatedDate)
            .set("discussionDescription", data.discussionDescription)
            .set("discussionName", data.discussionName)
            .set("discussionId", data.discussionId);
        return this._http.post(this.baseUrl + "/undo/addDiscussionUndo", params);
    };
    AppService.prototype.addsubDiscussionTaskForUndo = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("_id", data._id)
            .set("ownerDiscussion", data.ownerDiscussion)
            .set("subDiscussionCreatedBy", data.subDiscussionCreatedBy)
            .set("subDiscussionModifiedBy", data.subDiscussionModifiedBy)
            .set("completed", data.completed)
            .set("subDiscussionModifiedDate", data.subDiscussionModifiedDate)
            .set("subDiscussionCreatedDate", data.subDiscussionCreatedDate)
            .set("subDiscussionDescription", data.subDiscussionDescription)
            .set("subDiscussionName", data.subDiscussionName)
            .set("subDiscussionId", data.subDiscussionId);
        return this._http.post(this.baseUrl + "/undo/addsubDiscussionUndo", params);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"margin-top: 30vh;\" class=\"col-12 mx-auto\">\n      <div class=\"card \">\n        <div class=\"card-body text-center\">\n          <div class=\"text-center\">\n            <div>\n              <h5>\n                The Page you are looking for does not exist.Please Go Back\n              </h5>\n            </div>\n            <div>\n              <h2><span style=\"color:red\">404 Error </span></h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer text-center\">\n          <div class=\"col-md-12 control\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">\n              Go Back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Location services

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        var _this = this;
        this.location = location;
        this.goBack = function () {
            _this.location.back();
        };
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.icons{\n    color:lightblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmljb25ze1xuICAgIGNvbG9yOmxpZ2h0Ymx1ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div style=\"margin-top: 30vh;\" class=\"col-12 mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-body text-center\">\n          <div class=\"text-center\">\n            <div>\n              <h3>Internal Server Error!</h3>\n            </div>\n            <div>\n              <h1><span style=\"color:red\">500 Error </span></h1>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer text-center\">\n          <div class=\"col-md-12 control\">\n            <button\n              type=\"button\"\n              class=\"btn btn-success\"\n              (click)=\"goToSignIn()\"\n            >\n              Redirect to Login\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
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


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(router) {
        this.router = router;
    }
    ServerErrorComponent.prototype.goToSignIn = function () {
        this.router.navigate(["/user/login"]);
    }; //end of goToSign function
    ServerErrorComponent.prototype.ngOnInit = function () { };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-server-error",
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
// import { Injectable } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.uri = "http://localhost:3000";
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        };
        this.sendNotify = function (objNotify) {
            _this.socket.emit("notify", objNotify);
        };
        this.notify = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                });
            });
        };
        //events that has to be topicen
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                _this.socket.on("verifyUser", function (data) {
                    observer.next(data);
                }); //On method
            }); //end observable
        }; //end verifyUser
        this.getUpdatesFromUser = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getUpdatesFromUser
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); //end On method
            }); //end observable
        };
        this.topicenAuthError = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
                _this.socket.on("auth-error", function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        };
        // disconnect socket
        this.exitSocket = function () {
            _this.socket.emit("disconnect");
            _this.socket.disconnect();
        }; // end exit socket
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.uri, { forceNew: true });
    }
    SocketService.prototype.topicen = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (Subscriber) {
            _this.socket.on(eventName, function (data) {
                Subscriber.next(data);
            });
        });
    };
    SocketService.prototype.emit = function (eventName, data) {
        this.socket.emit(eventName, data);
    };
    SocketService.prototype.handleError = function (err) {
        var errorMessage = "";
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <form\n      id=\"forgotPasswordForm\"\n      #forgotPasswordForm=\"ngForm\"\n      class=\"example-form\"\n    >\n      <mat-card-content>\n        <h4>Please enter email to send reset link</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" [formControl]=\"email\" required />\n          <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n        </mat-form-field>\n      </mat-card-content>\n      <button\n        mat-stroked-button\n        color=\"accent\"\n        (click)=\"forgotPasswordFunction()\"\n        [disabled]=\"!forgotPasswordForm.valid\"\n        class=\"btn-block\"\n      >\n        Reset</button\n      ><br />\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        if (!this.email.value) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (this.email.hasError("email")) {
            this.toastr.warning("Not a valid email", "Warning!");
        }
        else {
            var data = {
                email: this.email.value
            };
            this.appService.resetPassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Password", "Password reset instructions sent successfully");
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Reset Password Failed", "Email Not Found!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(["/serverError"]);
                }
            }); //end calling resetPassword
        }
    }; //end forgotPasswordFunction
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-forgot-password",
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <mat-card-header>\n      <mat-card-title>Log in</mat-card-title>\n    </mat-card-header>\n\n    <form id=\"loginForm\" #loginForm=\"ngForm\" class=\"example-form\">\n      <mat-card-content>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Email\" [formControl]=\"email\" required />\n          <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            placeholder=\"Password\"\n            name=\"password\"\n            type=\"password\"\n            minlength=\"8\"\n            #pwd=\"ngModel\"\n            (keydown)=\"loginKeyDown($event)\"\n            [(ngModel)]=\"password\"\n          />\n          <mat-hint>Min 8 characters</mat-hint>\n          <mat-error *ngIf=\"pwd.errors?.required\"\n            >You must enter a value</mat-error\n          >\n          <mat-error *ngIf=\"pwd.errors?.minlength\"\n            >You must enter atleast 8 characters</mat-error\n          >\n        </mat-form-field>\n      </mat-card-content>\n      <button\n        mat-stroked-button\n        color=\"accent\"\n        (click)=\"signInFunction()\"\n        [disabled]=\"!loginForm.valid\"\n        class=\"btn-block\"\n      >Log In</button>\n\n      <button\n      mat-stroked-button\n      color=\"accent\"\n      (click)=\"loginGeust()\"\n      [disabled]=\"!loginForm.valid\"\n      class=\"btn-block\"\n    >\n      Continue as Geust</button\n    >\n      \n      \n      <br />\n      <a\n      class=\"text-center\"\n      mat-raised-link\n      [routerLink]=\"['/user/signup']\"\n      style=\"text-decoration: none;display: block;\"\n      >Sign Up</a>\n      <a\n      class=\"text-center\"\n        mat-raised-link\n        [routerLink]=\"['/user/forgot-password']\"\n        style=\"text-decoration: none;display: block;\"\n        >Forgot Password?</a\n\n      >\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, _route, router, toastr, socketService) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.socketService = socketService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.baseUrl = "http://127.0.0.1:3000";
        this.friendsTopic = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_5__(this.baseUrl);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("userId");
        this.socket.on("online-user-topic", function (topic) {
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    };
    LoginComponent.prototype.signInFunction = function (name) {
        var _this = this;
        if (!this.email.value) {
            this.toastr.warning("Email is Required", "required");
        }
        else if (this.email.hasError("email")) {
            this.toastr.warning("Not a valid email", "warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "warning!");
        }
        else {
            var data = {
                email: this.email.value,
                password: this.password
            };
            this.appService.signIn(data).subscribe(function (apiResponse) {
                console.log(apiResponse, 'before');
                if (apiResponse.status == 200) {
                    _this.toastr.success("Login Successful", "Welcome to Discussion");
                    console.log(apiResponse, 'after');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("authToken", apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("userId", apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("userName", apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        _this.router.navigate(["/discussion/discussion-view"]);
                    }, 1000);
                }
                else {
                    _this.toastr.warning(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Login Failed", "User not Found or Email is not verified");
                }
                else if (error.status == 400) {
                    _this.toastr.warning("Login Failed", "Wrong password");
                }
                else {
                    _this.toastr.error("Some Error occured", "Error!");
                    _this.router.navigate(["/serverError"]);
                }
            });
        }
    };
    LoginComponent.prototype.loginGeust = function () {
        var _this = this;
        var data = {
            email: 'test@gmail.com',
            password: '123456789'
        };
        this.appService.signIn(data).subscribe(function (apiResponse) {
            console.log(apiResponse, 'before');
            if (apiResponse.status == 200) {
                _this.toastr.success("Login Successful", "Welcome to Discussion");
                console.log(apiResponse, 'after');
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("authToken", apiResponse.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("userId", apiResponse.data.userDetails.userId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].set("userName", apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                setTimeout(function () {
                    _this.router.navigate(["/discussion/discussion-view"]);
                }, 1000);
            }
            else {
                _this.toastr.warning(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Login Failed", "User not Found or Email is not verified");
            }
            else if (error.status == 400) {
                _this.toastr.warning("Login Failed", "Wrong password");
            }
            else {
                _this.toastr.error("Some Error occured", "Error!");
                _this.router.navigate(["/serverError"]);
            }
        });
    };
    LoginComponent.prototype.loginKeyDown = function ($event) {
        if ($event.keyCode == 13) {
            this.signInFunction();
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <form\n      id=\"ResetPasswordForm\"\n      #resetPasswordForm=\"ngForm\"\n      class=\"example-form\"\n    >\n      <mat-card-content>\n        <h4>Reset Password</h4>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Password</mat-label>\n          <input\n            matInput\n            type=\"password\"\n            placeholder=\"Enter your Password\"\n            minlength=\"8\"\n            #pwd=\"ngModel\"\n            [(ngModel)]=\"password\"\n            name=\"password\"\n            required\n          />\n          <mat-hint>* Min 8 Characters</mat-hint>\n          <mat-error *ngIf=\"pwd.errors?.required\"\n            >You must enter a value</mat-error\n          >\n          <mat-error *ngIf=\"pwd.errors?.minlength\"\n            >You must enter atleast 8 Chars</mat-error\n          >\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input\n            matInput\n            type=\"password\"\n            placeholder=\"Re-enter your Password\"\n            minlength=\"8\"\n            #conpwd=\"ngModel\"\n            [(ngModel)]=\"confirmPassword\"\n            name=\"confirmPassword\"\n            required\n          />\n          <mat-hint>* Min 8 Characters</mat-hint>\n          <mat-error *ngIf=\"conpwd.errors?.required\"\n            >You must enter a value</mat-error\n          >\n          <mat-error *ngIf=\"conpwd.errors?.minlength\"\n            >You must enter atleast 8 Chars</mat-error\n          >\n        </mat-form-field>\n      </mat-card-content>\n      <button\n        mat-stroked-button\n        color=\"accent\"\n        (click)=\"updatePasswordFunction()\"\n        class=\"btn-block\"\n      >\n        Save</button\n      ><br />\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.validationToken = this._route.snapshot.paramMap.get("validationToken");
    };
    ResetPasswordComponent.prototype.goToSignIn = function () {
        this.router.navigate(["/user/login"]);
    }; //end of goToSign function
    ResetPasswordComponent.prototype.updatePasswordFunction = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            this.toastr.warning("Password doesn't match", "Warning!");
        }
        else {
            var data = {
                validationToken: this.validationToken,
                password: this.password
            };
            this.appService.updatePassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please login", "Password Updated!");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Password Update failed", "Please request another password reset!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(["/serverError"]);
                }
            }); //end calling updatePassword
        }
    }; //end updatePasswordFunction
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-reset-password",
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box-signup\">\n    <mat-card-header>\n      <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n\n    <form id=\"signupform\" class=\"example-form\" #signupForm=\"ngForm\">\n      <mat-card-content>\n        <mat-form-field class=\"col-6\">\n          <input\n            matInput\n            placeholder=\"FirstName\"\n            minlength=\"3\"\n            #fstName=\"ngModel\"\n            [(ngModel)]=\"firstName\"\n            name=\"firstName\"\n            required\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"col-6\">\n          <input\n            matInput\n            placeholder=\"LastName\"\n            minlength=\"3\"\n            #lstName=\"ngModel\"\n            [(ngModel)]=\"lastName\"\n            name=\"lastName\"\n            required\n          />\n        </mat-form-field>\n\n        <mat-form-field class=\"col-6\">\n          <input matInput placeholder=\"Email\" [formControl]=\"email\" required />\n          <mat-error *ngIf=\"email.invalid\">{{ getErrorMessage() }}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"col-6\">\n          <input\n            matInput\n            placeholder=\"Password\"\n            type=\"password\"\n            minlength=\"8\"\n            #pwd=\"ngModel\"\n            [(ngModel)]=\"password\"\n            name=\"password\"\n            required\n          />\n\n          <mat-error *ngIf=\"pwd.errors?.required\"\n            >You must enter a value</mat-error\n          >\n          <mat-error *ngIf=\"pwd.errors?.minlength\"\n            >You must enter atleast 8 Chars</mat-error\n          >\n        </mat-form-field>\n\n        <mat-form-field class=\"col-6\">\n          <mat-select\n            placeholder=\"Select Country Name\"\n            [(value)]=\"country\"\n            (selectionChange)=\"onCountryChange()\"\n          >\n            <mat-option\n              *ngFor=\"let country of countries\"\n              [value]=\"country.code\"\n            >\n              {{ country.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"col-6\">\n          <input\n            matInput\n            placeholder=\"Mobile Number\"\n            type=\"number\"\n            [(ngModel)]=\"mobileNumber\"\n            name=\"mobileNumber\"\n            pattern=\"^\\d{10}$\"\n            maxlength=\"10\"\n            #mobNumber=\"ngModel\"\n            required\n          />\n\n          <span matPrefix>+{{ countryCode }} &nbsp;</span>\n\n          <mat-hint>* Max 10 Digits</mat-hint>\n          <mat-error *ngIf=\"mobNumber.errors?.required\"\n            >You must enter a value</mat-error\n          >\n          <mat-error *ngIf=\"mobNumber.errors?.pattern\"\n            >Only 10 Digits</mat-error\n          >\n        </mat-form-field>\n      </mat-card-content>\n\n      <button\n        mat-stroked-button\n        (click)=\"signupFunction()\"\n        [disabled]=\"!signupForm.valid\"\n        color=\"accent\"\n        class=\"btn-block\"\n      >\n        Register\n      </button>\n      <button mat-stroked-button color=\"accent\" class=\"btn-block\">\n        Sign In\n      </button>\n      <a\n      class=\"text-center mt-2\"\n      mat-raised-link\n      [routerLink]=\"['/user/login']\"\n      style=\"text-decoration: none;display: block;\"\n      >Log In</a>\n    </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.Roles = ["Admin", "Author", "Reader"];
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.countries = [];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getCountryCodes();
    };
    SignUpComponent.prototype.goToSignIn = function () {
        this.router.navigate(["/user/login"]);
    };
    SignUpComponent.prototype.getCountries = function () {
        var _this = this;
        this.appService.getCountryNames().subscribe(function (data) {
            _this.allCountries = data;
            for (var i in data) {
                var singleCountry = {
                    name: data[i],
                    code: i
                };
                _this.countries.push(singleCountry);
            }
            _this.countries = _this.countries.sort(function (first, second) {
                return first.name.toUpperCase() < second.name.toUpperCase()
                    ? -1
                    : first.name.toUpperCase() > second.name.toUpperCase()
                        ? 1
                        : 0;
            });
        });
    };
    SignUpComponent.prototype.getCountryCodes = function () {
        var _this = this;
        this.appService.getCountryNumbers().subscribe(function (data) {
            _this.countryCodes = data;
        });
    };
    SignUpComponent.prototype.onCountryChange = function () {
        this.countryCode = this.countryCodes[this.country];
        this.countryName = this.country;
    };
    SignUpComponent.prototype.getErrorMessage = function () {
        return this.email.hasError("required")
            ? "You must enter a value"
            : this.email.hasError("email")
                ? "Not a valid email"
                : "";
    };
    SignUpComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning("First Name is required", "Warning!");
        }
        else if (!this.lastName) {
            this.toastr.warning("Last Name is required", "Warning!");
        }
        else if (!this.mobileNumber) {
            this.toastr.warning("Mobile Number is required", "Warning!");
        }
        else if (!this.country) {
            this.toastr.warning("Country is required", "Warning!");
        }
        else if (!this.email.value) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else if (this.email.hasError("email")) {
            this.toastr.warning("Not a valid email", "Warning!");
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: this.countryCode + " " + this.mobileNumber,
                email: this.email.value,
                password: this.password,
                countryName: this.countryName
            };
            this.appService.signUp(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please check your email", "Registered with Discussion");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(["/serverError"]);
            }); //end calling signUpFunction
        }
    }; //end signUp function
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], runGuardsAndResolvers: "always" },
    { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: "forgot-password", component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
    { path: "verify-email/:userId", component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailComponent"] },
    { path: "reset-password/:validationToken", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__["VerifyEmailComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_11__["UserRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"box\">\n    <mat-card-header>\n      <mat-card-title>Email Verification Status</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <h1>Welcome to Discussion</h1>\n      <div>\n        <h5 style=\"color:red\">{{ message }}</h5>\n      </div>\n\n      <a class=\"nav-link btn-block\" [routerLink]=\"['/user/login']\">Login </a>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.userId = this._route.snapshot.paramMap.get("userId");
        this.verifyEmailFunction();
    };
    VerifyEmailComponent.prototype.verifyEmailFunction = function () {
        var _this = this;
        this.appService.verifyEmail(this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Please login", "Email Verified!");
                _this.message = "Your account has been activated. You can login now";
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Email Verification failed", "User Not Found!");
                _this.message = "Email Verification failed";
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(["/serverError"]);
            }
        }); //end calling verifyEmail
    }; //end verifyEmailFunction
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-verify-email",
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The topic of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Discussion-Forum\Discussion-Forum-FrontEnd\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map