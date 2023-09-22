import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // get a list of organizations
    organizations: (_, __, { dataSources }, info) =>
      dataSources.organizationAPI.getAllOrganizations(info),
    // get a single organization by ID
    organization: (_, { id }, { dataSources }) =>
      dataSources.organizationAPI.getOrganization(id),
  },
  Mutation: {
    // create a new organization
    createOrganization: (_, args, { dataSources: { organizationAPI } }) =>
      organizationAPI.createOrganization(args.input),
    // update an organization
    updateOrganization: (_, args, { dataSources: { organizationAPI } }, info) =>
      organizationAPI.updateOrganization(args.input, info),
  },
};
