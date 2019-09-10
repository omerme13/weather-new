import React, { Component } from "react";

import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
    VictoryLabel,
    VictoryAxis
} from "victory";

import { convertDayToString } from "../../shared";

import "./Graph.scss";

class graph extends Component {
    render() {
        var data = [];
        let d = new Date();

        if (this.props.data.length > 1) {
            data = this.props.data.map((item, i) => {
                const dayString = convertDayToString(d.getDay() + i)
                    .split("")
                    .splice(0, 3)
                    .join("");
                const dayNumber = d.getDate() + i;
                const month = (new Date().getMonth() + 1) % 12;

                const date = `${dayString} - ${dayNumber} / ${month}`;
                return { x: date, y: Number(item.temp) };
            });
        }

        return (
            <div className="graph">
                <VictoryChart
                    theme={VictoryTheme.material}
                    // containerComponent={<VictoryContainer responsive={false} />}
                    animate={{ duration: 500, onLoad: { duration: 1000 } }}
                    width={1920}
                    height={900}
                    domainPadding={{ y: 50, x: 100 }}
                    // padding={{bottom: 120, left: 10, right:120, top: 120 }}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#fff", strokeWidth: 5 }
                        }}
                        data={data}
                        labels={({ datum }) => datum.y + "°"}
                        labelComponent={
                            <VictoryLabel renderInPortal dy={-40} dx={0} />
                        }
                    />
                    {/* i used VictoryAxis to remove the y axis ticks*/}
                    <VictoryAxis /> 
                </VictoryChart>
            </div>
        );
    }
}

export default graph;
