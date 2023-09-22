import { GraphQLResolveInfo } from "graphql";

export const projectionFromGraphQLResolveInfo = (info: GraphQLResolveInfo) => {
  const projection: Record<string, number> = {};

  // Traverse the selection set and include fields in the projection
  info.fieldNodes[0].selectionSet.selections.forEach((selection) => {
    if (selection.kind === "Field" && selection.name.kind === "Name") {
      const fieldName = selection.name.value;
      projection[fieldName] = 1;
    }
  });

  return projection;
};
