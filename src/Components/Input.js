import React, { useEffect, useState } from "react";
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
  Platform,
  Pressable,
} from "react-native";

// Styles
import { profileEdit } from "../Styles/ProfileEdit";

// Components
import DateTimePickerModal from "react-native-modal-datetime-picker";

// utils
import { dateFormatNumber } from "../../utils";

const Input = ({ label, value, onChangeText, keyboardType, setData, data }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  return (
    <>
      <Text style={[profileEdit.labelInput]}>{label}</Text>
      {label.includes("Дата рождения") ? (
        <>
          <TextInput
            style={profileEdit.textInput}
            onPressIn={showDatePicker}
            editable={false}
            placeholder="No date selected"
            value={selectedDate
              .toLocaleDateString()
              .replace("/", ".")
              .replace("/", ".")}
          />
          <DateTimePickerModal
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={(e) => {
              setData({ ...data, dateOfBirth: dateFormatNumber(e) });
              hideDatePicker();
            }}
            onCancel={hideDatePicker}
            display="inline"
          />
        </>
      ) : (
        <TextInput
          style={profileEdit.textInput}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      )}
    </>
  );
};

export default Input;
