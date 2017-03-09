import React from 'react';
import { CreateDocument } from '../containers/DocumentEditor.js';

const NewDocument = () => (
  <div className="NewDocument">
    <h4 className="page-header">New Document</h4>
    <CreateDocument />
  </div>
);

export default NewDocument;
