import React, { useState, useEffect, useMemo } from "react";
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
import RadioGroup from "react-native-radio-buttons-group";

export const ClinicsScreen = ({ navigation, route }) => {
  const [isClinic, setIsClinic] = useState(true);
  const [filters, setFilters] = useState(null);
  const [checked, setChecked] = useState();

  const sort = React.useMemo(() => [
    {
      id: "1",
      label: "Сначала дешевле",
      value: "1",
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
      },
    },
    {
      id: "2",
      label: "Сначала дороже",
      value: "2",
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
      },
    },
    {
      id: "3",
      label: "Ближайшая запись",
      value: "Ближайшая запись",
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
      },
    },
    {
      id: "4",
      label: "По популярности (отзывам)",
      value: "1",
      color: "#3989FA",
      labelStyle: {
        color: "#9197B3",
      },
    },
  ]);

  const params = route.params;

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <ModalComp
        modalVisible={modalVisible}
        content={
          filters === 0 ? (
            <View style={{ paddingVertical: 20, gap: 12 }}>
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Сортировка
              </Text>
              <View style={{ flexDirection: "column", gap: 6 }}>
                <RadioGroup
                  radioButtons={sort}
                  onPress={setChecked}
                  selectedId={checked}
                  labelStyle={{}}
                  containerStyle={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                />
              </View>
            </View>
          ) : filters === 1 ? (
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
              setModalVisible(true);
              setFilters(0);
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
              setFilters(1);
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
              setFilters(2);
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
