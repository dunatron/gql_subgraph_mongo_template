"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        organizations: (_, __, { dataSources }) => dataSources.organizationAPI.getAllOrganizations(),
        // get a single track by ID, for the track page
        organization: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },
};
