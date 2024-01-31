import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error_text}>Sorry something went wrong</Text>
      <Feather name="frown" size={100} color="white" />
    </View>
  );
};

export default ErrorItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  error_text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
