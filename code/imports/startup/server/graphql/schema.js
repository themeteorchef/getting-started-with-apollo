import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import documents from '../../../api/documents/resolvers';
import DocumentMutations from '../../../api/documents/mutations';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  description: 'RootQuery for the application.',
  fields: {
    documents,
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Mutations for the application.',
  fields: {
    ...DocumentMutations,
  },
});

export default new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
});
