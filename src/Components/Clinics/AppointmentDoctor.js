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
import {
  addressIcon,
  callIcon,
  expandIcon,
  metroIcon,
} from "../../Icons/HideExpand";
import { Navigation } from "../Navigation";
import { favButton } from "../../Icons/Specializations";
import { clinics } from "../../Styles/Clinics";

export const AppointmentDoctor = ({ navigation, data }) => {
  const [isExpand, setIsexpand] = useState(false);

  const params = data;
  const { specializations, about, educations } = params;

  return (
    <SafeAreaView style={clinics.container}>
      <View style={clinics.doctorsAddressesDetail}>
        <TouchableOpacity
          style={clinics.orderItem}
          // key={id}
          onPress={() => {
            setIsexpand(isExpand ? false : true);
          }}
        >
          <View style={clinics.row}>
            <Text style={clinics.addressTitle}>Выбрать адрес</Text>
            <View>
              <SvgXml xml={expandIcon} />
            </View>
          </View>
          <Text style={clinics.address}>Улица Сибгата Хакима, д56</Text>
        </TouchableOpacity>
      </View>
      <View style={clinics.chooseAddress}>
        <DateLists />
      </View>
      <View style={clinics.chooseAddress}>
        <TimeLists
          timeLists={["12:20", "14:20", "20:30", "20:20", "12:20", "12:20"]}
        />
      </View>

      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};
