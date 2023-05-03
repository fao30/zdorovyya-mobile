import React, { useCallback } from "react";
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
} from "react-native";
import { profileSettings } from "../Styles/ProfileSettings";

const Input = ({ label }) => {
  return (
    <>
      <Text style={[profileSettings.labelInput]}>{label}</Text>
      <TextInput style={profileSettings.textInput} />
    </>
  );
};

export default Input;
