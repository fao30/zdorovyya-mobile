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
} from "react-native";
import { SvgUri } from "react-native-svg";

export const Iconsnav = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <SvgUri
        uri="https://app.aaccent.su/healthyme/star.svg"
        style={{
          width: 30,
          height: 30,
        }}
      />
      <SvgUri
        uri="https://app.aaccent.su/healthyme/bell.svg"
        style={{
          width: 30,
          height: 30,
          marginLeft: 12,
        }}
      />
    </View>
  );
};
