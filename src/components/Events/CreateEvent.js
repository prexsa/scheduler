import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

// https://reactdatepicker.com/
class CreateEvent extends Component {
  handleSubmit(e, {formData}) {
    e.preventDefault();
    console.log('=> formData: ', e)
  }
  render() {
    return (
      <div>
        Hello World!
        - Create Event
        - Event Name
        - Event Dates
        - List of Employees Working Event and Role Title
        <h2>Create An Event</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Event Name</label>
            <input placeholder='Event Name' />
          </Form.Field>
          <Form.Field>
            <label>Event Location</label>
            <input placeholder='Event Location' />
          </Form.Field>
          <Form.Field>
            <label>Event Dates</label>
            <input placeholder='Event Dates' />
          </Form.Field>
          <Button type='submit'>Create</Button>
        </Form>
      </div>
    )
  }
}

export default CreateEvent;