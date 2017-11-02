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
        let self = this;
        if(!Object.keys(userList).length) {
            return <div className="loader">Loading...</div>
        }
        console.log(this.props.app);
        //debugger;

        return (

            <div className="bd-example" data-example-id="">
                <br/><br/>
                <table className="table table-hover">
                    <thead>
                    <tr scope="row">
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>Details</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(userList).map(function(keyName, keyIndex) {
                            let propArr = userList[keyName];

                            // use keyName to get current key's name
                            // and a[keyName] to get its value
                            let activeRow;

                            if(self.props.appUser.state.user_active_row == propArr['id']){
                                activeRow = 'active-row'
                            }
                            return (
                                <tr className={activeRow} key={keyName.toString()} >
                                    <td>{propArr['id']}</td>
                                    <td>{propArr['name']}</td>
                                    <td>{propArr['username']}</td>
                                    <td>{propArr['email']}</td>
                                    <td>{propArr['phone']}</td>
                                    <td>{propArr['website']}</td>
                                    <td><a  href="javascript:void(0);" onClick={self.changePageName.bind(self, propArr['id'], propArr)}>click here</a></td>
                                    {/*<td><Address address={address}/></td>*/}
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        );
    }
    changePageName(userId, userArr) {

        var newState = {
            page_name: 'details',
            user_details: userArr
        };

        this.props.appUser.setState(newState);

    }

}
export default FetchDemo;