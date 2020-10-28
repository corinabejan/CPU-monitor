import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CpuInfo() {
  const [cpuInfo, setCpuInfo] = useState("");
  const cpuUsage = async () => {
    const data = await axios.get('/info')
    const cpu = data;
    console.log(cpu)

    setCpuInfo(cpu)
  };

  useEffect(() => {
    cpuUsage
  }, [])
  
  return <h1>Hello</h1>;
}
