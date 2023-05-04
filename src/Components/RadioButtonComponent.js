import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { profileEdit } from "../Styles/ProfileEdit";

export const RadioButtonComponent = ({ label, color, status }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <RadioButton status={status} color={color} />
      <Text style={profileEdit.radioButtonTitle}>{label}</Text>
    </View>
  );
};
