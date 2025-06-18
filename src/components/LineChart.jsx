"use client";

import { getLightHistory } from '@/app/configuration';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function LineChart() {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getLightHistory());
        const json = await res.json();
        const formatted = json.map(d => [new Date(d.timestamp).getTime(), d.light]);
        setRawData(formatted);
        setData(formatted); // initially set to full data
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
    // const interval = setInterval(fetchData, 30000);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!startDate || !endDate) return;
    const filtered = rawData.filter(([timestamp]) => timestamp >= startDate.getTime() && timestamp <= endDate.getTime());
    setData(filtered);
  }, [startDate, endDate, rawData]);

  const options = {
    title: { text: 'Live Light Sensor Data' },
    xAxis: { type: 'datetime' },
    yAxis: { title: { text: 'Light Value' }, max: 100 },
    series: [{ name: 'Light', data }],
    chart: { zoomType: 'x' },
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Arduino Light Monitor</h1>

      <div className="flex gap-4 mb-6">
        <div>
          <label className="block text-sm mb-1">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            showTimeSelect
            dateFormat="Pp"
            className="border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            showTimeSelect
            dateFormat="Pp"
            className="border rounded px-3 py-2"
          />
        </div>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}