import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import moment from 'moment';

const ListItem = ({ dt_txt, min, max, conditions }) => {
  //   const {  } = props;
  return (
    <View style={styles.item}>
      <Feather name={weatherType[conditions].icon} color={'white'} size={20} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text
        style={styles.temp}
      >{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
});
