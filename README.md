# 💡 Light Sensor Dashboard

A responsive web dashboard for visualizing sensor data using **React**, **Next.js**, and **Highcharts**. Built to fetch and display data from an AWS-powered serverless backend. 

**REAL SENSOR DATA**
This data is sent via the Arduino Uno R4 with a light sensor connected. The goal is to have a serverless, fun dashboard like product to monitor the environment of my house. More sensors to come....muah-haha 

> Currently supports light sensor data, with plans to support additional sensor types soon.

---

## ⚙️ Tech Stack

- **React / Next.js**
- **Highcharts**
- **react-datepicker**
- **AWS API Gateway + Lambda**
- **DynamoDB (via sensor microservice)**

---

## 🚀 Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/light-sensor-dashboard.git
cd light-sensor-dashboard

# 2. Install dependencies
npm install

# 3. Add your API URL
echo "NEXT_PUBLIC_API_URL=https://your-api-gateway-url.com/prod/sensor-data" > .env.local

# 4. Start the dev server
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Integration

The app consumes data in this format:

```json
[
  {
    "deviceId": "device-001",
    "sensorType": "light",
    "value": 750,
    "timestamp": "2025-06-19T14:25:00Z"
  }
]
```

---

## 📈 Features

- Real-time and historical sensor charting  
- Date range filtering  
- Responsive and mobile-friendly  
- Connects to a live AWS serverless backend

---

## 🛠️ Future Plans

- Multi-sensor support (temp, humidity, etc.)  
- Auth (OAuth or AWS Cognito)  
- Advanced charting: export, zoom, themes  
- Mock data fallback and offline mode

---
