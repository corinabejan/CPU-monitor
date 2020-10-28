import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
  
  const graphJSX = !info ? (
    "loading"
  ) : (
    <div>
      <LineChart
        width={730}
        height={250}
        data={info}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey={info[0]}
          stroke="red"
          name="CPU1"
        />
        <Line
          type="monotone"
          dataKey={info[1]}
          stroke="blue"
          name="CPU2"
        />
        <Line
          type="monotone"
          dataKey={info[2]}
          stroke="purple"
          name="CPU3"
        />
        <Line
          type="monotone"
          dataKey={info[3]}
          stroke="indigo"
          name="CPU4"
        />
        <Line
          type="monotone"
          dataKey={info[4]}
          stroke="orange"
          name="CPU5"
        />
        <Line
          type="monotone"
          dataKey={info[5]}
          stroke="green"
          name="CPU6"
        />
        <Line
          type="monotone"
          dataKey={info[6]}
          stroke="black"
          name="CPU7"
        />
        <Line
          type="monotone"
          dataKey={info[7]}
          stroke="pink"
          name="CPU8"
        />
      </LineChart>
    </div>
  );

  console.log(graphJSX);

  return <>{graphJSX}</>;
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};
