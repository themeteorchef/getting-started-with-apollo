/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { browserHistory } from 'react-router';
import { FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

export default class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    const initialDocument = props.doc;
    this.state = { doc: initialDocument };
    this.handleMutation = this.handleMutation.bind(this);
  }

  handleMutation(event) {
    event.preventDefault();

    const isCreate = !this.props.doc;
    const successMessage = isCreate ? 'Document created!' : 'Document updated!';

    const variables = {
      title: this.title.value,
      body: this.body.value,
    };

    if (isCreate) variables.owner = Meteor.userId();
    if (!isCreate) variables._id = this.state.doc._id;

    this.props.mutate({
      variables,
    })
    .then(({ data }) => {
      const { createDocument, updateDocument } = data;
      const _id = createDocument ? createDocument._id : updateDocument._id;
      browserHistory.push(`/documents/${_id}`);

      if (!isCreate) this.props.data.refetch();
      Bert.alert(successMessage, 'success');
    }).catch((error) => {
      Bert.alert(error, 'danger');
    });
  }

  componentDidMount() {
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.state;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ this.handleMutation }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <input
          ref={ title => (this.title = title)}
          type="text"
          className="form-control"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <input
          ref={ body => (this.body = body)}
          className="form-control"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

DocumentEditor.propTypes = {
  data: React.PropTypes.object,
  doc: React.PropTypes.object,
  mutate: React.PropTypes.func,
};
