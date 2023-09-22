"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.typeDefs = (0, graphql_tag_1.default) `
  type Query {
    "Get a list of organizations"
    organizations: [Organization!]!

    organization: Organization!
  }

  type Organization {
    "The unique identifier for the organization"
    id: ID!
    "The name of the organization"
    name: String!
    "The official registration number or ID of the company"
    registrationNumber: String!
    "The street address of the company's physical location"
    address: String!
    "The city where the company is located"
    city: String!
    "The state or province where the company is located"
    state: String!
    "The postal or ZIP code for the company's location"
    postalCode: String!
    "The country where the company is based"
    country: String!
    "The primary contact phone number for the organization"
    phoneNumber: String!
    "The primary contact email address for the organization"
    email: String!
    "The organization's website URL (optional)"
    website: String
    "The date when the organization was founded (optional)"
    foundingDate: String
    "The industry or sector to which the organization belongs (optional)"
    industry: String
    "A brief description or overview of the organization (optional)"
    description: String
  }
`;
