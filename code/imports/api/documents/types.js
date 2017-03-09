import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Document',
  description: 'GraphQL Type for a document.',
  fields: {
    _id: { type: GraphQLString },
    owner: { type: GraphQLString },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});
