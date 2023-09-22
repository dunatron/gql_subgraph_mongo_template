import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { MongoClient, ServerApiVersion } from "mongodb";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { OrganizationDataSource } from "./datasource/organization_api";

import { config } from "dotenv";

// Load environment variables from .env file
config();

const uri = `mongodb+srv://${process.env.MONGO_DB_ADMIN}:${process.env.MONGO_DB_ADMIN_PASSWORD}\
@${process.env.ATLAS_DB_CLUSTER_ID}.mongodb.net\
/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startApolloServer() {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  const port = 4001;
  const subgraphName = "organizations";

  try {
    await client.connect();
    const { url } = await startStandaloneServer(server, {
      context: async () => {
        return {
          dataSources: {
            organizationAPI: new OrganizationDataSource(
              client.db(process.env.MONGO_DB_NAME).collection("Organization")
            ),
          },
        };
      },
      listen: { port },
    });

    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  } catch (err) {
    console.error(err);
  }
}

startApolloServer();
