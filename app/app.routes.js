"use strict";
var router_1 = require('@angular/router');
var mainContent_component_1 = require('./Home/mainContent.component');
exports.routes = [
    { path: '', component: mainContent_component_1.mainContent },
    { path: 'Home', component: mainContent_component_1.mainContent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map