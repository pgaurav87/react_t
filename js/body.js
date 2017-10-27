import React from 'react';
import Header from './header';
class BodyComponent extends React.Component {
    render() {
        return (
            <div className="body">
                <Header type="one"/>
                <Header/>
            </div>
        )
    }
}

export default BodyComponent;