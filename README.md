# GraphQL-Server-Ex

Getting Started: https://www.apollographql.com/docs/apollo-server/getting-started

- import { ApolloServer } from '@apollo/server' := This is for us to setup the server, configure it and tell apollo how to handle all of our data, our responsive queries. Need to put type as module in package.json for this to work.
- import { startStandaloneServer } from '@apollo/server/standalone' := This is just to start up the server so that we can listen for requests. Need to put type as module in package.json for this to work.

- Typedefs: Descriptions of our datatypes and the relation they have with other datatypes. They are the definitions of the different types of data we want to expose on our graph and the entry points.
- Resolvers: A bunch of resolver functions that determine how we respond to queries for different data on the graph. These functions
- Typedefs is a schema or a map for apollo server to structure the graph but they dont actually handle the queries. Then we make resolver functions to handle the queries based on the schema and types.

- Primitive types: int, float, String, boolean, ID.
- Object types: An object type contains a collection of fields, each of which has its own type. Two object types can include each other as fields.
