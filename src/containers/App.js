import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";


class App extends React.Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(users=>this.setState({robots: users}))
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <ErrorBoundary>
                <div className="tc">
                    <h1>RoboFrends</h1>
                    <SearchBox onSearchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            </ErrorBoundary>
        )
    }
}

export default App;