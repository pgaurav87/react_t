/**
 * Created by gaurav.panchal on 26-10-2017.
 */

/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Dropdown from './dropdown';
import SearchForm from './searchForm';

class App extends React.Component{

    render(){
        console.log(this.props.app.state);

        let self = this;
        var dropItems = ["Home", "Users", "Albums"];
        return (<div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                {dropItems.map(function (key) {
                    let activeClass = (key.toLowerCase() == self.props.app.state.page_name) ? 'active': '';
                    activeClass += ' nav-item';
                    return (
                        <li key={key.toString()} className={activeClass}>
                            {/*<a className="nav-link" href="javascript:void(0);" onClick={self.changePageName.bind(self, key)}>{key}</a>*/}
                            <a className="nav-link" href="javascript:void(0);" onClick={self.changePageContent.bind(self, key)}>{key}</a>
                        </li>
                    )
                })}
                <Dropdown/>
            </ul>
                <SearchForm/>

            </div>)
    }
    changePageName(page_name) {
        var newState = {
            page_name: page_name.toLowerCase()

        };

        this.props.app.setState(newState);
        // console.log(this.props.app);
        // console.log(page_name);
    }

    changePageContent(page_name) {

        let pageName = page_name.toLowerCase();
        if(pageName=='users'){
            this.users();
        }else if(pageName == 'albums'){
            this.albums();
        }

    }
    users(){
        var root = 'https://jsonplaceholder.typicode.com';
        $.ajax({
            url: root + '/posts/1',
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    }
    albums(){
        var root = 'https://jsonplaceholder.typicode.com';
        $.ajax({
            url: root + '/posts/1',
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    }
}
export default App;
