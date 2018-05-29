//https://medium.com/dailyjs/why-build-your-forms-with-redux-form-bcacbedc9e8
//https://codesandbox.io/s/MQnD536Km

import React, { Component } from 'react'

import { Field, reduxForm, reset } from 'redux-form'

import InputText from '../InputText'

import { connect } from 'react-redux';
import EditButton from '../../Buttons/Edit';
import DeleteButton from '../../Buttons/Delete';
import SaveButton from '../../Buttons/Save';
import CancelButton from '../../Buttons/Cancel';

const validateNotEmpty = value => !value ? 'Must enter a value' : null

class PostForm extends Component {
  render() {
    const {invalid} = this.props
    return (
      <form>

        <Field name="body" editable={this.props.editable} component={InputText} validate={validateNotEmpty} />
        {!this.props.editable && (
          <div>
            <EditButton onClick={() => this.props.onEdit()} />{' '}
            <DeleteButton onClick={() => this.props.onDelete()} />
          </div>
        )}
        {this.props.editable && (
          <div>
            <SaveButton disabled={invalid} onClick={this.props.handleSubmit(this.props.onSave)} />{' '}
            <CancelButton onClick={() => {this.props.dispatch(reset('postForm')); this.props.onCancel();}} />
          </div>
        )}

      </form>
    )
  }
}

const config = {
  form: 'postForm',
  enableReinitialize: true
}
let Form = reduxForm(config)(PostForm);

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      body: ownProps.value,
    },

    editable: ownProps.editable,

    onEdit: ownProps.onEdit,
    onCancel: ownProps.onCancel,
    onSave: ownProps.onSave,
    onDelete: ownProps.onDelete,
  }
}
export default connect(mapStateToProps)(Form);