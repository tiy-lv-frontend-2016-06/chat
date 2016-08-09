import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import {connectSocket} from 'api/actions'

export default React.createClass({
  componentWillMount: function () {
    connectSocket();
  },
  render: function () {
    return (
      <div>
        <Drawer>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/example"><MenuItem>Example</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
})  