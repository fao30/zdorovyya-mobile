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
import DatePicker from "react-native-date-picker";
import { DatePickerInput } from "react-native-paper-dates";
import DateTimePicker from "@react-native-community/datetimepicker";

const Input = ({ label, value, onChangeText, keyboardType, type }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDate(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const confirmIOSDate = () => {
    setDate(date.toDateString());
    toggleDatePicker();
  };

  useEffect(() => {
    console.log("DATE >", date);
  }, [date]);

  return (
    <>
      <Text style={[profileEdit.labelInput]}>{label}</Text>
      {label.includes("Дата рождения") ? (
        <View style={{ alignSelf: "flex-start" }}>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              style={{ height: 120, marginTop: -10 }}
            />
          )}

          {/* FOR IOS */}
          {showPicker && Platform.OS === "ios" && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity onPress={toggleDatePicker}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={confirmIOSDate}>
                <Text>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}

          {!showPicker && (
            <Pressable>
              <TextInput
                style={profileEdit.textInput}
                placeholder="10.01.2000"
                value={date}
                onChangeText={setDate}
                editable="false"
                onPressIn={toggleDatePicker}
              />
            </Pressable>
          )}
        </View>
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
