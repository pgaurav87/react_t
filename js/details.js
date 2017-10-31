/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';

class App extends React.Component{

    render(){
        console.log(this.props.userDetails.state.user_details);
        debugger;
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

}
export default App;
