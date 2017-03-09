import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DocumentsList from '../components/DocumentsList.js';

const documentsQuery = gql`
  query {
    documents {
      _id
      title
    }
  }
`;

export default graphql(documentsQuery, {
  options: {
    pollInterval: 10000,
  },
})(DocumentsList);
