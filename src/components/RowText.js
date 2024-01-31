import { Text, View } from 'react-native';

const RowText = ({
  containerStyle,
  messageOne,
  messageTwo,
  messageTwoStyles,
  messageOneStyles,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}> {messageTwo}</Text>
    </View>
  );
};

export default RowText;
