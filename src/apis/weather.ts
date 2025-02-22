import axios from "axios";
const lat = 13.6900647;
const lng = 100.6182655;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = `http://api.weatherapi.com/v1/current.json`;
export const getWeather = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: `${lat},${lng}`,
        api: "yes",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
