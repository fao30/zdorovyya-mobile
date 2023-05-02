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

import { hideIcon, expandIcon } from "../Icons/HideExpand";
import { DoctorsLists } from "../Components/Clinics/DoctorsLists";

export const ClinicsScreen = ({ navigation, route }) => {
  const [isClinic, setIsClinic] = useState(true);
  const params = route.params;
  //NOTES
  //HARD CODE
  //ONPRESS GA ADA, NO ACTION

  return (
    <SafeAreaView style={clinics.container}>
      <View style={clinics.filters}>
        <Pressable
          style={clinics.filterButton}
          onPress={() => {
            console.log("EEEEEE", navigation);
          }}
        >
          <View>
            <SvgXml xml={filterIcon} />
          </View>
          <Text>Фильтры</Text>
        </Pressable>
        <Pressable style={clinics.filterButton}>
          <View>
            <SvgXml xml={sortingIcon} />
          </View>
          <Text>Сортировка</Text>
        </Pressable>
        <Pressable style={clinics.filterButton}>
          <View>
            <SvgXml xml={districtIcon} />
          </View>
          <Text>Район</Text>
        </Pressable>
      </View>
      <View style={clinics.tabs}>
        <Pressable
          onPress={() => {
            setIsClinic(true);
          }}
          style={isClinic ? clinics.tabButtonActive : clinics.tabButton}
        >
          <Text style={isClinic ? clinics.tabTextActive : clinics.tabText}>
            Клиники
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsClinic(false);
          }}
          style={!isClinic ? clinics.tabButtonActive : clinics.tabButton}
        >
          <Text style={!isClinic ? clinics.tabTextActive : clinics.tabText}>
            Врачи
          </Text>
        </Pressable>
      </View>
      {isClinic ? (
        <View>
          <Text style={clinics.searchResult}>Найдено 19 клиник</Text>
          <ScrollView>
            <ClinicLists navigation={navigation} />
          </ScrollView>
        </View>
      ) : (
        <View>
          <Text style={clinics.searchResult}>Найдено 19 врачей</Text>
          <ScrollView>
            <DoctorsLists navigation={navigation} />
          </ScrollView>
        </View>
      )}

      <Navigation navigation={navigation} params={params} active="main" />
    </SafeAreaView>
  );
};
