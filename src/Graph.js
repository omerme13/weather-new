import React, { Component } from "react";

import {
	VictoryChart,
	VictoryLine,
	VictoryTheme,
	VictoryContainer
} from "victory";

import './Graph.scss';

class graph extends Component {

	render() {
		var data = [];
		let d = new Date();

		if(this.props.data.length > 1) {
			data = this.props.data.map((item, i) => {
				const date = `${d.getDate() + i} / ${(d.getMonth() + 1 ) % 12}`;
				return {x: date, y: Number(item.temp)}
			})
		}

		return (

			<div className="graph">
				<VictoryChart
					theme={VictoryTheme.material}
					// containerComponent={<VictoryContainer responsive={false} />}
					animate={{ duration: 500, onLoad: { duration: 1000 } }}
					width={1920}
					height={500}
					domainPadding={{ y: 1 }}
				>
					<VictoryLine
						style={{
							data: { stroke: "#c43a31", strokeWidth: 3},
						}}
						data={data}
					/>
				</VictoryChart>
			</div>
		);
	}
}

export default graph;
