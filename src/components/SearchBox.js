import React from "react";

class SearchBox extends React.Component{
    render() {
        return (
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue" onChange={this.props.onSearchChange} type="search" placeholder="search robot"/>
            </div>
        )
    }
}
export default SearchBox;