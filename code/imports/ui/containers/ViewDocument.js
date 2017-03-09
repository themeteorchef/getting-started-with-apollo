import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ViewDocument from '../pages/ViewDocument.js';

const documentQuery = gql`
  query ($_id: String!){
    documents(_id: $_id) {
      _id
      title
      body
    }
  }
`;

const documentMutation = gql`
  mutation deleteDocument($_id: String!){
    deleteDocument(_id: $_id) {
      _id
    }
  }
`;

export default compose(
  graphql(documentQuery, {
    options: ({ params }) => ({
      variables: {
        _id: params._id,
      },
      pollInterval: 10000,
    }),
  }),
  graphql(documentMutation, {
    options: ({ params }) => ({
      variables: {
        _id: params._id,
      },
    }),
  }),
)(ViewDocument);
