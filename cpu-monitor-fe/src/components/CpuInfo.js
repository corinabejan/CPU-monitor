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

export default function CpuInfo() {
  const [cpuInfo, setCpuInfo] = useState({});

  const cpuUsage = async () => {
    const data = await axios.get("/info");
    const cpu = data.data.cpuInfo;

    setCpuInfo(cpu);
  };
  console.log(cpuInfo);

  useEffect(() => {
    // setInterval(function() {
    cpuUsage();
    // }, 100)
  }, []);

  const coresJSX = !cpuInfo.cores ? (
    "loading"
  ) : (
    <div>
      <h4>CPU1: {cpuInfo.cores[0]}</h4>
      <h4>CPU2: {cpuInfo.cores[1]}</h4>
      <h4>CPU3: {cpuInfo.cores[2]}</h4>
      <h4>CPU4: {cpuInfo.cores[3]}</h4>
      <h4>CPU5: {cpuInfo.cores[4]}</h4>
      <h4>CPU6: {cpuInfo.cores[5]}</h4>
      <h4>CPU7: {cpuInfo.cores[6]}</h4>
      <h4>CPU8: {cpuInfo.cores[7]}</h4>
    </div>
  );

  const graphJSX = !cpuInfo.cores ? (
    "loading"
  ) : (
    <div>
      <LineChart
        width={730}
        height={250}
        data={cpuInfo.cores}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[0]}
          stroke="red"
          name="CPU1"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[1]}
          stroke="blue"
          name="CPU2"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[2]}
          stroke="purple"
          name="CPU3"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[3]}
          stroke="yellow"
          name="CPU4"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[4]}
          stroke="orange"
          name="CPU5"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[5]}
          stroke="green"
          name="CPU6"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[6]}
          stroke="black"
          name="CPU7"
        />
        <Line
          type="monotone"
          dataKey={cpuInfo.cores[7]}
          stroke="pink"
          name="CPU8"
        />
      </LineChart>
    </div>
  );

  console.log(graphJSX)

  return (
    <div>
      <p>
        Minimum speed: <strong>{cpuInfo.min}</strong>
      </p>
      <p>
        Maximum speed: <strong>{cpuInfo.max}</strong>
      </p>
      <p>
        Average speed: <strong>{cpuInfo.avg}</strong>
      </p>
      <div>{coresJSX}</div>
      <div>{graphJSX}</div>
    </div>
  );
}

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};
