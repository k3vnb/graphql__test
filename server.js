const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const books = require('./store');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} = require('graphql');

const app = express();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { type: GraphQLString, resolve: () => 'Hello Worlds' },
      numero: { type: GraphQLInt, resolve: () => 12 },
      bool: { type: GraphQLBoolean, resolve: () => true },
    })
  })
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));
app.listen(5000, () => console.log('Server running on Port 5000'));
