"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages/pages.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var login_component_1 = require("./login/login.component");
var progress_component_1 = require("./pages/progress/progress.component");
var graficas1_component_1 = require("./pages/graficas1/graficas1.component");
var nopagefound_component_1 = require("./shared/nopagefound/nopagefound.component");
var register_component_1 = require("./login/register.component");
var appRoutes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
            { path: 'progress', component: progress_component_1.ProgressComponent },
            { path: 'graficas1', component: graficas1_component_1.Graficas1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', component: nopagefound_component_1.NopagefoundComponent },
];
exports.APP_ROUTES = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
