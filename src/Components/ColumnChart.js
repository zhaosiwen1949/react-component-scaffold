import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";

function ColumnChart({ data, remains, index, value }){
    var fields = Object.keys(data[0])
                        .filter((key) => {
                            return remains.concat("name").indexOf(key) === -1
                        })

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
        type: "fold",
        fields: fields,
        key: index,
        value: value,
    });

    return (
        <div>
            <Chart height={400} data={dv} forceFit >
                <Axis name={index} />
                <Axis name={value} />
                <Legend />
                <Tooltip crosshairs={{
                    type: "y"
                }} 
                />
                <Geom 
                    type="interval"
                    position={`${index}*${value}`}
                    color={"name"}
                    adjust={[
                        {
                            type: "dodge",
                            marginRatio: 1/32
                        }
                    ]}
                />
            </Chart>
        </div>
    )
}

ColumnChart.defaultProps = {
    data:[{
        name: "default",
        k1: 1,
        k2: 2,
        k3: 3
    }],
    remains: [],
    index: "索引",
    value: "值",
}

export default ColumnChart;