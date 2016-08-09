// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// // Layout
// import ExampleLayout from 'layout/example';

// // UI
// import ExampleComponent from 'ui/example';

// const Site = (
//   <MuiThemeProvider>
//     <Router history={browserHistory}>
//       <Route component={ExampleLayout}>
//         <Route path="/" component={ExampleComponent} />
//         <Route path="/example" component={ExampleComponent} />
//       </Route>
//     </Router>
//   </MuiThemeProvider>
// );

// render(Site, document.getElementById('app'));
// 
import io from 'socket.io-client';

const socket = io();

var div = document.querySelector("#messages");
var input = document.querySelector("#message");


socket.on('message', function(message){
  div.innerHTML += `<p>${message}</p>`;
})


document.querySelector("#chat").addEventListener("submit", function(e){
  e.preventDefault();

  div.innerHTML += `<p>${input.value}</p>`;

  socket.emit('message', input.value);
})































