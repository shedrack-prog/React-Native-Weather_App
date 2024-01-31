import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
  const { textTheme, container } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} color={iconColor} size={50} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
});
