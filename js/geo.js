/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';

class App extends React.Component{

    render(){
        console.log(this.props.geo);
        let geoArr     =  this.props.geo;
        let lat        =  geoArr['lat'];
        let lng        =  geoArr['lng'];

        return (<table className="table">
            <tbody>
            <tr><th>lat</th><td>{lat}</td></tr>
            <tr><th>lng</th><td>{lng}</td></tr>
           </tbody>

        </table>)
    }

}
export default App;
