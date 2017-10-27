/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Header from './headerBS';
import MainRole from './mainRole';
import About from './about';
import Footer from './footer';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            page_name: 'about us'
        };
    }
    render() {
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
        }
        return null;
    }

}
export default App;




