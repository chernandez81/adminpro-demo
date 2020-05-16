"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var progress_component_1 = require("./progress/progress.component");
var graficas1_component_1 = require("./graficas1/graficas1.component");
var pagesRoutes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'progress', component: progress_component_1.ProgressComponent },
            { path: 'graficas1', component: graficas1_component_1.Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];
exports.PAGES_ROUTES = router_1.RouterModule.forChild(pagesRoutes);
