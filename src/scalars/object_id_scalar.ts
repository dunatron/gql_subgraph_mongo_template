import { GraphQLScalarType, Kind } from "graphql";
import { ObjectId } from "mongodb";

export const ObjectIdType = new GraphQLScalarType({
  name: "ObjectId",
  description: "MongoDB ObjectId scalar type",
  serialize: (value) => {
    if (value instanceof ObjectId) {
      return value.toHexString();
    }
    return null;
  },
  parseValue: (value) => {
    if (typeof value === "string" && ObjectId.isValid(value)) {
      return new ObjectId(value);
    }
    return null;
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING && ObjectId.isValid(ast.value)) {
      return new ObjectId(ast.value);
    }
    return null;
  },
});
