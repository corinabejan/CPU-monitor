import React, { useState, useEffect } from "react";
import axios from "axios";
import { cpu } from "systeminformation";

export default function CpuInfo() {
  const [cpuInfo, setCpuInfo] = useState({});
  const cpuUsage = async () => {
    const data = await axios.get("/info");
    const cpu = data.data.cpuInfo;
    console.log(cpu);

    setCpuInfo(cpu);
  };
  console.log(cpuInfo);

  useEffect(() => {
    cpuUsage();
  }, []);

  return (
    <div>
      <p>{cpuInfo.min}</p>
      <p>{cpuInfo.max}</p>
      <p>{cpuInfo.avg}</p>
      <p>{cpuInfo.cores}</p>
    </div>
  );
}
