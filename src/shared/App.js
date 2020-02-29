import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { SigninContainer, Regist, Home } from 'pages';


class App extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={SigninContainer}/>
                <Route exact path="/regist" component={Regist} />
                <Route path="/home" component={Home} />
            </div>
        );
    }
}

export default App;