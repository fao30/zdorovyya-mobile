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
import { clinics } from "../Styles/Clinics";
import { Navigation } from "../Components/Navigation";
import { SvgXml } from "react-native-svg";
import {
  filterIcon,
  sortingIcon,
  districtIcon,
  favButton,
} from "../Icons/Specializations";
import { ClinicLists } from "../Components/Clinics/ClinicsLists";

import { addressIcon, callIcon, metroIcon } from "../Icons/HideExpand";
import { DateLists } from "../Components/Clinics/DateLists";
import { TimeLists } from "../Components/Clinics/TimeLists";
import { ReviewStarts } from "../Components/Clinics/ReviewStarts";
import { AboutClinic } from "../Components/Clinics/AboutClinic";
import { ClinicTab } from "../Components/Clinics/ClinicTabs";
import { PriceClinic } from "../Components/Clinics/PriceClinic";
import { DoctorsClinic } from "../Components/Clinics/DoctorsClinic";
import { ReviewClinic } from "../Components/Clinics/ReviewClinics";

export const ClinicScreen = ({ navigation, route }) => {
  const [tabChoosen, setTabChoosen] = useState(0);

  const params = route.params;
  const { name, about, contact, address, metro, reviews, star, startingPrice } =
    params;

  //NOTES
  //HARD CODE
  //ONPRESS GA ADA, NO ACTION

  return (
    <SafeAreaView style={clinics.container}>
      <View>
        <View style={clinics.clinicCard}>
          <View style={clinics.avatarDetail}>
            <ImageBackground
              source={{
                uri: "https://app.aaccent.su/health/resource/clinic.png",
              }}
              resizeMode="cover"
              style={clinics.clinicsImageDetail}
            >
              <View>
                <SvgXml xml={favButton} />
              </View>
              <View style={clinics.reviewPad}>
                <ReviewStarts stars={star}></ReviewStarts>
                <Text style={clinics.tabText}>{reviews}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={clinics.clinicContact}>
          <Text style={clinics.clinicName}>{name}</Text>
        </View>
        <View style={clinics.clinicContact}>
          <Text style={clinics.clinicCountBranch}>В Казани: 4 филиала</Text>
          <Text style={clinics.contact}>От {startingPrice}Р</Text>
        </View>
        {/* DARI SINI */}
        <ClinicTab
          tabClick={(e) => {
            setTabChoosen(e);
          }}
        />
        {tabChoosen === 0 ? (
          <AboutClinic navigation={navigation} data={params} />
        ) : (
          <></>
        )}
        {tabChoosen === 1 ? (
          <PriceClinic navigation={navigation} data={params} />
        ) : (
          <></>
        )}
        {tabChoosen === 2 ? (
          <DoctorsClinic navigation={navigation} data={params} />
        ) : (
          <></>
        )}
        {tabChoosen === 3 ? (
          <ReviewClinic navigation={navigation} data={params} />
        ) : (
          <></>
        )}
      </View>

      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};
