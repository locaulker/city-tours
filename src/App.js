import React, {Component} from "react"
import "./App.scss"
import Navbar from "./components/navbar/Navbar"
import TourList from "./components/tourList/TourList"

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<TourList />
			</React.Fragment>
		)
	}
}

export default App
