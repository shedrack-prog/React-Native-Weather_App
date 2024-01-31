import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_min: 8.85,
      temp_max: 7.55,
    },
    weather: [{ main: 'clear' }],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_min: 8.85,
      temp_max: 7.55,
    },
    weather: [{ main: 'cloud' }],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_min: 8.85,
      temp_max: 7.55,
    },
    weather: [{ main: 'rain' }],
  },
];

// const Item = (props) => {
//   const { dt_txt, max, min, condition } = props;
//   return (
//     <View style={styles.item}>
//       <Feather name="sun" color={'white'} size={20} />
//       <Text style={styles.dt_txt}>{dt_txt}</Text>
//       <Text style={styles.temp}>{min}</Text>
//       <Text style={styles.temp}>{max}</Text>
//     </View>
//   );
// };

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      conditions={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpcomingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },

  image: {
    flex: 1,
  },
});
