import React from 'react';

class Header extends React.Component {
    render() {
        if(this.props.type == 'one') {
            return (
                <div className="header">
                    <a href="javascript:void(0)" >Submit</a>
                </div>
            )
        }
        return (
            <div className="header">
                <input type="text" />
                <a href="javascript:void(0)" >Submit</a>
            </div>
        )
    }
}

export default Header;