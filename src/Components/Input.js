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
import { profileEdit } from "../Styles/ProfileEdit";

const Input = ({ label }) => {
  return (
    <>
      <Text style={[profileEdit.labelInput]}>{label}</Text>
      <TextInput style={profileEdit.textInput} />
    </>
  );
};

export default Input;
