import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Graph(props) {
  const { info } = props;

  const data = info.cores.map((value,index)=>({index,value}))
  console.log(data)

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="index" type="number" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey="value" stroke="red" name="CPU1" />
      <Line type="monotone" dataKey="value" stroke="blue" name="CPU2" />
      <Line type="monotone" dataKey="value" stroke="purple" name="CPU3" />
      <Line type="monotone" dataKey="value" stroke="indigo" name="CPU4" />
      <Line type="monotone" dataKey="value" stroke="orange" name="CPU5" />
      <Line type="monotone" dataKey="value" stroke="green" name="CPU6" />
      <Line type="monotone" dataKey="value" stroke="black" name="CPU7" />
      <Line type="monotone" dataKey="value" stroke="pink" name="CPU8" />
    </LineChart>
  );
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};
