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
import ModalComp from "../Components/Modal";
import Checkbox from "expo-checkbox";

export const ClinicsScreen = ({ navigation, route }) => {
  const [isClinic, setIsClinic] = useState(true);
  const [sort, setSort] = useState(null);
  const params = route.params;
  //NOTES
  //HARD CODE
  //ONPRESS GA ADA, NO ACTION

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <ModalComp
        modalVisible={modalVisible}
        content={
          sort === 0 ? (
            <View style={{ paddingVertical: 20, gap: 12 }}>
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Сортировка
              </Text>
              <View style={{ flexDirection: "column", gap: 6 }}>
                <View style={{ flexDirection: "row", gap: 6 }}>
                  <Text>Сначала дежевле</Text>
                  <Checkbox
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 7,
                    }}
                    // value={toggleCheckBox}
                    // onValueChange={setToggleCheckBox}
                    // color={toggleCheckBox ? "#3989FA" : "black"}
                  />
                </View>
              </View>
            </View>
          ) : sort === 1 ? (
            <Text>sort</Text>
          ) : (
            <Text>Rayon</Text>
          )
        }
        onPressCancel={() => setModalVisible(false)}
      />
      <SafeAreaView style={clinics.container}>
        <View style={clinics.filters}>
          <Pressable
            style={clinics.filterButton}
            onPress={() => {
              console.log("EEEEEE", navigation);
              setModalVisible(true);
              setSort(0);
            }}
          >
            <View>
              <SvgXml xml={filterIcon} />
            </View>
            <Text>Фильтры</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setModalVisible(true);
              setSort(1);
            }}
            style={clinics.filterButton}
          >
            <View>
              <SvgXml xml={sortingIcon} />
            </View>
            <Text>Сортировка</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setModalVisible(true);
              setSort(2);
            }}
            style={clinics.filterButton}
          >
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
    </>
  );
};
