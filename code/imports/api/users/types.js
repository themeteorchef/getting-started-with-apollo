import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import Documents from '../documents/documents';
import Document from '../documents/types';

export default new GraphQLObjectType({
  name: 'User',
  description: 'GraphQL Type for a user.',
  fields: {
    _id: { type: GraphQLString },
    fullName: {
      type: GraphQLString,
      resolve(user) {
        return `${user.profile.name.first} ${user.profile.name.last}`;
      },
    },
    emailAddress: {
      type: GraphQLString,
      resolve(user) {
        return user.emails[0].address;
      },
    },
    documents: {
      type: new GraphQLList(Document),
      resolve(user) {
        return Documents.find({ owner: user._id }).fetch();
      },
    },
  },
});
