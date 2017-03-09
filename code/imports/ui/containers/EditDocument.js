import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import EditDocument from '../pages/EditDocument';

const documentQuery = gql`
  query ($_id: String!){
    documents(_id: $_id) {
      _id
      title
      body
    }
  }
`;

export default graphql(documentQuery, {
  options: ({ params }) => ({
    variables: {
      _id: params._id,
    },
    pollInterval: 10000,
  }),
})(EditDocument);
