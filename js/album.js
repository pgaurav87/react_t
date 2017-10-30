import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class FetchDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            album_list: {}
        };
    }

    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => {
                this.setState({
                    album_list: res.data
                });


            });
    }

    render() {
        let albumList = this.state.album_list;

        return (

            <div className="bd-example" data-example-id="">
                <br/><br/>
                <table className="table">
                    <thead>
                    <tr scope="row">
                        <th>id</th>
                        <th>user id</th>
                        <th>title</th>
                     </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(albumList).map(function(keyName, keyIndex) {

                            let id     = albumList[keyName]['id'];
                            let userId = albumList[keyName]['userId'];
                            let title  = albumList[keyName]['title'];

                            return (
                                <tr key={keyName.toString()} >
                                    <td>{id}</td>
                                    <td>{userId}</td>
                                    <td>{title}</td>
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