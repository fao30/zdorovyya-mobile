import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  Image,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { auth } from "../Styles/Auth";
import { MaskedTextInput } from "react-native-mask-text";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthScreen = ({ navigation }) => {
  const [maskedValue, setMaskedValue] = React.useState("");
  const [unMaskedValue, setUnmaskedValue] = React.useState("");
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        navigation.navigate("Main");
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();
  return (
    <View style={auth.container}>
      <View style={auth.top}>
        <Text style={auth.text}>Добро пожаловать</Text>
      </View>

      <View style={auth.content}>
        <MaskedTextInput
          mask="+7 999 999 99-99"
          onChangeText={(text, rawText) => {
            setMaskedValue(text);
            setUnmaskedValue(rawText);
          }}
          style={auth.input}
          keyboardType="numeric"
          placeholder="+7 912 345 67-89"
          value="+7"
        />
        <TouchableOpacity
          style={auth.button}
          onPress={() => {
            if (unMaskedValue.length == 11) {
              const requestBody = `phone=${unMaskedValue}`;
              fetch("https://app.aaccent.su/health/api/user/sendCode.php", {
                method: "post",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: requestBody,
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (result) {
                  navigation.navigate("SmsCode", {
                    code: "1111",
                    // code: result.verifycode,
                    token: "sadmasdmkasdmmaksdmkasdkm",
                    // token: result.token,
                    number: maskedValue,
                  });
                });
            } else {
              Alert.alert("Неверный номер");
            }
          }}
        >
          <Text style={auth.textButton}>Войти</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://app.aaccent.su/healthyme/polygon.png?ver=2.12s",
        }}
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          bottom: 0,
          zIndex: 7,
          left: 0,
          right: 0,
        }}
      />

      <Text style={auth.enter}>Вход</Text>
    </View>
  );
};
