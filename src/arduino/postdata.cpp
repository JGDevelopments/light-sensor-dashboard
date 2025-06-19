//uncomment for Arduino UNO R4

// #include <WiFiS3.h>               // For Arduino UNO R4 WiFi
// #include <ArduinoHttpClient.h>   // For HTTP requests
// #include <RTC.h>                 // For timestamp

// const char* ssid = "NotTodaySatan";
// const char* password = "E=MC^2andyourloved";
// const int lightPin = A0;

// const char* host = "example.execute-api.us-east-1.amazonaws.com"; //change this to use correctly
// const int port = 443;
// const char* path = "/prod/sensor-data";

// const char* deviceId = "arduino-uno-001";
// const char* sensorType = "light";

// WiFiSSLClient wifi;
// HttpClient client = HttpClient(wifi, host, port);

// void setup() {
//   Serial.begin(9600);
//   while (!Serial);

//   delay(2000);
//   RTC.begin();

//   // 🛠️ Set the RTC time ONCE, then comment this out
//   RTCTime startTime(18, Month::JUNE, 2025, 18, 28, 00, DayOfWeek::WEDNESDAY, SaveLight::SAVING_TIME_INACTIVE);

//   RTC.setTime(startTime);

//   WiFi.begin(ssid, password);
//   Serial.print("Connecting");
//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }

//   Serial.print("\nIP: ");
//   Serial.println(WiFi.localIP());
//   Serial.print("Signal Strength (RSSI): ");
//   Serial.println(WiFi.RSSI());
//   Serial.println("Connected!");
// }

// void loop() {
//   if (WiFi.status() != WL_CONNECTED || WiFi.localIP() == IPAddress(0, 0, 0, 0)) {
//     Serial.println("WiFi error. Reconnecting...");
//     WiFi.disconnect();
//     delay(1000);
//     WiFi.begin(ssid, password);
//     delay(3000);
//     return;
//   }

//   // Read sensor value
//   int lightValue = analogRead(lightPin);
//   Serial.print("Light: ");
//   Serial.println(lightValue);

//   // Get timestamp
//   RTCTime currentTime;
//   RTC.getTime(currentTime);

//   char timestamp[25];
//   sprintf(timestamp, "%04d-%02d-%02dT%02d:%02d:%02dZ",
//           currentTime.getYear(),
//           currentTime.getMonth(),
//           currentTime.getDayOfMonth(),
//           currentTime.getHour(),
//           currentTime.getMinutes(),
//           currentTime.getSeconds());

//   // Build JSON payload
//   String postData = "{";
//   postData += "\"deviceId\":\"" + String(deviceId) + "\",";
//   postData += "\"sensorType\":\"" + String(sensorType) + "\",";
//   postData += "\"value\":" + String(lightValue) + ",";
//   postData += "\"timestamp\":\"" + String(timestamp) + "\"";
//   postData += "}";

//   Serial.println("POST Body: " + postData);

//   // Send data
//   client.beginRequest();
//   client.post(path);
//   client.sendHeader("Content-Type", "application/json");
//   client.sendHeader("Content-Length", postData.length());
//   client.beginBody();
//   client.print(postData);
//   client.endRequest();

//   int statusCode = client.responseStatusCode();
//   String response = client.responseBody();
//   Serial.print("Status: ");
//   Serial.println(statusCode);
//   Serial.print("Response: ");
//   Serial.println(response);

//   client.stop();
//   delay(10000);  // Post every 10 seconds
// }

// // void loop() {
  
// // }