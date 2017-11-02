/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';

class App extends React.Component{
    render(){


        var toDoItems = this.props.app.state.tasks;
        if(!Object.keys(toDoItems).length) {
            return <div></div>
        }else{
            return (
                <ul className="list-group" >
                    {toDoItems.map(function (key) {
                        return <li className="list-group-item clearfix list-group-item-success" key={key.toString()} >
                            <span >{key}</span>
                            <div className="pull-right" role="group" >
                                <button type="button" className="btn btn-xs btn-danger img-circle" >X</button>
                            </div>
                        </li>

                    })}

                </ul>
            );
        }



    }
}
export default App;