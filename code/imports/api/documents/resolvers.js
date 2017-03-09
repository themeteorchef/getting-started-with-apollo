import { GraphQLList, GraphQLString } from 'graphql';
import Documents from './documents';
import Document from './types';

export default {
  type: new GraphQLList(Document),
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
  },
  resolve(parent, args) {
    return Documents.find(args).fetch();
  },
};
