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

const Input = ({ label, value, onChangeText, keyboardType, type }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    console.log("DATE >", selectedDate);
  }, [selectedDate]);

  return (
    <>
      <Text style={[profileEdit.labelInput]}>{label}</Text>
      {label.includes("Дата рождения") ? (
        <>
          <Text
            style={profileEdit.textInput}
            onPress={() => setDatePickerVisible(true)}
          >
            {selectedDate
              ? selectedDate
                  .toLocaleDateString()
                  .replace("/", ".")
                  .replace("/", ".")
              : "No date selected"}
          </Text>
          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
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
