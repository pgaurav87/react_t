/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Task from './task';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
                tasks : [],
                tmp_task:[]

    }}

    render(){
        let self = this;
        return (
            <div className="margin-from-top" >
                <hr />
                    <div className="clearfix" >
                        <div className="" >
                            <div className="form-group" >
                                <label  className="title" >Task</label>
                                <div className="col-md-10" >
                                    <input type="text" className="form-control" defaultValue="" placeholder="What do you need to do?"   onKeyPress={(e) => this.handleKeyPress(e)}/>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-10 col-md-offset-2 text-right" >
                                    {/*<input type ="button"  className ="btn btn-primary" value ="Save" onClick ={this.onSubmitToDo} />*/}

                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                <div><Task app={this}/></div>
            </div>

        )
    }

    handleKeyPress(e){
        debugger;
        this.state.tmp_task = this.state.tmp_task.concat(e.target.value);
        console.log(this.state.tmp_task);
        if(e.key == 'Enter'){
            let sentance = this.state.tmp_task.toString();
            let newState = {
                tasks: this.state.tasks.concat(sentance),
                tmp_task:[]

            }
            console.log(sentance);
            this.setState(newState);
            console.log('enter press here! ');
        }
    }

}
export default App;
