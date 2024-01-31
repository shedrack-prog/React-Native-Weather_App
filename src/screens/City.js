import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const {
    cityName,
    cityText,
    container,
    countryName,
    city_layout,
    row_layout,
    riseSetText,
    riseSetWrapper,
    population_text,
    population_wrapper,
  } = styles;

  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.city_layout}
        source={require('../../assets/city-background.jpg')}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}> {country} </Text>

        <View style={[population_wrapper, row_layout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={population_text}
          />
        </View>

        <View style={[riseSetWrapper, row_layout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city_layout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  population_wrapper: {
    justifyContent: 'center',
    marginTop: 30,

    marginTop: 30,
  },
  population_text: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  row_layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
