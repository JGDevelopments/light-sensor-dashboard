"use client";
// Light Sensor Dashboard - Next.js Starter (JavaScript Version)

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://lpv0gaqbb5.execute-api.us-east-1.amazonaws.com/prod/light-history');
        const json = await res.json();
        const formatted = json.map(d => [
          new Date(d.timestamp).getTime(),
          d.light
        ]);
        setData(formatted);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();

    // Leaving this commented out for now to avoid unnecessary API calls
    // Used for testing purposes
    // const interval = setInterval(fetchData, 5000);
    // return () => clearInterval(interval);
  }, []);


  const now = Date.now();
  const tenMinutesAgo = now - 30 * 60 * 1000;


const options = {
  title: { text: 'Live Light Sensor Data' },
  xAxis: {
    type: 'datetime',
    min: tenMinutesAgo,
    max: now,
  },
  yAxis: { title: { text: 'Light Value' }, max: 100 },
  series: [{ name: 'Light', data }],
  chart: {
    zoomType: 'x'
  },}

  console.log("data", data)

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arduino Light Monitor</h1>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}