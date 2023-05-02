import React from "react";
import {
  StyleSheet,
  Button,
  InteractionManager,
  Alert,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Platform,
  TextInput,
} from "react-native";
import { SvgUri } from "react-native-svg";
import SMSVerifyCode from "react-native-sms-verifycode";
import { smscode } from "../Styles/Smscode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SmscodeScreen = ({ navigation, route }) => {
  const [countdown, setCount] = React.useState("3");
  const [code, setCode] = React.useState();

  onInputCompleted = (text) => {
    if (text.length == 4 && text == route.params.code) {
      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem("@token", value);
          console.log(route.params.token);
        } catch (e) {
          // saving error
        }
      };
      storeData(route.params.token);
      navigation.navigate("Main", { phone: route.params.number });
    }
  };

  let smsverify = (
    <SMSVerifyCode
      autoFocus={true}
      onInputCompleted={this.onInputCompleted}
      verifyCodeLength={4}
      containerPaddingVertical={0}
      containerPaddingHorizontal={50}
      containerBackgroundColor="#fff"
      codeViewBorderColor="#ddd"
      focusedCodeViewBorderColor="#050220"
      codeViewBorderWidth={1}
      codeViewBorderRadius={10}
    />
  );
  if (Platform.OS === "android") {
    smsverify = (
      <TextInput
        autoFocus={true}
        keyboardType="numeric"
        maxLength={4}
        onChangeText={(text) => setCode(text)}
        onSubmitEditing={() => {
          if (code.length == 4 && code == route.params.code) {
            navigation.navigate("Main", { phone: route.params.number });
          }
        }}
      />
    );
  }

  return (
    <View style={smscode.container}>
      <View style={smscode.header}>
        <Text style={smscode.title}>Введите код подтверждения</Text>
        <Text style={smscode.text}>Введите 4-х значный код подтверждения</Text>
        <Text style={smscode.text}>отправленный на номер</Text>
        <Text style={smscode.text}>{route.params.number}</Text>
      </View>

      {smsverify}
    </View>
  );
};
