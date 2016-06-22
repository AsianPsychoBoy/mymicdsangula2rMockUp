"use strict";
var router_1 = require('@angular/router');
var mainContent_component_1 = require('./Home/mainContent.component');
var lunchContent_component_1 = require('./Lunch/lunchContent.component');
exports.routes = [
    { path: '', component: mainContent_component_1.mainContent },
    { path: 'Home', component: mainContent_component_1.mainContent },
    { path: 'Lunch', component: lunchContent_component_1.lunchContent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map