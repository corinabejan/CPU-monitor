import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CpuInfo.css";
import Graph from "../Graph";

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
      <h4><span id="cpu1">CPU1:</span>  {cpuInfo.cores[0]}</h4>
      <h4><span id="cpu2">CPU2:</span>  {cpuInfo.cores[1]}</h4>
      <h4><span id="cpu3">CPU3:</span>  {cpuInfo.cores[2]}</h4>
      <h4><span id="cpu4">CPU4:</span>  {cpuInfo.cores[3]}</h4>
      <h4><span id="cpu5">CPU5:</span>  {cpuInfo.cores[4]}</h4>
      <h4><span id="cpu6">CPU6:</span>  {cpuInfo.cores[5]}</h4>
      <h4><span id="cpu7">CPU7:</span>  {cpuInfo.cores[6]}</h4>
      <h4><span id="cpu8">CPU8:</span>  {cpuInfo.cores[7]}</h4>
    </div>
  );

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
      <Graph />
    </div>
  );
}
