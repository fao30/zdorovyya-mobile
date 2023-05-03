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
  Pressable,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { profileSettings } from "../Styles/ProfileSettings";
import { expandIcon, hideIcon } from "../Icons/HideExpand";
import { closeIcon, tickIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// components
import Input from "../Components/Input";
import { Navigation } from "../Components/Navigation";

export const ProfileSettingsScreen = ({ navigation, route }) => {
  const params = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={profileSettings.container}>
        <View style={profileSettings.header}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <SvgXml xml={closeIcon} style={profileSettings.title} />
            <Text style={profileSettings.title}>Профиль</Text>
          </View>
          <View style={profileSettings.title}>
            <SvgXml xml={tickIcon} />
          </View>
        </View>
        <ScrollView>
          <View style={profileSettings.inputContainer}>
            <Input label="Фамилия" />
            <Input label="Имя" />
            <Input label="Отчество" />
          </View>
          <View style={profileSettings.radioButtonContainer}>
            <Text style={[profileSettings.labelInput]}>Пол</Text>
            <View style={profileSettings.radioButtonContainerInside}>
              <View style={profileSettings.radioButton}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton status="checked" color="#3989FA" />
                  <Text style={profileSettings.radioButtonTitle}>Женский</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton status="checked" color="#3989FA" />
                  <Text>Мужской</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={profileSettings.inputContainer}>
            <Input label="Дата рождения" />
            <Input label="Телефон" />
            <Input label="Email" />
          </View>
          <View style={profileSettings.inputContainer}>
            <Text style={profileSettings.dataPassport}>Паспортные данные</Text>
            <Input label="Серия" />
            <Input label="Номер" />
          </View>
        </ScrollView>
        <Navigation navigation={navigation} params={params} active="profile" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
