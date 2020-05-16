"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// Rutas
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var nopagefound_component_1 = require("./shared/nopagefound/nopagefound.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var progress_component_1 = require("./pages/progress/progress.component");
var graficas1_component_1 = require("./pages/graficas1/graficas1.component");
var header_component_1 = require("./shared/header/header.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var breadcrumbs_component_1 = require("./shared/breadcrumbs/breadcrumbs.component");
var pages_component_1 = require("./pages/pages.component");
var register_component_1 = require("./login/register.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                nopagefound_component_1.NopagefoundComponent,
                dashboard_component_1.DashboardComponent,
                progress_component_1.ProgressComponent,
                graficas1_component_1.Graficas1Component,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                pages_component_1.PagesComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.APP_ROUTES
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
