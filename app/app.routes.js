"use strict";
var router_providers_1 = require('@angular/router/router_providers');
var mainContent_component_1 = require('./Home/mainContent.component');
exports.routes = [
    { path: '/', component: mainContent_component_1.mainContent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_providers_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map