import dotenv from "dotenv";
dotenv.config();
import 'reflect-metadata'
import express from 'express'
import cookieParser from "cookie-parser";
import {buildSchema} from "type-graphql"
import { ApolloServer } from "apollo-server-express";
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageProductionDefault,
  } from "apollo-server-core";
async function bootstrap(){
    //build schema

const schema = await buildSchema({
    resolvers,
    // authChecker
})

    //initialize express
const app =express()
app.use(cookieParser())


    //create Apollo server
const server = new ApolloServer({
    schema,
    context: (ctx)=>{
        console.log(ctx)
        return ctx
    },
    plugins:[
        process.env.NODE_ENV ==='production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
})

    //await server.start()
    await server.start()

    //apply middleware to server
    server.applyMiddleware({app})

    //apply.listen to express server
    app.listen({port:4000}, ()=>{
        console.log(`App is listening on 4000`)
    })

    //connect to db
}

bootstrap()
console.log("hello world")

