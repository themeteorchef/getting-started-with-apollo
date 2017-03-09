import { GraphQLNonNull, GraphQLString } from 'graphql';
import Document from './types';
import Documents from './documents';

export default {
  createDocument: {
    type: Document,
    args: {
      owner: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, args) {
      const _id = Documents.insert(args);
      return { _id };
    },
  },
  updateDocument: {
    type: Document,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id, title, body }) {
      Documents.update(_id, { $set: { title, body } });
      return { _id };
    },
  },
  deleteDocument: {
    type: Document,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id }) {
      Documents.remove(_id);
      return { _id };
    },
  },
};
