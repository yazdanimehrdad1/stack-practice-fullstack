import { ApolloServer,gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

// const typeDefs = gql`
//   type Query{
//     hello: String!  
//   }
// `

// const resolvers = {
//   Query:{
//     hello: ()=> "hello"
//   }
// }



const startServer = async (typeDefs, resolvers) => {
  const app = express();
  const httpServer = http.createServer(app);


  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start()
  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/test3", {
    useNewUrlParser: true
  });

  await new Promise (resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startServer(typeDefs,resolvers);