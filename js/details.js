/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';

class App extends React.Component{

    render(){
         let propArr =  this.props.userDetails.state.user_details;

        return (
            <div className="bd-example" data-example-id="">
                <br/><br/>
                <table className="table">
                    <thead>
                    <tr scope="row">
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th><a className="btn btn-primary pull-right" href="javascript:void(0);" onClick={this.changePageName.bind(this,propArr['id'])}>back</a></th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>{propArr['id']}</td>
                        <td>{propArr['name']}</td>
                        <td>{propArr['username']}</td>
                        <td>{propArr['email']}</td>
                        <td>{propArr['phone']}</td>
                        <td>{propArr['website']}</td>

                     </tr>
                </tbody>
             </table>
            </div>

        )
    }
    changePageName(id) {

        var newState = {
            page_name: 'users',
            user_details: {},
            user_active_row:id
        };
        this.props.userDetails.setState(newState);

    }

}
export default App;
