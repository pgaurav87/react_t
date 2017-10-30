import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Address from './address';

class FetchDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users_list: {}
        };
    }

    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({
                    users_list: res.data
                });


            });
    }

    render() {
        let userList = this.state.users_list;

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
                        <th>address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(userList).map(function(keyName, keyIndex) {
                            let propArr = userList[keyName];
                            let id = propArr['id'];
                            let name = propArr['name'];
                            let username = propArr['username'];
                            let email = propArr['email'];
                            let phone = propArr['phone'];
                            let website = propArr['website'];
                            let address = propArr['address'];
                            // use keyName to get current key's name
                            // and a[keyName] to get its value
                            return (
                                <tr key={keyName.toString()} >
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{website}</td>
                                    <td><Address address={address}/></td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}
export default FetchDemo;