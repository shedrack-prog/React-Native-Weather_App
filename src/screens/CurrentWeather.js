// import { StatusBar } from 'expo-status-bar';

import { Feather } from '@expo/vector-icons';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utils/weatherType';

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    high_low,
    high_low_wrapper,
    description,
    message,
    bodyWrapper,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color={'white'}
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}> {`Feels like: ${feels_like}° `}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}° `}
          messageOneStyles={high_low}
          messageTwoStyles={high_low}
          containerStyle={high_low_wrapper}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={description}
        messageTwoStyles={message}
        containerStyle={bodyWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
    // alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    fontSize: 48,
    color: 'black',
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  high_low: {
    fontSize: 20,
    color: 'black',
  },
  high_low_wrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});
