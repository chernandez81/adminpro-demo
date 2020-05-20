"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var pages_routes_1 = require("./pages.routes");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var ng2_charts_1 = require("ng2-charts");
var pages_component_1 = require("./pages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var progress_component_1 = require("./progress/progress.component");
var graficas1_component_1 = require("./graficas1/graficas1.component");
var incrementador_component_1 = require("../components/incrementador/incrementador.component");
var grafico_dona_component_1 = require("../components/grafico-dona/grafico-dona.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                pages_component_1.PagesComponent,
                dashboard_component_1.DashboardComponent,
                progress_component_1.ProgressComponent,
                graficas1_component_1.Graficas1Component,
                incrementador_component_1.IncrementadorComponent,
                grafico_dona_component_1.GraficoDonaComponent
            ],
            exports: [
                dashboard_component_1.DashboardComponent,
                progress_component_1.ProgressComponent,
                graficas1_component_1.Graficas1Component
            ],
            imports: [
                shared_module_1.SharedModule,
                pages_routes_1.PAGES_ROUTES,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
