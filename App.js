import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// components>>>>>>>>>>>>>>>>>>>>>>>
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/use-getWeather';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  const [weather, loading, error] = useGetWeather();
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        {/* <StatusBar style="light" backgroundColor="purple" /> */}
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
