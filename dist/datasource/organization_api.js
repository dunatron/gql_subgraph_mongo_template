"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
const organizations_data_1 = require("./organizations_data");
class OrganizationAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }
    getAllOrganizations() {
        return organizations_data_1.organizations;
        // return this.get<OrganizationModel[]>("organizations");
    }
}
exports.OrganizationAPI = OrganizationAPI;
