import React from "react";

import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
    VictoryLabel,
    VictoryAxis
} from "victory";

import { convertDayToString } from "../../shared";

import "./Graph.scss";

const graph = props => {
    let data = [];
    let d = new Date();

    if (props.data.length > 1) { // makes sure that the data prop is not empty (in case the user pressed on the graph button before we got our response from the API)
        data = props.data.map((item, i) => {
            const dayString = convertDayToString(d.getDay() + i)
                .split("").splice(0, 3).join("");
            const dayNumber = d.getDate() + i;
            const month = (new Date().getMonth() + 1) % 12;

            const date = `${dayString} - ${dayNumber} / ${month}`;

            return { x: date, y: Number(item.tempMax) };
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
                <VictoryAxis /> {/*VictoryAxis used to remove the y axis ticks*/}
            </VictoryChart>
        </div>
    );
}

export default graph;
