import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CpuInfo() {
  const [cpuInfo, setCpuInfo] = useState({});

  const cpuUsage = async () => {
    const data = await axios.get("/info");
    const cpu = data.data.cpuInfo;

    setCpuInfo(cpu);
  };
  console.log(cpuInfo);

  useEffect(() => {
    cpuUsage();
  }, []);

  const coresJSX = !cpuInfo.cores ? (
    "loading"
  ) : (
    <div>
      <h4>{cpuInfo.cores[0]}</h4>
      <h4>{cpuInfo.cores[1]}</h4>
      <h4>{cpuInfo.cores[2]}</h4>
      <h4>{cpuInfo.cores[3]}</h4>
      <h4>{cpuInfo.cores[4]}</h4>
      <h4>{cpuInfo.cores[5]}</h4>
      <h4>{cpuInfo.cores[6]}</h4>
      <h4>{cpuInfo.cores[7]}</h4>
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
      {coresJSX}
    </div>
  );
}
