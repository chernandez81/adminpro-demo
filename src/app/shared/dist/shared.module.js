"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var nopagefound_component_1 = require("./nopagefound/nopagefound.component");
var header_component_1 = require("./header/header.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var breadcrumbs_component_1 = require("./breadcrumbs/breadcrumbs.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                nopagefound_component_1.NopagefoundComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                breadcrumbs_component_1.BreadcrumbsComponent
            ],
            exports: [
                nopagefound_component_1.NopagefoundComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                breadcrumbs_component_1.BreadcrumbsComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
