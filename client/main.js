import React from 'react'
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard';

Meteor.startup( () => {
    ReactDOM.render( <Dashboard/>, document.querySelector( '.render-target' ) )
} );
