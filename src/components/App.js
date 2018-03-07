import React, { Component } from 'react';
import CreateEvent from './Events/CreateEvent';
import { Button, Icon } from 'semantic-ui-react';

const persons = [
  'Preksa Mam', 'Lyvar Tum', 'Lyvo Tum', 'Jimmie Le', 'Veasna Youphon', 'John Padilla'
]

export default class App extends Component {
  render() {
    return (
      <div className="app-main-container">
        <h1>Event Scheduler</h1>
        <CreateEvent />
        <h3>Event Name: Keller Williams Reunion</h3>
        <h5>Dates of Event: 2/12/2018 - 2/20/2018</h5>
        <table className="employees-table">
          <tbody>
            <tr>
              <th>Names</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Rate ($)</th>
              <th>Total Hours</th>
            </tr>
            <tr>
              <td>Preksa Mam</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Lyvar Tum</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Lyvo Tum</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Jimmie Le</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Veasna Youphon</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
        <h3>Event Name: AO2018</h3>
        <h5>Dates of Event: 2/26/2018 - 3/3/2018</h5>
        <table className="employees-table">
          <tbody>
            <tr>
              <th>Names</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Rate ($)</th>
              <th>Total Hours</th>
            </tr>
            <tr>
              <td>Preksa Mam</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>John Padilla</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$30.00</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Lyvo Tum</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Michael Leproye</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$40.00</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Veasna Youphon</td>
              <td>6:00 AM</td>
              <td>6:00 PM</td>
              <td>$22.50</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
