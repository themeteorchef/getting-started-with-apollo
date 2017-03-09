import React from 'react';
import { UpdateDocument } from '../containers/DocumentEditor.js';

const EditDocument = ({ data }) => {
  const { loading } = data;
  const doc = data.documents && data.documents[0];
  return !loading ? (
    <div className="EditDocument">
      <h4 className="page-header">Editing "{ doc.title }"</h4>
      <UpdateDocument data={ data } doc={ doc } />
    </div>
  ) : <div></div>;
};

EditDocument.propTypes = {
  data: React.PropTypes.object,
};

export default EditDocument;
