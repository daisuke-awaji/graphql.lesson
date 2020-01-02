import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync(__dirname + "/schema.graphql", "UTF-8");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(info => console.log(info));
