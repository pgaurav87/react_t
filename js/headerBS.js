/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Navbar from './navBar';

class App extends React.Component{
    render(){
        return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar app={this.props.app}/>
        </nav>);
    }
}
export default App;