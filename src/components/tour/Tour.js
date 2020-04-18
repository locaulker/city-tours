import React, {Component} from "react"
import "./Tour.scss"

export default class Tour extends Component {
	render() {
		//console.log(this.props)
		const {id, city, img, name, info} = this.props.tour
		const {removeTour} = this.props

		return (
			<article className="tour">
				<div className="img-container">
					<img src={img} alt="The City Tour" />
					<span className="close-btn">
						<i className="fad fa-times-circle"></i>
					</span>
				</div>
				<div className="tour-info">
					<h3>{city}</h3>
					<h4>
						<i class="fal fa-shuttle-van"></i> {name}
					</h4>
					<h5>
						more info{" "}
						<span>
							<i className="fal fa-angle-down"></i>
						</span>
					</h5>
					<p>{info}</p>
				</div>
			</article>
		)
	}
}
