import { ObjectId } from "mongodb";

import { OrganizationDocument, OrganizationUpdateDocument } from "../types";

import {
  Organization,
  OrganizationCreateInput,
  OrganizationUpdateInput,
} from "../../types";

export const organizationDocumentToDomain = (
  item: OrganizationDocument
): Organization => {
  const { _id, ...rest } = item;
  return {
    id: _id.toHexString(),
    ...rest,
  };
};

export const organizationCreateDataToOrganizationDocument = (
  data: OrganizationCreateInput
): OrganizationDocument => {
  return {
    _id: new ObjectId(),
    ...data,
  };
};

//
export const organizationUpdateDocumentData = (
  data: OrganizationUpdateInput
): OrganizationUpdateDocument => {
  /// the shape is the same
  const updatedData: OrganizationUpdateDocument = {
    ...data,
  };

  if (data.name !== null && data.name !== undefined) {
    updatedData.name = data.name;
  }
  return {
    ...updatedData,
  };
};
