import { GraphQLResolveInfo } from "graphql";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

import { OrganizationDocument } from "./types";

import {
  OrganizationUpdateArgs,
  Organization,
  OrganizationCreateArgs,
} from "../types";

import { projectionFromGraphQLResolveInfo } from "./projection_from_gql_info";

import {
  organizationDocumentToDomain,
  organizationCreateDataToOrganizationDocument,
  organizationUpdateDocumentData,
} from "./mappers/organization";

export class OrganizationDataSource extends MongoDataSource<OrganizationDocument> {
  /// CREATE
  async createOrganization(
    args: OrganizationCreateArgs
  ): Promise<Organization> {
    const { data } = args;
    const document = organizationCreateDataToOrganizationDocument(data);
    const { insertedId } = await this.collection.insertOne(document);

    return organizationDocumentToDomain({
      _id: insertedId,
      ...document,
    });
  }

  /// READ
  async getAllOrganizations(info: GraphQLResolveInfo): Promise<Organization[]> {
    return this.collection
      .find({}, { projection: projectionFromGraphQLResolveInfo(info) })
      .map((it) => organizationDocumentToDomain(it))
      .toArray();
  }

  async getOrganization(id: string): Promise<Organization> {
    return organizationDocumentToDomain(
      await this.collection.findOne(new ObjectId(id))
    );
  }

  /// UPDATE
  async updateOrganization(
    args: OrganizationUpdateArgs,
    info: GraphQLResolveInfo
  ): Promise<Organization> {
    const { where, data } = args;

    const updateData = organizationUpdateDocumentData(data);

    const originalDocument = await this.collection.findOneAndUpdate(
      { _id: new ObjectId(where.id) },
      { $set: updateData },
      { projection: projectionFromGraphQLResolveInfo(info) }
    );

    const updatedDocument = {
      ...originalDocument,
      ...updateData,
    };

    // ToDo: map args.data
    return { ...organizationDocumentToDomain(updatedDocument) };
  }

  /// DELETE
}
