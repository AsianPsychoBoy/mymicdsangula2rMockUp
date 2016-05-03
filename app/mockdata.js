System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomData;
    return {
        setters:[],
        execute: function() {
            DomData = (function () {
                function DomData() {
                    this.navTitles = ["Home", "Lunch", "Planner", "Stuff", "Poopyface"];
                }
                DomData.prototype.getPlanner = function () {
                    //use http to get planner info
                };
                return DomData;
            }());
            exports_1("DomData", DomData);
        }
    }
});
//# sourceMappingURL=mockdata.js.map