import React from 'react'
import Homepage from './components/Homepage/Homepage';
import NewPunch from './components/NewPunch/NewPunch';
import EditPunch from './components/EditPunch/EditPunch';
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/new' component={NewPunch} />
        <Route path='/edit/:id' component={EditPunch} />
    </Switch>
)