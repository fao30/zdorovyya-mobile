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

export const ClinicTab = ({ tabClick }) => {
  const [tabCliced, setTabClicked] = useState(0);
  const Titles = ["О клинике", "Цены", "Врачи", "Отзывы(19)"];

  return (
    <View style={clinics.columnTab}>
      <View style={clinics.rowTab}>
        {Titles.map((e, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                tabClick(i);
                setTabClicked(i);
              }}
            >
              <View>
                <Text style={clinics.tabText}>{e}</Text>
              </View>
              {/* <View style={clinics.borderUnder} /> */}
            </Pressable>
          );
        })}
      </View>
      <View style={clinics.filterButton}>
        {Titles.map((e, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                tabClick(i);
                setTabClicked(i);
              }}
            >
              <View
                style={{
                  ...clinics.borderUnder,
                  borderColor: tabCliced !== i ? "#E6EEFB" : "#3989FA",
                }}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
