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



class App extends React.Component{
    constructor() {
        super();
        this.state = {
            page_name: 'home',
            user_details: {}
        };
    }
    render() {
        //console.log("call render");
        debugger;
        return (
            <div>
                <Header app={this}/>
                {this.getMainArea()}
                <Footer/>
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
        }
        return null;
    }

}
export default App;




