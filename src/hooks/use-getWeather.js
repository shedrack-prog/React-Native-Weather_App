import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { OPEN_WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch weather data');
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        await fetchWeatherData();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [latitude, longitude]);
  return [weather, loading, error];
};
