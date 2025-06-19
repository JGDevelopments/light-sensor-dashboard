//dev, staging base urls and endpoints will go here
const env = process.env.NEXT_ENVIRONMENT || 'prod';
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export function getSensorData () {
    return `${baseURL}/${env}/sensor-data`
}