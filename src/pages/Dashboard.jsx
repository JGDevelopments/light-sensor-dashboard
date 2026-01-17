"use client";

import LineChart from '../components/LineChart';

export default function Dashboard() {
    //more logic will go here
    return (
        <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Light Sensor Dashboard</h1>
          <LineChart />
        </main>
    )
}