"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var platform_browser_1 = require('@angular/platform-browser');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [platform_browser_1.Title, app_routes_1.APP_ROUTER_PROVIDERS]).then(function () { return window.console.info('Angular finished bootstrapping your application!'); }, function (error) {
    console.warn('Angular was not able to bootstrap your application.');
    console.error(error);
});
//# sourceMappingURL=main.js.map