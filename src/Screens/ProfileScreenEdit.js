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
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RadioButton } from "react-native-paper";
import { expandIcon, hideIcon } from "../Icons/HideExpand";
import { closeIcon, tickIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// Styles
import { universal } from "../Styles/Universal";
import { profileEdit } from "../Styles/ProfileEdit";

// components
import Input from "../Components/Input";
import { RadioButtonComponent } from "../Components/RadioButtonComponent";
import { Navigation } from "../Components/Navigation";

export const ProfileScreenEdit = ({ navigation, route }) => {
  const params = route.params;

  const ScreenName = route.name;
  // console.log("Screen Name =>", ScreenName);

  const [data, setData] = useState({});

  const handleSubmit = () => {
    console.log("SUBMMITED>>", data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={profileEdit.container}>
        <View style={profileEdit.header}>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
            >
              <SvgXml xml={closeIcon} style={profileEdit.title} />
            </Pressable>
            <Text style={universal.headerFont}>
              {ScreenName === "Profile Edit" && "Профиль"}
              {ScreenName === "Profile Family Add" && "Моя семья"}
            </Text>
          </View>
          <View style={profileEdit.title}>
            <Pressable onPress={handleSubmit}>
              <SvgXml xml={tickIcon} />
            </Pressable>
          </View>
        </View>
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <ScrollView>
            <View style={profileEdit.inputContainer}>
              <Input
                label="Фамилия"
                value={data?.familyName}
                onChangeText={(e) => {
                  setData({ ...data, familyName: e });
                }}
              />
              <Input
                label="Имя"
                value={data?.firstName}
                onChangeText={(e) => {
                  setData({ ...data, firstName: e });
                }}
              />
              <Input
                label="Отчество"
                value={data?.middleName}
                onChangeText={(e) => {
                  setData({ ...data, middleName: e });
                }}
              />
            </View>
            <View style={profileEdit.radioButtonContainer}>
              <Text style={[profileEdit.labelInput]}>Пол</Text>
              <View style={profileEdit.radioButtonContainerInside}>
                <View style={profileEdit.radioButton}>
                  <RadioButtonComponent
                    label="Женский"
                    color="#3989FA"
                    status="checked"
                  />
                  <RadioButtonComponent
                    label="Мужской"
                    color="#3989FA"
                    status="checked"
                  />
                </View>
              </View>
            </View>
            <View style={profileEdit.inputContainer}>
              <Input
                label="Дата рождения"
                value={data?.dateOfBirth}
                setData={setData}
                data={data}
              />
              <Input
                label="Телефон"
                value={data?.telephone}
                onChangeText={(e) => {
                  setData({ ...data, telephone: e });
                }}
                keyboardType="numeric"
              />
              <Input
                label="Email"
                value={data?.email}
                onChangeText={(e) => {
                  setData({ ...data, email: e });
                }}
                keyboardType="email-address"
              />
            </View>
            <View style={profileEdit.inputContainer}>
              <Text style={profileEdit.dataPassport}>Паспортные данные</Text>
              <Input
                label="Серия"
                value={data?.passportSeries}
                onChangeText={(e) => {
                  setData({ ...data, passportSeries: e });
                }}
              />
              <Input
                label="Номер"
                value={data?.passportNumber}
                onChangeText={(e) => {
                  setData({ ...data, passportNumber: e });
                }}
                keyboardType="numeric"
              />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <Navigation navigation={navigation} params={params} active="profile" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
