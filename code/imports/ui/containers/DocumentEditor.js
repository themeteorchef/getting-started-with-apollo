import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import DocumentEditor from '../components/DocumentEditor';

export const CreateDocument = graphql(gql`
  mutation createDocument($owner: String!, $title: String!, $body: String!) {
    createDocument(owner: $owner, title: $title, body: $body) {
      _id
    }
  }
`)(DocumentEditor);

export const UpdateDocument = graphql(gql`
  mutation updateDocument($_id: String!, $title: String!, $body: String!) {
    updateDocument(_id: $_id, title: $title, body: $body) {
      _id
    }
  }
`)(DocumentEditor);
