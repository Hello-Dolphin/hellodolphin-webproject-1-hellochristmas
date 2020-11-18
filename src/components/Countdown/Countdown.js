import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Countdown.scss';

import CandyCane from '../../static/img/candycane.png';
import LigthWire from '../../static/img/lightwire.png';
import LightWireOn from '../../static/img/lightwire-on.gif'
import WaterDrop from '../../static/img/waterdrop.png';
import Santawhale1 from '../../static/img/santawhale1.png';
import Santawhale2 from '../../static/img/santawhale2.png';

// const timerGlow = [
// 	{ boxShadow: "0px 0px 5px 8px rgba(224, 53, 187, 0.8)" },
// 	{ boxShadow: "0px 0px 5px 8px rgba(53, 224, 224, 0.8)" },
// 	{ boxShadow: "0px 0px 5px 8px rgba(216, 233, 116, 0.8)" },
// 	{ boxShadow: "0px 0px 5px 8px rgba(92, 255, 177, 0.8)" }
// ]

class Countdown extends React.Component {
	state = {
		merryXmas: false,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	componentDidMount() {
		// let temp = Date.now() + 10000;
		this.tick = setInterval(() => {
			const xmas = new Date(2020, 11, 25).getTime();
			const now = new Date().getTime();
			const distance = xmas - now;
			if (distance >= 0) {
				const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
				const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
				const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
				const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, 0);
				this.setState({ days, hours, minutes, seconds });	
			} else {
				this.setState({ merryXmas: true });
			}
		}, 1000);
	}

	componentDidUpdate() {
		if (this.state.merryXmas) {
			clearInterval(this.tick);
		}
	}

	componentWillUnmount() {
		if (this.tick) {
			clearInterval(this.tick);
		}
	}

	render() {
		const state = this.state;
		return (
			<section id="Countdown">
				<div className="waterdrop">
					<img src={ WaterDrop } alt="Waterdrop 1"/>
					<img src={ WaterDrop } alt="Waterdrop 2"/>
					<img src={ WaterDrop } alt="Waterdrop 3"/>
				</div>
				<img className="santawhale1" src={ Santawhale1 } alt="Santawhale"/>
				<div className="Countdown__container">
					<ScrollAnimation animateIn="flash" animateOnce={true}>
						<h1>Countdown</h1>
					</ScrollAnimation>
					
					<div className="Countdown__box">
						<img id="candycane" src={ CandyCane } alt="Candy Cane" />
						<img id="lightwire" src={ state.merryXmas ? LightWireOn : LigthWire } alt="Light Wire" />
						<div className="Countdown__item">
							<div className="title">Days</div>
							<div className="timer" >{state.days}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Hours</div>
							<div className="timer" >{state.hours}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Minutes</div>
							<div className="timer" >{state.minutes}</div>
						</div>
						<div className="Countdown__item">
							<div className="title">Seconds</div>
							<div className="timer" >{state.seconds}</div>
						</div>
					</div>
				</div>
				<div className="row">
					<img className="santawhale2" src={ Santawhale2 } alt="Santawhale"/>
				</div>
			</section>
		);
	}
}

export default Countdown;