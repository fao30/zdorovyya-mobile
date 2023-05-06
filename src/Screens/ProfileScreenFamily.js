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
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";

// Styles
import { universal } from "../Styles/Universal";
import { profileFamily } from "../Styles/ProfileFamily";

// Miscellaneous
import { arrowBack } from "../Icons/Navigation";
import { addProfileIcon } from "../Icons/Profile";
import { SvgXml } from "react-native-svg";

// Components
import { Navigation } from "../Components/Navigation";

export const ProfileScreenFamily = ({ navigation, route }) => {
  const params = route.params;
  const passingData = route.params?.data;

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const tempArray = [...dataUser];
    if (passingData) {
      tempArray.push({
        familyName: passingData?.familyName,
        firstName: passingData?.firstName,
        middleName: passingData?.middleName,
        gender: passingData?.gender,
        dateOfBirth: passingData?.dateOfBirth,
        telephone: passingData?.telephone,
        email: passingData?.email,
        passportSeries: passingData?.passportSeries,
        passportNumber: passingData?.passportNumber,
      });
    }
    setDataUser(tempArray);
  }, [passingData]);

  return (
    <SafeAreaView style={universal.container}>
      <View style={universal.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <SvgXml xml={arrowBack} />
          </Pressable>
          <Text style={universal.headerFont}>Моя семья</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable onPress={() => navigation.navigate("Profile Family Add")}>
            <SvgXml xml={addProfileIcon} />
          </Pressable>
        </View>
      </View>
      {dataUser.length === 0 && (
        <View style={profileFamily.content}>
          <Image source={require("../../assets/image-family.png")} />
          <Text style={profileFamily.contentText}>
            Здесь будут данные о ваших {"\n"} близких
          </Text>
        </View>
      )}
      {dataUser.length > 0 && (
        <ScrollView>
          {dataUser.map((e, i) => (
            <View key={i} style={[profileFamily.contentExist]}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text>Family Name: {e?.familyName}</Text>
                <Text>{e?.firstName}</Text>
                <Text>{e?.middleName}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text>{e?.gender}</Text>
                <Text>{e?.dateOfBirth}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text>{e?.telephone}</Text>
                <Text>{e?.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text>{e?.passportSeries}</Text>
                <Text>{e?.passportNumber}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      <Navigation navigation={navigation} params={params} active="profile" />
    </SafeAreaView>
  );
};
