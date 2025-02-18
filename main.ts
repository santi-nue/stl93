import { MqttServer } from "https://raw.githubusercontent.com/seriousme/opifex/main/server/mod.ts";

// Define MQTT server options (customize as needed)
const mqttOptions = {
  port: 1883, // Default MQTT port
};

// Create a listener for incoming connections
const listener = Deno.listen({ port: mqttOptions.port });
console.log(`MQTT server is running on port ${mqttOptions.port}`);

const mqttServer = new MqttServer(mqttOptions);

// Serve incoming connections
for await (const conn of listener) {
  mqttServer.serve(conn);
}

