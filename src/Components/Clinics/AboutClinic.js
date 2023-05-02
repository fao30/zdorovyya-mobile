import React, { useState, useEffect } from "react";
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
  TouchableWithoutFeedback,
  Image,
  Pressable,
  FlatList,
  Animated,
} from "react-native";
// import { ClinicLists } from "../Clinics/ClinicsLists.js";

import { SvgXml } from "react-native-svg";

// import { addressIcon, callIcon, metroIcon } from "../Icons/HideExpand";
import { DateLists } from "./DateLists";
import { TimeLists } from "./TimeLists";
import { ReviewStarts } from "./ReviewStarts";
import { addressIcon, callIcon, metroIcon } from "../../Icons/HideExpand";
import { Navigation } from "../Navigation";
import { favButton } from "../../Icons/Specializations";
import { clinics } from "../../Styles/Clinics";

export const AboutClinic = ({ navigation, data }) => {
  const [isExpand, setIsexpand] = useState(false);

  const params = data;
  const { name, about, contact, address, metro, reviews, star, startingPrice } =
    params;

  //NOTES
  //HARD CODE
  //ONPRESS GA ADA, NO ACTION

  return (
    <SafeAreaView style={clinics.container}>
      <ScrollView>
        <View>
          <View style={clinics.clinicContact}>
            <Text style={clinics.clinicName}>О клинике</Text>
          </View>
          <View style={clinics.clinicContact}>
            <Text style={clinics.contact}>{about}</Text>
          </View>
          <View style={clinics.clinicContact}>
            <Text style={clinics.clinicName}>Контакты</Text>
          </View>
          <View style={clinics.clinicContactDetail}>
            <View style={clinics.flexDirectionRow}>
              <View>
                <SvgXml xml={callIcon} />
              </View>
              <Text style={clinics.contact}>{contact}</Text>
            </View>
            <View style={clinics.flexDirectionRowPaddingTop}>
              <View>
                <SvgXml xml={addressIcon} />
              </View>
              <Text style={clinics.contact}>{address}</Text>
            </View>
          </View>
          <View style={clinics.clinicContact}>
            <Text style={clinics.clinicName}>Ближайшие станции метро</Text>
          </View>
          <View style={clinics.clinicContactDetailMetro}>
            <View>
              <SvgXml xml={metroIcon} />
            </View>
            <Text style={clinics.contact}>{metro}</Text>
          </View>
          <View style={clinics.chooseAddress}>
            <DateLists />
          </View>
          <View style={clinics.chooseAddress}>
            <TimeLists
              timeLists={["12:20", "14:20", "20:30", "20:20", "12:20", "12:20"]}
            />
          </View>
        </View>
      </ScrollView>

      {/* <Navigation navigation={navigation} params={params} active="main" /> */}
    </SafeAreaView>
  );
};
