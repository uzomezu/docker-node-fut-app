import React from 'react';
import {Switch, Route} from 'react-router-dom';
class App extends React.Component {
    render(){
        return (
            <>
            <h1>
                Hello World!
            </h1>
            <Switch>
                <Route exact path="/" component={}/>
            </Switch>
            </>
        )
    }
}

export default App