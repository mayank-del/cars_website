import Contact from './Contact';
import React from 'react'
import {BrowserRouter as Router,Route,Link,NavLink,Switch,useHistory} from "react-router-dom";
const Render = () => {
    return (

            <Router>
            <Switch>

                <Route exact path="/ontact" >
                    <Contact/>
                </Route>
                
            </Switch>
            </Router>
    )
}

export default Render


