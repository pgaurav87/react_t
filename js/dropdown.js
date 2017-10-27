/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';

class App extends React.Component{
    render(){

        var dropItems = ["Action", "Another action", "Something else"];
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                {dropItems.map(function (key) {
                    return <a key={key.toString()} className="dropdown-item" href="#">{key}</a>;
                })}
                </div>
            </li>
        );

    }
}
export default App;
