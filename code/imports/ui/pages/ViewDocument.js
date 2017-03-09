import React from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';

const handleEdit = (_id) => {
  browserHistory.push(`/documents/${_id}/edit`);
}

const handleRemove = (mutate, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    mutate({ _id })
    .then(() => {
      browserHistory.push('/documents');
      Bert.alert('Document deleted!', 'success');
    }).catch((error) => {
      Bert.alert(error, 'danger');
    });
  }
};

const ViewDocument = ({ data, mutate }) => {
  const { loading } = data;
  const doc = data.documents && data.documents[0];
  return !loading ? (
    <div className="ViewDocument">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ doc && doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(doc._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(mutate, doc._id) } className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { doc && doc.body }
    </div>
  ) : <div></div>;
};

ViewDocument.propTypes = {
  data: React.PropTypes.object,
  mutate: React.PropTypes.func,
};

export default ViewDocument;
