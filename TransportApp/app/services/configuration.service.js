"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./utilities");
//@Injectable()
var ConfigurationService = (function () {
    function ConfigurationService() {
        this.baseUrl = utilities_1.Utilities.baseUrl().replace(/\/$/, '');
    }
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map