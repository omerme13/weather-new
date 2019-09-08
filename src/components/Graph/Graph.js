import React, { Component } from "react";

import {
	VictoryChart,
	VictoryLine,
    VictoryTheme,
    VictoryLabel
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
					height={1080}
                    domainPadding={{ y: 50, x: 50 }}
                    padding={{bottom: 120, left: 10, right:120, top: 120 }}
				>
					<VictoryLine
						style={{
							data: { stroke: "#fff", strokeWidth: 5},
						}}
                        data={data}
                        labels={({ datum }) => datum.y}
                        labelComponent={<VictoryLabel renderInPortal dy={-30} dx={10}/>}
					/>
				</VictoryChart>
			</div>
		);
	}
}

export default graph;
