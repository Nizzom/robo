import React from "react";
class Card extends React.Component {
    render() {
        // throw new Error("sdad")
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
                <img src={`https://robohash.org/${this.props.id}?bgset=bg1&size=200x200`} alt={this.props.id}></img>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default Card;