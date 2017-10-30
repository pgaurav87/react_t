/**
 * Created by gaurav.panchal on 26-10-2017.
 */
import React from 'react';
import Geo from './geo';

class App extends React.Component{

    render(){
        console.log(this.props.address);
        let addressArr =  this.props.address;
        let geoArr     = addressArr['geo'];
        let city       = addressArr['city'];
        let street     = addressArr['street'];
        let suite      = addressArr['suite'];
        let zipcode    = addressArr['zipcode'];

        return (<table className="table">
                         <tbody>
                            <tr><th>city</th><td>{city}</td></tr>
                            <tr><th>street</th><td>{street}</td></tr>
                            <tr><th>suite</th><td>{suite}</td></tr>
                            <tr><th>zipcode</th><td>{zipcode}</td></tr>
                            <tr><th>geo</th><td><Geo geo={geoArr}/></td></tr>
                         </tbody>

                </table>)
    }

}
export default App;
