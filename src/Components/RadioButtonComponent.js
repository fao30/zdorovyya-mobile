import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { profileEdit } from "../Styles/ProfileEdit";

export const RadioButtonComponent = ({
  label,
  color,
  status,
  value,
  onPress,
}) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <RadioButton
        value={value}
        status={status}
        color={color}
        onPress={onPress}
      />
      <Text style={profileEdit.radioButtonTitle}>{label}</Text>
    </View>
  );
};
