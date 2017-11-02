/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Header from './headerBS';
import MainRole from './mainRole';
import About from './about';
import Footer from './footer';
import Users from './users';
import Albums from './album';
import Details from './details';
import Todolist from './todolist';



class App extends React.Component{
    constructor() {
        super();
        this.state = {
            page_name: 'home',
            user_details: {},
            user_active_row :1
        };
    }
    render() {
        //console.log("call render");

        return (
            <div>
                <Header app={this}/>
                {this.getMainArea()}
                {/*<Footer/>*/}
            </div>
        )
    }
    getMainArea() {
        console.log(this.state.page_name);
        if(this.state.page_name == 'home') {
            return <MainRole/>
        } else if(this.state.page_name == 'about us') {
            return <About />
        }else if(this.state.page_name == 'users') {
            return <Users appUser={this}/>
        }else if(this.state.page_name == 'albums') {
            return <Albums />
        }else if(this.state.page_name == 'details') {
            return <Details userDetails={this}/>
        }else if(this.state.page_name == 'todolist') {
            return <Todolist />
        }
        return null;
    }


}
export default App;





