import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from "./components/Dashboard/Dashboard"
import Wizard from "./components/Wizard/Wizard"
import Stepone from './components/Wizard/Stepone'
import Steptwo from './components/Wizard/Steptwo'
import Stepthree from './components/Wizard/Stepthree'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/Wizard' component={Wizard} />
        <Route path="/Stepone" component={Stepone}/>
        <Route path="/Steptwo" component={Steptwo}/>
        <Route path="/Stepthree" component={Stepthree}/>
        {/* <Route path='/contact' component={Contact} />
        <Route path='/videos/:videoId' component={ViewVideo} />
        <Route path='/videos' component={Videos} /> */}
        {/* <Route render={() => {
            return(
                <div>
                <h1>Hidden Component</h1>
                <p>This is being rendered from the routes page</p>
                </div>
            )
        }} path='/hidden'/> */}
    </Switch>
)