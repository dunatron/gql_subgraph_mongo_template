import { OrganizationDataSource } from "./datasource/organization_api";

export type DataSourceContext = {
  dataSources: {
    organizationAPI: OrganizationDataSource;
  };
};
