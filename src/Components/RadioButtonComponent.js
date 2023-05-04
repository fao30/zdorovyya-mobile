import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Keyboard,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
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
